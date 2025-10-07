"use client";

import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Pradžia" },
  { href: "#about-me", label: "Apie mane" },
  { href: "#services", label: "Paslaugos" },
  { href: "/dovanu-kuponas", label: "Dovanų kuponas" },
  { href: "#contacts", label: "Kontaktai" },
];

/**
 * Header component that contains the logo, navigation links, and profile image with menu.
 */
const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (headerRef.current) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          // scrolling down
          headerRef.current.classList.add("-translate-y-full");
        } else {
          // scrolling up
          headerRef.current.classList.remove("-translate-y-full");
        }
        lastScrollTop = scrollTop;
      }
      if (open) {
        setOpen(false);
      }
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open, menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileMenuRef, menuOpen]);

  return (
    <section
      ref={headerRef}
      className="bg-background-primary sticky top-0 z-50 w-full border-b border-neutral-400/40 transition-transform duration-300"
    >
      <header className="container mx-auto flex items-center px-4 py-5">
        {/* Logo */}
        <div className="lg:w-[200px]">
          <Link
            href="/"
            className="flex w-20 items-center justify-center lg:w-26"
          >
            <Image
              src="/logo-text.png"
              width={200}
              height={86}
              alt="Nere logotipas"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 justify-center lg:flex">
          <NavList />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex w-full items-center justify-end gap-4 lg:w-[250px]">
          <Link
            href="/dovanu-kuponas"
            prefetch
            className="bg-secondary cursor-pointer rounded-full px-6 py-2 text-sm hover:text-black lg:hidden"
          >
            Dovanų kuponas
          </Link>

          {menuOpen ? (
            <X
              className="lg:hidden"
              onClick={() => setMenuOpen(false)}
              strokeWidth={2}
              size={28}
            />
          ) : (
            <AlignJustify
              onClick={() => setMenuOpen(true)}
              strokeWidth={2}
              size={28}
              className="lg:hidden"
            />
          )}

          {/* Book appointment button */}
          <Link
            href="https://book.treatwell.lt/salonas/nere-head-spa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-primary hidden cursor-pointer rounded-full bg-neutral-800 px-10 py-3 text-sm text-white shadow-sm transition-colors duration-200 ease-in-out hover:text-black lg:block"
          >
            Rezervuoti laiką
          </Link>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`bg-background absolute top-[75px] right-0 left-0 z-20 flex w-full items-center justify-center overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${menuOpen ? "h-70" : "h-0"}`}
      >
        <nav>
          <NavList closeHandler={() => setMenuOpen(false)} />
        </nav>
      </div>
    </section>
  );
};

/**
 * Navigation list component that renders the navigation links.
 * @param {Function} closeHandler - Optional function to close the mobile menu when a link is clicked.
 */
const NavList = ({ closeHandler }: { closeHandler?: () => void }) => {
  const router = useRouter();

  const handleScroll = (href: string) => {
    router.push(`/${href}`);

    if (closeHandler) {
      closeHandler();
    }
  };

  return (
    <div className="font-marcellus flex flex-col gap-6 text-nowrap sm:text-sm lg:flex-row lg:gap-10">
      {links.map((link) => {
        if (link.href.startsWith("/")) {
          return (
            <Link
              key={link.href}
              href={link.href}
              prefetch
              onClick={() => handleScroll(link.href)}
              className="text-text text-center transition-colors duration-200 ease-in-out hover:text-neutral-500"
            >
              {link.label}
            </Link>
          );
        } else {
          return (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className="cursor-pointer transition-colors duration-200 ease-out hover:text-neutral-500"
            >
              {link.label}
            </button>
          );
        }
      })}
    </div>
  );
};

export default Header;
