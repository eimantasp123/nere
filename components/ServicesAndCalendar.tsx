"use client";

import { lt } from "date-fns/locale";
import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Calendar } from "./ui/calendar";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";

const services = [
  {
    id: 1,
    name: "Paslauga 1",
    description: "Paslaugos aprašymas",
    price: 100,
  },
  {
    id: 2,
    name: "Paslauga 2",
    description: "Paslaugos aprašymas",
    price: 200,
  },
  {
    id: 3,
    name: "Paslauga 3",
    description: "Paslaugos aprašymas",
    price: 300,
  },
  {
    id: 4,
    name: "Paslauga 4",
    description: "Paslaugos aprašymas",
    price: 400,
  },
];

const timeSlots = [
  "09:00h - 10:00h",
  "10:00h - 11:00h",
  "11:00h - 12:00h",
  "12:00h - 13:00h",
  "13:00h - 14:00h",
  "14:00h - 15:00h",
  "15:00h - 16:00h",
  "16:00h - 17:00h",
];

const ServicesAndCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const nextStep = () => setStep((s) => Math.min(s + 1, 2));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <section className="bg-background font-jakarta">
      <div className="container mx-auto min-h-screen px-4 pt-20 pb-24">
        {/* Step Indicator */}
        <div className="mb-6 flex items-center justify-between">
          {["Paslauga", "Jūsų informacija", "Patvirtinimas"].map(
            (label, index) => (
              <div key={index} className="flex-1 text-center">
                <div
                  className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                    index === step
                      ? "bg-secondary text-white"
                      : "bg-muted text-muted-foreground"
                  }, `}
                >
                  {index + 1}
                </div>
                <div className="text-sm">{label}</div>
              </div>
            ),
          )}
        </div>

        {/* Step Content */}
        {step === 0 && (
          <div className="flex items-stretch gap-4">
            <div className="bg-background-primary w-[34%] space-y-4 rounded-2xl p-8 shadow-md">
              <h4 className="font-marcellus text-xl">Pasirinkite paslauga</h4>
              <div className="flex flex-col gap-3">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`cursor-pointer rounded-xl p-4 transition-all duration-300 ease-in-out hover:-translate-y-[2px] ${selectedService === service.id ? "bg-secondary/70" : "bg-background"} hover:shadow-md`}
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="font-marcellus text-md">{service.name}</h5>
                      <p className="text-text text-xs">{service.price}€</p>
                    </div>
                    <p className="text-text text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={lt}
                disabled={{ before: new Date() }}
                className="bg-background-primary h-full rounded-2xl p-8 shadow-md"
              />
            </div>
            <div className="bg-background-primary flex flex-1 flex-col space-y-4 rounded-2xl p-8 shadow-md">
              <h4 className="font-marcellus text-xl">Pasirinkite laiką</h4>

              <div className="text-text bg-background flex flex-1 items-center justify-center rounded-2xl p-2 shadow-md">
                {!timeSlots ? (
                  <p className="text-text max-w-[280px] text-center text-sm">
                    Norėdami pamatyti laisvus laikus, pirmiausia pasirinkite
                    paslaugą bei jums tinkamiausią dieną.
                  </p>
                ) : (
                  <ScrollArea className="h-[300px] w-full p-3">
                    <div className="grid w-full grid-cols-2 gap-2 p-1">
                      {timeSlots.map((slot, index) => (
                        <div
                          key={index}
                          className="text-text bg-secondary/70 hover:bg-secondary cursor-pointer rounded-full px-4 py-2 text-center text-xs text-nowrap transition-all duration-300 ease-in-out hover:-translate-y-[1px] hover:shadow-sm"
                        >
                          {slot}
                        </div>
                      ))}
                      {timeSlots.length === 0 && (
                        <p className="text-text col-span-2 pt-8 text-center text-sm">
                          Atsiprašome, tačiau pasirinkta diena yra pilnai
                          užimta.
                        </p>
                      )}
                    </div>
                  </ScrollArea>
                )}
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="bg-background-primary space-y-4 rounded-2xl p-8 shadow-md">
            <h4 className="font-marcellus text-xl">Jūsų informacija</h4>
            <div className="flex w-full gap-14">
              <div className="flex flex-1 flex-col gap-4">
                <Input name="firstName" type="text" placeholder="Vardas" />
                <Input
                  type="email"
                  name="email"
                  placeholder="El. Pašto adresas"
                />
                <Input
                  type="phone"
                  name="phone"
                  placeholder="Telefono numeris"
                />
                <Textarea
                  name="message"
                  className="min-h-[200px]"
                  placeholder="Papildoma informacija (nebūtina)"
                ></Textarea>
                <p className="text-xs text-neutral-500">
                  Jūsų informacija bus naudojama tik rezervacijos patvirtinimui
                  ir nebus dalinama trečiosioms šalims.
                </p>
              </div>
              <div className="w-[40%]">
                <p className="text-text text-center text-sm">
                  Taip pat galite prisijungti prie klientu sistemoje, jeigu
                  norite matyti savo rezervacijas ir lengviau valdyti paskyra
                </p>
                <div className="mt-8 flex flex-1 flex-col gap-4">
                  <Input
                    name="email"
                    type="email"
                    placeholder="El. Pašto adresas"
                  />
                  <div className="relative w-full">
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Slaptažodis"
                    />
                    <button
                      type="button"
                      className="text-muted-foreground absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-4 px-1">
                    <label className="flex cursor-pointer items-center gap-2">
                      <Checkbox id="remember" />
                      <span className="text-xs text-neutral-600">
                        Prisiminti mane
                      </span>
                    </label>

                    <p className="cursor-pointer text-xs font-medium text-black/80">
                      Pamiršote slaptažodį?
                    </p>
                  </div>
                  <button className="cursor-pointer rounded-full bg-neutral-800 px-12 py-3 text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-neutral-700">
                    Prisijungti
                  </button>
                  <div className="text-text my-2 flex items-center justify-center gap-4 text-sm">
                    <hr className="bg-background h-[2px] w-full" />
                    <span className="text-text text-xs text-nowrap">
                      Prisijunkite su
                    </span>
                    <hr className="bg-background h-[2px] w-full" />
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-background hover:bg-background/80 flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full py-3 text-sm font-medium shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
                      <FaFacebook size={15} />
                      <span>Facebbok</span>
                    </button>
                    <button className="bg-background hover:bg-background/80 flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full py-3 text-sm font-medium shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
                      <FaGoogle size={15} />
                      <span>Google</span>
                    </button>
                  </div>
                  <p className="text-center text-xs text-neutral-500">
                    Neturite paskyros?{" "}
                    <span className="cursor-pointer font-medium text-black/80">
                      Registruotis
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-background-primary space-y-4 rounded-2xl p-8 text-sm shadow-md">
            <h4 className="font-marcellus text-xl">
              Rezervacijos informacijos patikrinimas
            </h4>
            <p>
              <strong>Paslauga:</strong>{" "}
              {services.find((s) => s.id === selectedService)?.name}
            </p>
            <p>
              {/* <strong>Data:</strong> {date?.toLocaleDateString("lt-LT")} */}
              <strong>Rezervacijos data:</strong> 2023-10-10
            </p>
            <p>
              {/* <strong>Data:</strong> {date?.toLocaleDateString("lt-LT")} */}
              <strong>Rezervacijos laikas:</strong> 10:00h (iki 11:00h)
            </p>
            <p>
              <strong>Vardas:</strong> Eimantas
            </p>
            <p>
              <strong>El. paštas:</strong> example@gmail.com
            </p>
            <p>
              <strong>Telefono numeris:</strong> +370 612 34567
            </p>
            <p>
              <strong>Papildoma informacija:</strong> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-4 flex justify-between">
          {step > 0 ? (
            <button
              onClick={prevStep}
              className="cursor-pointer rounded-full bg-neutral-800 px-12 py-3 text-sm text-white transition-colors duration-200 ease-in-out hover:bg-neutral-600"
            >
              Atgal
            </button>
          ) : (
            <div />
          )}
          {step < 2 ? (
            <button
              onClick={nextStep}
              disabled={!selectedService || !date}
              className={`bg-primary rounded-full px-12 py-3 text-sm ${step === 0 && (!selectedService || !date) ? "cursor-not-allowed opacity-50" : "hover:bg-primary/70 cursor-pointer transition-colors duration-300 ease-in-out"} `}
            >
              Tęsti
            </button>
          ) : (
            <Link
              href="/booking/success"
              className="bg-secondary hover:bg-secondary/70 cursor-pointer rounded-full px-12 py-3 text-sm transition-colors duration-300 ease-in-out"
            >
              Patvirtinti
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesAndCalendar;
