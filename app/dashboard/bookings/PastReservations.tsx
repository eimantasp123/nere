import React from "react";
import Reservation from "./Reservation";

const PastReservations = () => {
  return (
    <div className="scrollbar-none max-h-[700px] space-y-5 overflow-y-auto lg:space-y-3">
      <Reservation past />
      <Reservation past />
      <Reservation past />
    </div>
  );
};

export default PastReservations;
