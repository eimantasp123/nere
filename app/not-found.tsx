import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-20 text-center">
        <h4 className="font-jakarta text-primary-dark text-sm font-bold tracking-[5px] uppercase">
          Error Page
        </h4>
        <h1 className="font-marcellus text-[180px] leading-none">404</h1>
        <h3 className="font-marcellus text-5xl leading-tight">
          Oops, page not found!
        </h3>
        <p className="text-text mx-auto mt-6 mb-10 max-w-[600px] leading-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <Link
          href="/"
          className="bg-primary rounded-full px-10 py-3 text-sm text-black shadow-sm transition-colors duration-200 ease-in-out hover:bg-neutral-800 hover:text-white"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default notFound;
