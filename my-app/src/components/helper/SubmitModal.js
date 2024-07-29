"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Link from "next/link";
import AssessTailwind from "./AssessTailwind";

import confetti from "canvas-confetti";

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

  const [compareSolution, setCompareSolution] = useState(false);

  let changeCompareSolution = () => {
    setCompareSolution(!compareSolution);
  };

  const [accuracy, setAccuracy] = useState();

  useEffect(() => {
    async function fetchAccuracy() {
      let response = await fetch("http://127.0.0.1:5000/tailwindAccuracy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          level: parseInt(nextLevel) - 1,
          userSolution: userSolution,
        }),
      });
      let data = await response.json();
      setAccuracy(data);

      console.log(data);
    }
    fetchAccuracy();
  }, [userSolution, nextLevel]);

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
          <div className="flex min-h-full w-full items-center justify-center p-4">
            {!compareSolution && (
              <DialogPanel className="data-[closed]:transform-[scale(95%)] flex w-7/12 flex-col gap-5 rounded-xl bg-white/5 p-8 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0">
                <DialogTitle
                  as="h3"
                  className="text-3xl font-medium text-white"
                >
                  Level One
                </DialogTitle>

                <div className="flex justify-between">
                  <section className="flex w-3/4 flex-col gap-5 xl:w-1/2">
                    <p className="text-xl text-white">Classes Used:</p>

                    <ul className="flex max-h-40 list-disc flex-col gap-3 overflow-scroll pl-4 text-white">
                      <AssessTailwind userSolution={userSolution} />
                    </ul>
                  </section>

                  <section className="flex flex-col gap-8 sm:w-auto xl:w-1/3">
                    <div className="flex flex-col gap-2">
                      <p className="text-wrap text-xl text-white">
                        Time: {Math.floor(time / 60)} min {time % 60} sec
                      </p>
                      <p className="text-wrap text-xl text-white">
                        Accuracy: {accuracy && accuracy.accuracy.toFixed(2)}%
                      </p>
                    </div>

                    <p
                      className="text-md max-w-48 rounded-md border-2 border-white bg-blue-500 px-4 py-3 text-center font-bold text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
                      onClick={() => changeCompareSolution()}
                    >
                      Compare Solution
                    </p>
                    <Link href={"../levels/level" + nextLevel}>
                      <p className="text-md max-w-48 rounded-md border-2 border-white bg-orange-500 px-4 py-3 text-center font-bold text-white transition duration-200 ease-in-out hover:scale-105">
                        Next Level
                      </p>
                    </Link>
                  </section>
                </div>
              </DialogPanel>
            )}

            {compareSolution && (
              <DialogPanel className="data-[closed]:transform-[scale(95%)] flex w-7/12 flex-col rounded-xl border border-white/25 bg-gray-900/80 backdrop-blur-2xl data-[closed]:opacity-0">
                <section className="flex items-center justify-between border-b border-white/25 px-3 py-2">
                  <p className="text-xl text-white">
                    Level {nextLevel - 1} - Compare Solution
                  </p>
                  <p
                    className="text-md rounded-lg border border-white/25 px-2 py-1 text-center text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer hover:border-red-600 hover:text-red-600"
                    onClick={() => changeCompareSolution()}
                  >
                    Back
                  </p>
                </section>
                <section className="flex">
                  <div className="flex h-80 w-1/2 flex-col justify-between border-r border-white/25 p-3">
                    <p className="text-md max-h-64 overflow-auto text-white">
                      {userSolution}
                    </p>
                    <p className="text-md text-white">
                      Characters Used: {userSolution.length}
                    </p>
                  </div>
                  <div className="flex h-80 w-1/2 flex-col justify-between gap-6 px-5 py-3">
                    <p className="text-md overflow-auto text-white">
                      {levelSolution}
                    </p>
                    <p className="text-md text-white">
                      Characters Used: {levelSolution.length}
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
