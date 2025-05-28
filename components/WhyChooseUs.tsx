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
      "Remiamės giliomis tradicijomis – kiekvienas judesys apgalvotas, kad atkurtų vidinę pusiausvyrą ir nuramintų protą.",
    icon: <Flower2 className="text-primary size-8 lg:size-11" />,
  },
  {
    id: 2,
    title: "Individualus dėmesys kiekvienam",
    description:
      "Ritualai pritaikomi pagal jūsų poreikius – nuo streso mažinimo iki galvos odos būklės gerinimo.",
    icon: <UserRoundCheck className="text-primary size-8 lg:size-11" />,
  },
  {
    id: 3,
    title: "Aukščiausios kokybės priemonės",
    description:
      "Naudojame tik profesionalias, gamtai draugiškas Davines linijos priemones, kurios puoselėja ir plaukus, ir pojūčius.",
    icon: <Droplets className="text-primary size-8 lg:size-11" />,
  },
  {
    id: 4,
    title: "Ramybės oazė mieste",
    description:
      "Mūsų studijoje laikas sustoja – jauki aplinka, kvapai ir garsai sukuria visišką atsipalaidavimą nuo pirmos minutės.",
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
        <h6>Kodėl verta rinktis mus</h6>
        <h2>Meistriškumas, kuris ramina kūną ir protą</h2>
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
