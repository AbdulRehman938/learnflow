import React from "react";

interface UploadWidgetProps {
  onUploadComplete?: (url: string) => void;
}

export function UploadWidget({ onUploadComplete }: UploadWidgetProps) {
  return (
    <div>
      <div>Upload Widget Placeholder</div>
    </div>
  );
}
