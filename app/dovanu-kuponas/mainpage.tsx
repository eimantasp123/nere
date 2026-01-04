"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectionButton } from "@/components/ui/selectionButton";
import { Textarea } from "@/components/ui/textarea";
import { options } from "@/content/gift";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import { useRef, useState } from "react";
import type { ReCAPTCHA as ReCAPTCHAType } from "react-google-recaptcha";
import ReCAPTCHA from "react-google-recaptcha";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const voucherOptions = [
  {
    value: "elektroninis",
    label: "Elektroninis kuponas",
    description: "Atsiunčiamas į el. paštą tą pačią dieną",
  },
  {
    value: "fizinis",
    label: "Fizinis kuponas",
    description: "Atsiėmimas studijoje, iš anksto sutartu laiku",
  },
] as {
  value: "elektroninis" | "fizinis";
  label: string;
  description: string;
}[];

const voucherRules = [
  {
    description:
      "Fizinius kuponus galima atsiimti tik iš anksto susitarus dėl laiko. Jei tuo metu vyksta ritualas, kupono perdavimas nėra vykdomas, nes visas dėmesys skiriamas klientui ir jo patirčiai.",
  },
  {
    description:
      "Elektroniai dovanų kuponai siunčiami tą pačią dieną po apmokėjimo.",
  },
  {
    description:
      "Dovanų kuponas atsiunčiamas el. paštu PDF formatu - tvarkingas, paruoštas dovanoti.",
  },
  {
    description:
      "Dovanų kuponas galioja 6 (šešis) mėnesius nuo įsigijimo dienos. Pasibaigus galiojimui – nepratęsiamas.",
  },
  {
    description:
      "Dovanų kuponas atgal nepriimamas ir nėra keičiamas į pinigus.",
  },
  {
    description:
      "Jei pasirenkamos paslaugos kaina viršija kupono vertę, trūkstamą sumą galima sumokėti grynaisiais arba pavedimu.",
  },
  {
    description:
      "Jei paslaugos kaina mažesnė už kupono vertę, skirtumas negrąžinimas.",
  },
  {
    description:
      "Atšaukus vizitą mažiau nei prieš 48 valandas, kuponas laikomas panaudotu.",
  },
  {
    description: "Pametus ar sugadinus kuponą - naujas neišduodamas.",
  },
  {
    description: "Dovanų kuponas skirtas tik paslaugoms, ne produktams.",
  },
  {
    description:
      "Atvykus į procedūra privalomą turėti dovanų kuponą, kitu atveju procdūra nebus atlikta.",
  },
];

const GiftSchema = z
  .object({
    fullName: z.string().min(2, "Vardas yra privalomas"),
    phoneNumber: z.string().min(5, "Telefono numeris yra privalomas"),
    recipient: z.string().min(2, "Gavėjo vardas yra privalomas"),
    email: z.string().email("Neteisingas el. pašto adresas"),
    ritual: z
      .string({ required_error: "Pasirinkite ritualą" })
      .refine(
        (val) => val !== "" && options.some((option) => option.label === val),
        {
          message: "Pasirinkite ritualą iš sąrašo",
        },
      ),
    voucherAmount: z
      .string()
      .optional()
      .refine((val) => !val || !isNaN(Number(val)), {
        message: "Kupono suma turi būti skaičius",
      }),
    voucherType: z.enum(["fizinis", "elektroninis"], {
      required_error: "Pasirinkite kupono tipą",
    }),
    message: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.ritual === "Dovanų kuponas už pasirinktą sumą") {
      if (!data.voucherAmount || Number(data.voucherAmount) <= 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["voucherAmount"],
          message: "Įveskite norimą kupono sumą",
        });
      }
    }
  });

type GiftFormData = z.infer<typeof GiftSchema>;

