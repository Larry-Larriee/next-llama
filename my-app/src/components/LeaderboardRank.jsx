"use client";

import React, { useMemo, useState } from "react";
import SeeCodeModal from "./helper/SeeCodeModal.jsx";

// position (number) the index of the user on the leaderboard
// user (string) the username of the user
// level (number) the level the user completed
// time (number) the time it took the user to complete the level
// accuracy (number) the accuracy of the user's code
// date (string) the date the user completed the level
// characters (number) the number of characters in the user's code
// code (string) the user's code
// return (JSX) the leaderboard rank component for each individual user
export default function LeaderboardRank({
  position,
  user,
  level,
  time,
  accuracy,
  date,
  characters,
  code,
}) {
  const [modal, setModal] = useState(false);

  const changeModalState = () => {
    setModal(!modal);
  };

  const roundedAccuracy = useMemo(() => {
    if (accuracy === 100) return accuracy.toFixed(1);
    if (accuracy < 10) return accuracy.toFixed(3);
    return accuracy.toFixed(2);
  }, [accuracy]);

  const roundedTime = useMemo(() => {
    if (time >= 10000) return Math.ceil(time / 60);
  }, [time]);

  console.log(accuracy > 25, accuracy);

  return (
    <>
      {modal && (
        <SeeCodeModal
          modal={modal}
          changeModalState={changeModalState}
          user={user}
          code={code}
        />
      )}

      {/* even numbers recieve no background change (remember that position starts at #1) */}
      {position % 2 === 1 && (
        <div className="flex h-16 w-full items-center justify-between overflow-x-auto">
          <section className="flex items-center gap-6 pl-2 xl:pl-10">
            <p className="min-w-24 text-center text-xl text-white">
              #{position}
            </p>
            <p className="w-36 text-center text-xl text-white">{user}</p>
          </section>

          <section className="flex items-center gap-6">
            <p className="min-w-24 text-center text-xl text-white">{level}</p>
            <p className="min-w-24 text-center text-xl text-white">
              {time >= 10000 ? roundedTime + " min" : time + " sec"}
            </p>
            <p className="min-w-24 text-center text-xl text-white">
              {roundedAccuracy}%
            </p>
            <p className="min-w-40 text-center text-xl text-white">{date}</p>
            <p className="min-w-28 text-center text-xl text-white">
              {characters}
            </p>

            <article className="flex xl:pr-5 2xl:pl-20 2xl:pr-10">
              <p
                className="min-w-28 rounded-xl bg-indigo-500/75 px-3 py-2 text-center text-lg text-white hover:cursor-pointer"
                onClick={() => changeModalState()}
              >
                See Code
              </p>
            </article>
          </section>
        </div>
      )}

      {/* odd numbers receive a special background change */}
      {position % 2 === 0 && (
        <div className="flex h-16 w-full items-center justify-between overflow-x-auto bg-indigo-400/75">
          <section className="flex items-center gap-6 pl-2 xl:pl-10">
            <p className="min-w-24 text-center text-xl text-white">
              #{position}
            </p>
            <p className="w-36 text-center text-xl text-white">{user}</p>
          </section>

          <section className="flex items-center gap-6">
            <p className="min-w-24 text-center text-xl text-white">{level}</p>
            <p className="min-w-24 text-center text-xl text-white">
              {time >= 10000 ? roundedTime + " min" : time + " sec"}
            </p>
            <p className="min-w-24 text-center text-xl text-white">
              {roundedAccuracy}%
            </p>
            <p className="min-w-40 text-center text-xl text-white">{date}</p>
            <p className="min-w-28 text-center text-xl text-white">
              {characters}
            </p>

            <article className="flex xl:pr-5 2xl:pl-20 2xl:pr-10">
              <p
                className="min-w-28 rounded-xl bg-indigo-800/75 px-3 py-2 text-center text-lg text-white hover:cursor-pointer"
                onClick={() => changeModalState()}
              >
                See Code
              </p>
            </article>
          </section>
        </div>
      )}
    </>
  );
}
