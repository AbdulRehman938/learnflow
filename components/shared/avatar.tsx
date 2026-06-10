import React from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
}

export function Avatar({ src, alt, fallback }: AvatarProps) {
  return (
    <div>
      {src ? (
        <img src={src} alt={alt || "Avatar"} />
      ) : (
        <span>{fallback || "U"}</span>
      )}
    </div>
  );
}
