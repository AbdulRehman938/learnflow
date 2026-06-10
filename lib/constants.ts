export const ROLES = {
  USER: "user",
  TUTOR: "tutor",
  ADMIN: "admin",
} as const;

export const SESSION_KEY = "learnflow_session";

export const LIMITS = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_UPLOAD_SIZE_MB: 100,
};

export const COURSE_CATEGORIES = [
  "Development",
  "Design",
  "Business",
  "Marketing",
  "Music",
  "Photography",
] as const;
