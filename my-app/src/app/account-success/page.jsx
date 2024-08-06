import React from "react";

import Navigation from "@/components/Navigation.jsx";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-16">
        <Navigation />

        <section className="flex w-10/12 flex-col gap-10">
          <h1 className="text-4xl text-white">Success!</h1>

          <p className="w-1/2 text-xl leading-relaxed text-white">
            If you are automatically signed out, the account link in menu bar
            will shine on and off. Otherwise, it&apos;ll be as solid as your
            tailwind skills (that&apos;s a good thing)
          </p>
        </section>

        <section className="flex w-10/12 gap-10">
          <Link href={"/levels/level-select"}>
            <p className="primary-color-6 rounded-md px-3 py-2 text-lg text-white">
              Take Me To Level Select
            </p>
          </Link>

          <Link href={"/leaderboard"}>
            <p className="primary-color-6 rounded-md px-3 py-2 text-lg text-white">
              Take Me To leaderboard
            </p>
          </Link>
        </section>
      </div>
    </>
  );
}
