"use client";

import React, { useState, useEffect } from "react";
import Navigation from "../../../components/Navigation";
import LevelHero from "../../../components/LevelHero";
import Editor from "../../../components/Editor";
import Docs from "../../../components/Docs";
import Submit from "../../../components/Submit";

export default function Level4() {
  let level4 =
    "<div class='overflow-hidden flex justify-center items-center flex-col bg-white w-screen h-screen gap-8'><p class='font-semibold text-7xl flex gap-1'><span class='text-red-500'>Z</span><span class='text-orange-500'>o</span><span class='text-blue-700'>m</span><span class='text-purple-500'>b</span><span class='text-cyan-500'>o</span><span class='text-blue-700'>.</span><span class='text-orange-500'>c</span><span class='text-green-400'>o</span><span class='text-blue-700'>m</span></p><section class='relative flex h-28 w-32 flex-col justify-center items-center  animate-spin'><div class=' h-8 inset-0 w-8 rounded-full bg-gray-500 opacity-50'></div><div class='absolute top-0 right-7 h-8 w-8 rounded-full bg-red-500 bg-opacity-50'></div><div class='absolute top-0 left-7 h-8 w-8 rounded-full bg-orange-500 bg-opacity-50'></div><div class='absolute right-0 h-8 w-8 rounded-full bg-purple-500 bg-opacity-50'></div><div class='absolute left-0 h-8 w-8 rounded-full bg-yellow-500 bg-opacity-50'></div><div class='absolute bottom-0 left-7 h-8 w-8 rounded-full bg-green-500 bg-opacity-50'></div><div class='absolute bottom-0 right-7 h-8 w-8 rounded-full bg-blue-700 bg-opacity-50'></div></section></div>";
  const [docsOpen, setDocsOpen] = useState(false);
  const [closing, setClosing] = useState("");

  // debounce to prevent spam
  const [debounce, setDebounce] = useState(false);

  // when the docs button is pressed (found in editor.js), the docsOpen will be true and closing will be set to false
  // once the docs button is pressed again to close the docs, docsOpen will be set to false (for useEffect to play the
  // closing animation), and closing will be set to true remove the docs from the DOM
  let changeDocsOpen = () => {
    if (debounce === true) return;

    if (docsOpen === true) {
      setDebounce(true);
      // Docs.js also reads that docsOpen is false and plays the animation
      setDocsOpen(false);

      // closing being true will remove the docs from the DOM
      setTimeout(() => {
        setClosing("true");
        setDebounce(false);
      }, 750);
    } else if (docsOpen === false) {
      setDebounce(true);

      // closing being false will add the docs back to the DOM
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

  let changeIsRunning = () => {
    setIsRunning(!isRunning);
  };

  let changeIsPaused = () => {
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    changeIsRunning();
    // We can suppress the linter warning because we only want this to run once and don't need any dependencies to make the function run
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [time, setTime] = useState(0);

  // The reason for timer having use useEffects is to start the timer and also allow for pausing
  useEffect(() => {
    // setInterval is a built-in function that takes two arguments: a function and a time in milliseconds
    // The interval variable holds the setInterval function, will increase the time by 1 every second
    // The reason we have interval as a variable is because setInterval returns an ID that clearInterval uses to stop the interval
    let interval = null;

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
        {/* the submit component also needs its change state primarily because of the onClose property to close the modal */}
        {/* Furthermore, there's an changeIsPaused function to pause the timer when the submit modal is open */}
        {submitOpen && (
          <Submit
            submitOpen={submitOpen}
            changeSubmitOpen={changeSubmitOpen}
            nextLevel={"5"}
            time={time}
            changeIsPaused={changeIsPaused}
            level={level4}
          />
        )}

        <Navigation />
        <section className="flex w-10/12 justify-center gap-5">
          <LevelHero
            levelNumber={"Four"}
            levelTitle="Zombo.com"
            levelDescriptionOne="Zombo.com is a website that allows you to do anything. At least, that's what they claim. Your task is to recreate this masterpiece."
            levelDescriptionTwo="By the way, this level took me half an hour to come up with a solution. Good luck! Also remember to take advantage of tailwind animations!"
          />

          {/* We add states and changeStates in page.jsx because docs and submit need to effect the entire page, not just the area where the editor is (editor contains the buttons) */}
          <Editor
            changeDocsOpen={changeDocsOpen}
            changeSubmitOpen={changeSubmitOpen}
            level={level4}
          />
        </section>
      </div>
    </>
  );
}
