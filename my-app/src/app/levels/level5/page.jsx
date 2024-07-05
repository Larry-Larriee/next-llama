"use client";

import React, { useState, useEffect } from "react";
import Navigation from "../../../components/Navigation";
import LevelHero from "../../../components/LevelHero";
import Editor from "../../../components/Editor";
import Docs from "../../../components/Docs";
import Submit from "../../../components/Submit";

export default function Level5() {
  let level5 =
    '<section class="flex h-screen w-screen flex-col gap-2 rounded-lg bg-yellow-400 p-3"><p class="text-3xl text-red-700">Chinese Restaurant Menu</p><div class="flex gap-10"><section class="flex flex-col gap-2"><div class="flex flex-col gap-1"><p class="text-xl text-red-700">Main Course</p><hr class="rounded-md border-2 border-red-700"/></div><article class="flex justify-between"><div><p class="text-lg text-red-700">Char Siu Ricebowl</p><p class="text-sm text-red-700">Char Siu with delicious mushroom topping</p></div><p class="text-lg text-red-700">$6.99</p></article><article class="flex justify-between"><div><p class="text-lg text-red-700">Fried Kwetiauw</p><p class="text-sm text-red-700">Fried Kwetiauw, served with special spices and fried eggs</p></div><p class="text-lg text-red-700">$9.99</p></article></section><section class="flex flex-col gap-2"><div class="flex flex-col gap-1"><p class="text-xl text-red-700">Special Menu</p><hr class="rounded-md border-2 border-red-700"/></div><article class="flex justify-between"><div><p class="text-lg text-red-700">Dimsum</p><p class="text-sm text-red-700">Dim sum containing fresh and tasty seafood</p></div><p class="text-lg text-red-700">$7.99</p></article><article class="space-between flex w-full"><div><p class="text-lg text-red-700">Spring Rolls</p><p class="text-sm text-red-700">Spring rolls with our fresh toppings and savory seasoning</p></div><p class="text-lg text-red-700">$7.99</p></article></section></div></section>';
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
            nextLevel={"6"}
            time={time}
            changeIsPaused={changeIsPaused}
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

          {/* We add states and changeStates in page.jsx because docs and submit need to effect the entire page, not just the area where the editor is (editor contains the buttons) */}
          <Editor
            changeDocsOpen={changeDocsOpen}
            changeSubmitOpen={changeSubmitOpen}
            level={level5}
          />
        </section>
      </div>
    </>
  );
}
