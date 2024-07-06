"use client";

import React, { useState, useEffect } from "react";
import Navigation from "../../../components/Navigation";
import LevelHero from "../../../components/LevelHero";
import Editor from "../../../components/Editor";
import Docs from "../../../components/Docs";
import Submit from "../../../components/Submit";

export default function Level6() {
  let level6 =
    "<div class='flex h-screen w-screen items-center justify-center gap-0 bg-yellow-100'><div class='relative flex'><section class='h-0 w-0 border-yellow-300 big-border-left border-l-transparent border-b-transparent'></section><section class='w-20 h-20 bg-yellow-300'></section><section class='h-0 w-0 border-yellow-300 big-border-right border-r-transparent border-b-transparent'></section><section class='middle-crown-piece h-0 w-0 border-yellow-300 border-r-transparent border-l-transparent'></section><section class='left-crown-piece h-0 w-0 border-yellow-300 border-r-transparent border-l-transparent'></section><section class='right-crown-piece h-0 w-0 border-yellow-300 border-r-transparent border-l-transparent'></section></div></div><style>.big-border-right{border-bottom-width:5rem;border-left-width:2rem;border-right-width:5rem}.big-border-left{border-bottom-width:5rem;border-left-width:5rem;border-right-width:2rem}.middle-crown-piece{position:absolute;top:-3rem;left:33%;border-bottom-width:3rem;border-left-width:3rem;border-right-width:3rem}.left-crown-piece{position:absolute;top:-2.5rem;left:19.8%;transform:rotate(-50deg);border-bottom-width:4rem;border-left-width:2rem;border-right-width:2rem}.right-crown-piece{position:absolute;top:-2.5rem;right:19.8%;transform:rotate(50deg);border-bottom-width:4rem;border-left-width:2rem;border-right-width:2rem}.up-arrow{width:0;height:0;border-left:50px solid #fff0;border-right:50px solid #fff0;border-bottom:50px solid green;margin:2rem}</style>";
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
            nextLevel={"1"}
            time={time}
            changeIsPaused={changeIsPaused}
          />
        )}

        <Navigation />
        <section className="flex w-10/12 justify-center gap-5">
          <LevelHero
            levelNumber={"👑"}
            levelTitle="Final Challenge"
            levelDescriptionOne="If you got this far without cheating, I'm already super impressed with you. Beat this level and you're ready to graduate. For your final challenge, you have to recreate a crown using tailwind."
            levelDescriptionTwo="Hint: It might be helpful learning how to make triangles on the web. You may also have to make your own styles (yikes). This level is one of the hardest because of how unique it is. Good luck!"
          />

          {/* We add states and changeStates in page.jsx because docs and submit need to effect the entire page, not just the area where the editor is (editor contains the buttons) */}
          <Editor
            changeDocsOpen={changeDocsOpen}
            changeSubmitOpen={changeSubmitOpen}
            level={level6}
          />
        </section>
      </div>
    </>
  );
}
