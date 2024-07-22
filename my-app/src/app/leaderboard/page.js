"use client";

import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import LeaderboardRank from "../../components/LeaderboardRank";

export default function Page() {
  let [leaderboard, setLeaderboard] = useState();

  async function getLeaderboard() {
    const response = await fetch(
      "https://next-llama-server.onrender.com/leaderboard",
    ).catch((error) => console.error(error));
    let data = await response.json();

    setLeaderboard(data);
  }

  useEffect(() => {
    getLeaderboard();
  }, []);

  return (
    <>
      <div className="flex w-full flex-col items-center gap-16">
        <Navigation />

        <div className="flex w-10/12 flex-col gap-1">
          <div className="primary-color-6 flex h-16 w-full justify-between rounded-lg">
            <section className="flex items-center gap-6 pl-10">
              <p className="min-w-24 text-center text-xl text-white">
                Position
              </p>
              <p className="min-w-24 text-center text-xl text-white">User</p>
            </section>

            <section className="flex items-center gap-6">
              <p className="min-w-24 text-center text-xl text-white">Level</p>
              <p className="min-w-24 text-center text-xl text-white">Time</p>
              <p className="min-w-24 text-center text-xl text-white">
                Accuracy
              </p>
              <p className="min-w-24 text-center text-xl text-white">Date</p>
              <p className="min-w-24 text-center text-xl text-white">
                Characters
              </p>

              <article className="flex items-center pl-20 pr-10">
                <p className="min-w-28 text-center text-xl text-white">Code</p>
              </article>
            </section>
          </div>

          <article className="flex w-full items-center justify-end pr-10">
            <p className="text-md text-white/50 transition duration-200 ease-in-out hover:cursor-pointer hover:text-white">
              Sort By [Level]
            </p>
          </article>

          <div className="primary-color-6 flex min-h-96 w-full flex-col gap-1 rounded-lg pt-2">
            {/* the map method uses index as an argument, which is the index it is mapping in the array (i.e. 0,1,2) */}
            {leaderboard &&
              leaderboard.map((leaderBoardRank, index) => {
                return (
                  <LeaderboardRank
                    key={index}
                    position={index + 1}
                    user={leaderBoardRank.metadata.userName}
                    level={leaderBoardRank.tailwindLevel}
                    time={leaderBoardRank.time}
                    accuracy={leaderBoardRank.accuracy}
                    date={leaderBoardRank.metadata.date}
                    characters={leaderBoardRank.characters}
                    code={leaderBoardRank.tailwindCode}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
