import React from "react";
import Navigation from "../../../components/Navigation";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-16">
        <Navigation />

        <div className="flex h-96 w-10/12 flex-col justify-center gap-16">
          <p className="text-4xl text-white">Level Select:</p>

          <section className="flex w-3/4 flex-wrap gap-8">
            <Link href="/levels/level1">
              <p className="primary-color-3 rounded-md border-2 border-white p-4 text-xl font-bold text-white hover:animate-ping hover:bg-orange-500">
                Level One
              </p>
            </Link>
            <Link href="/levels/level2">
              <p className="primary-color-3 rounded-md border-2 border-white p-4 text-xl font-bold text-white hover:animate-ping hover:bg-orange-500">
                Level Two
              </p>
            </Link>
            <Link href="#">
              <p className="primary-color-3 rounded-md border-2 border-white p-4 text-xl font-bold text-white hover:animate-ping hover:bg-orange-500">
                Level Three
              </p>
            </Link>
            <Link href="#">
              <p className="primary-color-3 rounded-md border-2 border-white p-4 text-xl font-bold text-white hover:animate-ping hover:bg-orange-500">
                Level Four
              </p>
            </Link>
            <Link href="#">
              <p className="primary-color-3 rounded-md border-2 border-white p-4 text-xl font-bold text-white hover:animate-ping hover:bg-orange-500">
                Level Five
              </p>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
