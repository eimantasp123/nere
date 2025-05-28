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
          <h6>Welcome to Sparka</h6>
          <h1 className="mb-10">Awaken Your Potential Through Yoga</h1>
          <hr className="h-[2px] w-24" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
          </p>
          <div className="flex gap-2 md:gap-4">
            <a
              href="#services"
              className="bg-primary rounded-full px-10 py-3 text-sm text-black shadow-sm transition-colors duration-200 ease-in-out hover:bg-neutral-800 hover:text-white"
            >
              Paslaugos
            </a>
            <a
              href="https://watalook.lt/beauty-specialist/nere-head-spa"
              target="_blank"
              className="hover:bg-secondary rounded-full bg-neutral-800 px-10 py-3 text-sm text-white shadow-sm transition-colors duration-200 ease-in-out hover:text-black lg:hidden"
            >
              Rezervuoti laiką
            </a>
          </div>
        </div>
        <div className="flex h-[250px] flex-1 gap-4 sm:h-[300px] md:h-[550px] md:gap-8">
          {/* First image (30%) */}
          <div className="h-auto w-[45%] overflow-hidden md:w-[40%]">
            <Image
              src="/hero-1.jpg"
              alt="Hero image"
              width={300}
              height={550}
              className="h-full w-full rounded-tl-[200px] rounded-tr-3xl rounded-b-3xl"
              style={{
                objectFit: "cover",
              }}
              priority
            />
          </div>

          {/* Second image (70%) */}
          <div className="h-auto w-[55%] overflow-hidden md:w-[60%]">
            <Image
              src="/hero-2.jpg"
              alt="Hero image"
              width={700}
              height={550}
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
