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
    }).then((response) => {
      response.json().then((data) => {
        if (data.success === false) {
          alert("bad username");
        }

        if (data.success === true) {
          // window.location.href = "/account-success";

          console.log("success");
        }
      });
    });
  }
  function loginUser(userName, password) {}

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

          <div className="primary-color-4 mb-10 flex h-96 w-1/3 flex-col justify-center gap-10 rounded-lg p-6">
            <section className="flex flex-col gap-1">
              <p className="text-lg text-gray-300">
                Username (something memorable)
              </p>
              <input
                className="h-10 w-11/12 rounded-md pl-2 focus:outline-none"
                type="text"
                onChange={() => changeUserName()}
                value={userName}
                ref={userNameInput}
              />
            </section>

            <section className="flex flex-col gap-1">
              <p className="text-lg text-gray-300">Password</p>
              <input
                className="h-10 w-11/12 rounded-md pl-2 focus:outline-none"
                type="text"
                onChange={() => changePassword()}
                value={password}
                ref={passwordInput}
              />
            </section>

            <section className="flex gap-8">
              <p className="rounded-lg bg-indigo-500 px-8 py-2 text-lg text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
                Login
              </p>

              <p
                className="rounded-lg bg-orange-500 px-8 py-2 text-lg text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
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
