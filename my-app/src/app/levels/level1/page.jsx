"use client";

import React, { useState } from "react";
import Navigation from "../../../components/Navigation";
import LevelHero from "../../../components/LevelHero";
import Editor from "../../../components/Editor";
import Docs from "../../../components/Docs";

export default function Level1() {
  const [docsOpen, setDocsOpen] = useState(false);

  let changeDocsOpen = () => {
    setDocsOpen(!docsOpen);
  };

  return (
    <>
      <div className="flex w-full flex-col items-center gap-16">
        {docsOpen && <Docs />}

        <Navigation />

        <LevelHero
          levelNumber={"One"}
          levelTitle="The Tryouts"
          levelDescriptionOne="Welcome to tailwind practice! You're taking the fast lane to mastering the tailwind language and having the ability to code like magic."
          levelDescriptionTwo="For your first task, you need to get used to your power. Use tailwind to make a “Hello World,” and make it red-500 while you're at it."
        />

        <Editor changeDocsOpen={changeDocsOpen} />
      </div>
    </>
  );
}
