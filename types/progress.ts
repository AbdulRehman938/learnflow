export interface Progress {
  id: string;
  userId: string;
  courseId: string;
  lessonId: string;
  completed: boolean;
  updatedAt: string;
}

export interface Goal {
  id: string;
  userId: string;
  title: string;
  description?: string;
  targetDate?: string;
  status: "in_progress" | "completed" | "failed";
  currentValue: number;
  targetValue: number;
  createdAt: string;
}
