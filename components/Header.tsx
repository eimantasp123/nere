"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogOut, UserCog } from "lucide-react";

const links = [
  { href: "#home", label: "Pradžia" },
  { href: "#about-me", label: "Apie mane" },
  { href: "#services", label: "Paslaugos" },
  { href: "#contacts", label: "Kontaktai" },
  { href: "/dashboard", label: "Kliento portalas" },
];

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (id: string) => {
    if (pathname === "/") {
      // Already on home, just scroll
      router.push(`/${id}`);
    } else {
      if (id === "#home") {
        // If on another page and home is clicked, go to home
        router.push("/");
      } else {
        // Not on home, go to homepage and scroll after
        router.push(`/${id}`);
      }
    }
  };

  return (
    <section className="bg-background-primary font-jakarta sticky top-0 z-50 border-b-[1px] border-neutral-400/80">
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
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <div className="relative size-10 cursor-pointer">
                <Image
                  src="/hero-1.jpg"
                  alt="text"
                  fill
                  className="rounded-full object-cover"
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
