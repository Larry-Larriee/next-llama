import React from "react";

export default function LevelHero({
  levelNumber,
  levelTitle,
  levelDescriptionOne = "",
  levelDescriptionTwo,
}) {
  return (
    <div className="primary-color-5 flex flex-col rounded-md border border-white sm:w-full xl:w-1/2">
      <p className="text-md primary-color-4 mb-5 rounded-t-md border-b pl-3 text-white">
        Problem
      </p>

      <section className="flex flex-col gap-8 pl-3 sm:pb-5">
        <p className="text-white sm:text-2xl xl:text-3xl">
          Level {levelNumber} - {levelTitle}
        </p>
        <p className="w-11/12 font-medium leading-loose text-white sm:text-base xl:text-xl">
          {levelDescriptionOne}
        </p>
        <p className="w-11/12 font-medium leading-loose text-white sm:text-base xl:text-xl">
          {levelDescriptionTwo}
        </p>
      </section>
    </div>
  );
}
