import Link from "next/link";
import React from "react";

/**
 * * Success page after booking
 * @description This page is displayed after a successful booking. It thanks the user for their reservation and provides a link to return to the main page.
 */
const page = () => {
  return (
    <section className="bg-background h-screen">
      <div className="container mx-auto flex h-[600px] flex-col items-center justify-center px-4 text-center">
        <h4 className="mb-4">Rezervacija</h4>
        <h2>Jūsų rezervacija buvo sėkminga!</h2>
        <p className="mx-auto mt-6 mb-10 max-w-[600px]">
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
