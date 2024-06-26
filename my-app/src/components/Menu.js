"use client";

import React, { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import Link from "next/link";

// This react component is meant to work with the Navigation component
export default function Menu() {
  let [menuOpen, setMenuOpen] = useState(false);

  let changeMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <p
        className="text-5xl text-white hover:cursor-pointer"
        // Including parentheses in the function() executes the it immediately during render. This can cause unexpected behavior, especially when the function has side effects (like state updates).
        // But removing parentheses, while preventing the firing, is also bad since React will create new references on each rerender. This is why you use arrow functions as they only render when the reference to the function changes.
        onClick={changeMenuOpen}
      >
        ☰
      </p>

      <Dialog
        open={menuOpen}
        onClose={() => changeMenuOpen()}
        className="z-5 relative"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <article className="primary-color-2 absolute inset-0 -z-10 opacity-50" />

          <DialogPanel className="primary-color-3 flex max-w-xl flex-col gap-5 rounded-lg border-2 border-white p-12">
            <DialogTitle className="text-lg font-bold text-white">
              Tailwind Practice Menu
            </DialogTitle>
            <Description className="text-white">
              It would be funny if I added a cat api to give a random fact
              everytime the user opens up the menu
            </Description>

            <ul className="flex list-none flex-col gap-5">
              <li>
                <Link href='#'>
                  <p className="text-white">Leaderboard</p>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <p className="text-white">Level Select</p>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <p className="text-white">User</p>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <p className="text-white">Daily Challenge</p>
                </Link>
              </li>
            </ul>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
