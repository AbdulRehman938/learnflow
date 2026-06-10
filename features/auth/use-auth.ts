import { useState, useEffect } from "react";
import { authService } from "./auth-service";
import { User } from "@/types/user";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        setIsLoading(true);
        const profile = await authService.getCurrentUser();
        setUser(profile as any);
      } catch (err: any) {
        setError(err.message || "Failed to load user");
      } finally {
        setIsLoading(false);
      }
    }
    loadUser();
  }, []);

  const signOut = async () => {
    try {
      setIsLoading(true);
      await authService.signOut();
      setUser(null);
    } catch (err: any) {
      setError(err.message || "Failed to sign out");
    } finally {
      setIsLoading(false);
    }
  };

  return { user, isLoading, error, signOut };
}
