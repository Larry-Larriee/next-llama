"use client";

import React, { useRef, useEffect } from "react";
import Navigation from "../../../components/Navigation";
import Link from "next/link";

export default function Page() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const ref8 = useRef();
  const ref9 = useRef();
  const ref10 = useRef();
  const ref11 = useRef();
  const ref12 = useRef();
  const ref13 = useRef();
  const ref14 = useRef();
  const ref15 = useRef();
  const ref16 = useRef();
  const ref17 = useRef();
  const ref18 = useRef();
  const ref19 = useRef();
  const ref20 = useRef();
  const ref21 = useRef();

  let refs = [
    ref1,
    ref2,
    ref3,
    ref4,
    ref5,
    ref6,
    ref7,
    ref8,
    ref9,
    ref10,
    ref12,
    ref13,
    ref14,
    ref15,
    ref16,
    ref17,
    ref18,
    ref19,
    ref20,
    ref21,
  ];

  useEffect(() => {
    // play an animation on each dash with 200ms interval delays
    async function animateDashes() {
      for (let i = 0; i < refs.length; i++) {
        // The for loop will wait 200ms for the promise to resolve before moving to the next iteration and waiting another 200ms
        await new Promise((resolve) => {
          setTimeout(() => {
            if (refs[i].current === null) return;

            refs[i].current.classList.add("appear");
            // the reason you don't move resolve() outside the function is because the DOM will run the resolve function before the setTimout is completed
            resolve();
          }, 200);
        });
      }
    }

    animateDashes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex w-full flex-col items-center gap-16">
        <Navigation />

        <div className="flex w-10/12 flex-col justify-center gap-16">
          <p className="text-4xl text-white">Level Select:</p>

          <section className="level-height relative w-full">
            <div className="absolute flex flex-col items-center gap-4">
              <section className="relative h-16 w-16">
                <div className="level-radial-gradient-background-blue absolute -bottom-5 -left-8 -z-10 h-28 w-32" />

                <Link
                  className="flex h-full w-full items-center justify-center rounded-lg border-4 border-white bg-blue-900 transition duration-200 ease-in-out hover:scale-105"
                  href="/levels/level1"
                >
                  <p className="text-2xl font-bold text-white">1</p>
                </Link>
              </section>

              <p className="text-center text-2xl text-white">The Tryouts</p>
            </div>

            <div className="absolute left-80 top-20 flex flex-col items-center gap-4">
              <section className="relative h-16 w-16">
                <div className="level-radial-gradient-background-blue absolute -bottom-5 -left-8 -z-10 h-28 w-32" />

                <Link
                  className="flex h-full w-full items-center justify-center rounded-lg border-4 border-white bg-blue-900 transition duration-200 ease-in-out hover:scale-105"
                  href="/levels/level2"
                >
                  <p className="text-2xl font-bold text-white">2</p>
                </Link>
              </section>

              <p className="text-center text-2xl text-white">
                Paint the Town Red
              </p>
            </div>

            <div className="absolute right-1/3 top-8 flex flex-col items-center gap-4">
              <section className="relative h-16 w-16">
                <div className="level-radial-gradient-background-blue absolute -bottom-5 -left-8 -z-10 h-28 w-32" />

                <Link
                  className="flex h-full w-full items-center justify-center rounded-lg border-4 border-white bg-blue-900 transition duration-200 ease-in-out hover:scale-105"
                  href="/levels/level3"
                >
                  <p className="text-2xl font-bold text-white">3</p>
                </Link>
              </section>

              <p className="text-center text-2xl text-white">Twitter Profile</p>
            </div>

            <div className="absolute right-0 top-1/3 flex flex-col items-center gap-4">
              <section className="relative h-16 w-16">
                <div className="level-radial-gradient-background-blue absolute -bottom-5 -left-8 -z-10 h-28 w-32" />

                <Link
                  className="flex h-full w-full items-center justify-center rounded-lg border-4 border-white bg-blue-900 transition duration-200 ease-in-out hover:scale-105"
                  href="/levels/level4"
                >
                  <p className="text-2xl font-bold text-white">4</p>
                </Link>
              </section>

              <p className="text-center text-2xl text-white">Zombo.com</p>
            </div>

            <div className="absolute bottom-0 left-1/2 flex flex-col items-center gap-4">
              <section className="relative h-16 w-16">
                <div className="level-radial-gradient-background-blue absolute -bottom-5 -left-8 -z-10 h-28 w-32" />

                <Link
                  className="flex h-full w-full items-center justify-center rounded-lg border-4 border-white bg-blue-900 transition duration-200 ease-in-out hover:scale-105"
                  href="/levels/level5"
                >
                  <p className="text-2xl font-bold text-white">5</p>
                </Link>
              </section>

              <p className="text-center text-2xl text-white">Chinese Menu</p>
            </div>

            <div className="absolute bottom-12 left-40 flex flex-col items-center gap-4">
              <section className="relative h-16 w-16">
                <div className="level-radial-gradient-background-orange absolute -bottom-5 -left-8 -z-10 h-28 w-32 animate-pulse" />

                <Link
                  className="flex h-full w-full items-center justify-center rounded-lg border-4 border-white bg-orange-500 transition duration-200 ease-in-out hover:scale-105"
                  href="/levels/level6"
                >
                  <p className="text-2xl font-bold text-white">👑</p>
                </Link>
              </section>

              <p className="text-center text-2xl text-white">Final Challenge</p>
            </div>

            {/* map dashes #1 */}
            <article
              ref={ref1}
              className="border-3 absolute left-36 top-8 h-1 w-6 rotate-6 border-white bg-white"
            />
            <article
              ref={ref2}
              className="border-3 absolute left-52 top-12 h-1 w-8 rotate-12 border-white bg-white"
            />
            <article
              ref={ref3}
              className="border-3 absolute left-64 top-20 h-1 w-7 rotate-45 border-white bg-white"
            />
            <article
              ref={ref4}
              className="border-3 absolute left-80 top-28 h-1 w-8 rotate-3 border-white bg-white"
            />
            {/* map dashes #2 */}
            <article
              ref={ref5}
              className="border-3 left-144 absolute top-28 h-1 w-6 -rotate-3 border-white bg-white"
            />
            <article
              ref={ref6}
              className="border-3 left-169 absolute top-24 h-1 w-12 -rotate-12 border-white bg-white"
            />
            <article
              ref={ref7}
              className="border-3 left-181 absolute top-20 h-1 w-12 -rotate-3 border-white bg-white"
            />
            {/* map dashes #3 */}
            <article
              ref={ref8}
              className="border-3 absolute right-96 top-20 h-1 w-10 rotate-3 border-white bg-white"
            />
            <article
              ref={ref9}
              className="border-3 absolute right-72 top-24 h-1 w-10 rotate-12 border-white bg-white"
            />
            <article
              ref={ref10}
              className="border-3 absolute right-52 top-36 h-1 w-10 rotate-45 border-white bg-white"
            />
            <article
              ref={ref11}
              className="border-3 absolute right-36 top-48 h-1 w-8 rotate-12 border-white bg-white"
            />
            {/* map dashes #4 */}
            <article
              ref={ref12}
              className="border-3 -rotate-80 absolute bottom-48 right-12 h-1 w-8 border-white bg-white"
            />
            <article
              ref={ref13}
              className="border-3 absolute bottom-32 right-24 h-1 w-8 -rotate-45 border-white bg-white"
            />
            <article
              ref={ref14}
              className="border-3 absolute bottom-24 right-40 h-1 w-12 -rotate-12 border-white bg-white"
            />
            <article
              ref={ref15}
              className="border-3 absolute bottom-20 right-64 h-1 w-16 -rotate-3 border-white bg-white"
            />
            <article
              ref={ref16}
              className="border-3 right-85 bottom-18 absolute h-1 w-12 border-white bg-white"
            />
            <article
              ref={ref17}
              className="border-3 right-144 bottom-18 absolute h-1 w-6 rotate-3 border-white bg-white"
            />
            {/* map dashes #5 */}
            <article
              ref={ref18}
              className="border-3 left-172 absolute bottom-20 h-1 w-10 rotate-12 border-white bg-white"
            />
            <article
              ref={ref19}
              className="border-3 left-156 absolute bottom-24 h-1 w-12 rotate-3 border-white bg-white"
            />
            <article
              ref={ref20}
              className="border-3 left-128 absolute bottom-24 h-1 w-12 border-white bg-white"
            />
            <article
              ref={ref21}
              className="border-3 absolute bottom-28 left-80 h-1 w-12 rotate-12 border-white bg-white"
            />
          </section>
        </div>
      </div>
    </>
  );
}
