import Image from "next/image";
import React from "react";

const BlogsSection = () => {
  return (
    <section id="services" className="bg-background-primary mt-10 py-20">
      <div className="container mx-auto">
        <div className="space-y-4 px-4 py-6 text-center">
          <h4 className="font-jakarta text-primary-dark text-sm font-bold tracking-[5px] uppercase">
            Blog & News
          </h4>
          <h1 className="font-marcellus mb-10 text-5xl leading-tight">
            Our Articles About Yoga
          </h1>
          <div className="flex justify-between gap-8 pt-8">
            {Array.from({ length: 3 }, (_, index) => (
              <div
                key={index}
                className="group bg-background overflow-hidden rounded-tl-3xl rounded-tr-[170px] rounded-b-3xl text-start shadow-md"
              >
                <div className="relative h-[300px] w-full cursor-pointer overflow-hidden">
                  {/* Image */}
                  <Image
                    src="/hero-1.jpg"
                    alt="text"
                    fill
                    className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    priority
                  />

                  {/* White overlay on hover */}
                  <div className="pointer-events-none absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="space-y-4 p-8">
                  <p>
                    <span className="font-marcellus text-primary-dark text-sm">
                      February 10, 2024
                    </span>
                  </p>
                  <h2 className="font-marcellus mt-4 mb-2 cursor-pointer text-xl">
                    Yoga can promote better self-care {index + 1}
                  </h2>
                  <p className="text-text cursor-pointer leading-[28px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
