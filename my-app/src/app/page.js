import React from "react";
import Editor from "../components/Editor";

export default function page() {
  return (
    <>
      <p className="m-20 text-4xl text-white">Type HTML and watch it run!</p>

      <Editor />
    </>
  );
}
