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
    "<div class='w-screen h-screen bg-red-500 flex justify-center items-center'><p class='text-3xl text-white'>Paint the Town Red</p></div>";

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
            nextLevel={"3"}
            time={time}
            changeIsPaused={changeIsPaused}
            levelSolution={levelSolution}
            userSolution={userSolution}
          />
        )}

        <Navigation />
        <section className="flex w-10/12 justify-center gap-5 sm:flex-col xl:flex-row">
          <LevelHero
            levelNumber={"Two"}
            levelTitle="Paint the Town Red"
            levelDescriptionOne="Paint the town red by filling the background with the color red-500."
            levelDescriptionTwo="In addition, write the words 'Paint the Town Red' in the center (white text and a size of 3xl)."
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
