import React from "react";

interface EmptyStateProps {
  message?: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div>
      <div>{message || "No data available"}</div>
    </div>
  );
}
