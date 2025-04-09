import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="bg-background h-screen">
      <div className="container mx-auto flex h-[600px] flex-col items-center justify-center px-4 text-center">
        <h4 className="font-jakarta text-primary-dark mb-2 text-sm font-bold tracking-[5px] uppercase">
          Rezervacija
        </h4>
        <h3 className="font-marcellus text-5xl leading-tight">
          Jūsų rezervacija buvo sėkminga!
        </h3>
        <p className="text-text mx-auto mt-6 mb-10 max-w-[600px] leading-[28px]">
          Ačiū, kad pasirinkote mus! Jūsų rezervacija buvo sėkmingai
          užregistruota. Kaip rezervacija bus patvirtinta, gausite el. laišką su
          reikalinga informacija. Jei turite klausimų, nedvejodami susisiekite
          su mumis. Iki pasimatymo!
        </p>

        <Link
          href="/"
          className="bg-primary rounded-full px-10 py-3 text-sm text-black shadow-sm transition-colors duration-200 ease-in-out hover:bg-neutral-800 hover:text-white"
        >
          Grįžti į pagrindinį puslapį
        </Link>
      </div>
    </section>
  );
};

export default page;
