import Navigation from "@/components/Navigation";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-16">
        <Navigation />

        <div className="flex w-10/12 flex-col items-center gap-20">
          <article className="flex w-full flex-col gap-5">
            <p className="text-xl text-white">
              Having an account allows you to put yourself on the leaderboards,
              among other things like:
            </p>

            <ul className="ml-3 flex list-disc flex-col gap-2 text-white">
              <li>
                <p className="text-xl text-white">being able to flex</p>
              </li>
              <li>
                <p className="text-xl text-white">
                  making a mark on tailwind llama
                </p>
              </li>
              <li>
                <p className="text-xl text-white">
                  being cooler than the rest lol
                </p>
              </li>
            </ul>

            <p className="text-base text-white">
              As a general safety reminder, please do not reuse your passwords.
            </p>
          </article>

          <div className="primary-color-4 flex h-96 w-96 flex-col justify-center gap-10 rounded-lg">
            <section className="ml-3 flex flex-col">
              <p className="text-lg text-gray-300">
                Username (something memorable)
              </p>
              <input
                className="h-10 w-11/12 rounded-lg"
                type="text"
                placeholder="Username"
              />
            </section>

            <section className="ml-3 flex flex-col">
              <p className="text-lg text-gray-300">Password</p>
              <input
                className="h-10 w-11/12 rounded-lg"
                type="text"
                placeholder="Username"
              />
            </section>

            {/* buttons */}
          </div>
        </div>
      </div>
    </>
  );
}
