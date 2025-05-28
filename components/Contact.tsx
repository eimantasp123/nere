import { Mail, MapPinned, Phone } from "lucide-react";
import Image from "next/image";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

/**
 * * Contact component with a form and contact information.
 */
const Contact = () => {
  return (
    <section
      id="contacts"
      className="bg-background relative container mx-auto grid items-center gap-14 px-4 pt-14 pb-8 md:gap-24 lg:grid-cols-2 lg:pb-28"
    >
      <div className="relative order-1 h-[400px] flex-1 lg:order-none lg:h-[720px]">
        <Image
          src="/hero-1.jpg"
          alt="Hero 1"
          fill
          className="rounded-tl-3xl rounded-tr-[200px] rounded-b-3xl object-cover"
        />
        <div className="bg-background absolute bottom-3 left-3 space-y-6 rounded-[20px] p-5 pr-12 md:bottom-7 md:left-7 md:py-8 md:pl-8 lg:pr-26">
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
        <h6>Our Contact</h6>
        <h2>Get in Touch with Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <form className="space-y-3 pt-2 md:space-y-4">
          <Input
            type="text"
            placeholder="Jūsų vardas"
            name="name"
            className="rounded-full bg-[#F3F7EC] py-[18px]"
          />
          <div className="flex flex-col gap-3 md:flex-row md:gap-4">
            <Input
              type="phone"
              name="phone"
              placeholder="Telefono numeris"
              className="rounded-full bg-[#F3F7EC] py-[18px]"
            />
            <Input
              type="email"
              placeholder="Jūsų el. paštas"
              name="email"
              className="rounded-full bg-[#F3F7EC] py-[18px]"
            />
          </div>
          <Textarea
            name="message"
            placeholder="Žinutė"
            className="min-h-[150px] rounded-[20px] bg-[#F3F7EC] py-[18px]"
          ></Textarea>
          <button className="bg-secondary w-full cursor-pointer rounded-full py-4 text-sm text-black shadow-sm transition-colors duration-200 ease-in-out hover:bg-neutral-800 hover:text-white">
            Siųsti žinutę
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
