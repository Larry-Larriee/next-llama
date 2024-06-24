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

  //   add CSS, when tailwind may not be enough
  //   let changeCSSText = () => {

  //   }

  // tailwind CDN configuration
  let header =
    "<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><script src='https://cdn.tailwindcss.com'></script></head>  <style type='text/tailwindcss'>@layer utilities {.content-auto {content-visibility: auto;}}</style>";
  let script =
    "<script>tailwind.config = {theme: {extend: {colors: {clifford: '#da373d',}}}}</script>";

  return (
    <section className="mx-16 flex gap-20">
      <div class="h-80 w-1/3 rounded-3xl bg-white p-1 transition duration-200 ease-in-out hover:-translate-y-1">
        <article className="custom-primary-color h-full w-full rounded-3xl p-3">
          <textarea
            type="text"
            ref={tailwindInput}
            onChange={changeTailwindText}
            value={tailwindText}
            className="custom-primary-color h-full w-full resize-none text-white"
          />
        </article>
      </div>

      <iframe
        className="h-80 w-3/5 bg-white"
        srcDoc={header + tailwindText + script}
      />
    </section>
  );
}
