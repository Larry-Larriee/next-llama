"use client";

import React, { useState } from "react";
import Navigation from "../../../components/Navigation";
import LevelHero from "../../../components/LevelHero";
import Editor from "../../../components/Editor";
import Docs from "../../../components/Docs";
import Submit from "../../../components/Submit";

export default function Level1() {
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

  return (
    <>
      <div className="flex w-full flex-col items-center gap-16">
        {closing === "false" && <Docs docsOpen={docsOpen} />}
        {/* the submit component also needs its change state primarily because of the button in the modal to close the modal */}
        {submitOpen && (
          <Submit submitOpen={submitOpen} changeSubmitOpen={changeSubmitOpen} />
        )}

        <Navigation />

        <LevelHero
          levelNumber={"One"}
          levelTitle="The Tryouts"
          levelDescriptionOne="Welcome to tailwind practice! You're taking the fast lane to mastering the tailwind language and having the ability to code like magic."
          levelDescriptionTwo="For your first task, you need to get used to your power. Use tailwind to make a “Hello World,” and make it red-500 while you're at it."
        />

        {/* We add states and changeStates in page.jsx because docs and submit need to effect the entire page, not just the area where the editor is (editor contains the buttons) */}
        <Editor
          changeDocsOpen={changeDocsOpen}
          changeSubmitOpen={changeSubmitOpen}
        />
      </div>
    </>
  );
}
