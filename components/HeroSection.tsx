import { Check } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="bg-background-primary">
      <div className="container mx-auto flex items-center gap-16 px-4 py-14">
        <div className="relative flex-1 space-y-6">
          <h4 className="font-jakarta text-primary-dark text-sm font-bold tracking-[5px] uppercase">
            Welcome to Sparka
          </h4>
          <h1 className="font-marcellus mb-10 text-6xl leading-tight">
            Awaken Your Potential Through Yoga
          </h1>
          <hr className="h-[2px] w-24" />
          <p className="text-text leading-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
          </p>

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
        <div className="flex flex-1 gap-8">
          <Image
            src="/hero-1.jpg"
            alt="Hero image"
            width={250}
            height={650}
            className="h-auto w-[250px] rounded-tl-[200px] rounded-tr-3xl rounded-b-3xl object-cover"
            priority
          />

          <div className="flex-1">
            <Image
              src="/hero-2.jpg"
              alt="Hero image"
              width={600}
              height={650}
              className="h-full w-full rounded-tl-[200px] rounded-tr-3xl rounded-b-3xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
