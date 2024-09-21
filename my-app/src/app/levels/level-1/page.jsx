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
  let levelSolution = "<p class='text-red-500 text-2xl'>Hello World</p>";

  const [docsOpen, setDocsOpen] = useState(false);
  const [closing, setClosing] = useState("");

  let changeDocsOpen = () => {
    setDocsOpen(!docsOpen);
  };

  // we create an animation variable at the top level because it is a react hook. We can use the things it returns in the DOM
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
    { color: "red-500", rgb: "rgb(239 68 68)" },
    { color: "white", rgb: "rgb(255 255 255)" },
  ];

  const userSolutionUIRef = useRef(null);

  // sumbit ready will open the modal once the accuracy is fetched and it is set to true
  // when the modal is closed, it tells the level.jsx file to delete the component. having submitReady does not affect the functionality of submitmodal.jsx
  const [submitReady, setSubmitReady] = useState(false);

  let changeSubmitReady = (bool) => {
    setSubmitReady(bool);
  };

  return (
    <>
      <div className="flex w-full flex-col items-center gap-12">
        {closing === "false" && <Docs docsOpen={docsOpen} />}
        {/* the submit component also needs its change state primarily because of the onClose property to close the modal */}
        {/* Furthermore, there's an changeIsPaused function to pause the timer when the submit modal is open */}
        {submitOpen && (
          <SubmitModal
            submitReady={submitReady}
            changeSubmitReady={changeSubmitReady}
            submitOpen={submitOpen}
            changeSubmitOpen={changeSubmitOpen}
            nextLevel={"2"}
            time={time}
            changeIsPaused={changeIsPaused}
            // submit modal uses level solution to display the solution code as part of comparing user code
            levelSolution={levelSolution}
            userSolution={userSolution}
            userSolutionUIRef={userSolutionUIRef}
          />
        )}

        <Navigation />
        <section className="flex w-10/12 justify-center gap-5 sm:flex-col xl:flex-row">
          <LevelHero
            levelNumber={"One"}
            levelTitle="The Tryouts"
            levelDescriptionOne="Welcome to tailwind practice! You're taking the fast lane to mastering the tailwind language and having the ability to code like magic."
            levelDescriptionTwo="For your first task, you need to get used to your power. Use tailwind to make a “Hello World,” and make it red-500 while you're at it. For a visual demonstration, click on See Design."
            colorReference={colorReference}
          />

          {/* We add states and changeStates in page.jsx because docs and submit need to effect the entire page, not just the area where the editor is (editor contains the buttons) */}
          <Editor
            submitOpen={submitOpen}
            submitReady={submitReady}
            docsOpen={docsOpen}
            changeDocsOpen={() => animation.useAnimation()}
            changeSubmitOpen={changeSubmitOpen}
            // editor uses level solution to display the solution code as a visual
            levelSolution={levelSolution}
            userSolution={userSolution}
            changeUserSolution={changeUserSolution}
          />
        </section>
      </div>
    </>
  );
}
