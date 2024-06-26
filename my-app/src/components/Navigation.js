import React from "react";

export default function Navigation() {
  return (
    <nav className="mt-10 flex w-10/12 items-center justify-between">
      <section className="flex items-center gap-5">
        <div className="flex items-center justify-center bg-white p-4">
          <p className="text-sm text-black">logo</p>
        </div>
        <p className="text-4xl text-white">Tailwind Practice</p>
      </section>

      <p className="text-5xl text-white">☰</p>
    </nav>
  );
}
