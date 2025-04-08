import Image from "next/image";

const OurMission = () => {
  return (
    <section className="from-background-primary to-background mb-4 bg-gradient-to-b from-50% to-50%">
      <div className="container mx-auto px-4">
        <div
          style={{
            backgroundImage:
              "linear-gradient(#86a994c7, #70a8a5c9), url('/hero-1.jpg')",
          }}
          className="relative flex h-[400px] items-center rounded-t-3xl rounded-br-[200px] rounded-bl-3xl bg-cover bg-bottom p-8 shadow-xl"
        >
          <div className="w-[350px]">
            <Image
              src="/logo-white.png"
              alt="Nere logotipas"
              width={800}
              height={800}
            />
          </div>
          <div className="flex-1 space-y-5 text-white">
            <h4 className="font-jakarta text-sm font-bold tracking-[5px] uppercase">
              Our Mission
            </h4>
            <h2 className="font-marcellus text-5xl leading-tight">
              Unwind and Recharge with Yoga. Lorem ipsum dolor sit amet, consec
              tetur adipiscing.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
