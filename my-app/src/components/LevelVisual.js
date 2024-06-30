import React from "react";
import Image from "next/image";

export default function LevelVisual({ levelVisualImage }) {
  return (
    <div className="absolute top-0 z-10 h-64 w-full rounded-md border border-white">
      <Image
        src={levelVisualImage}
        alt="image"
        className="h-full w-full rounded-md"
      />
    </div>
  );
}
