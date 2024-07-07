"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Link from "next/link";

export default function Submit({
  submitOpen,
  changeSubmitOpen,
  nextLevel,
  time,
  changeIsPaused,
}) {
  // When the modal is open, the timer will pause
  useEffect(() => {
    if (submitOpen) changeIsPaused();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitOpen]);

  const [compareSolution, setCompareSolution] = useState(false);

  let changeCompareSolution = () => {
    setCompareSolution(!compareSolution);
  };

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
            {/*   <DialogPanel className="data-[closed]:transform-[scale(95%)] flex w-7/12 flex-col gap-5 rounded-xl bg-white/5 p-8 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0">
              <DialogTitle as="h3" className="text-3xl font-medium text-white">
                Level One
              </DialogTitle>

              <div className="flex w-full justify-between">
                <section className="flex flex-col gap-5">
                  <p className="text-xl text-white">Classes Used:</p>

                  <ul className="flex max-h-40 list-disc flex-col gap-3 overflow-scroll pl-4 text-white">
                    <li>
                      <p className="text-lg">
                        font-size (i.e. you used text-3xl)
                      </p>
                    </li>
                    <li>
                      <p className="text-lg">
                        background (i.e. you used bg-yellow-600)
                      </p>
                    </li>
                    <li>
                      <p className="text-lg">width (i.e. you used w-full)</p>
                    </li>
                    <li>
                      <p className="text-lg">
                        max-height (i.e. you used max-h-64)
                      </p>
                    </li>
                  </ul>
                </section>

                <section className="flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <p className="text-xl text-white">Time taken: {time}s</p>
                    <p className="text-xl text-white">Accuracy: 99.8%</p>
                  </div>

                  <p
                    className="text-md max-w-48 rounded-md border-2 border-white bg-blue-500 px-4 py-3 text-center font-bold text-white"
                    onClick={() => changeCompareSolution()}
                  >
                    Compare Solution
                  </p>
                  <Link href={"../levels/level" + nextLevel}>
                    <p className="text-md max-w-48 rounded-md border-2 border-white bg-orange-500 px-4 py-3 text-center font-bold text-white">
                      Next Level
                    </p>
                  </Link>
                </section>
              </div>
            </DialogPanel> */}

            {/* I'll use useState to trigger the compare solutions modal */}
            <DialogPanel className="data-[closed]:transform-[scale(95%)] flex w-7/12 flex-col rounded-xl border border-white bg-white/5 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0">
              <section className="flex items-center justify-between border-b border-white px-3 py-2">
                <p className="text-xl text-white">
                  Level Five - Chinese Restuarant
                </p>
                <p className="text-md rounded-lg border border-white px-2 py-1 text-center text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer hover:border-red-600 hover:text-red-600">
                  Back
                </p>
              </section>
              <section className="flex w-full">
                <div className="flex min-h-72 w-1/2 flex-col justify-between border-r border-white p-3">
                  <p className="max-h-64 text-xl text-gray-500">Hello World.</p>
                  <p className="text-md text-gray-500">Characters Used: 235</p>
                </div>
                <div className="flex min-h-72 w-1/2 flex-col justify-between p-3">
                  <p className="max-h-64 text-xl text-gray-500">Hello World.</p>
                  <p className="text-md text-gray-500">Characters Used: 217</p>
                </div>
              </section>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <div className="index-0 z-5 absolute h-screen w-screen bg-black/50" />
    </>
  );
}
