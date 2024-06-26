import React from "react";

export default function LevelHero({
  levelNumber,
  levelTitle,
  levelDescriptionOne = "",
  levelDescriptionTwo,
}) {
  return (
    <div className="flex w-10/12 flex-col gap-8">
      <p className="text-4xl text-white">
        Level {levelNumber} - {levelTitle}
      </p>

      <p className="w-11/12 text-2xl text-white">{levelDescriptionOne}</p>
      <p className="w-11/12 text-2xl text-white">{levelDescriptionTwo}</p>
    </div>
  );
}
