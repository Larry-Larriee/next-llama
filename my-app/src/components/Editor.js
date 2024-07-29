"use client"; // by default, files are treated like they're in a server environment

import React, { useState, useRef } from "react";
import LevelVisual from "./helper/LevelVisual";

// changeDocsOpen (setState) determines whether to open or close the tailwind docs
// changeSubmitOpen (setState) determines whether to open or close the submit modal
// levelSolution (string) the solution to the level
export default function Editor({
  changeDocsOpen,
  changeSubmitOpen,
  levelSolution,
  userSolutionRef,
  userSolution,
  changeUserSolution,
}) {
  // tailwind CDN configuration
  let header =
    "<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><script src='https://cdn.tailwindcss.com'></script></head>  <style type='text/tailwindcss'>@layer utilities {.content-auto {content-visibility: auto;}}</style>";

  const [levelSolutionVisualOpen, setlevelSolutionVisualOpen] = useState(false);
  let changelevelSolutionVisualOpen = () => {
    setlevelSolutionVisualOpen(!levelSolutionVisualOpen);
  };

  return (
    <section className="flex w-1/2 flex-col gap-5 sm:w-full xl:w-1/2">
      <section className="primary-color-5 flex h-64 w-full flex-col rounded-md border border-white">
        <p className="text-md primary-color-4 rounded-t-md border-b pl-3 text-white">
          Code
        </p>

        <textarea
          type="text"
          ref={userSolutionRef}
          onChange={changeUserSolution}
          value={userSolution}
          className="textEditor primary-color-5 h-full w-full resize-none rounded-md p-3 text-white focus:outline-none xl:text-lg"
        />
      </section>

      {/* This area contains both the user's solution visual and the level solution visual */}
      <section className="relative">
        <iframe
          className="userSolutionUI h-64 w-full rounded-md bg-white"
          srcDoc={header + userSolution}
        />

        {levelSolutionVisualOpen && (
          <LevelVisual levelSolution={levelSolution} />
        )}
      </section>

      <div className="flex gap-4 sm:flex-col xl:flex-row">
        <p
          className="rounded-lg bg-indigo-500 px-8 py-2 text-lg text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
          onClick={() => changeDocsOpen()}
        >
          Docs
        </p>
        <p
          className="levelSolutionButton rounded-lg bg-green-700 px-8 py-2 text-lg text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
          onClick={() => changelevelSolutionVisualOpen()}
        >
          See Design
        </p>
        <p
          className="rounded-lg bg-orange-500 px-8 py-2 text-lg text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
          onClick={() => changeSubmitOpen()}
        >
          Submit
        </p>
      </div>
    </section>
  );
}
