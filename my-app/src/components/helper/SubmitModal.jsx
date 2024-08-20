"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Link from "next/link";
import AssessTailwind from "./AssessTailwind.jsx";

import confetti from "canvas-confetti";
import UseNumberConversion from "../hooks/UseNumConversion";

export default function SubmitModal({
  submitOpen,
  changeSubmitOpen,
  nextLevel,
  time,
  changeIsPaused,
  levelSolution,
  userSolution,
}) {
  // When the modal is open, the timer will pause
  // Confetti will also fire lol
  useEffect(() => {
    if (submitOpen) changeIsPaused();

    confetti({
      spread: 125,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitOpen]);

  // scrolls the user to the top of their device when the modal is open (because h-full on mobile is not h-full on desktop)
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  const [compareSolution, setCompareSolution] = useState(false);

  let changeCompareSolution = () => {
    setCompareSolution(!compareSolution);
  };

  const [accuracy, setAccuracy] = useState();

  useEffect(() => {
    async function fetchAccuracy() {
      let response = await fetch(
        "https://next-llama-4s1x.onrender.com/tailwindAccuracy",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // for the final-challenge, this is going to return NaN (sending it as JSON will conver it to null which JSON can handle)
            level: parseInt(nextLevel) - 1,
            userSolution: userSolution,
          }),
        },
      );

      let data = await response.json();
      setAccuracy(data.accuracy);

      return new Promise((resolve) => resolve(data.accuracy));
    }

    async function updateLeaderboard() {
      // local variable for accuracy so I don't need to add it as a dependency
      let accuracy = await fetchAccuracy();

      fetch("https://next-llama-4s1x.onrender.com/editLeaderboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          tailwindLevel: parseInt(nextLevel) - 1,
          time: time,
          tailwindCode: userSolution,
          date: new Date().toLocaleDateString(),
          accuracy: accuracy,
          characters: userSolution.length,
        }),
      }).then((response) => response.json().then((data) => console.log(data)));
    }

    if (submitOpen === true) {
      scrollToTop();
      updateLeaderboard();
    }
  }, [submitOpen, nextLevel, time, userSolution]);

  return (
    <>
      {/* onClose changes the state when the user clicks outside the modal, like another way to close if the user does not click the close button */}
      <Dialog
        open={submitOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => {
          changeSubmitOpen();
          changeIsPaused();
        }}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full w-full items-center justify-center p-0 xl:p-4">
            {!compareSolution && (
              <DialogPanel className="data-[closed]:transform-[scale(95%)] primary-color-4 min-h-128 xl:min-h-90 flex w-10/12 flex-col gap-5 rounded-xl p-4 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0 xl:w-7/12 xl:p-8">
                <DialogTitle
                  as="h3"
                  className="text-3xl font-medium text-white"
                >
                  Level{" "}
                  {isNaN(parseInt(nextLevel))
                    ? UseNumberConversion(nextLevel)
                    : UseNumberConversion(parseInt(nextLevel) - 1)}
                </DialogTitle>

                <div className="flex flex-col justify-between gap-10 xl:flex-row">
                  <section className="order-2 flex flex-col gap-5 xl:order-1 xl:w-1/2">
                    <p className="text-xl text-white">Classes Used:</p>

                    <ul className="flex max-h-28 list-disc flex-col gap-3 overflow-auto pl-4 text-white xl:max-h-40">
                      <AssessTailwind userSolution={userSolution} />
                    </ul>
                  </section>

                  <section className="order-1 flex flex-row flex-wrap justify-between gap-5 sm:w-auto xl:order-2 xl:w-1/3 xl:flex-col xl:gap-8">
                    <div className="flex flex-col gap-2">
                      <p className="text-wrap text-xl text-white">
                        Time: {Math.floor(time / 60)} min {time % 60} sec
                      </p>
                      {accuracy ? (
                        <p className="text-wrap text-xl text-white">
                          Accuracy: {accuracy && accuracy.toFixed(2)}%
                        </p>
                      ) : (
                        <div className="flex items-center gap-2">
                          <p className="text-wrap text-xl text-white">
                            Accuracy:
                          </p>
                          <article className="primary-color-5 h-6 w-20 animate-pulse rounded-sm" />
                        </div>
                      )}
                    </div>

                    <article className="flex w-full justify-between gap-5 lg:flex-col">
                      <p
                        className="max-w-48 rounded-md border-2 border-white bg-blue-500 px-3 py-2 text-center text-sm font-bold text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer lg:h-10 xl:h-auto xl:px-4 xl:py-3 xl:text-base"
                        onClick={() => changeCompareSolution()}
                      >
                        Compare Solution
                      </p>
                      <Link
                        href={
                          isNaN(nextLevel)
                            ? nextLevel == "congrats"
                              ? "/congrats"
                              : "/levels/final-challenge"
                            : `/levels/level-${nextLevel}`
                        }
                      >
                        <p className="max-w-48 rounded-md border-2 border-white bg-orange-500 px-3 py-2 text-center text-sm font-bold text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer lg:h-10 xl:h-auto xl:px-4 xl:py-3 xl:text-base">
                          Next Level
                        </p>
                      </Link>
                    </article>
                  </section>
                </div>
              </DialogPanel>
            )}

            {compareSolution && (
              <DialogPanel className="data-[closed]:transform-[scale(95%)] xl:min-h-90 primary-color-4 min-h-128 flex w-10/12 flex-col gap-3 rounded-xl p-4 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0 xl:w-7/12 xl:p-8">
                <section className="flex items-center justify-between">
                  <p className="text-xl font-medium text-white xl:text-2xl 3xl:text-3xl">
                    Compare Solution
                  </p>
                  <p
                    className="rounded-md bg-indigo-500 px-3 py-1 text-center text-base text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer hover:border-red-600 hover:text-red-600"
                    onClick={() => changeCompareSolution()}
                  >
                    Back
                  </p>
                </section>
                <section className="flex gap-10 sm:flex-col xl:flex-row xl:gap-5">
                  <div className="flex flex-col gap-3 xl:h-56 xl:w-1/2">
                    <article>
                      <p className="text-base text-white">Your Code</p>
                      <p className="text-base text-white">
                        Characters Used: {userSolution.length}
                      </p>
                    </article>
                    <p className="max-h-28 overflow-auto text-lg text-white xl:max-h-fit">
                      {userSolution}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 xl:h-56 xl:w-1/2">
                    <article>
                      <p className="text-base text-white">Solution Code</p>
                      <p className="text-base text-white">
                        Characters Used: {levelSolution.length}
                      </p>
                    </article>

                    <p className="max-h-28 overflow-auto text-lg text-white xl:max-h-fit">
                      {levelSolution}
                    </p>
                  </div>
                </section>
              </DialogPanel>
            )}
          </div>
        </div>
      </Dialog>

      <div className="index-0 z-5 absolute h-screen w-screen bg-black/50" />
    </>
  );
}
