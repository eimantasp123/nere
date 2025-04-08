import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="about-me" className="bg-background">
      <div className="container mx-auto flex items-center gap-24 px-4 py-20">
        <div className="relative h-[720px] flex-1">
          <Image
            src="/hero-1.jpg"
            alt="Hero 1"
            fill
            className="rounded-tl-3xl rounded-tr-[200px] rounded-b-3xl object-cover"
            priority
          />
        </div>
        <div className="flex-1 space-y-6">
          <h4 className="font-jakarta text-primary-dark text-sm font-bold tracking-[5px] uppercase">
            Apie mane
          </h4>
          <h1 className="font-marcellus mb-10 text-5xl leading-tight">
            Yoga Is the Journey of the Self, to the Self
          </h1>
          <hr className="h-[2px] w-24" />
          <p className="text-text leading-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper.
          </p>
          <div className="flex justify-between gap-4 pt-4">
            <div className="space-y-1">
              <h4 className="font-marcellus text-sm font-bold tracking-widest uppercase">
                Neringa Petrikaitė
              </h4>
              <p className="text-text text-sm">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-secondary hover:bg-secondary-dark flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-200 ease-in-out hover:-translate-y-[2px]">
                <Facebook strokeWidth={1.5} className="size-4" />
              </div>
              <div className="bg-secondary hover:bg-secondary-dark flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-200 ease-in-out hover:-translate-y-[2px]">
                <Instagram strokeWidth={1.5} className="size-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
