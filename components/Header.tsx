"use client";

import { LogOut, UserCog } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const links = [
  { href: "#home", label: "Pradžia" },
  { href: "#about-me", label: "Apie mane" },
  { href: "#services", label: "Paslaugos" },
  { href: "#contacts", label: "Kontaktai" },
  { href: "/", label: "Kliento portalas" },
];

const Header = () => {
  const router = useRouter();
  const headerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => {
    if (id === "#home") {
      router.push("/");
    } else {
      router.push(`/${id}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={headerRef}
      className="bg-background-primary fixed top-0 z-50 w-full border-b border-neutral-400/80 transition-transform duration-300"
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
        <nav className="0 flex flex-1 justify-center">
          <div className="font-marcellus flex gap-10 text-sm text-nowrap">
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
        </nav>
        <div className="flex w-[250px] items-center justify-end gap-4">
          <Link
            href="/booking"
            className="hover:bg-primary cursor-pointer rounded-full bg-neutral-800 px-8 py-3 text-sm text-white shadow-sm transition-colors duration-200 ease-in-out hover:text-black"
          >
            Rezervuoti laika
          </Link>
          <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
            <DropdownMenuTrigger asChild>
              <div className="relative size-10 cursor-pointer overflow-hidden rounded-full bg-neutral-200">
                <Image
                  src="/hero-1.jpg"
                  alt="Avatar"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  priority
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={10}
              align="end"
              className="bg-background w-40 space-y-1 rounded-2xl border border-neutral-200 p-2 shadow-lg"
            >
              <DropdownMenuItem
                onClick={() => {}}
                className="hover:bg-primary focus:bg-secondary cursor-pointer rounded-2xl px-4 transition-colors focus:outline-none"
              >
                <UserCog />
                Nustatymai
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-primary focus:bg-secondary cursor-pointer rounded-2xl px-4 transition-colors focus:outline-none"
                onClick={() => {}}
              >
                <LogOut />
                Atsijungti
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </section>
  );
};

export default Header;
