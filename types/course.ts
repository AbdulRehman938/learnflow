import { User } from "./user";

export interface Course {
  id: string;
  title: string;
  description?: string;
  tutorId: string;
  tutor?: User;
  price: number;
  imageUrl?: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt?: string;
  lessons?: Lesson[];
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description?: string;
  videoUrl?: string;
  position: number;
  createdAt: string;
}
