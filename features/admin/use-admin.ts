import { useState, useEffect } from "react";
import { adminService } from "./admin-service";

export function useAdmin(isAdmin: boolean) {
  const [users, setUsers] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isAdmin) return;

    async function loadAdminData() {
      try {
        setIsLoading(true);
        const [usersData, coursesData] = await Promise.all([
          adminService.getAllUsers(),
          adminService.getAllCourses(),
        ]);
        setUsers(usersData);
        setCourses(coursesData);
      } catch (err: any) {
        setError(err.message || "Failed to load admin data");
      } finally {
        setIsLoading(false);
      }
    }
    loadAdminData();
  }, [isAdmin]);

  return { users, courses, isLoading, error };
}
