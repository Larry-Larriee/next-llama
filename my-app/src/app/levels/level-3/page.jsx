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
    "<div class='flex justify-center items-center bg-black w-screen h-screen'><div class='bg-gray-800 flex justify-between items-center rounded-full w-96 h-32'><section class='ml-4 h-20 w-20 bg-white rounded-full'></section><article><p class='text-white text-lg'>Elon Musk (Parody)</p><p class='text-white text-lg'>@elonmusk</p></article><section class='h-20 w-20 flex gap-1 justify-center items-center'><div class='w-2 h-2 rounded-full bg-white'></div><div class='w-2 h-2 rounded-full bg-white'></div><div class='w-2 h-2 rounded-full bg-white'></div></section></div></div>";
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
    { color: "white", rgb: "rgb(255 255 255)" },
    { color: "black", rgb: "rgb(0 0 0)" },
    { color: "gray-800", rgb: "rgb(31 41 55)" },
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
            nextLevel={"4"}
            time={time}
            changeIsPaused={changeIsPaused}
            levelSolution={levelSolution}
            userSolution={userSolution}
          />
        )}

        <Navigation />
        <section className="flex w-10/12 justify-center gap-5 sm:flex-col xl:flex-row">
          <LevelHero
            levelNumber={"Three"}
            levelTitle="Twitter Profile"
            levelDescriptionOne="Tailwind has a lot of real applications. You've made the right choice by choosing to learn this library."
            levelDescriptionTwo="Create a twitter profile using tailwind. Not the whole thing; just that one cool part in the navigation menu (see design). Also WARNING: this level is the hardest one yet!!"
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
