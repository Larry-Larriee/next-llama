import React from "react";
import Navigation from "../../../components/Navigation";
import Link from "next/link";

export default function page() {
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
                  className="flex h-full w-full items-center justify-center rounded-lg border-4 border-white bg-blue-900"
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
                  className="flex h-full w-full items-center justify-center rounded-lg border-4 border-white bg-blue-900"
                  href="/levels/level1"
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
                  className="flex h-full w-full items-center justify-center rounded-lg border-4 border-white bg-blue-900"
                  href="/levels/level1"
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
                  className="flex h-full w-full items-center justify-center rounded-lg border-4 border-white bg-blue-900"
                  href="/levels/level1"
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
                  className="flex h-full w-full items-center justify-center rounded-lg border-4 border-white bg-blue-900"
                  href="/levels/level1"
                >
                  <p className="text-2xl font-bold text-white">5</p>
                </Link>
              </section>

              <p className="text-center text-2xl text-white">Chinese Menu</p>
            </div>

            <div className="absolute bottom-12 left-36 flex flex-col items-center gap-4">
              <section className="relative h-16 w-16">
                <div className="level-radial-gradient-background-orange absolute -bottom-5 -left-8 -z-10 h-28 w-32" />

                <Link
                  className="flex h-full w-full items-center justify-center rounded-lg border-4 border-white bg-orange-500"
                  href="/levels/level1"
                >
                  <p className="text-2xl font-bold text-white">👑</p>
                </Link>
              </section>

              <p className="text-center text-2xl text-white">Final Challenge</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
