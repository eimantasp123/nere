import Image from "next/image";

/**
 * * OurMission component displays a section with a background image and a logo.
 */
const OurMission = () => {
  return (
    <section className="from-background-primary to-background mb-4 bg-gradient-to-b from-50% to-50%">
      <div className="container mx-auto px-4">
        <div
          style={{
            backgroundImage:
              "linear-gradient(#86a994c7, #70a8a5c9), url('/hero-1.jpg')",
          }}
          className="relative flex flex-col gap-5 rounded-t-3xl rounded-br-[200px] rounded-bl-3xl bg-cover bg-bottom p-6 pb-20 shadow-xl lg:flex-row lg:items-center lg:gap-10 lg:px-8 lg:py-10 xl:px-14 xl:py-18"
        >
          <div className="h-fit w-[75px] lg:w-[100px] xl:w-[150px]">
            <Image
              src="/logo-white.png"
              alt="Nere logotipas"
              width={800}
              height={1200}
            />
          </div>
          <div className="flex-1 space-y-5 text-white">
            <h6 className="text-white/70">Mūsų misija</h6>
            <h2>
              Atgaivinti protą, atpalaiduoti kūną – ritualais, kurie įkvepia
              ramybę ir gyvybingumą iš vidaus.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
