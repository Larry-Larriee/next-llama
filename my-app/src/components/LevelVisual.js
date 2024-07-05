import React from "react";
import Image from "next/image";

export default function LevelVisual({ level }) {
  // tailwind CDN configuration
  let header =
    "<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><script src='https://cdn.tailwindcss.com'></script></head>  <style type='text/tailwindcss'>@layer utilities {.content-auto {content-visibility: auto;}}</style>";

  return (
    <div className="absolute top-0 z-10 h-64 w-full rounded-md">
      <iframe
        className="h-64 w-full rounded-md bg-white"
        srcdoc={header + level}
      />
    </div>
  );
}
