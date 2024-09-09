"use client";

import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation.jsx";
import LeaderboardRank from "../../components/LeaderboardRank.jsx";

export default function Page() {
  let [leaderboard, setLeaderboard] = useState();
  let [sortBy, setSortBy] = useState("Level");

  let changeSortBy = () => {
    if (sortBy === "Level") {
      setSortBy("Time");
    }
    if (sortBy === "Time") {
      setSortBy("Accuracy");
    }
    if (sortBy === "Accuracy") {
      setSortBy("Characters");
    }
    if (sortBy === "Characters") {
      setSortBy("Level");
    }
  };

  useEffect(() => {
    function getLeaderboard() {
      if (sortBy === "Level") {
        fetch(`${process.env.SERVER}/leaderboardLevelSort`)
          .then((response) => response.json())
          .then((data) => {
            setLeaderboard(data);
          });
      }
      if (sortBy === "Time") {
        fetch(`${process.env.SERVER}/leaderboardTimeSort`)
          .then((response) => response.json())
          .then((data) => {
            setLeaderboard(data);
          });
      }
      if (sortBy === "Accuracy") {
        fetch(`${process.env.SERVER}/leaderboardAccuracySort`)
          .then((response) => response.json())
          .then((data) => {
            setLeaderboard(data);
          });
      }
      if (sortBy === "Characters") {
        fetch(`${process.env.SERVER}/leaderboardCharactersSort`)
          .then((response) => response.json())
          .then((data) => {
            setLeaderboard(data);
          });
      }
    }

    getLeaderboard();
  }, [sortBy]);

  return (
    <>
      <div className="flex w-full flex-col items-center gap-16">
        <Navigation />

        <div className="flex w-10/12 flex-col gap-1">
          <div className="primary-color-6 flex h-16 w-full justify-between overflow-x-auto rounded-lg">
            <section className="flex items-center gap-6 pl-2 xl:pl-10">
              <p className="min-w-24 text-center text-xl text-white">
                Position
              </p>
              <p className="min-w-24 text-center text-xl text-white">User</p>
            </section>

            <section className="flex items-center gap-6 xl:mr-5 2xl:mr-0">
              <p className="min-w-24 text-center text-xl text-white">Level</p>
              <p className="min-w-24 text-center text-xl text-white">Time</p>
              <p className="min-w-24 text-center text-xl text-white">
                Accuracy
              </p>
              <p className="min-w-24 text-center text-xl text-white">Date</p>
              <p className="min-w-24 text-center text-xl text-white">
                Characters
              </p>

              <article className="flex items-center 2xl:pl-20 2xl:pr-10">
                <p className="min-w-28 text-center text-xl text-white">Code</p>
              </article>
            </section>
          </div>

          <article className="flex w-full items-center justify-end xl:pr-10">
            <p
              className="text-md text-white/50 transition duration-200 ease-in-out hover:cursor-pointer hover:text-white"
              onClick={() => changeSortBy()}
            >
              Sort By [{sortBy}]
            </p>
          </article>

          <div className="primary-color-6 mt-2 flex w-full flex-col gap-1 rounded-lg">
            {/* the map method uses index as an argument, which is the index it is mapping in the array (i.e. 0,1,2) */}
            {leaderboard ? (
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
              })
            ) : (
              <section className="flex flex-col gap-1">
                <div className="primary-color-6 h-16 w-full animate-pulse rounded-t-md" />
                <div className="h-16 w-full animate-pulse bg-indigo-400/75" />
                <div className="primary-color-6 h-16 w-full animate-pulse" />
                <div className="h-16 w-full animate-pulse bg-indigo-400/75" />
                <div className="primary-color-6 h-16 w-full animate-pulse" />
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
