"use client"; // by default, files are treated like they're in a server environment

import React, { useState, useRef } from "react";
import LevelOne from "../assets/levels/levelOne.png";
import LevelVisual from "./LevelVisual";

export default function Editor({ changeDocsOpen, changeSubmitOpen }) {
  let tailwindInput = useRef();
  let [tailwindText, setTailwindText] = useState(
    "<p class='text-2xl text-black'>Hello World</p>",
  );

  // when the user types, use the value of the input
  let changeTailwindText = () => {
    setTailwindText(tailwindInput.current.value);
  };

  // tailwind CDN configuration
  let header =
    "<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><script src='https://cdn.tailwindcss.com'></script></head>  <style type='text/tailwindcss'>@layer utilities {.content-auto {content-visibility: auto;}}</style>";

  const [designOpen, setDesignOpen] = useState(false);
  let changeDesignOpen = () => {
    setDesignOpen(!designOpen);
  };

  return (
    <section className="flex w-1/2 flex-col gap-5">
      <section className="primary-color-5 flex h-64 flex-col rounded-md border border-white">
        <p className="text-md primary-color-4 rounded-t-md border-b pl-3 text-white">
          Code
        </p>

        <textarea
          type="text"
          ref={tailwindInput}
          onChange={changeTailwindText}
          value={tailwindText}
          className="primary-color-5 h-full w-full resize-none rounded-md p-3 text-white focus:outline-none"
        />
      </section>

      <section className="relative">
        <iframe
          className="h-64 w-full rounded-md bg-white"
          srcDoc={header + tailwindText}
        />

        {designOpen && <LevelVisual levelVisualImage={LevelOne} />}
      </section>

      <div className="flex gap-4">
        <p
          className="rounded-lg bg-indigo-500 px-8 py-2 text-lg text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
          onClick={() => changeDocsOpen()}
        >
          Docs
        </p>
        <p
          className="rounded-lg bg-green-700 px-8 py-2 text-lg text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
          onClick={() => changeDesignOpen()}
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
