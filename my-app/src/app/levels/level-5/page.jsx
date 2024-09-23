"use client";

import React, { useState, useRef } from "react";
import Navigation from "../../../components/Navigation.jsx";
import LevelHero from "../../../components/helper/LevelHero.jsx";
import Editor from "../../../components/Editor.jsx";
import Docs from "../../../components/Docs.jsx";
import SubmitModal from "../../../components/helper/SubmitModal.jsx";

import UseStopWatch from "../../../components/hooks/UseStopWatch";
import UseAnimation from "../../../components/hooks/UseAnimation";

export default function Page() {
  let levelSolution =
    '<section class="flex h-screen w-screen flex-col gap-2 rounded-lg bg-yellow-400 p-3"><p class="text-3xl text-red-700">Chinese Restaurant Menu</p><div class="flex gap-10"><section class="flex flex-col gap-2"><div class="flex flex-col gap-1"><p class="text-xl text-red-700">Main Course</p><hr class="rounded-md border-2 border-red-700"/></div><article class="flex justify-between"><div><p class="text-lg text-red-700">Char Siu Ricebowl</p><p class="text-sm text-red-700">Char Siu with delicious mushroom topping</p></div><p class="text-lg text-red-700">$6.99</p></article><article class="flex justify-between"><div><p class="text-lg text-red-700">Fried Kwetiauw</p><p class="text-sm text-red-700">Fried Kwetiauw, served with special spices and fried eggs</p></div><p class="text-lg text-red-700">$9.99</p></article></section><section class="flex flex-col gap-2"><div class="flex flex-col gap-1"><p class="text-xl text-red-700">Special Menu</p><hr class="rounded-md border-2 border-red-700"/></div><article class="flex justify-between"><div><p class="text-lg text-red-700">Dimsum</p><p class="text-sm text-red-700">Dim sum containing fresh and tasty seafood</p></div><p class="text-lg text-red-700">$7.99</p></article><article class="space-between flex w-full"><div><p class="text-lg text-red-700">Spring Rolls</p><p class="text-sm text-red-700">Spring rolls with our fresh toppings and savory seasoning</p></div><p class="text-lg text-red-700">$7.99</p></article></section></div></section>';
  const [docsOpen, setDocsOpen] = useState(false);
  const [closing, setClosing] = useState("");

  let changeDocsOpen = () => {
    setDocsOpen(!docsOpen);
  };

  let animation = UseAnimation(docsOpen, changeDocsOpen, setClosing);

  const [submitOpen, setSubmitOpen] = useState(false);

  let changeSubmitOpen = () => {
    setSubmitOpen(!submitOpen);
  };

  let { time, changeIsPaused } = UseStopWatch();

  let [userSolution, setUserSolution] = useState(
    "<p class='text-2xl text-black'>Hello World</p>",
  );

  // when the user types, use the value of the input
  // in this case, CodeMirror happens to pass the text value on the event that it changes
  let changeUserSolution = (code) => {
    setUserSolution(code);
  };

  let colorReference = [
    { color: "bg-white", rgb: "rgb(255 255 255)" },
    { color: "bg-yellow-400", rgb: "rgb(250 204 21)" },
    { color: "bg-red-700", rgb: "rgb(185 28 28)" },
  ];

  const [submitReady, setSubmitReady] = useState(false);

  let changeSubmitReady = (bool) => {
    setSubmitReady(bool);
  };

  return (
    <>
      <div className="flex w-full flex-col items-center gap-12">
        {closing === "false" && <Docs docsOpen={docsOpen} />}
        {submitOpen && (
          <SubmitModal
            submitReady={submitReady}
            changeSubmitReady={changeSubmitReady}
            submitOpen={submitOpen}
            changeSubmitOpen={changeSubmitOpen}
            nextLevel={"final-challenge"}
            time={time}
            changeIsPaused={changeIsPaused}
            levelSolution={levelSolution}
            userSolution={userSolution}
          />
        )}

        <Navigation />
        <section className="flex w-10/12 justify-center gap-5 sm:flex-col xl:flex-row">
          <LevelHero
            levelNumber={"Five"}
            levelTitle="Chinese Menu"
            levelDescriptionOne="Now I'm not Chinese, but their menu is pretty tasty. I want you to make me hungry and recreate a Chinese menu for me."
            levelDescriptionTwo="Remember that all the levels are possible! You can do it! Don't forget to check the docs for help."
            colorReference={colorReference}
          />

          <Editor
            submitOpen={submitOpen}
            submitReady={submitReady}
            docsOpen={docsOpen}
            changeDocsOpen={() => animation.useAnimation()}
            changeSubmitOpen={changeSubmitOpen}
            levelSolution={levelSolution}
            userSolution={userSolution}
            changeUserSolution={changeUserSolution}
          />
        </section>
      </div>
    </>
  );
}
