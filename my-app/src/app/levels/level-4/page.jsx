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
    "<div class='overflow-hidden flex justify-center items-center flex-col bg-white w-screen h-screen gap-8'><p class='font-semibold text-7xl flex gap-1'><span class='text-red-500'>Z</span><span class='text-orange-500'>o</span><span class='text-blue-700'>m</span><span class='text-purple-500'>b</span><span class='text-cyan-500'>o</span><span class='text-blue-700'>.</span><span class='text-orange-500'>c</span><span class='text-green-400'>o</span><span class='text-blue-700'>m</span></p><section class='relative flex h-28 w-32 flex-col justify-center items-center  animate-spin'><div class=' h-8 inset-0 w-8 rounded-full bg-gray-500 opacity-50'></div><div class='absolute top-0 right-7 h-8 w-8 rounded-full bg-red-500 bg-opacity-50'></div><div class='absolute top-0 left-7 h-8 w-8 rounded-full bg-orange-500 bg-opacity-50'></div><div class='absolute right-0 h-8 w-8 rounded-full bg-purple-500 bg-opacity-50'></div><div class='absolute left-0 h-8 w-8 rounded-full bg-yellow-500 bg-opacity-50'></div><div class='absolute bottom-0 left-7 h-8 w-8 rounded-full bg-green-500 bg-opacity-50'></div><div class='absolute bottom-0 right-7 h-8 w-8 rounded-full bg-blue-700 bg-opacity-50'></div></section></div>";
  const [docsOpen, setDocsOpen] = useState(false);
  const [closing, setClosing] = useState("");

  let changeDocsOpen = () => {
    setDocsOpen(!docsOpen);
  };

  let changeClosing = (arg) => {
    setClosing(arg);
  };

  let animation = UseAnimation(docsOpen, changeDocsOpen, changeClosing);

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
            nextLevel={"5"}
            time={time}
            changeIsPaused={changeIsPaused}
            levelSolution={levelSolution}
            userSolution={userSolution}
          />
        )}

        <Navigation />
        <section className="flex w-10/12 justify-center gap-5 sm:flex-col xl:flex-row">
          <LevelHero
            levelNumber={"Four"}
            levelTitle="Zombo.com"
            levelDescriptionOne="Zombo.com is a website that allows you to do anything. At least, that's what they claim. Your task is to recreate this masterpiece."
            levelDescriptionTwo="By the way, this level took me half an hour to come up with a solution. Good luck! Also remember to take advantage of tailwind animations!"
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
