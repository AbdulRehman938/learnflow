import { createClient } from "@/supabase/client";
import { Course } from "@/types/course";

export const courseService = {
  async getCourses() {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("courses")
      .select("*, tutor:profiles(*)")
      .eq("is_published", true);

    if (error) throw error;
    return data as any as Course[];
  },

  async getCourseById(id: string) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("courses")
      .select("*, tutor:profiles(*), lessons(*)")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data as any as Course;
  }
};
