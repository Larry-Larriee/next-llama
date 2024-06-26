import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React from "react";
import Link from "next/link";
import next from "next";

export default function Submit({ submitOpen, changeSubmitOpen, nextLevel }) {
  return (
    <>
      {/* onClose changes the state when the user clicks outside the modal, like another way to close if the user does not click the close button */}
      <Dialog
        open={submitOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={changeSubmitOpen}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full w-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="data-[closed]:transform-[scale(95%)] flex w-7/12 flex-col gap-5 rounded-xl bg-white/5 p-8 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
            >
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
                    <p className="text-xl text-white">
                      Time taken: 9 minutes, 36 seconds
                    </p>
                    <p className="text-xl text-white">Accuracy: 99.8%</p>
                  </div>

                  <Link href="#">
                    <p className="text-md max-w-48 rounded-md border-2 border-white bg-blue-500 px-4 py-3 text-center font-bold text-white">
                      Compare Solution
                    </p>
                  </Link>
                  <Link href={"../levels/level" + nextLevel}>
                    <p className="text-md max-w-48 rounded-md border-2 border-white bg-orange-500 px-4 py-3 text-center font-bold text-white">
                      Next Level
                    </p>
                  </Link>
                </section>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <div className="index-0 z-5 absolute h-screen w-screen bg-black/50" />
    </>
  );
}
