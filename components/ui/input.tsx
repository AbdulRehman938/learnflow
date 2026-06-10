import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, ...props }, ref) => {
    return (
      <div className={className}>
        {label && <label>{label}</label>}
        <input ref={ref} type={type} {...props} />
        {error && <span>{error}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";
