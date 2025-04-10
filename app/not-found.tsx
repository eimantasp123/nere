import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto h-screen px-4 py-20 text-center">
        <h4 className="font-jakarta text-primary-dark text-sm font-bold tracking-[5px] uppercase">
          Klaida
        </h4>
        <h1 className="font-marcellus my-6 text-6xl leading-none lg:text-[180px]">
          404
        </h1>
        <h3 className="font-marcellus text-3xl leading-tight lg:text-5xl">
          Oops, Puslapis nerastas!
        </h3>
        <p className="mt-6 mb-10 lg:my-6">
          Atrodo, kad puslapis, kurio ieškote, neegzistuoja arba buvo perkeltas.
          Patikrinkite adresą arba grįžkite į pagrindinį puslapį.
        </p>

        <Link
          href="/"
          className="bg-primary rounded-full px-10 py-3 text-sm text-black shadow-sm transition-colors duration-200 ease-in-out hover:bg-neutral-800 hover:text-white md:mt-0"
        >
          Grįžti į pagrindinį puslapį
        </Link>
      </div>
    </section>
  );
};

export default notFound;
