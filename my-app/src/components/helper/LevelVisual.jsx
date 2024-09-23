import React from "react";

// levelSolution (string): the HTML code for the level solution
// return (JSX): an iframe displaying the a visual of the level solution for the user to reference
export default function LevelVisual({ levelSolution }) {
  // tailwind CDN configuration
  let header =
    "<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><script src='https://cdn.tailwindcss.com'></script></head>  <style type='text/tailwindcss'>@layer utilities {.content-auto {content-visibility: auto;}}</style>";

  return (
    <div className="z-5 absolute top-0 h-64 w-full rounded-md">
      <iframe
        className="levelSolutionUI h-64 w-full rounded-md bg-white"
        srcDoc={header + levelSolution}
      />
    </div>
  );
}
