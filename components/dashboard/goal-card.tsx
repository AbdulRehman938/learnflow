import React from "react";

interface GoalCardProps {
  title: string;
  current: number;
  target: number;
  description?: string;
}

export function GoalCard({ title, current, target, description }: GoalCardProps) {
  return (
    <div>
      <div>Goal Card: {title}</div>
      <div>{current} / {target}</div>
      {description && <div>{description}</div>}
    </div>
  );
}
