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
        src="https://tailwindcss.com/docs/width"
        className="slideIn absolute bottom-0 left-0 h-screen w-5/12 border-2 border-black"
        ref={iframe}
      ></iframe>
    </>
  );
}
