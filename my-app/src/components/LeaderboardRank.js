import React from "react";

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
  return (
    <>
      <div className="flex h-16 w-full items-center justify-between">
        <section className="flex items-center gap-6 pl-10">
          <p className="min-w-24 text-center text-xl text-white">#{position}</p>
          <p className="min-w-24 text-center text-xl text-white">{user}</p>
        </section>

        <section className="flex items-center gap-6">
          <p className="min-w-24 text-center text-xl text-white">{level}</p>
          <p className="min-w-24 text-center text-xl text-white">{time}</p>
          <p className="min-w-24 text-center text-xl text-white">{accuracy}</p>
          <p className="min-w-24 text-center text-xl text-white">{date}</p>
          <p className="min-w-24 text-center text-xl text-white">
            {characters}
          </p>

          <article className="flex pl-20 pr-10">
            <p className="min-w-28 rounded-xl bg-indigo-500/75 px-3 py-2 text-center text-lg text-white hover:cursor-pointer">
              See Code
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
