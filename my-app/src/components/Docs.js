"use client";

import React, { useEffect, useRef } from "react";

export default function Docs({ closing, docsOpen }) {
  let iframe = useRef();

  useEffect(() => {
    console.log(closing);

    if (closing === "true") {
      iframe.current.className.remove("slideInRight");
      iframe.current.className.add("slideOutRight");
    }
  }, [closing]);

  return (
    <>
      <iframe
        src="https://tailwindcss.com/docs/width"
        className="slideInRight absolute bottom-0 right-0 h-screen w-1/3 border-l-4 border-blue-500"
        ref={iframe}
      ></iframe>
    </>
  );
}
