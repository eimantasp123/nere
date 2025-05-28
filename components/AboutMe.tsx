import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

/**
 * * AboutMe component displays a section with an image and information about the author.
 * * It includes a title, subtitle, description, and social media icons.
 */
const AboutMe = () => {
  return (
    <section id="about-me" className="bg-background">
      <div className="container mx-auto grid items-center gap-10 px-4 py-20 lg:grid-cols-2 lg:gap-24">
        <div className="relative order-1 h-[350px] w-full flex-1 sm:h-[450px] lg:order-none lg:h-[720px]">
          <Image
            src="/hero-1.jpg"
            alt="Hero 1"
            fill
            className="rounded-tl-3xl rounded-tr-[200px] rounded-b-3xl object-cover"
            priority
          />
        </div>
        <div className="flex-1 space-y-6">
          <h6>Apie mane</h6>
          <h2>Ritualai ramybei, kuriuos kuriu iš širdies</h2>
          <hr className="h-[2px] w-24 border-neutral-400" />
          <p className="text-text leading-[28px]">
            Esu Neringa – Nere Head Spa įkūrėja ir sąmoningo prisilietimo
            praktikė. Po ilgos kelionės per grožio industriją ir asmeninį
            tobulėjimą, atradau japoniško galvos masažo meno galią. Kiekvienas
            seansas – tai ne tik galvos masažas, bet ir kvietimas sustoti,
            atsipalaiduoti ir sugrįžti į save. Tikiu, kad švelnus prisilietimas,
            rūpestis ir dėmesys – tai kelias į gilų atsipalaidavimą bei vidinę
            ramybę.
          </p>
          <div className="flex justify-between gap-4 pt-4">
            <div>
              <h4 className="font-marcellus text-sm font-bold tracking-widest uppercase">
                Neringa Petrikaitė
              </h4>
              <p className="text-text text-sm">NERE Head Spa įkūrėja</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/nerytee"
                target="_blank"
                className="bg-secondary hover:bg-secondary-dark flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-200 ease-in-out hover:-translate-y-[2px]"
              >
                <Facebook strokeWidth={1.5} className="size-4" />
              </a>
              <a
                href="https://www.instagram.com/neringap_/"
                target="_blank"
                className="bg-secondary hover:bg-secondary-dark flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-200 ease-in-out hover:-translate-y-[2px]"
              >
                <Instagram strokeWidth={1.5} className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
