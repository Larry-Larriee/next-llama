"use client";

import React, { useState, useEffect, useRef } from "react";
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
  let menuContainer = useRef();

  let accountHyperLink = useRef();

  let changeMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // once the account hyperlink renders, we remove the pulse animation
    async function removePulse() {
      await new Promise((resolve, reject) => setTimeout(resolve, 200));

      if (accountHyperLink.current)
        accountHyperLink.current.classList.remove("animate-pulse");
    }

    fetch("https://next-llama-4s1x.onrender.com/checkCookie", {
      method: "GET",
      credentials: "include",
    }).then((response) => {
      response.json().then((data) => {
        if (data.success === true) {
          removePulse();
        }
      });
    });
  }, [menuOpen]);

  return (
    <>
      <p
        className="text-5xl text-white hover:cursor-pointer"
        // Including parentheses in the function() executes the it immediately during render. This can cause unexpected behavior, especially when the function has side effects (like state updates).
        // But removing parentheses, while preventing the firing, is also bad since React will create new references on each rerender. This is why you use arrow functions as they only render when the reference to the function changes.
        onClick={() => changeMenuOpen()}
      >
        ☰
      </p>

      <Dialog
        open={menuOpen}
        onClose={() => {
          menuContainer.current.classList.remove("slideIn");
          menuContainer.current.classList.add("slideOut");

          setTimeout(() => {
            changeMenuOpen();
          }, 750);
        }}
        className="relative z-10"
      >
        <div className="justify-left fixed inset-0 flex w-screen items-center">
          <article className="primary-color-2 absolute inset-0 opacity-50" />

          <DialogPanel
            className="primary-color-3 slideIn flex h-screen max-w-xl flex-col gap-5 p-12"
            ref={menuContainer}
          >
            <DialogTitle className="text-lg font-bold text-white">
              Tailwind Llama Menu
            </DialogTitle>
            {/* <Description className="text-white"></Description> */}

            <ul className="flex list-none flex-col gap-5">
              <li>
                <Link href="/">
                  <p className="text-white">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/levels/level-select">
                  <p className="text-white">Level Select</p>
                </Link>
              </li>

              <li>
                <Link href="/account">
                  <p
                    className="animate-pulse text-white"
                    ref={accountHyperLink}
                  >
                    Account
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/leaderboard">
                  <p className="text-white">Leaderboard</p>
                </Link>
              </li>
              <li>
                <Link href="https://www.patreon.com/LarryLe">
                  <p className="text-white">Patreon</p>
                </Link>
              </li>
            </ul>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
