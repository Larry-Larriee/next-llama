"use client"; // by default, files are treated like they're in a server environment

import React, { useState } from "react";
import LevelVisual from "./helper/LevelVisual.jsx";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

// changeDocsOpen (setState) determines whether to open or close the tailwind docs
// changeSubmitOpen (setState) determines whether to open or close the submit modal
// levelSolution (string) the solution to the level
export default function Editor({
  changeDocsOpen,
  changeSubmitOpen,
  levelSolution,
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

  const tailwindLlamaTheme = createTheme({
    theme: "dark",
    settings: {
      background: "#11192f",
      backgroundImage: "",
      foreground: "#4D4D4C",
      caret: "#AEAFAD",
      selection: "#D6D6D6",
      selectionMatch: "#D6D6D6",
      gutterBackground: "#FFFFFF",
      gutterForeground: "#4D4D4C",
      gutterBorder: "#dddddd",
      gutterActiveForeground: "",
      lineHighlight: "#EFEFEF",
    },
    styles: [
      { tag: t.comment, color: "#787b80" },
      { tag: t.definition(t.typeName), color: "#194a7b" },
      { tag: t.typeName, color: "#194a7b" },
      { tag: t.tagName, color: "#008a02" },
      { tag: t.variableName, color: "#1a00db" },
    ],
  });

  return (
    <section className="flex w-1/2 flex-col gap-5 sm:w-full xl:w-1/2">
      <section className="primary-color-5 flex h-64 w-full flex-col rounded-md border border-white">
        <p className="text-md primary-color-4 rounded-t-md border-b pl-3 text-white">
          Code
        </p>

        <CodeMirror
          value={userSolution}
          extensions={[javascript({ jsx: true })]}
          onChange={(e) => changeUserSolution(e)}
          theme={tailwindLlamaTheme}
          height="13rem"
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

      <div className="flex justify-start gap-4 sm:flex-col xl:flex-row">
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
