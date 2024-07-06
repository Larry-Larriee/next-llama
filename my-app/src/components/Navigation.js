import React from "react";
import Menu from "./Menu";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="mt-10 flex w-10/12 items-center justify-between hover:cursor-pointer">
      <Link className="flex items-center gap-5" href="/">
        <div className="flex items-center justify-center bg-white p-4">
          <p className="text-sm text-black">logo</p>
        </div>
        <p className="text-4xl text-white">Tailwind Practice</p>
      </Link>

      <Menu />
    </nav>
  );
}
