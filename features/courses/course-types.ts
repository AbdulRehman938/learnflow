import { Course, Lesson } from "@/types/course";

export interface CourseFilter {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  searchQuery?: string;
}
