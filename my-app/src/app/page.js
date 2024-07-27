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

  // Puppeteer();

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center gap-40 sm:gap-28">
      {/* radial gradient background for hero */}
      <div className="radial-gradient-absolute radial-gradient-height radial-gradient-width" />

      <SquareBackground />

      <header className="mb-4 mt-36 flex w-9/12 flex-col items-center gap-10 sm:mt-20 sm:w-11/12">
        <p className="w-5/6 text-center text-6xl font-bold text-white sm:text-4xl">
          Getting The Hang of Tailwind Starts Today.
        </p>

        <p className="w-3/4 text-center text-3xl text-white sm:text-lg">
          Tailwind Practice is the most hands-on experience to learning tailwind
          you could ever ask for.
        </p>

        {/* note that the link in the ipad view is not clickable for the entire container */}
        <section className="flex items-center justify-center gap-10 sm:flex-col lg:flex-row">
          <Link
            href="/levels/level1"
            className="flex items-center justify-center rounded-md bg-blue-500 lg:h-16 lg:w-48"
          >
            <p className="relative z-10 text-xl font-bold text-white transition duration-200 ease-in-out hover:scale-105 sm:px-5 sm:py-3 sm:text-base sm:font-medium lg:px-0 lg:py-0 lg:text-center">
              Get Started
            </p>
          </Link>

          <Link
            href="https://www.patreon.com/LarryLe"
            className="flex items-center justify-center rounded-md bg-orange-500 lg:h-16 lg:w-48"
          >
            <p className="relative z-10 text-xl font-bold text-white transition duration-200 ease-in-out hover:scale-105 sm:px-5 sm:py-3 sm:text-base sm:font-medium lg:px-0 lg:py-0 lg:text-center">
              Support my project on Patreon
            </p>
          </Link>
        </section>
      </header>

      <div className="lg:space-between relative flex w-10/12 flex-wrap justify-between sm:gap-10 lg:flex-row lg:gap-0">
        <div className="primary-color-2 fat-width h-56 rounded-lg border-2 border-white sm:h-40 sm:w-full lg:w-64">
          <p className="px-8 py-6 text-xl text-white">
            Your Tailwind Code Goes Here.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:mt-0 lg:w-1/2">
          <p className="text-2xl text-white">Level Five</p>

          <section className="fat-width-2 flex h-80 flex-col gap-8 rounded-lg bg-yellow-400 p-5 sm:h-full sm:w-full sm:gap-5">
            <h1 className="text-2xl text-red-700 sm:text-2xl">
              Chinese Restaurant Menu
            </h1>

            <div className="flex gap-10 sm:flex-col sm:gap-5">
              <section className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h2 className="text-2xl text-red-700 sm:text-lg">
                    Main Course
                  </h2>
                  <hr className="rounded-md border-2 border-red-700" />
                </div>

                <article className="flex sm:gap-3">
                  <div>
                    <p className="text-xl text-red-700 sm:text-lg">
                      Char Siu Ricebowl
                    </p>
                    <p className="text-sm text-red-700 sm:text-sm">
                      Char Siu with delicious mushroom topping
                    </p>
                  </div>

                  <p className="text-xl text-red-700 sm:text-lg">$6.99</p>
                </article>

                <article className="space-between flex sm:gap-3">
                  <div>
                    <p className="text-xl text-red-700 sm:text-lg">
                      Fried Kwetiauw
                    </p>
                    <p className="text-sm text-red-700">
                      Fried Kwetiauw, served with special spices and fried eggs
                    </p>
                  </div>

                  <p className="text-xl text-red-700 sm:text-lg">$9.99</p>
                </article>
              </section>

              <section className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h2 className="text-2xl text-red-700 sm:text-lg">
                    Special Menu
                  </h2>
                  <hr className="rounded-md border-2 border-red-700" />
                </div>

                <article className="space-between flex sm:gap-3">
                  <div>
                    <p className="text-xl text-red-700 sm:text-lg">Dimsum</p>
                    <p className="text-sm text-red-700">
                      Dim sum containing fresh and tasty seafood
                    </p>
                  </div>

                  <p className="text-xl text-red-700 sm:text-lg">$7.99</p>
                </article>

                <article className="space-between flex sm:gap-3">
                  <div>
                    <p className="text-2xl text-red-700 sm:text-lg">
                      Spring Rolls
                    </p>
                    <p className="text-sm text-red-700">
                      Spring rolls with our fresh toppings and savory seasoning
                    </p>
                  </div>

                  <p className="text-xl text-red-700 sm:text-lg">$7.99</p>
                </article>
              </section>
            </div>
          </section>
        </div>

        <p
          className="absolute bottom-20 max-w-96 text-3xl text-white opacity-0 sm:static lg:absolute lg:bottom-36 lg:w-64 lg:text-2xl"
          ref={exampOneRef}
        >
          Recreate designs. Practice and perfect tailwind.
        </p>
      </div>

      <div className="primary-color-3 flex w-full flex-col items-center justify-center gap-10 py-24">
        <p
          className="ml-32 text-4xl text-white opacity-0 sm:ml-0 sm:text-2xl"
          ref={exampTwoPrtOneRef}
        >
          Level Up. Review Quickly.
        </p>

        <section className="primary-color-4 ml-32 flex w-9/12 flex-col gap-6 rounded-2xl border-2 border-white pb-20 pl-10 pt-10 sm:ml-0 sm:w-10/12 sm:items-center sm:justify-center sm:p-0 sm:pb-5 sm:pt-5">
          <p className="text-2xl text-white sm:w-10/12 sm:text-lg">Level 5</p>

          <div className="flex gap-48 sm:w-10/12 sm:flex-col sm:gap-12">
            <section
              className="flex flex-col gap-5 opacity-0"
              ref={exampTwoPrtTwoRef}
            >
              <p className="text-xl text-white sm:text-lg">
                Classes Your Code Used:
              </p>

              <div>
                <ul className="list-disc pl-8 sm:pl-4">
                  <li className="text-base text-white">font-size (text-3xl)</li>
                  <li className="text-base text-white">
                    background (bg-yellow-600)
                  </li>
                  <li className="text-base text-white">width (w-full)</li>
                  <li className="text-base text-white">
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
                  <li className="text-xl text-white sm:text-base">
                    Time taken: 9 minutes, 36 seconds
                  </li>
                  <li className="text-xl text-white sm:text-base">
                    Accuracy: 99.8%
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:gap-0">
                <p className="w-56 cursor-default rounded-lg border-2 border-white bg-blue-500 px-5 py-4 text-center text-xl font-bold text-white transition duration-200 ease-in-out hover:scale-105 sm:w-28 sm:px-3 sm:py-2 sm:text-base sm:font-medium">
                  Your Code
                </p>
                <p className="w-56 cursor-default rounded-lg border-2 border-white bg-orange-500 px-5 py-4 text-center text-xl font-bold text-white transition duration-200 ease-in-out hover:scale-105 sm:w-28 sm:px-3 sm:py-2 sm:text-base sm:font-medium">
                  Sample Solution
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>

      {/* position relative means it's relative to where it was originally supposed to be */}
      <div className="relative bottom-16 flex w-full flex-col items-center justify-center gap-24">
        <section className="radial-gradient-absolute-2 radial-gradient-height radial-gradient-width" />

        <section className="flex flex-col gap-5 sm:w-10/12 md:items-center">
          <p className="text-center text-5xl text-white sm:text-3xl">
            Documentation on file
          </p>
          <p className="text-center text-2xl text-white sm:text-xl md:w-10/12">
            so there&apos;s no need to constantly switch tabs
          </p>
        </section>

        <section className="flex w-10/12 justify-between sm:flex-col sm:gap-10 md:gap-16">
          <div className="flex w-full flex-col gap-5">
            <section
              className="primary-color-2 h-72 w-full rounded-xl border-2 border-white pl-10 pt-10 opacity-0 sm:h-48 sm:pl-8 sm:pt-8 md:pl-5 md:pt-5"
              ref={exampThrPrtOneRef}
            >
              <p className="h-48 text-xl text-white">
                &lt;p class=&quot;
                <span className="text-blue-400">was-it-width-10?</span>
                &quot;&gt;Hello World&lt;/p&gt;
              </p>
            </section>

            <section className="flex gap-5">
              <p className="w-40 cursor-default rounded-xl bg-blue-500 px-5 py-3 text-center text-xl text-white transition duration-200 ease-in-out hover:scale-105">
                Docs
              </p>
              <p className="w-40 cursor-default rounded-xl bg-orange-500 px-5 py-3 text-center text-xl text-white transition duration-200 ease-in-out hover:scale-105">
                Submit
              </p>
            </section>
          </div>

          <div
            className="h-72 w-6/12 rounded-xl bg-gray-300 opacity-0 sm:h-48 sm:w-full"
            ref={exampThrPrtTwoRef}
          >
            <p className="pl-10 pt-10 text-xl text-black sm:pl-8 sm:pt-8">
              Hello World
            </p>
          </div>
        </section>
      </div>

      <div className="mb-5 flex w-10/12 justify-between sm:gap-1 md:gap-2">
        <p className="text-lg text-white">
          ©2024 Larry Le All Rights Reserved
        </p>

        <section className="flex gap-10 sm:flex-col sm:gap-3">
          <Link href="/levels/level1">
            <p className="text-lg text-white transition duration-200 ease-in-out hover:-translate-y-1">
              Get Started
            </p>
          </Link>
          <Link href="/levels/level-select">
            <p className="text-lg text-white transition duration-200 ease-in-out hover:-translate-y-1">
              Level Select
            </p>
          </Link>
          <Link href="#">
            <p className="text-lg text-white transition duration-200 ease-in-out hover:-translate-y-1">
              Leaderboards
            </p>
          </Link>
          <Link href="https://www.patreon.com/LarryLe">
            <p className="text-lg text-white transition duration-200 ease-in-out hover:-translate-y-1">
              Patreon
            </p>
          </Link>
        </section>
      </div>
    </div>
  );
}
