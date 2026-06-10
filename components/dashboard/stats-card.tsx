import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
}

export function StatsCard({ title, value, description }: StatsCardProps) {
  return (
    <div>
      <div>{title}</div>
      <div>{value}</div>
      {description && <div>{description}</div>}
    </div>
  );
}
