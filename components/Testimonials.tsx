"use client";
import { useResponsiveCarouselConfig } from "@/utils/useResponsiveCarouselConfig";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { testimonialsContent } from "@/content/testimonials";

/**
 * * Testimonials component displays a section with testimonials from clients.
 */
const Testimonials = () => {
  const { showArrows } = useResponsiveCarouselConfig(
    testimonialsContent!.length,
  );

  return (
    <section className="bg-background">
      <div className="container mx-auto space-y-6 px-4 py-10 text-center lg:pt-20">
        <h6>Atsiliepimai</h6>
        <h2>Šilti žodžiai iš mano klientų</h2>
        <p className="mx-auto max-w-[800px]">
          Mano klientai vertina ne tik išskirtinį masažo pojūtį, bet ir jaukią
          atmosferą bei nuoširdų dėmesį. Skaitykite jų patirtis ir sužinokite,
          kodėl japoniškas galvos masažas tapo jų mėgstama atsipalaidavimo
          forma.
        </p>

        <div className="flex gap-8 pt-10 text-start lg:pt-5">
          {testimonialsContent && (
            <Carousel
              opts={{
                align: "start",
              }}
              className="flex w-full py-8 lg:py-12"
            >
              <CarouselContent className="flex-1">
                {testimonialsContent.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="flex-none basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div
                      key={index}
                      className="bg-background-primary h-full min-w-[300px] flex-1 space-y-6 rounded-3xl p-9"
                    >
                      <StarRating rating={testimonial.rating} />
                      <h5>{testimonial.title}</h5>
                      <p>{testimonial.review}</p>
                      <hr className="h-[2px] w-full border-neutral-300" />
                      <div className="flex items-center gap-4">
                        <span className="font-marcellus text-textColor text-sm font-light">
                          {testimonial.name}
                        </span>
                      </div>
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
      </div>
    </section>
  );
};

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} filled />
      ))}
      {hasHalfStar && <Star half />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} />
      ))}
    </div>
  );
};

const Star = ({
  filled = false,
  half = false,
}: {
  filled?: boolean;
  half?: boolean;
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Half-fill gradient */}
        <linearGradient id="half" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" stopColor="#e63929" />
          <stop offset="50%" stopColor="#e5e7eb" /> {/* Tailwind gray-200 */}
        </linearGradient>
      </defs>

      <path
        fill={filled ? "#e63929" : half ? "url(#half)" : "#e5e7eb"}
        d="M12 .587l3.668 7.571 8.332 1.151-6.064 5.849 
             1.428 8.285L12 18.896l-7.364 4.547 
             1.428-8.285L.001 9.309l8.332-1.151z"
      />
    </svg>
  );
};

export default Testimonials;
