"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import Link from "next/link";

// return (JSX) This react component is meant to work with the Navigation component. it opens up a headless UI dialog when the user clicks on the menu icon.
export default function Menu() {
  let [menuOpen, setMenuOpen] = useState(false);
  let menuContainer = useRef();

  let signInIcon = useRef();
  let signInIconPing = useRef();

  let changeMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const [cookieExists, setCookieExists] = useState();

  useEffect(() => {
    fetch(`${process.env.SERVER}/checkCookie`, {
      method: "GET",
      credentials: "include",
    }).then((response) => {
      response.json().then((data) => {
        if (data.success === true) {
          setCookieExists(true);
        } else {
          setCookieExists(false);
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

              <li className="flex">
                <div className="relative">
                  <Link href="/account">
                    <p className="text-white">Account</p>
                  </Link>

                  {cookieExists === false && (
                    <>
                      <div
                        ref={signInIconPing}
                        className="absolute -right-4 -top-1 h-3 w-3 animate-ping rounded-full bg-blue-500/50"
                      />
                      <div
                        ref={signInIcon}
                        className="absolute -right-4 -top-1 h-3 w-3 rounded-full bg-blue-500/50"
                      />
                    </>
                  )}
                </div>
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
