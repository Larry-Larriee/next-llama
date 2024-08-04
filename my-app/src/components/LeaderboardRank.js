"use client";
import React, { useState } from "react";
import SeeCodeModal from "./helper/SeeCodeModal";

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
        <div className="flex h-16 w-full items-center justify-between overflow-x-scroll">
          <section className="flex items-center gap-6 pl-2 xl:pl-10">
            <p className="min-w-24 text-center text-xl text-white">
              #{position}
            </p>
            <p className="min-w-24 text-center text-xl text-white">{user}</p>
          </section>

          <section className="flex items-center gap-6">
            <p className="min-w-24 text-center text-xl text-white">{level}</p>
            <p className="min-w-24 text-center text-xl text-white">
              {time} sec
            </p>
            <p className="min-w-24 text-center text-xl text-white">
              {accuracy}%
            </p>
            <p className="min-w-24 text-center text-xl text-white">{date}</p>
            <p className="min-w-24 text-center text-xl text-white">
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
        <div className="flex h-16 w-full items-center justify-between overflow-x-scroll bg-indigo-400/75">
          <section className="flex items-center gap-6 pl-2 xl:pl-10">
            <p className="min-w-24 text-center text-xl text-white">
              #{position}
            </p>
            <p className="min-w-24 text-center text-xl text-white">{user}</p>
          </section>

          <section className="flex items-center gap-6">
            <p className="min-w-24 text-center text-xl text-white">{level}</p>
            <p className="min-w-24 text-center text-xl text-white">
              {time} sec
            </p>
            <p className="min-w-24 text-center text-xl text-white">
              {accuracy}%
            </p>
            <p className="min-w-24 text-center text-xl text-white">{date}</p>
            <p className="min-w-24 text-center text-xl text-white">
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
