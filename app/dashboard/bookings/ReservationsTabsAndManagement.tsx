"use client";
import React, { useState } from "react";
import ActiveReservations from "./ActiveReservations";
import PastReservations from "./PastReservations";

const ReservationsTabsAndManagement = () => {
  const [tab, setTab] = useState<"active" | "past">("active");
  return (
    <>
      {/* Tabs button to manage routes */}
      <div className="bg-background my-5 flex w-full flex-col justify-between gap-2 rounded-[20px] p-2 lg:flex-row lg:rounded-full">
        <button
          onClick={() => setTab("active")}
          className={`flex-1 rounded-full py-3 text-center text-sm transition-colors ${
            tab === "active"
              ? "bg-secondary text-black"
              : "hover:bg-secondary/20 text-muted-foreground"
          }`}
        >
          Aktyvios rezervacijos
        </button>
        <button
          onClick={() => setTab("past")}
          className={`flex-1 rounded-full py-3 text-center text-sm transition-colors ${
            tab === "past"
              ? "bg-secondary text-black"
              : "hover:bg-secondary/20 text-muted-foreground"
          }`}
        >
          Praėjusios rezervacijos
        </button>
      </div>

      {/* Render content */}
      <div className="mt-6">
        {tab === "active" ? <ActiveReservations /> : <PastReservations />}
      </div>
    </>
  );
};

export default ReservationsTabsAndManagement;
