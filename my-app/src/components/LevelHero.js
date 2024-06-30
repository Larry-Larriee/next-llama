import React from "react";

export default function LevelHero({
  levelNumber,
  levelTitle,
  levelDescriptionOne = "",
  levelDescriptionTwo,
}) {
  return (
    <div className="primary-color-5 flex w-1/2 flex-col rounded-md border border-white">
      <p className="text-md mb-5 border-b pl-3 text-white">Problem</p>

      <section className="flex flex-col gap-8 pl-3">
        <p className="text-3xl text-white">
          Level {levelNumber} - {levelTitle}
        </p>
        <p className="w-11/12 text-xl font-medium leading-loose text-white">
          {levelDescriptionOne}
        </p>
        <p className="w-11/12 text-xl font-medium leading-loose text-white">
          {levelDescriptionTwo}
        </p>
      </section>
    </div>
  );
}
