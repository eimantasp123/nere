"use client";
import { Mail, MapPinned, Phone } from "lucide-react";
import Image from "next/image";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import ReCAPTCHA from "react-google-recaptcha";
import type { ReCAPTCHA as ReCAPTCHAType } from "react-google-recaptcha";
import { useRef } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

// Validation schema
const ContactSchema = z.object({
  name: z.string().min(2, "Vardas privalomas"),
  phone: z.string().min(6, "Telefono numeris per trumpas"),
  email: z.string().email("Neteisingas el. pašto adresas"),
  message: z.string().min(5, "Žinutė privaloma"),
});

type ContactFormData = z.infer<typeof ContactSchema>;

/**
 * * Contact component with a form and contact information.
 */
const Contact = () => {
  const recaptchaRef = useRef<ReCAPTCHAType>(null);

  // Initialize form with validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

  // Function to handle form submission
  const onSubmit = async (data: ContactFormData) => {
    const token = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();

    if (!token) {
      toast.error("reCAPTCHA nepavyko patvirtinti.");
      return;
    }

    // Send data to the server
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, token }),
    });

    // Handle server response
    if (res.ok) {
      const message = await res.text();
      toast.success(message || "Žinutė išsiųsta sėkmingai!");
      reset();
    } else {
      const errorText = await res.text();
      toast.error(
        errorText || "Įvyko klaida siunčiant žinutę. Bandykite dar kartą.",
      );
    }
  };

  return (
    <section
      id="contacts"
      className="bg-background relative container mx-auto grid items-center gap-14 px-4 pt-14 pb-8 md:gap-24 lg:grid-cols-2 lg:pb-28"
    >
      <div className="relative order-1 h-[400px] flex-1 lg:order-none lg:h-[720px]">
        <Image
          src="/image5.jpeg"
          alt="Nere Head Spa Kontaktai"
          fill
          className="rounded-tl-3xl rounded-tr-[200px] rounded-b-3xl object-cover"
        />
        <div className="bg-background absolute bottom-3 left-3 space-y-6 rounded-[20px] p-5 pr-12 md:bottom-7 md:left-7 md:py-8 md:pl-8 lg:pr-26">
          <span className="text-text font-marcellus flex items-center gap-2 text-sm">
            <MapPinned strokeWidth={1.5} className="text-primary-dark" />
            <p>P. Kalpoko g. 1, Kaunas</p>
          </span>
          <a
            href="tel:+37062800509 "
            rel="nofollow"
            className="text-text font-marcellus flex items-center gap-2 text-sm transition-colors duration-200 ease-in-out hover:text-neutral-400"
          >
            <Phone strokeWidth={1.5} className="text-primary-dark" />
            <span>+370 628 00509 </span>
          </a>
          <a
            href="mailto:labas@nere.lt"
            rel="nofollow"
            className="text-text font-marcellus flex items-center gap-2 text-sm transition-colors duration-200 ease-in-out hover:text-neutral-400"
          >
            <Mail strokeWidth={1.5} className="text-primary-dark" />
            <span>labas@nere.lt</span>
          </a>
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <h6>Kontaktai</h6>
        <h2>Susisiekite su manimi</h2>
        <p>
          Norite pasilepinti japonišku galvos masažu ar turite klausimų apie
          mano paslaugas? Užpildykite žemiau esančią formą arba susisiekite su
          manimi tiesiogiai – mielai atsakysiu į visus Jūsų klausimus ir padėsiu
          pasirinkti tinkamiausią laiką apsilankymui.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 pt-2 md:space-y-4"
        >
          <div>
            <Input
              {...register("name")}
              placeholder="Jūsų vardas"
              required
              className="rounded-full bg-[#F3F7EC] py-[18px]"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:gap-4">
            <div className="flex-1">
              <Input
                {...register("phone")}
                required
                placeholder="Telefono numeris"
                className="rounded-full bg-[#F3F7EC] py-[18px]"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <Input
                {...register("email")}
                required
                placeholder="Jūsų el. paštas"
                className="rounded-full bg-[#F3F7EC] py-[18px]"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Textarea
              {...register("message")}
              placeholder="Žinutė"
              required
              className="min-h-[150px] rounded-[20px] bg-[#F3F7EC] py-[18px]"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            size="invisible"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-secondary w-full rounded-full py-4 text-sm text-black shadow-sm transition-colors duration-200 ease-in-out hover:bg-neutral-800 hover:text-white disabled:opacity-50"
          >
            {isSubmitting ? "Siunčiama..." : "Siųsti žinutę"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
