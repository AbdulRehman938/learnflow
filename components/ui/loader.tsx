import React from "react";

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export function Loader({ className, size = "md", ...props }: LoaderProps) {
  return (
    <div className={className} {...props}>
      <span>Loading...</span>
    </div>
  );
}
