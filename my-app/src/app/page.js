import React from "react";
import Editor from "../components/Editor";

export default function page() {
  return (
    <div className="relative flex min-h-screen flex-col items-center gap-40">
      {/* radial gradient background for hero */}
      <div className="radial-gradient-absolute radial-gradient-height w-1/2" />

      <header className="mt-36 flex w-10/12 flex-col items-center gap-10">
        <p className="w-5/6 text-center text-6xl font-bold text-white">
          Getting The Hang of Tailwind Starts Today.
        </p>

        <p className="w-3/4 text-center text-3xl text-white">
          TailwindPractice is the most hands-on experience to learning tailwind
          you could ever ask for.
        </p>

        <section className="flex items-center justify-center gap-10">
          <p className="rounded-md bg-blue-500 px-8 py-4 text-xl font-bold text-white">
            Get Started
          </p>
          <p className="rounded-md bg-orange-500 px-6 py-4 text-xl font-bold text-white">
            Support my project on Patreon
          </p>
        </section>
      </header>
      <div className="flex w-full flex-wrap justify-between gap-10">
        <div className="primary-color-2 fat-width h-64 rounded-md border-2 border-white">
          <p className="px-8 py-6 text-xl text-white">
            Your Tailwind Code Goes Here.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-2xl text-white">Level Five</p>

          <section className="fat-width-2 h-64 rounded-md bg-yellow-400" />
        </div>

        {/* <p className="text-2xl text-white">
          Recreate designs. Practice and perfect tailwind.
        </p> */}
      </div>
    </div>
  );
}
