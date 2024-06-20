"use client"; // by default, files are treated like they're in a server environment

import React, { useState, useRef } from "react";

export default function Editor() {
  let tailwindInput = useRef();
  let [tailwindText, setTailwindText] = useState();

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
    <section className="mx-20 flex gap-20">
      <input
        type="text"
        ref={tailwindInput}
        onChange={changeTailwindText}
        className="rounded"
      />

      <iframe className="bg-white" srcDoc={header + tailwindText + script} />
    </section>
  );
}
