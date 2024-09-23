"use client";

import React from "react";

// return (JSX): the background of squares on the front page
export default function SquareBackground() {
  return (
    <article className="-z-5 floating absolute top-0 h-1/4 md:w-8/12 lg:w-10/12">
      <div
        draggable="false"
        className="absolute bottom-36 left-48 h-16 w-28 rounded-md bg-blue-500/25 p-8 backdrop-blur-2xl transition duration-200 ease-in-out active:bg-blue-500/50 sm:hidden xl:left-36 xl:block 2xl:left-40"
      />
      <div
        draggable="false"
        className="absolute bottom-56 left-0 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl transition duration-200 ease-in-out active:bg-blue-500/50 sm:hidden xl:block 2xl:left-6"
      />
      <div
        draggable="false"
        className="absolute bottom-48 left-1/3 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl transition duration-200 ease-in-out active:bg-blue-500/50 sm:hidden xl:bottom-20 xl:block 2xl:bottom-24"
      />
      <div
        draggable="false"
        className="absolute bottom-64 right-96 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl transition duration-200 ease-in-out active:bg-blue-500/50 sm:hidden xl:bottom-20 xl:right-96 xl:block 2xl:bottom-28 3xl:left-1/2"
      />
      <div
        draggable="false"
        className="absolute bottom-40 right-1/4 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl transition duration-200 ease-in-out active:bg-blue-500/50 sm:hidden xl:right-48 xl:block"
      />
      <div
        draggable="false"
        className="absolute bottom-48 right-0 h-36 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl transition duration-200 ease-in-out active:bg-blue-500/50 sm:hidden xl:block 2xl:right-12"
      />
      <div
        draggable="false"
        className="absolute left-56 top-1/3 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl transition duration-200 ease-in-out active:bg-blue-500/50 sm:hidden xl:left-24 xl:block 2xl:left-36"
      />
      <div
        draggable="false"
        className="absolute left-40 top-16 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl transition duration-200 ease-in-out active:bg-blue-500/50 sm:hidden xl:left-28 xl:block 2xl:left-24"
      />
      <div
        draggable="false"
        className="absolute right-40 top-28 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl transition duration-200 ease-in-out active:bg-blue-500/50 sm:hidden xl:right-28 xl:block 2xl:right-20"
      />
      <div
        draggable="false"
        className="absolute bottom-24 h-16 w-16 rounded-md bg-blue-500/25 backdrop-blur-2xl transition duration-200 ease-in-out active:bg-blue-500/50 sm:hidden 2xl:right-96 3xl:block"
      />
    </article>
  );
}
