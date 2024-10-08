import React from "react";
import ColorReference from "./ColorReference.jsx";

// levelNumber (number): the number of the level the user is on
// levelTitle (string): the title of the level the user is on
// levelDescriptionOne (string): the main description of the level the user is on
// levelDescriptionTwo (string): the secondary description of the level the user is on
// colorReference (array): an array of objects that contain the color name and rgb value of each color reference
// return (JSX): the level hero for the user to reference in the level page
export default function LevelHero({
  levelNumber,
  levelTitle,
  levelDescriptionOne = "",
  levelDescriptionTwo,
  colorReference,
}) {
  return (
    <div className="primary-color-5 flex flex-col rounded-md border border-white sm:w-full xl:w-1/2">
      <p className="text-md primary-color-4 mb-5 rounded-t-md border-b pl-3 text-white">
        Problem
      </p>

      <section className="flex h-full flex-col gap-8 p-3 xl:pb-4">
        <div className="flex flex-col gap-8">
          <p className="text-white sm:text-2xl xl:text-3xl">
            Level {levelNumber} - {levelTitle}
          </p>
          <p className="w-11/12 font-medium text-white sm:text-base xl:text-xl 2xl:leading-relaxed">
            {levelDescriptionOne}
          </p>
          <p className="w-11/12 font-medium text-white sm:text-base xl:text-xl 2xl:leading-relaxed">
            {levelDescriptionTwo}
          </p>
        </div>

        {colorReference && colorReference.length <= 3 && (
          <div className="flex h-full w-full flex-col justify-end gap-3 xl:gap-4">
            {colorReference.map((colorRef, index) => {
              return (
                <ColorReference
                  key={colorRef + index}
                  color={colorRef.color}
                  rgb={colorRef.rgb}
                />
              );
            })}
          </div>
        )}

        {colorReference && colorReference.length > 3 && (
          <div className="flex h-full w-full flex-col justify-end gap-3 lg:grid lg:grid-cols-3 lg:items-end lg:gap-2">
            {colorReference.map((colorRef, index) => {
              return (
                <ColorReference
                  key={colorRef + index}
                  color={colorRef.color}
                  rgb={colorRef.rgb}
                />
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
