"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#home", label: "Pradžia" },
  { href: "#about-me", label: "Apie mane" },
  { href: "#services", label: "Paslaugos" },
  { href: "#contacts", label: "Kontaktai" },
];

const ScrollHeader = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`bg-background-primary fixed top-0 right-0 left-0 z-50 border-b-[1px] border-neutral-400/80 shadow-lg transition-all duration-300 ease-in-out ${visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"} `}
    >
      <header className="container mx-auto flex items-center px-4 py-5">
        <div className="w-[200px]">
          <div className="flex w-26 items-center justify-center">
            <Image
              src="/logo-text.png"
              width={200}
              height={86}
              alt="Nere logotipas"
            />
          </div>
        </div>

        <nav className="flex flex-1 justify-center">
          <ul className="font-marcellus flex gap-10 text-sm whitespace-nowrap">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors duration-200 ease-out hover:text-neutral-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex w-[200px] justify-end">
          <button className="hover:bg-primary cursor-pointer rounded-full bg-neutral-800 px-8 py-3 text-sm text-white shadow-sm transition-colors duration-200 ease-in-out hover:text-black">
            Rezervuoti laika
          </button>
        </div>
      </header>
    </div>
  );
};

export default ScrollHeader;
