import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-neutral-800">
        <div className="container mx-auto px-4 py-10 text-center md:py-14 lg:py-16">
          <h2 className="text-2xl text-neutral-100 md:text-3xl xl:text-4xl">
            Slaptažodžio atkurimas
          </h2>
        </div>
      </section>
      <section className="bg-background container mx-auto px-4 pt-8 pb-8 lg:py-10">
        <p className="mx-auto max-w-[400px] text-center text-sm leading-normal text-neutral-600">
          Įvedus savo el. pašto adresą, slaptažodžio atkūrimo nuoroda ir
          instrukcijos bus išsiųstos į jūsų el. pašto dėžutę.
        </p>
        <div className="mx-auto mt-6 flex max-w-[500px] flex-1 flex-col gap-4">
          <Input
            name="email"
            type="email"
            placeholder="El. Pašto adresas"
            className="bg-background-primary rounded-full py-4"
          />

          <button className="cursor-pointer rounded-full bg-neutral-800 px-12 py-4 text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-neutral-700">
            Gauti slaptažodžio atkurimo nuorodą
          </button>

          <Link
            href="/login"
            className="mt-4 cursor-pointer text-center text-sm font-medium text-black/80"
          >
            Grįžti į prisijungimo puslapį
          </Link>
        </div>
      </section>
    </div>
  );
};

export default page;
