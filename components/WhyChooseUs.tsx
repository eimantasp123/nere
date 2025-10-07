"use client";
import { useResponsiveCarouselConfig } from "@/utils/useResponsiveCarouselConfig";
import { Droplets, Flower2, Leaf, UserRoundCheck } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const content = [
  {
    id: 1,
    title: "Japoniška masažo filosofija",
    description:
      "Kuriu savo unikalų ritualą, įkvėptą japoniškos tradicijos, bet perteiktą per mano pačios patirtį ir pajautimą. Tai nėra šablonas – tai mano rankų darbas, mano filosofija.",
    icon: <Flower2 className="text-primary size-8 lg:size-11" />,
  },
  {
    id: 2,
    title: "Individualus dėmesys kiekvienam",
    description:
      "Ritualai pritaikomi pagal Jūsų būseną ir poreikius – nuo streso mažinimo iki galvos odos būklės gerinimo.",
    icon: <UserRoundCheck className="text-primary size-8 lg:size-11" />,
  },
  {
    id: 3,
    title: "Aukščiausios kokybės priemonės",
    description:
      "Naudoju tik profesionalias, gamtai draugiškas priemones, kurios puoselėja ir plaukus, ir pojūčius.",
    icon: <Droplets className="text-primary size-8 lg:size-11" />,
  },
  {
    id: 4,
    title: "Ramybės oazė mieste",
    description:
      "Mano studijoje laikas sustoja – jauki aplinka, kvapai ir garsai kuria visiško atsipalaidavimo patirtį nuo pirmos minutės.",
    icon: <Leaf className="text-primary size-8 lg:size-11" />,
  },
];

/**
 * * WhyChooseUs component displays a section with a title, subtitle, and a list of features or benefits.
 */
const WhyChooseUs = () => {
  const { showArrows } = useResponsiveCarouselConfig(content!.length);

  return (
    <section className="bg-background">
      <div className="container mx-auto space-y-6 px-4 py-8 text-center lg:py-20">
        <h6>Kodėl verta apsilankyti</h6>
        <h2>Meistriškumas, kuris ramina kūną ir protą</h2>
        <p className="text-md mx-auto max-w-6xl">
          Tai daugiau nei procedūra – tai patirtis, kuri masažo metu ne tik
          atpalaiduoja, bet ir giliai gydo galvos odą. Nes spindintys, sveiki
          plaukai prasideda nuo švarios galvos odos.
        </p>
        {content && (
          <Carousel
            opts={{
              align: "start",
            }}
            className="flex w-full py-8 lg:py-12"
          >
            <CarouselContent className="flex-1">
              {content.map((obj, index) => (
                <CarouselItem
                  key={index}
                  className="flex-none basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-background-primary h-full w-full space-y-4 rounded-tl-2xl rounded-tr-[100px] rounded-b-2xl p-7 text-start lg:p-9">
                    {obj.icon}
                    <h5>{obj.title}</h5>
                    <p className="text-text leading-[28px]">
                      {obj.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute top-0 left-0 flex w-full items-center justify-between px-4 lg:px-0">
              {showArrows && (
                <>
                  <CarouselPrevious className="absolute top-0 left-0" />

                  <CarouselNext className="absolute top-0 right-0" />
                </>
              )}
            </div>
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
