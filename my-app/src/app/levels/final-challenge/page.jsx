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
    "<div class='flex h-screen w-screen items-center justify-center gap-0 bg-yellow-100'><div class='relative flex'><section class='h-0 w-0 border-yellow-300 big-border-left border-l-transparent border-b-transparent'></section><section class='w-20 h-20 bg-yellow-300'></section><section class='h-0 w-0 border-yellow-300 big-border-right border-r-transparent border-b-transparent'></section><section class='middle-crown-piece h-0 w-0 border-yellow-300 border-r-transparent border-l-transparent'></section><section class='left-crown-piece h-0 w-0 border-yellow-300 border-r-transparent border-l-transparent'></section><section class='right-crown-piece h-0 w-0 border-yellow-300 border-r-transparent border-l-transparent'></section></div></div><style>.big-border-right{border-bottom-width:5rem;border-left-width:2rem;border-right-width:5rem}.big-border-left{border-bottom-width:5rem;border-left-width:5rem;border-right-width:2rem}.middle-crown-piece{position:absolute;top:-3rem;left:33%;border-bottom-width:3rem;border-left-width:3rem;border-right-width:3rem}.left-crown-piece{position:absolute;top:-2.5rem;left:19.8%;transform:rotate(-50deg);border-bottom-width:4rem;border-left-width:2rem;border-right-width:2rem}.right-crown-piece{position:absolute;top:-2.5rem;right:19.8%;transform:rotate(50deg);border-bottom-width:4rem;border-left-width:2rem;border-right-width:2rem}.up-arrow{width:0;height:0;border-left:50px solid #fff0;border-right:50px solid #fff0;border-bottom:50px solid green;margin:2rem}</style>";
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
    { color: "bg-yellow-100", rgb: "rgb(254 249 195)" },
    { color: "bg-yellow-300", rgb: "rgb(253 224 71)" },
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
            nextLevel={"congrats"}
            time={time}
            changeIsPaused={changeIsPaused}
            levelSolution={levelSolution}
            userSolution={userSolution}
          />
        )}

        <Navigation />
        <section className="flex w-10/12 justify-center gap-5 sm:flex-col xl:flex-row">
          <LevelHero
            levelNumber={"👑"}
            levelTitle="Final Challenge"
            levelDescriptionOne="If you got this far without cheating, I'm already super impressed with you. Beat this level and you're ready to graduate. For your final challenge, you have to recreate a crown using tailwind."
            levelDescriptionTwo="Hint: It might be helpful learning how to make triangles on the web. You may also have to make your own styles (yikes). This level is one of the hardest because of how unique it is. Good luck!"
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
