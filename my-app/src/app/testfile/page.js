"use client";

import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

export default function Page() {
  const [value, setValue] = useState("");

  // in this case, CodeMirror happens to pass the text value on the event that it changes
  const onChange = (e) => {
    setValue(e);
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  const tailwindLlamaTheme = createTheme({
    theme: "dark",
    settings: {
      background: "#11192f",
      backgroundImage: "",
      foreground: "#4D4D4C",
      caret: "#AEAFAD",
      selection: "#D6D6D6",
      selectionMatch: "#D6D6D6",
      gutterBackground: "#FFFFFF",
      gutterForeground: "#4D4D4C",
      gutterBorder: "#dddddd",
      gutterActiveForeground: "",
      lineHighlight: "#EFEFEF",
    },
    styles: [
      { tag: t.comment, color: "#787b80" },
      { tag: t.definition(t.typeName), color: "#194a7b" },
      { tag: t.typeName, color: "#194a7b" },
      { tag: t.tagName, color: "#008a02" },
      { tag: t.variableName, color: "#1a00db" },
    ],
  });

  return (
    <>
      <CodeMirror
        value={value}
        extensions={[javascript({ jsx: true })]}
        onChange={(e) => onChange(e)}
        theme={tailwindLlamaTheme}
        className="w-96"
        height="20rem"
      />
    </>
  );
}