export default function GiftCardPage() {
  const recaptchaRef = useRef<ReCAPTCHAType>(null);
  const [open, setOpen] = useState(false);
  const [openRules, setOpenRules] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<GiftFormData>({
    resolver: zodResolver(GiftSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      recipient: "",
      email: "",
      ritual: "",
      message: "",
    },
  });

  const selectedRitual = watch("ritual");

  const onSubmit = async (data: GiftFormData) => {
    const token = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();

    if (!token) {
      toast.error("Nepavyko patvirtinti reCAPTCHA.");
      return;
    }

    const res = await fetch("/api/gift", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, token }),
    });

    if (res.ok) {
      reset();
      toast.success("Užklausa sėkmingai išsiųsta!");
    } else {
      toast.error("Įvyko klaida siunčiant užklausą.");
    }
  };

  return (
    <>
      <section className="bg-background-primary">
        <div className="container mx-auto px-4 py-18">
          <h2>Nere Head Spa Dovanų Kuponai</h2>
          <p className="text-text pt-2">
            Ieškai dovanos, kuri būtų ne tik graži, bet ir prasminga? Padovanok
            ne daiktą – padovanok patirtį. „Nere Head Spa“ dovanų kuponai – tai
            kvietimas į poilsį, ramybę ir rūpestingą prisilietimą. Puikus
            pasirinkimas, kai norisi palepinti artimą žmogų ypatinga proga ar
            tiesiog be progos.
          </p>
        </div>
      </section>
      <section className="container mx-auto flex flex-col gap-16 px-4 py-16 md:flex-row">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 gap-6">
          <div className="w-full space-y-6">
            <div className="flex flex-col gap-5 xl:flex-row">
              <div className="flex-1/2">
                <Label className="pb-3">Jūsų vardas, pavardė</Label>
                <Input className="bg-[#F6F5F1]!" {...register("fullName")} />
                {errors.fullName && (
                  <p className="text-destructive text-xs">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="flex-1/2">
                <Label className="pb-3">Jūsų telefono numeris</Label>
                <Input
                  className="bg-[#F6F5F1]!"
                  type="number"
                  {...register("phoneNumber")}
                />
                {errors.phoneNumber && (
                  <p className="text-destructive text-xs">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label className="pb-3">Kam bus skirtas kuponas (vardas)</Label>
              <Input className="bg-[#F6F5F1]!" {...register("recipient")} />
              {errors.recipient && (
                <p className="text-destructive text-xs">
                  {errors.recipient.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4 md:items-end lg:flex-row">
              <div className="md: flex-1">
                <Label className="pb-3">Pasirinkite ritualą</Label>
                <Controller
                  name="ritual"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(value) => field.onChange(value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pasirinkite vieną iš nurodytų ritualų" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[280px] w-[90vw] overflow-y-auto sm:w-full sm:max-w-full md:max-h-[600px]">
                        {options.map((option) => (
                          <SelectItem key={option.label} value={option.label}>
                            {option.label}{" "}
                            {option.duration ? `- ${option.duration}` : ""}{" "}
                            {option.price ? `- ${option.price}` : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.ritual && (
                  <p className="text-destructive text-xs">
                    {errors.ritual.message}
                  </p>
                )}
              </div>

              {selectedRitual === "Dovanų kuponas už pasirinktą sumą" && (
                <div className="w-full lg:w-[200px]">
                  <Label className="pb-3">Kupono suma (€)</Label>
                  <Input
                    className="bg-[#F6F5F1]!"
                    {...register("voucherAmount")}
                  />
                  {errors.voucherAmount && (
                    <p className="text-destructive text-xs">
                      {errors.voucherAmount.message}
                    </p>
                  )}
                </div>
              )}

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-full md:w-full lg:w-auto"
                  >
                    Plaukų ilgio gidas
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-full md:w-fit">
                  <DialogTitle className="text-lg font-semibold">
                    Plaukų ilgio gidas
                  </DialogTitle>
                  <Image
                    src="/plaukai.png"
                    alt="Plaukų ilgis"
                    width={600}
                    height={600}
                    className="rounded-lg"
                    priority
                    quality={80}
                  />
                </DialogContent>
              </Dialog>
            </div>

            <div>
              <Label className="pb-3">Jūsų el. paštas</Label>
              <Input
                className="bg-[#F6F5F1]!"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-destructive text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label className="pb-3">Pasirinkite dovanų kupono tipą:</Label>
              <div className="flex flex-col gap-4 xl:flex-row">
                {voucherOptions.map((opt) => (
                  <SelectionButton
                    key={opt.value}
                    label={opt.label}
                    description={opt.description}
                    selected={watch("voucherType") === opt.value}
                    onClick={() =>
                      setValue("voucherType", opt.value, {
                        shouldValidate: true,
                        shouldDirty: true,
                      })
                    }
                  />
                ))}
              </div>
              <Dialog open={openRules} onOpenChange={setOpenRules}>
                <DialogTrigger asChild>
                  <div className="cursor-pointer pt-3 text-[13px] font-semibold text-black/80 transition-colors duration-200 ease-in-out hover:text-black/60 md:text-end">
                    Dovanų kupono įsigijimo ir naudojimosi taisyklės
                  </div>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] w-full overflow-y-auto md:h-auto md:w-fit">
                  <DialogTitle className="text-[16px] font-semibold md:text-lg">
                    Dovanų kupono įsigijimo ir naudojimosi taisyklės
                  </DialogTitle>
                  <ul className="list-disc space-y-2 pl-5 text-sm">
                    {voucherRules.map((rule, index) => (
                      <li key={index}>{rule.description}</li>
                    ))}
                  </ul>
                </DialogContent>
              </Dialog>

              {errors.voucherType && (
                <p className="text-destructive text-xs">
                  {errors.voucherType.message}
                </p>
              )}
            </div>

            <div>
              <Label className="pb-3">Jūsų žinutė (nebūtina)</Label>
              <Textarea
                className="min-h-[150px] bg-[#F6F5F1]!"
                rows={3}
                {...register("message")}
              />
            </div>

            <Button type="submit" variant="darkLight" disabled={isSubmitting}>
              {isSubmitting ? "Siunčiama..." : "Siųsti užklausą"}
            </Button>

            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              ref={recaptchaRef}
              size="invisible"
            />
          </div>
        </form>

        <div className="relative h-[300px] w-full sm:h-[400px] md:h-auto md:w-[500px]">
          <Image
            src="/kuponai.jpeg"
            alt="Dovanų kuponas"
            fill
            className="rounded-tl-3xl rounded-tr-[200px] rounded-b-3xl object-cover"
            priority
            quality={80}
          />
        </div>
      </section>
      <p className="text-text container mx-auto mb-20 max-w-4xl px-4 text-center text-base">
        Kuponai gali būti tiek fiziniai, tiek elektroniniai – siunčiami tiesiai
        į jūsų el. paštą. Gavus užklausą, susisieksime dėl apmokėjimo ir
        atsiėmimo ar išsiuntimo.
      </p>
    </>
  );
}
