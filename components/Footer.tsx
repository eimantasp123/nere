"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const links = [
  { href: "/", label: "Pradžia" },
  { href: "#about-me", label: "Apie mane" },
  { href: "#services", label: "Paslaugos" },
  { href: "#contacts", label: "Kontaktai" },
];

const Footer = () => {
  const router = useRouter();

  const handleScroll = (id: string) => {
    router.push(`/${id}`);
  };

  return (
    <section className="font-jakarta mt-auto bg-neutral-900">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 p-8 lg:flex-row">
        <nav className="flex flex-1">
          <div className="font-marcellus flex flex-wrap justify-center gap-8 text-sm text-nowrap md:gap-10">
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
        <div className="w-[70px] 2xl:w-[80px]">
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
