import React from "react";
import Editor from "../components/Editor";

export default function page() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center gap-40">
      {/* radial gradient background for hero */}
      <div className="radial-gradient-absolute radial-gradient-height radial-gradient-width" />

      <header className="mt-36 flex w-9/12 flex-col items-center gap-10">
        <p className="w-5/6 text-center text-6xl font-bold text-white">
          Getting The Hang of Tailwind Starts Today.
        </p>

        <p className="w-3/4 text-center text-3xl text-white">
          TailwindPractice is the most hands-on experience to learning tailwind
          you could ever ask for.
        </p>

        <section className="flex items-center justify-center gap-10">
          <p className="rounded-md bg-blue-500 px-8 py-4 text-xl font-bold text-white">
            Get Started
          </p>
          <p className="rounded-md bg-orange-500 px-6 py-4 text-xl font-bold text-white">
            Support my project on Patreon
          </p>
        </section>
      </header>

      <div className="relative flex w-10/12 flex-wrap justify-between">
        <div className="primary-color-2 fat-width h-56 rounded-lg border-2 border-white">
          <p className="px-8 py-6 text-xl text-white">
            Your Tailwind Code Goes Here.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          <p className="text-2xl text-white">Level Five</p>

          <section className="fat-width-2 flex h-80 flex-col gap-8 rounded-lg bg-yellow-400 p-5">
            <p className="text-4xl text-red-700">Chinese Restaurant Menu</p>

            <div className="flex gap-10">
              <section className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-2xl text-red-700">Main Course</p>
                  <hr className="rounded-md border-2 border-red-700" />
                </div>

                <article className="flex">
                  <div>
                    <p className="text-xl text-red-700">Char Siu Ricebowl</p>
                    <p className="text-sm text-red-700">
                      Char Siu with delicious mushroom topping
                    </p>
                  </div>

                  <p className="text-xl text-red-700">$6.99</p>
                </article>

                <article className="space-between flex">
                  <div>
                    <p className="text-xl text-red-700">Fried Kwetiauw</p>
                    <p className="text-sm text-red-700">
                      Fried Kwetiauw, served with special spices and fried eggs
                    </p>
                  </div>

                  <p className="text-xl text-red-700">$9.99</p>
                </article>
              </section>

              <section className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-2xl text-red-700">Special Menu</p>
                  <hr className="rounded-md border-2 border-red-700" />
                </div>

                <article className="space-between flex">
                  <div>
                    <p className="text-xl text-red-700">Dimsum</p>
                    <p className="text-sm text-red-700">
                      Dim sum containing fresh and tasty seafood
                    </p>
                  </div>

                  <p className="text-xl text-red-700">$7.99</p>
                </article>

                <article className="space-between flex">
                  <div>
                    <p className="text-2xl text-red-700">Spring Rolls</p>
                    <p className="text-sm text-red-700">
                      Spring rolls with our fresh toppings and savory seasoning
                    </p>
                  </div>

                  <p className="text-xl text-red-700">$7.99</p>
                </article>
              </section>
            </div>
          </section>
        </div>

        <p className="absolute bottom-20 max-w-96 text-3xl text-white">
          Recreate designs. Practice and perfect tailwind.
        </p>
      </div>
      {/* 
      <div className="primary-color-3 h-96 w-full">
        <p>Level Up. Review Quickly.</p>

        <section>
          <p>Level 5</p>
        </section>
      </div> */}
    </div>
  );
}
