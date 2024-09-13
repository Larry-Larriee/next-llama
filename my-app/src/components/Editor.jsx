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

  // major theme credits to https://uiwjs.github.io/react-codemirror/#/theme/data/material/dark
  const tailwindLlamaTheme = createTheme({
    theme: "dark",
    settings: {
      background: "#11192f",
      foreground: "#bdbdbd",
      caret: "#a0a4ae",
      selection: "#d7d4f063",
      selectionMatch: "#d7d4f063",
      gutterBackground: "#11192f",
      gutterForeground: "#999",
      gutterActiveForeground: "#4f5b66",
      lineHighlight: "#545b6130",
      fontSize: "0.9rem",
    },
    styles: [
      { tag: t.keyword, color: "#cf6edf" },
      { tag: [t.name, t.deleted, t.character, t.macroName], color: "#56c8d8" },
      { tag: [t.propertyName], color: "#facf4e" },
      { tag: [t.variableName], color: "#bdbdbd" },
      { tag: [t.function(t.variableName)], color: "#56c8d8" },
      { tag: [t.labelName], color: "#cf6edf" },
      {
        tag: [t.color, t.constant(t.name), t.standard(t.name)],
        color: "#facf4e",
      },
      { tag: [t.definition(t.name), t.separator], color: "#fa5788" },
      { tag: [t.brace], color: "#cf6edf" },
      { tag: [t.annotation], color: "#ff5f52" },
      {
        tag: [
          t.number,
          t.changed,
          t.annotation,
          t.modifier,
          t.self,
          t.namespace,
        ],
        color: "#ffad42",
      },
      { tag: [t.typeName, t.className], color: "#ffad42" },
      { tag: [t.operator, t.operatorKeyword], color: "#7186f0" },
      { tag: [t.tagName], color: "#99d066" },
      { tag: [t.squareBracket], color: "#ff5f52" },
      { tag: [t.angleBracket], color: "#606f7a" },
      { tag: [t.attributeName], color: "#bdbdbd" },
      { tag: [t.regexp], color: "#ff5f52" },
      { tag: [t.quote], color: "#6abf69" },
      { tag: [t.string], color: "#99d066" },
      {
        tag: t.link,
        color: "#56c8d8",
        textDecoration: "underline",
        textUnderlinePosition: "under",
      },
      { tag: [t.url, t.escape, t.special(t.string)], color: "#facf4e" },
      { tag: [t.meta], color: "#707d8b" },
      { tag: [t.comment], color: "#707d8b", fontStyle: "italic" },
      { tag: t.monospace, color: "#bdbdbd" },
      { tag: t.strong, fontWeight: "bold", color: "#ff5f52" },
      { tag: t.emphasis, fontStyle: "italic", color: "#99d066" },
      { tag: t.strikethrough, textDecoration: "line-through" },
      { tag: t.heading, fontWeight: "bold", color: "#facf4e" },
      { tag: t.heading1, fontWeight: "bold", color: "#facf4e" },
      {
        tag: [t.heading2, t.heading3, t.heading4],
        fontWeight: "bold",
        color: "#facf4e",
      },
      { tag: [t.heading5, t.heading6], color: "#facf4e" },
      { tag: [t.atom, t.bool, t.special(t.variableName)], color: "#56c8d8" },
      { tag: [t.processingInstruction, t.inserted], color: "#ff5f52" },
      { tag: [t.contentSeparator], color: "#56c8d8" },
      { tag: t.invalid, color: "#606f7a", borderBottom: `1px dotted #ff5f52` },
    ],
  });

  return (
    <section className="flex w-1/2 flex-col gap-5 sm:w-full xl:w-1/2">
      <section className="primary-color-5 flex h-64 w-full flex-col rounded-md border border-white">
        <p className="text-md primary-color-4 rounded-t-md border-b pl-3 text-white">
          Code
        </p>

        {/* a height of 90% is not a perfect solution for codemirror */}
        <CodeMirror
          value={userSolution}
          extensions={[javascript({ jsx: true })]}
          onChange={(e) => changeUserSolution(e)}
          theme={tailwindLlamaTheme}
          height="90%"
          className="h-full"
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
