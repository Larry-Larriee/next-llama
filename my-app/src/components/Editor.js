"use client"; // by default, files are treated like they're in a server environment

import React, { useState, useRef } from "react";

export default function Editor() {
  let tailwindInput = useRef();
  let [tailwindText, setTailwindText] = useState(
    "<p class='text-3xl text-red-600'>Hello World</p>",
  );

  // when the user types, use the value of the input
  let changeTailwindText = () => {
    setTailwindText(tailwindInput.current.value);
  };

  // tailwind CDN configuration
  let header =
    "<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><script src='https://cdn.tailwindcss.com'></script></head>  <style type='text/tailwindcss'>@layer utilities {.content-auto {content-visibility: auto;}}</style>";
  let script =
    "<script>tailwind.config = {theme: {extend: {colors: {clifford: '#da373d',}}}}</script>";

  return (
    <section className="flex w-10/12 gap-36">
      <section className="flex w-5/12 flex-col gap-10">
        <div class="padding-tiny h-56 rounded-xl bg-white">
          <article className="primary-color-2 h-full w-full rounded-xl p-3">
            <textarea
              type="text"
              ref={tailwindInput}
              onChange={changeTailwindText}
              value={tailwindText}
              className="primary-color-2 h-full w-full resize-none text-white"
            />
          </article>
        </div>

        <div className="flex gap-8">
          <p className="rounded-lg bg-indigo-500 px-8 py-2 text-lg text-white">
            Docs
          </p>
          <p className="rounded-lg bg-orange-500 px-8 py-2 text-lg text-white">
            Submit
          </p>
        </div>
      </section>

      <iframe
        className="h-80 w-1/2 bg-gray-200"
        srcDoc={header + tailwindText + script}
      />
    </section>
  );
}
