import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: "user" | "tutor" | "admin";
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  return (
    <div>
      <div>Dashboard Layout ({role})</div>
      <div>{children}</div>
    </div>
  );
}
