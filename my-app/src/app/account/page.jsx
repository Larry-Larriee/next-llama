"use client";

import Navigation from "@/components/Navigation";
import React, { useState, useRef } from "react";

export default function Page() {
  const userNameInput = useRef();
  const passwordInput = useRef();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function changeUserName() {
    setUserName(userNameInput.current.value);
  }
  function changePassword() {
    setPassword(passwordInput.current.value);
  }

  // keep in mind that the cookie stored is in JSON string format
  function createUser() {
    fetch("http://127.0.0.1:5000/createAccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
      // credientials need to be included to accept response cookies from the server
      credentials: "include",
    }).then((response) => {
      response.json().then((data) => {
        if (data.success === false) {
          alert("bad username");
        }

        if (data.success === true) {
          window.location.href = "/account-success";
        }
      });
    });
  }

  function loginUser() {
    fetch("http://127.0.0.1:5000/loginAccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
      credentials: "include",
    }).then((response) =>
      response.json().then((data) => {
        if (data.success === false) {
          alert(data.reason);
        }

        if (data.success === true) {
          window.location.href = "/account-success";
        }
      }),
    );
  }

  return (
    <>
      <div className="flex w-full flex-col items-center gap-16">
        <Navigation />

        <div className="flex w-10/12 flex-col items-center gap-16">
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

          <div className="primary-color-4 mb-10 flex w-full flex-col justify-center gap-8 rounded-lg p-6 xl:w-96">
            <section className="flex flex-col gap-1">
              <p className="text-lg text-gray-300">Username</p>
              <input
                className="h-9 w-11/12 rounded-md pl-2 focus:outline-none"
                type="text"
                onChange={() => changeUserName()}
                value={userName}
                ref={userNameInput}
              />
            </section>

            <section className="flex flex-col gap-1">
              <p className="text-lg text-gray-300">Password</p>
              <input
                className="h-9 w-11/12 rounded-md pl-2 focus:outline-none"
                type="text"
                onChange={() => changePassword()}
                value={password}
                ref={passwordInput}
              />
            </section>

            <section className="flex gap-8">
              <p
                className="w-1/3 rounded-lg bg-indigo-500 py-1 text-center text-base text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer xl:w-auto xl:px-8 xl:py-2 xl:text-left xl:text-xl"
                onClick={() => loginUser()}
              >
                Login
              </p>

              <p
                className="w-1/3 rounded-lg bg-orange-500 py-1 text-center text-base text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer xl:w-auto xl:px-8 xl:py-2 xl:text-left xl:text-xl"
                onClick={() => createUser()}
              >
                Sign Up
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
