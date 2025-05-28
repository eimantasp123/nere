"use client";

import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ProfileImageWitMenu from "./ProfileImageWitMenu";

const links = [
  { href: "#home", label: "Pradžia" },
  { href: "#about-me", label: "Apie mane" },
  { href: "#services", label: "Paslaugos" },
  { href: "#contacts", label: "Kontaktai" },
  { href: "/dashboard", label: "Kliento portalas" },
];

/**
 * Header component that contains the logo, navigation links, and profile image with menu.
 */
const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      router.prefetch("/");
    }
    router.prefetch("/dashboard");
  }, [router, pathname]);

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
      className="bg-background-primary sticky top-0 z-50 w-full border-b border-neutral-400/80 transition-transform duration-300"
    >
      <header className="container mx-auto flex items-center px-4 py-5">
        {/* Logo */}
        <div className="lg:w-[200px]">
          <div className="flex w-20 items-center justify-center lg:w-26">
            <Image
              src="/logo-text.png"
              width={200}
              height={86}
              alt="Nere logotipas"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 justify-center lg:flex">
          <NavList />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex w-full items-center justify-end gap-4 lg:w-[250px]">
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
            href="/booking"
            className="hover:bg-primary hidden cursor-pointer rounded-full bg-neutral-800 px-8 py-3 text-sm text-white shadow-sm transition-colors duration-200 ease-in-out hover:text-black lg:block"
          >
            Rezervuoti laiką
          </Link>

          {/* Profile image with menu  */}
          <ProfileImageWitMenu open={open} setOpen={setOpen} />
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`bg-background absolute top-19 right-0 left-0 z-20 flex w-full items-center justify-center overflow-hidden border-t-[1px] transition-all duration-300 ease-in-out lg:hidden ${menuOpen ? "h-70" : "h-0"}`}
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
    if (href === "#home") {
      router.push("/");
    } else if (href === "/dashboard") {
      router.push("/dashboard");
    } else {
      router.push(`/${href}`);
    }

    if (closeHandler) {
      closeHandler();
    }
  };

  return (
    <div className="font-marcellus flex flex-col gap-6 text-nowrap sm:text-sm lg:flex-row lg:gap-10">
      {links.map((link) => (
        <button
          key={link.href}
          onClick={() => handleScroll(link.href)}
          className="cursor-pointer transition-colors duration-200 ease-out hover:text-neutral-500"
        >
          {link.label}
        </button>
      ))}
    </div>
  );
};

export default Header;
