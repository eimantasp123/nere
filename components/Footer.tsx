import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Pradžia" },
  { href: "/about", label: "Apie mane" },
  { href: "/services", label: "Paslaugos" },
  { href: "/contact", label: "Kontaktai" },
];

const Footer = () => {
  return (
    <section className="bg-neutral-900">
      <div className="container mx-auto flex items-center justify-between p-4">
        <nav className="flex flex-1">
          <ul className="font-marcellus flex gap-10 text-sm text-nowrap">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-neutral-100 transition-colors duration-200 ease-out hover:text-neutral-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
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
