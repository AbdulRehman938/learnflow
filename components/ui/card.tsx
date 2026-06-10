import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({ className, children, hoverable, ...props }: CardProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
