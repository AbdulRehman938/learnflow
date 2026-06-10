import { useState, useEffect } from "react";
import { goalsService } from "./goals-service";
import { Goal } from "@/types/progress";

export function useGoals(userId?: string) {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    async function loadGoals() {
      try {
        setIsLoading(true);
        const data = await goalsService.getGoals(userId!);
        setGoals(data);
      } catch (err: any) {
        setError(err.message || "Failed to load goals");
      } finally {
        setIsLoading(false);
      }
    }
    loadGoals();
  }, [userId]);

  const addGoal = async (
    title: string,
    description: string,
    targetValue: number,
    targetDate?: string
  ) => {
    if (!userId) return;
    try {
      const newGoal = await goalsService.createGoal({
        userId,
        title,
        description,
        targetValue,
        targetDate,
        status: "in_progress",
        currentValue: 0,
      });
      setGoals((prev) => [...prev, newGoal]);
    } catch (err: any) {
      setError(err.message || "Failed to add goal");
    }
  };

  return { goals, isLoading, error, addGoal };
}
