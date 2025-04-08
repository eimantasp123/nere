"use client";

import { lt } from "date-fns/locale";
import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

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

const ServicesAndCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((s) => Math.min(s + 1, 2));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <section className="bg-background font-jakarta">
      <div className="container mx-auto h-screen px-4 py-18">
        {/* Step Indicator */}
        <div className="mb-6 flex items-center justify-between">
          {["Paslauga", "Jūsų informacija", "Patvirtinimas"].map(
            (label, index) => (
              <div key={index} className="flex-1 text-center">
                <div
                  className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                    index === step
                      ? "bg-primary text-white"
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
                    className={`cursor-pointer rounded-xl p-4 transition-all duration-300 ease-in-out hover:-translate-y-[2px] ${selectedService === service.id ? "bg-primary/70" : "bg-background"} hover:shadow-md`}
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

              <div className="text-text bg-background flex flex-1 items-center justify-center rounded-2xl p-4 shadow-md">
                <p className="text-text max-w-[280px] text-center text-sm">
                  Norėdami pamatyti laisvus laikus, pirmiausia pasirinkite
                  paslaugą bei jums tinkamiausią dieną.
                </p>
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
                  className="min-h-[150px]"
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
                  <Input
                    type="password"
                    name="password"
                    placeholder="Slaptažodis"
                  />
                  <button className="hover:bg-primary/70 cursor-pointer rounded-full bg-neutral-800 px-12 py-3 text-sm text-white transition-colors duration-300 ease-in-out hover:text-black">
                    Prisijungti
                  </button>
                  <p className="text-center text-xs text-neutral-500">
                    Pamiršote slaptažodį?{" "}
                    <span className="cursor-pointer font-medium text-black/80">
                      Atkurti slaptažodį
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-background-primary space-y-4 rounded-2xl p-6 shadow">
            <h4 className="font-marcellus text-xl">Peržiūra</h4>
            <p>
              <strong>Paslauga:</strong>{" "}
              {services.find((s) => s.id === selectedService)?.name}
            </p>
            <p>
              <strong>Data:</strong> {date?.toLocaleDateString("lt-LT")}
            </p>
            <p>
              <strong>Vardas:</strong>
            </p>
            <p>
              <strong>El. paštas:</strong>
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
            <button className="bg-secondary-dark hover:bg-secondary/70 cursor-pointer rounded-full px-12 py-3 text-sm transition-colors duration-300 ease-in-out">
              Patvirtinti
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesAndCalendar;
