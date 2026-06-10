import { createClient } from "@/supabase/client";

export const progressService = {
  async getProgress(userId: string, courseId: string) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("progress")
      .select("*")
      .eq("user_id", userId)
      .eq("course_id", courseId);

    if (error) throw error;
    return data;
  },

  async toggleLessonComplete(userId: string, courseId: string, lessonId: string, completed: boolean) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("progress")
      .upsert({
        user_id: userId,
        course_id: courseId,
        lesson_id: lessonId,
        completed,
        updated_at: new Date().toISOString(),
      }, {
        onConflict: "user_id,lesson_id"
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  }
};
