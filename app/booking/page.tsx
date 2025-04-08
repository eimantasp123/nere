import ServicesAndCalendar from "@/components/ServicesAndCalendar";

const page = () => {
  return (
    <>
      <section className="bg-neutral-800">
        <div className="font-marcellus container mx-auto px-4 py-20 text-center text-5xl text-neutral-100">
          Rezervuokite laiką
        </div>
      </section>
      <ServicesAndCalendar />
    </>
  );
};

export default page;
