import React from "react";

interface VideoPlayerProps {
  url?: string;
  title?: string;
}

export function VideoPlayer({ url, title }: VideoPlayerProps) {
  return (
    <div>
      <div>Video Player: {title || "Untitled"}</div>
      {url && <video src={url} controls />}
    </div>
  );
}
