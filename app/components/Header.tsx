import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  const links = ["About", "Agenda", "Tickets"];

  const colors = ["bg-orange-500", "bg-violet-600", "bg-blue-500"];

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav>
        {/* TOP BAR */}
        <div className="flex justify-between items-center mx-8 py-4 ">
          <Link href={"/"}>
            <Image
              src={"/buy-icon.png"}
              alt="ticket logo"
              width={40}
              height={60}
            />
          </Link>

          <button className="bg-black text-white px-4 py-2 rounded">
            Buy tickets
          </button>
        </div>

        <div className="fixed top-0 right-0 h-screen flex">
          {links.map((link, i) => (
            <div
              key={i}
              className={`${colors[i]} w-32 flex flex-col items-center justify-between mx-16`}
            >
              <Link
                href={`/${link.toLowerCase()}`}
                className="rotate-90 text-white font-semibold"
              >
                {link}
              </Link>
              <span className="text-white mt-4 rotate-90">0{i + 1}</span>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
