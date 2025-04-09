import { CalendarDays, UserPen, UserX } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <section className="bg-neutral-800">
        <div className="font-marcellus container mx-auto px-4 py-16 text-center text-4xl text-white">
          Kliento profilis
        </div>
      </section>
      <section className="bg-background font-jakarta h-screen">
        <div className="container mx-auto space-y-3 px-4 pt-8 pb-20">
          <h6 className="font-marcellus text-lg">Meniu</h6>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <button className="bg-secondary/50 item hover:bg-secondary/80 flex cursor-pointer gap-2 rounded-full px-12 py-3 text-sm transition-all duration-300 ease-in-out hover:-translate-y-[1px] hover:shadow-md">
                <UserPen strokeWidth={1.5} size={20} />
                <span>Asmeninė informacija</span>
              </button>
              <button className="bg-secondary/50 item hover:bg-secondary/80 flex cursor-pointer gap-2 rounded-full px-12 py-3 text-sm transition-all duration-300 ease-in-out hover:-translate-y-[1px] hover:shadow-md">
                <CalendarDays strokeWidth={1.5} size={20} />
                <span>Rezervacijos</span>
              </button>
              <button className="bg-secondary/50 item hover:bg-secondary/80 flex cursor-pointer gap-2 rounded-full px-12 py-3 text-sm transition-all duration-300 ease-in-out hover:-translate-y-[1px] hover:shadow-md">
                <UserX strokeWidth={1.5} size={20} />
                <span>Istrinti paskyra</span>
              </button>
            </div>
            <div className="flex-1">content</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
