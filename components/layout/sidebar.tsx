import React from "react";

export interface SidebarItem {
  title: string;
  href: string;
}

interface SidebarProps {
  items: SidebarItem[];
}

export function Sidebar({ items }: SidebarProps) {
  return (
    <aside>
      <div>Sidebar Placeholder</div>
    </aside>
  );
}
