import Image from "next/image";
import React from "react";
const blogs = [
  {
    id: 1,
    title: "Yoga can promote better self-care",
    date: "February 10, 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Yoga can promote better self-care",
    date: "February 14, 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Yoga can promote better self-care",
    date: "February 15, 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

/**
 * * BlogsSection component to display a section of blog articles.
 */
const BlogsSection = () => {
  return (
    <section
      id="services"
      className="bg-background-primary mt-10 py-12 lg:py-20"
    >
      <div className="container mx-auto">
        <div className="px-4 py-6">
          <div className="mb-8 flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-4">
              <h4>Blog & News</h4>
              <h2>Our Articles About Yoga</h2>
            </div>
            <a
              href="#contacts"
              className="hover:bg-secondary rounded-full bg-neutral-800 px-10 py-3 text-sm text-white shadow-sm transition-colors duration-200 ease-in-out hover:text-black"
            >
              Visos naujienos
            </a>
          </div>
          <div className="scrollbar-none flex justify-between gap-8 overflow-x-auto pt-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="group bg-background min-w-[320px] overflow-hidden rounded-tl-3xl rounded-tr-[170px] rounded-b-3xl text-start shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg"
              >
                <div className="relative h-[200px] w-full cursor-pointer overflow-hidden md:h-[300px]">
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
                <div className="space-y-4 p-6 md:p-8">
                  <h6 className="font-marcellus text-primary-dark text-sm">
                    {blog.date}
                  </h6>
                  <h5 className="cursor-pointer">{blog.title}</h5>
                  <p>
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
