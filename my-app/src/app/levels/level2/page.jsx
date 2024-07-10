"use client";

import React, { useState, useEffect } from "react";
import Navigation from "../../../components/Navigation";
import LevelHero from "../../../components/helper/LevelHero";
import Editor from "../../../components/Editor";
import Docs from "../../../components/Docs";
import SubmitModal from "../../../components/helper/SubmitModal";

import UseStopWatch from "../../../components/hooks/UseStopWatch";
import UseAnimation from "../../../components/hooks/UseAnimation";

export default function Level2() {
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
          />
        )}

        <Navigation />
        <section className="flex w-10/12 justify-center gap-5">
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
          />
        </section>
      </div>
    </>
  );
}
