import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto space-y-6 px-4 py-20 text-center">
        <h4 className="font-jakarta text-primary-dark text-sm font-bold tracking-[5px] uppercase">
          Testimonials
        </h4>
        <h1 className="font-marcellus text-5xl leading-tight">
          Sweet Reviews From Our Students
        </h1>
        <p className="text-text mx-auto max-w-[800px] leading-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, dapibus leo.
        </p>

        <div className="flex gap-8 pt-10 text-start">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="bg-background-primary space-y-6 rounded-3xl p-9"
            >
              <StarRating rating={4.5} />
              <h1 className="font-marcellus text-2xl leading-tight">
                Ive found my sanctuary at this yoga studio
              </h1>
              <p className="text-text leading-[28px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, dapibus leo.
              </p>
              <hr className="h-[2px] w-full border-neutral-300" />
              <div className="flex items-center gap-4">
                <div className="relative size-11">
                  <Image
                    src="/hero-2.jpg"
                    alt="test"
                    fill
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
                <h6 className="font-marcellus text-sm">
                  Linda Watson, 26 years
                </h6>
              </div>
            </div>
          ))}
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
