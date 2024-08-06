"use client";

import React, { useEffect, useRef } from "react";

export default function Docs({ docsOpen }) {
  let iframe = useRef();

  // useEffect will actively determine if docsOpen changes and will run the callback accordingly
  useEffect(() => {
    if (docsOpen === false) {
      iframe.current.classList.remove("slideIn");
      iframe.current.classList.add("slideOut");
    }
  }, [docsOpen]);

  return (
    <>
      <iframe
        src="https://tailwindcss.com/"
        className="slideIn xl:docs-width-xl 2xl:docs-width-2xl 3xl:docs-width-3xl sm:docs-height-sm lg:docs-height-lg absolute bottom-0 left-0 h-screen border-2 border-black sm:bottom-auto sm:top-28 sm:w-full xl:bottom-0 xl:top-auto xl:h-full"
        ref={iframe}
      ></iframe>
    </>
  );
}
