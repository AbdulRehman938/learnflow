import React from "react";

interface VideoCardProps {
  title: string;
  tutorName?: string;
  price?: number;
  imageUrl?: string;
  onClick?: () => void;
}

export function VideoCard({ title, tutorName, price, imageUrl, onClick }: VideoCardProps) {
  return (
    <div onClick={onClick}>
      <div>Video Card: {title}</div>
      {tutorName && <div>by {tutorName}</div>}
      {price !== undefined && <div>Price: {price}</div>}
    </div>
  );
}
