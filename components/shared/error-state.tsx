import React from "react";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div>
      <div>{message || "An error occurred"}</div>
      {onRetry && <button onClick={onRetry}>Retry</button>}
    </div>
  );
}
