"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import UseInView from "../components/hooks/UseInView.js";

import SquareBackground from "../components/helper/SquareBackground";
// import Puppeteer from "./Puppeteer.js";

export default function Page() {
  // Recreate designs. Practice and perfect tailwind.
  const exampOneRef = useRef();
  const exampTwoPrtOneRef = useRef();
  const exampTwoPrtTwoRef = useRef();
  const exampTwoPrtThrRef = useRef();
  const exampThrPrtOneRef = useRef();
  const exampThrPrtTwoRef = useRef();

  let exampOneInView = UseInView(exampOneRef, 1);
  let exampTwoPrtOneInView = UseInView(exampTwoPrtOneRef, 0.15);
  let exampTwoPrtTwoInView = UseInView(exampTwoPrtTwoRef, 0.45);
  let exampTwoPrtThrInView = UseInView(exampTwoPrtThrRef, 0.45);
  let exampThrPrtOneInView = UseInView(exampThrPrtOneRef, 0.15);
  let exampThrPrtTwoInView = UseInView(exampThrPrtTwoRef, 1);

  useEffect(() => {
    if (exampOneInView.isInView)
      exampOneRef.current.classList.add("appearFromBottom");

    if (exampTwoPrtOneInView.isInView)
      exampTwoPrtOneRef.current.classList.add("appear");

    if (exampTwoPrtTwoInView.isInView)
      exampTwoPrtTwoRef.current.classList.add("appear");

    if (exampTwoPrtThrInView.isInView)
      exampTwoPrtThrRef.current.classList.add("appear");

    if (exampThrPrtOneInView.isInView)
      exampThrPrtOneRef.current.classList.add("appear");

    if (exampThrPrtTwoInView.isInView)
      exampThrPrtTwoRef.current.classList.add("appear");
  }, [
    exampOneInView,
    exampTwoPrtOneInView,
    exampTwoPrtTwoInView,
    exampTwoPrtThrInView,
    exampThrPrtOneInView,
    exampThrPrtTwoInView,
  ]);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center gap-40 sm:gap-28">
      {/* radial gradient background for hero */}
      <div className="radial-gradient-absolute 2xl:radial-gradient-absolute 2xl:radial-gradient-height sm:h-96 sm:w-full xl:top-0 xl:h-96 xl:w-5/6" />

      <SquareBackground />

      <header className="mb-4 flex flex-col items-center gap-10 sm:mt-20 sm:w-11/12 lg:w-9/12">
        <p className="w-5/6 text-center font-bold text-white sm:text-4xl xl:text-5xl 2xl:font-extrabold 2xl:leading-tight 3xl:w-9/12 3xl:text-6xl">
          Getting The Hang of Tailwind Starts Today.
        </p>

        <p className="w-3/4 text-center text-white sm:text-lg xl:w-2/3 xl:text-xl 2xl:text-3xl">
          Tailwind Llama is the most hands-on experience to learning tailwind
          you could ever ask for.
        </p>

        {/* note that the link in the ipad view is not clickable for the entire container */}
        <section className="flex items-center justify-center gap-10 sm:flex-col lg:flex-row">
          <Link
            href="/levels/level1"
            className="flex items-center justify-center rounded-md bg-blue-500 transition duration-200 ease-in-out hover:scale-105 sm:h-auto sm:w-auto lg:h-16 lg:w-48 xl:h-12 xl:w-40 2xl:h-auto 2xl:w-auto 3xl:h-auto 3xl:w-auto"
          >
            <p className="xl:leading-moderate-loose lg:leading-very-loose relative z-10 text-xl font-bold text-white sm:px-5 sm:py-3 sm:text-base sm:font-medium lg:h-full lg:w-full lg:px-0 lg:py-0 lg:text-center 2xl:px-6 2xl:py-5 2xl:text-lg 2xl:font-bold 2xl:leading-none 3xl:px-5 3xl:py-4 3xl:text-xl">
              Get Started
            </p>
          </Link>

          <Link
            href="https://www.patreon.com/LarryLe"
            className="flex items-center justify-center rounded-md bg-orange-500 transition duration-200 ease-in-out hover:scale-105 sm:h-auto sm:w-auto lg:h-16 lg:w-64 xl:h-12 xl:w-64 2xl:h-auto 2xl:w-auto 3xl:h-auto 3xl:w-auto"
          >
            <p className="xl:leading-moderate-loose lg:leading-very-loose relative z-10 text-xl font-bold text-white sm:px-5 sm:py-3 sm:text-base sm:font-medium lg:h-full lg:w-full lg:px-0 lg:py-0 lg:text-center 2xl:px-6 2xl:py-5 2xl:text-lg 2xl:font-bold 2xl:leading-none 3xl:px-5 3xl:py-4 3xl:text-xl">
              Support my project on Patreon
            </p>
          </Link>
        </section>
      </header>

      <div className="lg:space-between relative flex w-10/12 flex-wrap justify-between sm:gap-10 lg:flex-row lg:gap-0 xl:mt-8 2xl:mt-20">
        <div className="primary-color-2 fat-width 2xl:fat-width-1 h-56 rounded-lg border-2 border-white sm:h-40 sm:w-full lg:w-64 xl:w-96 2xl:h-56">
          <p className="px-8 py-6 text-xl text-white 3xl:text-2xl">
            Your Tailwind Code Goes Here.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:mt-0 lg:w-1/2 xl:mt-5">
          <p className="text-2xl text-white">Level Five</p>

          <section className="fat-width-2 flex h-80 flex-col gap-8 rounded-lg bg-yellow-400 p-5 sm:h-full sm:w-full sm:gap-5 xl:h-72 2xl:h-80">
            <h1 className="text-2xl text-red-700 sm:text-2xl lg:text-xl 2xl:text-2xl">
              Chinese Restaurant Menu
            </h1>

            <div className="flex gap-10 sm:flex-col sm:gap-5 xl:flex-row 2xl:gap-10">
              <section className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h2 className="text-2xl text-red-700 sm:text-lg lg:text-base 2xl:text-lg 3xl:text-xl">
                    Main Course
                  </h2>
                  <hr className="rounded-md border-2 border-red-700" />
                </div>

                <article className="flex sm:gap-3 lg:justify-between">
                  <div>
                    <p className="text-xl text-red-700 sm:text-lg lg:text-base 2xl:text-lg 3xl:text-xl">
                      Char Siu Ricebowl
                    </p>
                    <p className="text-sm text-red-700 sm:text-sm lg:text-xs 3xl:text-sm">
                      Char Siu with delicious mushroom topping
                    </p>
                  </div>

                  <p className="text-xl text-red-700 sm:text-lg lg:text-base 2xl:text-lg 3xl:text-xl">
                    $6.99
                  </p>
                </article>

                <article className="space-between flex sm:gap-3 lg:justify-between">
                  <div>
                    <p className="text-xl text-red-700 sm:text-lg lg:text-base 2xl:text-lg 3xl:text-xl">
                      Fried Kwetiauw
                    </p>
                    <p className="text-sm text-red-700 sm:text-sm lg:text-xs 3xl:text-sm">
                      Fried Kwetiauw, served with special spices and fried eggs
                    </p>
                  </div>

                  <p className="text-xl text-red-700 sm:text-lg lg:text-base 2xl:text-lg 3xl:text-xl">
                    $9.99
                  </p>
                </article>
              </section>

              <section className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h2 className="text-2xl text-red-700 sm:text-lg lg:text-base 2xl:text-lg 3xl:text-xl">
                    Special Menu
                  </h2>
                  <hr className="rounded-md border-2 border-red-700" />
                </div>

                <article className="space-between flex sm:gap-3 lg:justify-between">
                  <div>
                    <p className="text-xl text-red-700 sm:text-lg lg:text-base 2xl:text-lg 3xl:text-xl">
                      Dimsum
                    </p>
                    <p className="text-sm text-red-700 sm:text-sm lg:text-xs 3xl:text-sm">
                      Dim sum containing fresh and tasty seafood
                    </p>
                  </div>

                  <p className="text-xl text-red-700 sm:text-lg lg:text-base 2xl:text-lg 3xl:text-xl">
                    $7.99
                  </p>
                </article>

                <article className="space-between flex sm:gap-3 lg:justify-between">
                  <div>
                    <p className="text-2xl text-red-700 sm:text-lg lg:text-base 2xl:text-lg 3xl:text-xl">
                      Spring Rolls
                    </p>
                    <p className="text-sm text-red-700 sm:text-sm lg:text-xs 3xl:text-sm">
                      Spring rolls with our fresh toppings and savory seasoning
                    </p>
                  </div>

                  <p className="text-xl text-red-700 sm:text-lg lg:text-base 2xl:text-lg 3xl:text-xl">
                    $7.99
                  </p>
                </article>
              </section>
            </div>
          </section>
        </div>

        <p
          className="absolute bottom-20 max-w-96 text-3xl text-white opacity-0 sm:static lg:absolute lg:bottom-36 lg:w-64 lg:text-2xl xl:bottom-16 2xl:bottom-0 2xl:text-3xl"
          ref={exampOneRef}
        >
          Recreate designs. Practice and perfect tailwind.
        </p>
      </div>

      <div className="primary-color-3 flex w-full flex-col justify-center gap-10 py-24 sm:items-center xl:items-start">
        <p
          className="ml-32 text-4xl text-white opacity-0 sm:ml-0 sm:text-2xl xl:ml-28 2xl:text-4xl"
          ref={exampTwoPrtOneRef}
        >
          Level Up. Review Quickly.
        </p>

        <section className="primary-color-4 ml-32 flex w-9/12 flex-col gap-6 rounded-2xl border-2 border-white pb-20 pl-10 pt-10 sm:ml-0 sm:w-10/12 sm:items-center sm:justify-center sm:p-0 sm:pb-5 sm:pt-5 lg:h-80 xl:ml-28 xl:w-8/12 2xl:h-auto 2xl:w-9/12 2xl:pb-16">
          <p className="text-2xl text-white sm:w-10/12 sm:text-lg 2xl:text-2xl">
            Level 5
          </p>

          <div className="flex gap-48 sm:w-10/12 sm:flex-col sm:gap-12 lg:flex-row xl:gap-48 2xl:gap-40">
            <section
              className="flex flex-col gap-5 opacity-0"
              ref={exampTwoPrtTwoRef}
            >
              <p className="text-xl text-white sm:text-lg 2xl:text-xl">
                Classes Your Code Used:
              </p>

              <div>
                <ul className="list-disc pl-8 sm:pl-4">
                  <li className="text-base text-white 2xl:text-lg">
                    font-size (text-3xl)
                  </li>
                  <li className="text-base text-white 2xl:text-lg">
                    background (bg-yellow-600)
                  </li>
                  <li className="text-base text-white 2xl:text-lg">
                    width (w-full)
                  </li>
                  <li className="text-base text-white 2xl:text-lg">
                    max-height (max-h-64)
                  </li>
                </ul>
              </div>
            </section>

            <section
              className="flex flex-col gap-8 opacity-0"
              ref={exampTwoPrtThrRef}
            >
              <div>
                <ul>
                  <li className="text-xl text-white sm:text-base 2xl:text-xl">
                    Time taken: 9 minutes, 36 seconds
                  </li>
                  <li className="text-xl text-white sm:text-base 2xl:text-xl">
                    Accuracy: 99.8%
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:gap-0 lg:flex-col lg:gap-5">
                <p className="w-56 cursor-default rounded-lg border-2 border-white bg-blue-500 px-5 py-4 text-center text-xl font-bold text-white transition duration-200 ease-in-out hover:scale-105 sm:w-28 sm:px-3 sm:py-2 sm:text-base sm:font-medium lg:w-40 lg:border lg:font-semibold 2xl:w-48 2xl:border-2 2xl:py-3 2xl:text-lg">
                  Your Code
                </p>
                <p className="w-56 cursor-default rounded-lg border-2 border-white bg-orange-500 px-5 py-4 text-center text-xl font-bold text-white transition duration-200 ease-in-out hover:scale-105 sm:w-28 sm:px-3 sm:py-2 sm:text-base sm:font-medium lg:w-40 lg:border lg:font-semibold 2xl:w-48 2xl:border-2 2xl:py-3 2xl:text-lg">
                  Sample Solution
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>

      {/* position relative means it's relative to where it was originally supposed to be */}
      <div className="relative bottom-16 flex w-full flex-col items-center justify-center gap-24">
        <section className="radial-gradient-absolute-2 lg:radial-gradient-width 3xl:radial-gradient-height sm:h-1/2 sm:w-full md:h-full md:w-3/4 lg:h-full" />

        <section className="flex flex-col gap-5 sm:w-10/12 md:items-center">
          <p className="xl:text-4-5xl text-center text-5xl text-white sm:text-3xl 2xl:text-5xl">
            Documentation on file
          </p>
          <p className="text-center text-2xl text-white sm:text-xl md:w-10/12 2xl:text-2xl">
            so there&apos;s no need to constantly switch tabs
          </p>
        </section>

        <section className="flex w-10/12 justify-between sm:flex-col sm:gap-10 md:gap-16 lg:flex-row lg:gap-12 xl:gap-28">
          <div className="flex w-full flex-col gap-5 xl:gap-8">
            <section
              className="primary-color-2 h-72 w-full rounded-xl border-2 border-white pl-10 pt-10 opacity-0 sm:h-48 sm:w-full sm:pl-8 sm:pt-8 md:pl-5 md:pt-5 lg:w-80 xl:w-full 2xl:h-64"
              ref={exampThrPrtOneRef}
            >
              <p className="h-48 text-xl text-white lg:h-28 lg:text-lg 2xl:text-xl">
                &lt;p class=&quot;
                <span className="text-blue-400">was-it-width-10?</span>
                &quot;&gt;Hello World&lt;/p&gt;
              </p>
            </section>

            <section className="flex gap-5">
              <p className="w-40 cursor-default rounded-xl bg-blue-500 px-5 py-3 text-center text-xl text-white transition duration-200 ease-in-out hover:scale-105 lg:w-36 lg:px-3 lg:py-2 lg:text-lg 2xl:px-5 2xl:py-3">
                Docs
              </p>
              <p className="w-40 cursor-default rounded-xl bg-orange-500 px-5 py-3 text-center text-xl text-white transition duration-200 ease-in-out hover:scale-105 lg:w-36 lg:px-3 lg:py-2 lg:text-lg 2xl:px-5 2xl:py-3">
                Submit
              </p>
            </section>
          </div>

          <div
            className="h-72 w-6/12 rounded-xl bg-gray-300 opacity-0 sm:h-48 sm:w-full 2xl:h-64"
            ref={exampThrPrtTwoRef}
          >
            <p className="pl-10 pt-10 text-xl text-black sm:pl-8 sm:pt-8">
              Hello World
            </p>
          </div>
        </section>
      </div>

      <div className="mb-5 flex w-10/12 justify-between sm:gap-1 md:gap-2 lg:justify-between xl:mb-0 2xl:mb-5">
        <p className="text-lg text-white 2xl:text-xl">
          ©2024 Larry Le All Rights Reserved
        </p>

        <section className="flex gap-10 sm:flex-col sm:gap-3 lg:grid lg:grid-cols-2 lg:justify-end xl:flex xl:flex-row xl:gap-10 2xl:gap-8">
          <Link href="/levels/level1">
            <p className="text-lg text-white transition duration-200 ease-in-out hover:-translate-y-1 2xl:text-xl">
              Get Started
            </p>
          </Link>
          <Link href="/levels/level-select">
            <p className="text-lg text-white transition duration-200 ease-in-out hover:-translate-y-1 2xl:text-xl">
              Level Select
            </p>
          </Link>
          <Link href="/leaderboard">
            <p className="text-lg text-white transition duration-200 ease-in-out hover:-translate-y-1 2xl:text-xl">
              Leaderboards
            </p>
          </Link>
          <Link href="https://www.patreon.com/LarryLe">
            <p className="text-lg text-white transition duration-200 ease-in-out hover:-translate-y-1 2xl:text-xl">
              Patreon
            </p>
          </Link>
        </section>
      </div>
    </div>
  );
}
