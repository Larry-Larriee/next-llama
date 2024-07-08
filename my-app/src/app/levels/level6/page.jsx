"use client";

import React, { useState, useEffect } from "react";
import Navigation from "../../../components/Navigation";
import LevelHero from "../../../components/helper/LevelHero";
import Editor from "../../../components/Editor";
import Docs from "../../../components/Docs";
import SubmitModal from "../../../components/helper/SubmitModal";

export default function Level6() {
  let levelSolution =
    "<div class='flex h-screen w-screen items-center justify-center gap-0 bg-yellow-100'><div class='relative flex'><section class='h-0 w-0 border-yellow-300 big-border-left border-l-transparent border-b-transparent'></section><section class='w-20 h-20 bg-yellow-300'></section><section class='h-0 w-0 border-yellow-300 big-border-right border-r-transparent border-b-transparent'></section><section class='middle-crown-piece h-0 w-0 border-yellow-300 border-r-transparent border-l-transparent'></section><section class='left-crown-piece h-0 w-0 border-yellow-300 border-r-transparent border-l-transparent'></section><section class='right-crown-piece h-0 w-0 border-yellow-300 border-r-transparent border-l-transparent'></section></div></div><style>.big-border-right{border-bottom-width:5rem;border-left-width:2rem;border-right-width:5rem}.big-border-left{border-bottom-width:5rem;border-left-width:5rem;border-right-width:2rem}.middle-crown-piece{position:absolute;top:-3rem;left:33%;border-bottom-width:3rem;border-left-width:3rem;border-right-width:3rem}.left-crown-piece{position:absolute;top:-2.5rem;left:19.8%;transform:rotate(-50deg);border-bottom-width:4rem;border-left-width:2rem;border-right-width:2rem}.right-crown-piece{position:absolute;top:-2.5rem;right:19.8%;transform:rotate(50deg);border-bottom-width:4rem;border-left-width:2rem;border-right-width:2rem}.up-arrow{width:0;height:0;border-left:50px solid #fff0;border-right:50px solid #fff0;border-bottom:50px solid green;margin:2rem}</style>";
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
            nextLevel={"1"}
            time={time}
            changeIsPaused={changeIsPaused}
            levelSolution={levelSolution}
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
