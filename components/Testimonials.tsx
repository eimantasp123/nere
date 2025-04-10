import Image from "next/image";

const testimonials = [
  {
    name: "Linda Watson",
    age: 26,
    rating: 4.5,
    title: "Yoga Enthusiast",
    review:
      "I've found my sanctuary at this yoga studio. The instructors are knowledgeable and the atmosphere is calming.",
  },
  {
    name: "John Doe",
    age: 30,
    rating: 5,
    title: "Yoga Beginner",
    review:
      "This place has changed my life! I feel more relaxed and centered than ever before.",
  },
  {
    name: "Jane Smith",
    age: 28,
    rating: 4,
    title: "Yoga Practitioner",
    review:
      "A wonderful experience! The classes are well-structured and the community is welcoming.",
  },
];

/**
 * * Testimonials component displays a section with testimonials from clients.
 */
const Testimonials = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto space-y-6 px-4 py-10 text-center lg:py-20">
        <h4>Testimonials</h4>
        <h2>Sweet Reviews From Our Students</h2>
        <p className="mx-auto max-w-[800px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, dapibus leo.
        </p>

        <div className="scrollbar-none flex gap-8 overflow-x-auto pt-10 text-start">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background-primary min-w-[300px] flex-1 space-y-6 rounded-3xl p-9"
            >
              <StarRating rating={testimonial.rating} />
              <h5>{testimonial.title}</h5>
              <p>{testimonial.review}</p>
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
                <h6>
                  {testimonial.name}, {testimonial.age} metai
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
