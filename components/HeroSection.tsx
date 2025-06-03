import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

/**
 * * HeroSection component displays a hero section with a welcome message and images.
 * * It includes a heading, subheading, and a call-to-action button.
 */
async function HeroSection() {
  return (
    <section id="home" className="bg-background-primary">
      <div className="container mx-auto flex flex-col items-center gap-16 px-4 py-14 lg:flex-row">
        <div className="relative flex-1 space-y-6">
          <h6>Jūsų ramybės ritualas</h6>
          <h1 className="mb-10">
            Atraskite harmoniją per japoniškus galvos masažo ritualus
          </h1>
          <hr className="h-[2px] w-24 border-neutral-400" />
          <p>
            Nere Head Spa – tai daugiau nei grožio procedūra. Tai sąmoningas
            pabėgimas į ramybę, kur rūpestingai atliekami galvos masažo ritualai
            atgaivina plaukus, atpalaiduoja kūną ir nuramina protą. Ateik,
            pasilepink ir pajusk, kaip ramybė tampa tavo kasdienybės dalimi.
          </p>
          <div className="flex gap-2 md:gap-4">
            <a
              href="#services"
              className="bg-secondary rounded-full px-8 py-3 text-sm text-black shadow-sm transition-colors duration-200 ease-in-out hover:bg-neutral-800 hover:text-white sm:px-10"
            >
              Paslaugos
            </a>
            <a
              href="https://book.treatwell.lt/salonas/nere-head-spa/"
              target="_blank"
              className="hover:bg-secondary rounded-full bg-neutral-800 px-8 py-3 text-sm text-white shadow-sm transition-colors duration-200 ease-in-out hover:text-black sm:px-10 lg:hidden"
            >
              Rezervuoti laiką
            </a>
            <div className="hidden items-center gap-2 md:gap-2 lg:flex">
              <SocialLinks />
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-2 lg:hidden">
            <SocialLinks />
          </div>
        </div>
        <div className="flex h-[250px] flex-1 gap-4 sm:h-[300px] md:h-[550px] md:gap-8">
          {/* First image (30%) */}
          <div className="h-auto w-[45%] overflow-hidden md:w-[40%]">
            <Image
              src="/hero-1.jpg"
              alt="Hero image"
              width={1000}
              height={550}
              quality={80}
              className="h-full w-full rounded-tl-[200px] rounded-tr-3xl rounded-b-3xl"
              style={{
                objectFit: "cover",
                objectPosition: "right",
              }}
              priority
            />
          </div>

          {/* Second image (70%) */}
          <div className="h-auto w-[55%] overflow-hidden md:w-[60%]">
            <Image
              src="/image1.jpg"
              alt="Hero image"
              width={1000}
              height={550}
              quality={80}
              style={{
                objectFit: "cover",
                objectPosition: "right",
              }}
              className="h-full w-full rounded-tl-[200px] rounded-tr-3xl rounded-b-3xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const SocialLinks = () => {
  return (
    <>
      <span>Sekite studijos veiklą:</span>
      <a
        href="https://www.facebook.com/nere.head.spa"
        target="_blank"
        className="bg-background flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-200 ease-in-out hover:-translate-y-[2px]"
      >
        <Facebook strokeWidth={1.5} className="size-4" />
      </a>
      <a
        href="https://www.instagram.com/nere_head_spa/"
        target="_blank"
        className="bg-background flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-200 ease-in-out hover:-translate-y-[2px]"
      >
        <Instagram strokeWidth={1.5} className="size-4" />
      </a>
    </>
  );
};

export default HeroSection;
