import React from "react";

export default function VideoBackground() {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      src="/video/Background.mp4"
    />
  );
}
