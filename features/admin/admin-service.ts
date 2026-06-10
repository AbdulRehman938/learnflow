import { createClient } from "@/supabase/client";

export const adminService = {
  async getAllUsers() {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("profiles")
      .select("*");

    if (error) throw error;
    return data;
  },

  async getAllCourses() {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("courses")
      .select("*, tutor:profiles(*)");

    if (error) throw error;
    return data;
  },
};
