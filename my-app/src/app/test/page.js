"use client";

import React, { useState, useEffect } from "react";

export default function Page() {
  const [test, setTest] = useState();

  useEffect(() => {
    async function postTest() {
      let response = await fetch("https://next-llama-4s1x.onrender.com/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          testValue: "Hello World.",
        }),
      });
      let data = await response.json();
      setTest(data);
    }

    postTest();
  }, []);

  return <div>{test && test.testValue}</div>;
}
