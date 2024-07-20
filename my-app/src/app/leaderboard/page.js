"use client";

import React, { useState, useEffect } from "react";

export default function Page() {
  let [leaderboard, setLeaderboard] = useState();

  async function getLeaderboard() {
    const response = await fetch(
      "https://next-llama-server.onrender.com/leaderboard",
    );
    let data = await response.json();

    setLeaderboard(data[0]);
  }

  useEffect(() => {
    getLeaderboard();
  }, []);

  return (
    <>
      <div>
        {leaderboard && (
          <p className="text-xl text-white">{leaderboard.tailwindCode}</p>
        )}
      </div>
    </>
  );
}
