import { Mail, MapPinned, Phone } from "lucide-react";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="contacts"
      className="bg-background relative container mx-auto flex items-center gap-24 px-4 py-20"
    >
      <div className="relative h-[720px] flex-1">
        <Image
          src="/hero-1.jpg"
          alt="Hero 1"
          fill
          className="rounded-tl-3xl rounded-tr-[200px] rounded-b-3xl object-cover"
        />
        <div className="bg-background absolute bottom-7 left-7 space-y-6 rounded-[20px] py-8 pr-26 pl-8">
          <span className="text-text font-marcellus flex items-center gap-2 text-sm">
            <MapPinned strokeWidth={1.5} className="text-primary-dark" />
            <p>463 7th Ave, NY 10018, USA</p>
          </span>
          <a
            href="tel:+4591929387"
            rel="nofollow"
            className="text-text font-marcellus flex items-center gap-2 text-sm transition-colors duration-200 ease-in-out hover:text-neutral-400"
          >
            <Phone strokeWidth={1.5} className="text-primary-dark" />
            <span>+1 (234) 567 890 00</span>
          </a>
          <a
            href="mailto:sparka@gmail.com"
            rel="nofollow"
            className="text-text font-marcellus flex items-center gap-2 text-sm transition-colors duration-200 ease-in-out hover:text-neutral-400"
          >
            <Mail strokeWidth={1.5} className="text-primary-dark" />
            <span>sparka.info@mail.com</span>
          </a>
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <h4 className="font-jakarta text-primary-dark text-sm font-bold tracking-[5px] uppercase">
          Our Contact
        </h4>
        <h1 className="font-marcellus text-5xl leading-tight">
          Get in Touch with Us
        </h1>
        <p className="text-text leading-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <form className="space-y-5 pt-2">
          <input
            type="text"
            placeholder="Jūsų vardas"
            name="name"
            className="text-text placeholder:text-text w-full rounded-[20px] bg-[#F3F7EC] px-6 py-[18px] text-sm focus:outline-none"
          />
          <div className="flex gap-5">
            <input
              type="phone"
              name="phone"
              placeholder="Telefono numeris"
              className="text-text placeholder:text-text w-full rounded-[20px] bg-[#F3F7EC] px-6 py-[18px] text-sm focus:outline-none"
            />
            <input
              type="email"
              placeholder="Jūsų el. paštas"
              name="email"
              className="text-text placeholder:text-text w-full rounded-[20px] bg-[#F3F7EC] px-6 py-[18px] text-sm focus:outline-none"
            />
          </div>
          <textarea
            name="message"
            placeholder="Žinutė"
            className="text-text placeholder:text-text h-[200px] w-full resize-none rounded-[20px] bg-[#F3F7EC] px-6 py-[18px] text-sm focus:outline-none"
          ></textarea>
          <button className="bg-secondary w-full cursor-pointer rounded-full py-4 text-sm text-black shadow-sm transition-colors duration-200 ease-in-out hover:bg-neutral-800 hover:text-white">
            Siųsti žinutę
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
