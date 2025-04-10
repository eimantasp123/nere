import { cancelReservation } from "@/app/actions/reservations";
import React from "react";

const Reservation = ({ past = false }: { past?: boolean }) => {
  const handleClick = async () => {
    try {
      await cancelReservation("test"); // ✅ call server action directly
      console.log("Reservation cancelled");
    } catch (err) {
      console.error("Failed to cancel:", err);
    }
  };

  return (
    <div className="bg-background grid w-full grid-cols-1 items-center gap-2 space-y-2 rounded-[20px] p-6 lg:grid-cols-[1fr_180px]">
      <h3 className={`text-lg ${past ? "col-span-2" : "lg:col-span-1"}`}>
        Paslaugos pavadinimas
      </h3>
      {!past && (
        <button
          onClick={handleClick}
          className="order-3 mt-4 ml-auto block w-full rounded-full border border-red-200 bg-red-100/50 px-0 py-2 text-sm transition-colors duration-200 ease-in-out hover:bg-red-100 lg:order-none lg:mt-0"
        >
          Atšaukti rezervaciją
        </button>
      )}
      <p className="col-span-2 text-sm leading-normal">
        <strong>Paslaugos aprašymas:</strong>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas beatae
        accusantium alias cumque error officia unde autem provident temporibus
        veniam nobis pariatur odit magni repellendus architecto, et blanditiis
        dolore ducimus!
      </p>

      <div className="col-span-2 flex flex-col gap-1 sm:flex-row sm:gap-4 md:flex-col md:gap-1 lg:flex-row lg:gap-4">
        <p className="text-sm">
          <strong>Data:</strong> 2015.03.04
        </p>
        <p className="text-sm">
          <strong>Laikas:</strong> 12:00
        </p>
        <p className="text-sm">
          <strong>Trukmė:</strong> 2 valandos
        </p>
      </div>
    </div>
  );
};

export default Reservation;
