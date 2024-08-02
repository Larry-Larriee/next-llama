import React from "react";
import Navigation from "../../components/Navigation";

export default function page() {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-16">
        <Navigation />

        <section className="flex w-10/12 flex-col gap-10">
          <div className="w-2/3">
            <p className="text-4xl text-white">Congratulations!</p>
            <p className="text-xl text-white">
              You have successfully beat this difficult challenge.
            </p>
          </div>

          <div className="w-2/3">
            <p className="text-xl text-white">
              What&apos;s next is completely up to you. But remember that even
              tailwind gods can get rusty. Be sure to frequently practice your
              skills.
            </p>
          </div>

          <div className="flex w-2/3 flex-col gap-3">
            <p className="text-xl text-white">
              Here&apos;s a list of some awesome things you can try:
            </p>

            <ul className="flex list-disc flex-col gap-2 pl-5 text-white">
              <li>
                <p className="text-xl text-white">A portfolio with Tailwind</p>
              </li>
              <li>
                <p className="text-xl text-white">
                  Combining Tailwind with Next.js or React Native
                </p>
              </li>
              <li>
                <p className="text-xl text-white">
                  Learning about Tailwind breakpoints (something we did not
                  cover)
                </p>
              </li>
              <li>
                <p className="text-xl text-white">
                  Learning about @layer utilities (something we did not cover)
                </p>
              </li>
              <li>
                <p className="text-xl text-white">
                  Getting PAID with{" "}
                  <span className="text-green-500">Fivver</span>
                </p>
              </li>
            </ul>
          </div>

          <div className="w-3/4">
            <p className="text-xl text-white">
              Regardless, congratulations again. Tailwind is a great library
              that save a bunch of time.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
