"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "#home", label: "Pradžia" },
  { href: "#about-me", label: "Apie mane" },
  { href: "#services", label: "Paslaugos" },
  { href: "#contacts", label: "Kontaktai" },
];

const Footer = () => {
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
    <section className="font-jakarta bg-neutral-900">
      <div className="container mx-auto flex items-center justify-between p-4">
        <nav className="flex flex-1">
          <div className="font-marcellus flex gap-10 text-sm text-nowrap">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className="cursor-pointer text-neutral-100 transition-colors duration-200 ease-out hover:text-neutral-300"
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
        <div className="w-[150px]">
          <Image
            src="/logo-white.png"
            alt="Nere logotipas"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-1 justify-end">
          <p className="text-[13px] text-neutral-100">
            Visos teisės saugomos © 2025 nere.lt
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
