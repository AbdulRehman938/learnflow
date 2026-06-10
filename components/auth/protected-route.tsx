import React from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: Array<"user" | "tutor" | "admin">;
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  return <>{children}</>;
}
