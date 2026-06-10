export interface User {
  id: string;
  email: string;
  fullName?: string;
  avatarUrl?: string;
  role: "user" | "tutor" | "admin";
  createdAt: string;
  updatedAt?: string;
}
