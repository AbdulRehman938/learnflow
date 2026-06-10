import { User } from "@/types/user";

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}
