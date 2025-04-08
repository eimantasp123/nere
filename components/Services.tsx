import Image from "next/image";

const services = [
  {
    title: "Yoga",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
  },
  {
    title: "Meditation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
  },
  {
    title: "Wellness",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-background-primary my-8 py-20">
      <div className="container mx-auto">
        <div className="space-y-4 px-4 py-6">
          <h4 className="font-jakarta text-text text-sm font-bold tracking-[5px] uppercase">
            Our Process
          </h4>
          <h1 className="font-marcellus mb-10 text-5xl leading-tight">
            Balance Your Body, Balance Your Mind
          </h1>
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-background flex items-center gap-8 rounded-3xl border-[1px] border-neutral-100 p-12 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-[3px] hover:shadow-lg`}
              >
                <div className="flex-1 space-y-4">
                  <h2 className="font-marcellus text-xl font-bold tracking-[5px] uppercase">
                    {service.title}
                  </h2>
                  <p className="text-text pr-14 leading-[28px]">
                    {service.description}
                  </p>
                  <button className="hover:bg-primary mt-2 cursor-pointer rounded-full bg-neutral-800 px-16 py-[10px] text-sm text-white transition-colors duration-200 ease-in-out hover:text-black">
                    Rezervuoti laika
                  </button>
                </div>
                <div className="relative h-[200px] w-[400px]">
                  <Image
                    src="/hero-1.jpg"
                    alt="Hero 1"
                    height={200}
                    width={400}
                    className="h-full w-full rounded-tl-[150px] rounded-tr-3xl rounded-b-3xl object-cover"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
