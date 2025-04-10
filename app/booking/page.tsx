import ServicesAndCalendar from "@/components/ServicesAndCalendar";

const page = () => {
  return (
    <>
      <section className="bg-neutral-800">
        <div className="container mx-auto px-4 py-14 text-center lg:py-20">
          <h2 className="text-neutral-100">Rezervuokite laiką</h2>
        </div>
      </section>
      <ServicesAndCalendar />
    </>
  );
};

export default page;
