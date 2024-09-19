"use client";

import React, { useState, useRef, useEffect } from "react";

export default function ColorReference({ color, rgb }) {
  const colorRef = useRef();

  useEffect(() => {
    if (colorRef.current) {
      colorRef.current.style.backgroundColor = rgb;
      colorRef.current.classList.remove("animate-pulse");
    }
  }, [colorRef, rgb]);

  return (
    <>
      <div className="flex items-center gap-3">
        <section
          ref={colorRef}
          className="h-9 w-9 animate-pulse rounded-md bg-white transition duration-200 ease-in-out hover:scale-105"
        />
        <p className="text-lg text-white">{color}</p>
      </div>
    </>
  );
}
