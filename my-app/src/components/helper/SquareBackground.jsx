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

    const speedReduction = 1000;
    squareContainer.current.style.transform = `translate(${offsetX / speedReduction}%, ${offsetY / speedReduction}%)`;
  };

  return (
    <article
      className="-z-5 absolute top-0 h-1/4 md:w-8/12 lg:w-10/12"
      onMouseMove={(event) => moveSquare(event)}
      ref={squareContainer}
    >
      <div className="absolute bottom-36 left-48 h-16 w-28 rounded-md bg-blue-500/25 p-8 backdrop-blur-2xl sm:hidden xl:left-40 xl:block" />
      <div className="absolute bottom-56 left-0 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl sm:hidden xl:block 2xl:left-6" />
      <div className="absolute bottom-48 left-1/3 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl sm:hidden xl:bottom-32 xl:block 2xl:bottom-24" />
      <div className="absolute bottom-64 right-96 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl sm:hidden xl:bottom-32 xl:right-96 xl:block 2xl:bottom-28 3xl:left-1/2" />
      <div className="absolute bottom-48 right-1/4 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl sm:hidden xl:right-48 xl:block" />
      <div className="absolute bottom-48 right-0 h-36 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl sm:hidden xl:block 2xl:right-12" />
      <div className="absolute left-56 top-1/3 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl sm:hidden xl:left-36 xl:block" />
      <div className="absolute left-40 top-16 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl sm:hidden xl:left-28 xl:block 2xl:left-24" />
      <div className="absolute right-40 top-28 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl sm:hidden xl:right-28 xl:block 2xl:right-20" />
    </article>
  );
}
