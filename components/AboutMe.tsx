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
            src="/image2.jpg"
            alt="Nere Head Spa"
            fill
            className="rounded-tl-3xl rounded-tr-[200px] rounded-b-3xl object-cover"
            priority
          />
        </div>
        <div className="flex-1 space-y-6">
          <h6>Apie mane</h6>
          <h2>Ritualai ramybei, kuriuos kuriu iš širdies</h2>
          <hr className="h-[2px] w-24 border-neutral-400" />
          <p className="text-text text-justify leading-[28px]">
            Esu Neringa – „Nere Head Spa“ įkūrėja ir sertifikuota meistrė. Po
            ilgos kelionės per grožio industriją ir asmeninį tobulėjimą atradau
            japoniško galvos masažo meno galią. Kiekvienas seansas man – tai ne
            tik masažas. Tai gilus galvos odos ir plaukų gydymas. Nes gražūs,
            spindintys plaukai prasideda nuo švarios ir sveikos galvos odos.
            Niekada nenorėjau būti tiesiog plaukų procedūrų meistrė. Norėjau
            būti kažkuo daugiau – parodyti, kad plaukų priežiūra gali būti ne
            tik naudinga, bet ir gydanti, atpalaiduojanti, tikra.
          </p>
          <div className="flex justify-between gap-4 pt-4">
            <div>
              <h4 className="font-marcellus text-sm font-bold tracking-widest uppercase">
                Neringa Pocevičienė
              </h4>
              <p className="text-text text-sm">Nere Head Spa įkūrėja</p>
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
