export interface APIResponse<T> {
  data: T | null;
  error: string | null;
}

export interface SidebarItem {
  title: string;
  href: string;
  icon?: string;
}

export interface Payment {
  id: string;
  userId: string;
  courseId: string;
  amount: number;
  status: "pending" | "succeeded" | "failed";
  stripeSessionId?: string;
  createdAt: string;
}
