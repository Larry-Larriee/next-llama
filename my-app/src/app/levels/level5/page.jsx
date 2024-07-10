"use client";

import React, { useState, useRef } from "react";
import Navigation from "../../../components/Navigation";
import LevelHero from "../../../components/helper/LevelHero";
import Editor from "../../../components/Editor";
import Docs from "../../../components/Docs";
import SubmitModal from "../../../components/helper/SubmitModal";

import UseStopWatch from "../../../components/hooks/UseStopWatch";
import UseAnimation from "../../../components/hooks/UseAnimation";

export default function Level5() {
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

  const userSolutionRef = useRef();
  let [userSolution, setUserSolution] = useState(
    "<p class='text-2xl text-black'>Hello World</p>",
  );

  let changeUserSolution = () => {
    setUserSolution(userSolutionRef.current.value);
  };

  return (
    <>
      <div className="flex w-full flex-col items-center gap-16">
        {closing === "false" && <Docs docsOpen={docsOpen} />}
        {submitOpen && (
          <SubmitModal
            submitOpen={submitOpen}
            changeSubmitOpen={changeSubmitOpen}
            nextLevel={"6"}
            time={time}
            changeIsPaused={changeIsPaused}
            levelSolution={levelSolution}
          />
        )}

        <Navigation />
        <section className="flex w-10/12 justify-center gap-5">
          <LevelHero
            levelNumber={"Five"}
            levelTitle="Chinese Menu"
            levelDescriptionOne="Now I'm not Chinese, but their menu is pretty tasty. I want you to make me hungry and recreate a Chinese menu for me."
            levelDescriptionTwo="Remember that all the levels are possible! You can do it! Don't forget to check the docs for help."
          />

          <Editor
            changeDocsOpen={() => animation.useAnimation()}
            changeSubmitOpen={changeSubmitOpen}
            levelSolution={levelSolution}
            userSolution={userSolution}
            userSolutionRef={userSolutionRef}
            changeUserSolution={changeUserSolution}
          />
        </section>
      </div>
    </>
  );
}
