"use client";

import React, { useState, useRef } from "react";
import Navigation from "../../../components/Navigation";
import LevelHero from "../../../components/helper/LevelHero";
import Editor from "../../../components/Editor";
import Docs from "../../../components/Docs";
import SubmitModal from "../../../components/helper/SubmitModal";

import UseStopWatch from "../../../components/hooks/UseStopWatch";
import UseAnimation from "../../../components/hooks/UseAnimation";

export default function Level3() {
  let levelSolution =
    "<div class='flex justify-center items-center bg-black w-screen h-screen'><div class='bg-gray-900 flex justify-between items-center rounded-full w-96 h-32'><section class='ml-4 h-20 w-20 bg-white rounded-full'></section><article><p class='text-white text-lg'>Elon Musk (Parody)</p><p class='text-white text-lg'>@elonmusk</p></article><section class='h-20 w-20 flex gap-1 justify-center items-center'><div class='w-2 h-2 rounded-full bg-white'></div><div class='w-2 h-2 rounded-full bg-white'></div><div class='w-2 h-2 rounded-full bg-white'></div></section></div></div>";
  ("<div class='w-screen h-screen bg-red-500 flex justify-center items-center'><p class='text-3xl text-white'>Paint the Town Red</p></div>");
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
            nextLevel={"4"}
            time={time}
            changeIsPaused={changeIsPaused}
            levelSolution={levelSolution}
            userSolution={userSolution}
          />
        )}

        <Navigation />
        <section className="flex w-10/12 justify-center gap-5">
          <LevelHero
            levelNumber={"Three"}
            levelTitle="Twitter Profile"
            levelDescriptionOne="Tailwind has a lot of real applications. You've made the right choice by choosing to learn this library."
            levelDescriptionTwo="Create a twitter profile using tailwind. Not the whole thing; just that one cool part in the navigation menu (see design). Also WARNING: this level is the hardest one yet!!"
          />

          <Editor
            changeDocsOpen={() => animation.useAnimation()}
            changeSubmitOpen={changeSubmitOpen}
            levelSolution={levelSolution}
            userSolutionRef={userSolutionRef}
            userSolution={userSolution}
            changeUserSolution={changeUserSolution}
          />
        </section>
      </div>
    </>
  );
}
