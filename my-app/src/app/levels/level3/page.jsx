"use client";

import React, { useState, useEffect } from "react";
import Navigation from "../../../components/Navigation";
import LevelHero from "../../../components/helper/LevelHero";
import Editor from "../../../components/Editor";
import Docs from "../../../components/Docs";
import SubmitModal from "../../../components/helper/SubmitModal";

export default function Level3() {
  let levelSolution =
    "<div class='flex justify-center items-center bg-black w-screen h-screen'><div class='bg-gray-900 flex justify-between items-center rounded-full w-96 h-32'><section class='ml-4 h-20 w-20 bg-white rounded-full'></section><article><p class='text-white text-lg'>Elon Musk (Parody)</p><p class='text-white text-lg'>@elonmusk</p></article><section class='h-20 w-20 flex gap-1 justify-center items-center'><div class='w-2 h-2 rounded-full bg-white'></div><div class='w-2 h-2 rounded-full bg-white'></div><div class='w-2 h-2 rounded-full bg-white'></div></section></div></div>";
  ("<div class='w-screen h-screen bg-red-500 flex justify-center items-center'><p class='text-3xl text-white'>Paint the Town Red</p></div>");
  const [docsOpen, setDocsOpen] = useState(false);
  const [closing, setClosing] = useState("");

  // debounce to prevent spam
  const [debounce, setDebounce] = useState(false);

  let changeDocsOpen = () => {
    if (debounce) return;

    if (docsOpen) {
      setDebounce(true);
      setDocsOpen(false);

      setTimeout(() => {
        setClosing("true");
        setDebounce(false);
      }, 750);
    } else if (!docsOpen) {
      setDebounce(true);

      setClosing("false");
      setDocsOpen(true);

      setTimeout(() => {
        setDebounce(false);
      }, 750);
    }
  };

  const [submitOpen, setSubmitOpen] = useState(false);

  let changeSubmitOpen = () => {
    setSubmitOpen(!submitOpen);
  };

  // Timer states
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);

  let changeIsRunning = () => {
    setIsRunning(!isRunning);
  };
  let changeIsPaused = () => {
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    changeIsRunning();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let interval;

    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPaused, isRunning]);

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
            changeDocsOpen={changeDocsOpen}
            changeSubmitOpen={changeSubmitOpen}
            levelSolution={levelSolution}
          />
        </section>
      </div>
    </>
  );
}
