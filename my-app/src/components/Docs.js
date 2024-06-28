"use client";

import React, { useEffect, useRef } from "react";

export default function Docs({ docsOpen }) {
  let iframe = useRef();

  // useEffect will actively determine if docsOpen changes and will run the callback accordingly
  useEffect(() => {
    if (docsOpen === false) {
      iframe.current.classList.remove("slideInRight");
      iframe.current.classList.add("slideOutRight");
    }
  }, [docsOpen]);

  return (
    <>
      <iframe
        src="https://tailwindcss.com/docs/width"
        className="slideInRight absolute bottom-0 right-0 h-screen w-1/3 border-2 border-black"
        ref={iframe}
      ></iframe>
    </>
  );
}
