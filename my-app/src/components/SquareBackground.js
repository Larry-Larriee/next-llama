"use client";

import React, { useRef } from "react";

export default function SquareBackground() {
  const square1 = useRef();
  const square2 = useRef();
  const square3 = useRef();
  const square4 = useRef();
  const square5 = useRef();
  const square6 = useRef();
  const square7 = useRef();
  const square8 = useRef();
  const square9 = useRef();

  let moveSquare = (metadata) => {
    const x = metadata.clientX;
    const y = metadata.clientY;

    const midX = window.innerWidth / 2;
    const midY = window.innerHeight / 2;

    // offset is how far the mouse is from the center of the screen
    // multiply by 100 to get a percentage
    const offsetX = ((x - midX) / midX) * 100;
    const offsetY = ((y - midY) / midY) * 100;

    square1.current.style.transform = `translate(${offsetX / 10}%, ${offsetY / 10}%)`;
    square2.current.style.transform = `translate(${offsetX / 10}%, ${offsetY / 10}%)`;
    square3.current.style.transform = `translate(${offsetX / 10}%, ${offsetY / 10}%)`;
    square4.current.style.transform = `translate(${offsetX / 10}%, ${offsetY / 10}%)`;
    square5.current.style.transform = `translate(${offsetX / 10}%, ${offsetY / 10}%)`;
    square6.current.style.transform = `translate(${offsetX / 10}%, ${offsetY / 10}%)`;
    square7.current.style.transform = `translate(${offsetX / 10}%, ${offsetY / 10}%)`;
    square8.current.style.transform = `translate(${offsetX / 10}%, ${offsetY / 10}%)`;
    square9.current.style.transform = `translate(${offsetX / 10}%, ${offsetY / 10}%)`;
  };

  return (
    <>
      <article
        className="-z-5 absolute top-0 h-1/4 w-10/12"
        onMouseMove={(event) => moveSquare(event)}
      >
        <div
          ref={square1}
          className="absolute bottom-36 left-48 h-16 w-28 bg-blue-500 bg-opacity-20"
        />
        <div
          ref={square2}
          className="absolute bottom-56 left-0 h-16 w-16 bg-blue-500 bg-opacity-20"
        />
        <div
          ref={square3}
          className="absolute bottom-48 left-1/3 h-16 w-16 bg-blue-500 bg-opacity-20"
        />
        <div
          ref={square4}
          className="absolute bottom-64 left-1/2 h-16 w-16 bg-blue-500 bg-opacity-20"
        />
        <div
          ref={square5}
          className="absolute bottom-48 right-1/4 h-16 w-16 bg-blue-500 bg-opacity-20"
        />
        <div
          ref={square6}
          className="absolute bottom-48 right-0 h-36 w-16 bg-blue-500 bg-opacity-20"
        />
        <div
          ref={square7}
          className="absolute left-56 top-1/3 h-16 w-16 bg-blue-500 bg-opacity-20"
        />
        <div
          ref={square8}
          className="absolute left-40 top-16 h-16 w-16 bg-blue-500 bg-opacity-20"
        />
        <div
          ref={square9}
          className="absolute right-40 top-28 h-16 w-16 bg-blue-500 bg-opacity-20"
        />
      </article>
    </>
  );
}
