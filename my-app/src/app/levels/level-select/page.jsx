"use client";

import React from "react";
import Navigation from "../../../components/Navigation";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-16">
        <Navigation />

        <div className="flex w-10/12 flex-col justify-center gap-16">
          <p className="text-2xl text-white xl:text-4xl">Level Select:</p>

          <section className="xl:level-height relative grid w-full grid-cols-3 gap-10 lg:gap-20">
            <div className="flex flex-col items-center gap-4 xl:absolute">
              <section className="relative h-16 w-16">
                {/* sometimes certain positionings can take precident over others, like top-8 having priority over bottom-18. in these situtions set one of them to auto so it's relative to where it's supposed to be again */}
                <div className="level-radial-gradient-background-blue absolute -left-4 -top-2 -z-10 h-20 w-24 xl:-bottom-6 xl:-left-8 xl:top-auto xl:h-28 xl:w-32" />

                <Link
                  className="flex h-full w-full items-center justify-center rounded-lg border-4 border-white bg-blue-900 transition duration-200 ease-in-out hover:scale-105"
                  href="/levels/level-1"
                >
                  <p className="text-2xl font-bold text-white">1</p>
                </Link>
              </section>

              <p className="hidden text-center text-2xl text-white lg:block lg:text-xl">
                The Tryouts
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 xl:absolute xl:left-80 xl:top-20">
              <section className="relative h-16 w-16">
                <div className="level-radial-gradient-background-blue absolute -left-4 -top-2 -z-10 h-20 w-24 xl:-bottom-6 xl:-left-8 xl:top-auto xl:h-28 xl:w-32" />

                <Link
                  className="flex h-full w-full items-center justify-center rounded-lg border-4 border-white bg-blue-900 transition duration-200 ease-in-out hover:scale-105"
                  href="/levels/level-2"
                >
                  <p className="text-2xl font-bold text-white">2</p>
                </Link>
              </section>

              <p className="hidden text-center text-2xl text-white lg:block lg:text-xl">
                Paint the Town Red
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 xl:absolute xl:right-1/3 xl:top-8">
              <section className="relative h-16 w-16">
                <div className="level-radial-gradient-background-blue absolute -left-4 -top-2 -z-10 h-20 w-24 xl:-bottom-6 xl:-left-8 xl:top-auto xl:h-28 xl:w-32" />

                <Link
                  className="flex h-full w-full items-center justify-center rounded-lg border-4 border-white bg-blue-900 transition duration-200 ease-in-out hover:scale-105"
                  href="/levels/level-3"
                >
                  <p className="text-2xl font-bold text-white">3</p>
                </Link>
              </section>

              <p className="hidden text-center text-2xl text-white lg:block lg:text-xl">
                Twitter Profile
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 xl:absolute xl:right-0 xl:top-1/3">
              <section className="relative h-16 w-16">
                <div className="level-radial-gradient-background-blue absolute -left-4 -top-2 -z-10 h-20 w-24 xl:-bottom-6 xl:-left-8 xl:top-auto xl:h-28 xl:w-32" />

                <Link
                  className="flex h-full w-full items-center justify-center rounded-lg border-4 border-white bg-blue-900 transition duration-200 ease-in-out hover:scale-105"
                  href="/levels/level-4"
                >
                  <p className="text-2xl font-bold text-white">4</p>
                </Link>
              </section>

              <p className="hidden text-center text-2xl text-white lg:block lg:text-xl">
                Zombo.com
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 xl:absolute xl:bottom-0 xl:left-1/2">
              <section className="relative h-16 w-16">
                <div className="level-radial-gradient-background-blue absolute -left-4 -top-2 -z-10 h-20 w-24 xl:-bottom-6 xl:-left-8 xl:top-auto xl:h-28 xl:w-32" />

                <Link
                  className="flex h-full w-full items-center justify-center rounded-lg border-4 border-white bg-blue-900 transition duration-200 ease-in-out hover:scale-105"
                  href="/levels/level-5"
                >
                  <p className="text-2xl font-bold text-white">5</p>
                </Link>
              </section>

              <p className="hidden text-center text-2xl text-white lg:block lg:text-xl">
                Chinese Menu
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 xl:absolute xl:bottom-12 xl:left-40">
              <section className="relative h-16 w-16">
                <div className="level-radial-gradient-background-orange absolute -left-4 -top-2 -z-10 h-20 w-24 xl:-bottom-6 xl:-left-8 xl:top-auto xl:h-28 xl:w-32" />

                <Link
                  className="flex h-full w-full items-center justify-center rounded-lg border-4 border-white bg-orange-500 transition duration-200 ease-in-out hover:scale-105"
                  href="/levels/final-challenge"
                >
                  <p className="text-2xl font-bold text-white">👑</p>
                </Link>
              </section>

              <p className="hidden text-center text-2xl text-white lg:block lg:text-xl">
                Final Challenge
              </p>
            </div>

            {/* map dashes #1 */}
            <article className="border-3 absolute left-36 top-8 hidden h-1 w-6 rotate-6 border-white bg-white xl:block" />
            <article className="border-3 absolute left-52 top-12 hidden h-1 w-8 rotate-12 border-white bg-white xl:block" />
            <article className="border-3 absolute left-64 top-20 hidden h-1 w-7 rotate-45 border-white bg-white xl:block" />
            <article className="border-3 absolute left-80 top-28 hidden h-1 w-8 rotate-3 border-white bg-white xl:block" />
            {/* map dashes #2 */}
            <article className="border-3 left-144 absolute top-28 hidden h-1 w-6 -rotate-3 border-white bg-white xl:block" />
            <article className="border-3 left-169 absolute top-24 hidden h-1 w-12 -rotate-12 border-white bg-white xl:block" />
            <article className="border-3 left-181 absolute top-20 hidden h-1 w-12 -rotate-3 border-white bg-white 2xl:block" />
            {/* map dashes #3 */}
            <article className="border-3 absolute right-96 top-20 hidden h-1 w-10 rotate-3 border-white bg-white 2xl:block" />
            <article className="border-3 absolute right-72 top-24 hidden h-1 w-10 rotate-12 border-white bg-white xl:block" />
            <article className="border-3 absolute right-52 top-36 hidden h-1 w-10 rotate-45 border-white bg-white xl:block" />
            <article className="border-3 absolute right-36 top-48 hidden h-1 w-8 rotate-12 border-white bg-white xl:block" />
            {/* map dashes #4 */}
            <article className="border-3 -rotate-80 absolute bottom-48 right-12 hidden h-1 w-8 border-white bg-white xl:block" />
            <article className="border-3 absolute bottom-32 right-24 hidden h-1 w-8 -rotate-45 border-white bg-white xl:block" />
            <article className="border-3 absolute bottom-24 right-40 hidden h-1 w-12 -rotate-12 border-white bg-white xl:block" />
            <article className="border-3 absolute bottom-20 right-64 hidden h-1 w-16 -rotate-3 border-white bg-white xl:block" />
            <article className="border-3 right-85 bottom-18 absolute hidden h-1 w-12 border-white bg-white xl:block" />
            <article className="border-3 2xl:right-136 3xl:right-144 bottom-18 absolute hidden h-1 w-6 rotate-3 border-white bg-white 2xl:block" />
            {/* map dashes #5 */}
            <article className="border-3 left-172 3xl:bottom-18 absolute bottom-20 hidden h-1 w-10 rotate-12 border-white bg-white 3xl:block 3xl:rotate-6" />
            <article className="border-3 2xl:left-156 left-144 bottom-18 3xl:bottom-21 absolute hidden h-1 w-12 rotate-3 border-white bg-white xl:block" />
            <article className="border-3 2xl:left-128 left-100 bottom-22 absolute hidden h-1 w-12 border-white bg-white xl:block xl:rotate-12 3xl:rotate-0" />
            <article className="border-3 absolute bottom-28 left-80 hidden h-1 w-12 rotate-12 border-white bg-white xl:block" />
          </section>
        </div>
      </div>
    </>
  );
}
