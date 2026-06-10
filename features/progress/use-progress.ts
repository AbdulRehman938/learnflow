import { useState, useEffect } from "react";
import { progressService } from "./progress-service";

export function useProgress(userId?: string, courseId?: string) {
  const [progress, setProgress] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId || !courseId) return;

    async function loadProgress() {
      try {
        setIsLoading(true);
        const data = await progressService.getProgress(userId!, courseId!);
        setProgress(data);
      } catch (err: any) {
        setError(err.message || "Failed to load progress");
      } finally {
        setIsLoading(false);
      }
    }
    loadProgress();
  }, [userId, courseId]);

  const toggleComplete = async (lessonId: string, completed: boolean) => {
    if (!userId || !courseId) return;
    try {
      const updated = await progressService.toggleLessonComplete(
        userId,
        courseId,
        lessonId,
        completed
      );
      setProgress((prev) => {
        const index = prev.findIndex((p) => p.lesson_id === lessonId);
        if (index > -1) {
          const newProg = [...prev];
          newProg[index] = updated;
          return newProg;
        } else {
          return [...prev, updated];
        }
      });
    } catch (err: any) {
      setError(err.message || "Failed to toggle lesson complete");
    }
  };

  return { progress, isLoading, error, toggleComplete };
}
