"use client";

import React, { useRef } from "react";

export default function SquareBackground() {
  // Instead of moving each square individually, we can move the container they are in and create the same effect
  // In addition, react hooks need to be called from the top level, meaning I can't treat it like a value and make an array of useRefs()
  const squareContainer = useRef();

  // moveSquare function fires whenever the mouse moves in the article container (which is a lot)
  let moveSquare = (metadata) => {
    const x = metadata.clientX;
    const y = metadata.clientY;

    const midX = window.innerWidth / 2;
    const midY = window.innerHeight / 2;

    // offset is how far the mouse is from the center of the screen
    // multiply by 100 to get a percentage
    const offsetX = ((x - midX) / midX) * 100;
    const offsetY = ((y - midY) / midY) * 100;

    const speedReduction = 1250;
    squareContainer.current.style.transform = `translate(${offsetX / speedReduction}%, ${offsetY / speedReduction}%)`;
  };

  return (
    <article
      className="-z-5 absolute top-0 h-1/4 md:w-8/12 lg:w-10/12"
      onMouseMove={(event) => moveSquare(event)}
      ref={squareContainer}
    >
      <div className="absolute bottom-36 left-48 h-16 w-28 rounded-md bg-blue-500/25 p-8 backdrop-blur-2xl sm:hidden xl:block" />
      <div className="absolute bottom-56 left-0 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl sm:hidden xl:block" />
      <div className="absolute bottom-48 left-1/3 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl sm:hidden xl:block" />
      <div className="absolute bottom-64 left-1/2 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl sm:hidden xl:block" />
      <div className="absolute bottom-48 right-1/4 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl sm:hidden xl:block" />
      <div className="absolute bottom-48 right-0 h-36 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl sm:hidden xl:block" />
      <div className="absolute left-56 top-1/3 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl sm:hidden xl:block" />
      <div className="absolute left-40 top-16 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl sm:hidden xl:block" />
      <div className="absolute right-40 top-28 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl sm:hidden xl:block" />
    </article>
  );
}
