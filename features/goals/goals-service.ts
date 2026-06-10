import { createClient } from "@/supabase/client";
import { Goal } from "@/types/progress";

export const goalsService = {
  async getGoals(userId: string) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("goals")
      .select("*")
      .eq("user_id", userId);

    if (error) throw error;
    return data as any as Goal[];
  },

  async createGoal(goal: Omit<Goal, "id" | "createdAt">) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("goals")
      .insert(goal)
      .select()
      .single();

    if (error) throw error;
    return data as any as Goal;
  }
};
