import React from "react";
import Menu from "./helper/Menu.jsx";
import Link from "next/link";
import Image from "next/image";
import nextLlama from "../../assets/next-llama.png";

export default function Navigation() {
  return (
    <nav className="mt-7 flex w-10/12 items-center justify-between">
      <Link className="flex items-center gap-5 sm:gap-9 lg:gap-5" href="/">
        <Image
          src={nextLlama}
          alt="Llama"
          className="max-w-12 transition duration-200 ease-in-out hover:scale-105 lg:max-w-20"
        />
        <p className="text-4xl text-white sm:text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl">
          Tailwind Llama
        </p>
      </Link>

      <Menu />
    </nav>
  );
}
