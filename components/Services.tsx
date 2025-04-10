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

/**
 * * Services component displays a section with a title, subtitle, and a list of services.
 */
const Services = () => {
  return (
    <section
      id="services"
      className="bg-background-primary my-8 py-10 lg:py-20"
    >
      <div className="container mx-auto">
        <div className="space-y-4 px-4 pt-10 lg:pt-5">
          <h4>Our Process</h4>
          <h2>Balance Your Body, Balance Your Mind</h2>
          <div className="space-y-6 py-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-background flex flex-col items-center gap-8 rounded-3xl border-[1px] border-neutral-100 p-8 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-[3px] hover:shadow-lg md:flex-row lg:p-12`}
              >
                <div className="flex-1 space-y-4">
                  <h3>{service.title}</h3>
                  <p className="lg:pr-14">{service.description}</p>
                  <button className="hover:bg-primary mt-2 cursor-pointer rounded-full bg-neutral-800 px-16 py-[10px] text-sm text-white transition-colors duration-200 ease-in-out hover:text-black">
                    Rezervuoti laika
                  </button>
                </div>
                <div className="relative md:h-[200px] md:w-[300px] lg:w-[400px]">
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
