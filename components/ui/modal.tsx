import React from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={className}>
      <div>
        {title && <h3>{title}</h3>}
        <button onClick={onClose}>Close</button>
      </div>
      <div>{children}</div>
    </div>
  );
}
