import { useState, useEffect } from "react";
import { courseService } from "./course-service";
import { Course } from "@/types/course";

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCourses() {
      try {
        setIsLoading(true);
        const data = await courseService.getCourses();
        setCourses(data);
      } catch (err: any) {
        setError(err.message || "Failed to load courses");
      } finally {
        setIsLoading(false);
      }
    }
    loadCourses();
  }, []);

  return { courses, isLoading, error };
}
