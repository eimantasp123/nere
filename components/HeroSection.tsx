import { Check } from "lucide-react";
import Image from "next/image";

async function HeroSection() {
  const res = await fetch(
    "http://localhost:1337/api/home-page-content?populate=hero",
    {
      next: { revalidate: 2 }, // ISR example
    },
  );
  const { data } = await res.json();

  return (
    <section id="home" className="bg-background-primary">
      <div className="container mx-auto flex items-center gap-16 px-4 py-14">
        <div className="relative flex-1 space-y-6">
          <h4 className="font-jakarta text-primary-dark text-sm font-bold tracking-[5px] uppercase">
            {data.heroSubtitle}
          </h4>
          <h1 className="font-marcellus mb-10 text-6xl leading-tight">
            {data.heroTitle}
          </h1>
          <hr className="h-[2px] w-24" />
          <p className="text-text leading-[28px]">{data.heroDescription}</p>
          <div className="flex gap-4">
            <a
              href="#services"
              className="bg-primary rounded-full px-10 py-3 text-sm text-black shadow-sm transition-colors duration-200 ease-in-out hover:bg-neutral-800 hover:text-white"
            >
              Paslaugos
            </a>
            <a
              href="#contacts"
              className="hover:bg-secondary rounded-full bg-neutral-800 px-10 py-3 text-sm text-white shadow-sm transition-colors duration-200 ease-in-out hover:text-black"
            >
              Susisiekite su mumis
            </a>
          </div>

          <div className="font-marcellus mt-12 flex gap-6">
            <div className="flex items-center gap-2">
              <Check className="text-primary size-5" />
              <span className="text-text text-sm">Best Instructors</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-primary size-5" />
              <span className="text-text text-sm">Best Instructors</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-primary size-5" />
              <span className="text-text text-sm">Best Instructors</span>
            </div>
          </div>
        </div>
        <div className="flex h-[600px] flex-1 gap-8">
          {/* First image (30%) */}
          <div className="h-full w-[40%] overflow-hidden">
            <Image
              src={`http://localhost:1337${data.hero[0].url}`}
              alt="Hero image"
              width={300}
              height={600}
              className="h-full w-full rounded-tl-[200px] rounded-tr-3xl rounded-b-3xl"
              style={{
                objectFit: "cover",
              }}
              priority
            />
          </div>

          {/* Second image (70%) */}
          <div className="h-full w-[60%] overflow-hidden">
            <Image
              src={`http://localhost:1337${data.hero[1].url}`}
              alt="Hero image"
              width={700}
              height={600}
              style={{
                objectFit: "cover",
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

export default HeroSection;
