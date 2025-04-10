import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import ActiveReservations from "./ActiveReservations";
import PastReservations from "./PastReservations";

interface PageProps {
  params: Promise<{ tab: string }>;
}

export default async function BookingsPage({ params }: PageProps) {
  const { tab } = await params;

  const isValid = tab === "active" || tab === "past";
  if (!isValid) notFound();

  return (
    <div className="flex-1 gap-10">
      <div className="bg-background-primary flex-1 rounded-[20px] p-6">
        <h6 className="font-marcellus text-lg">Mano Rezervacijos</h6>

        {/* Tabs button to manage routes */}
        <div className="bg-background my-5 flex w-full flex-col justify-between gap-2 rounded-[20px] p-2 lg:flex-row lg:rounded-full">
          <Link
            href="/dashboard/bookings/active"
            className={`flex-1 rounded-full py-3 text-center text-sm transition-colors ${
              tab === "active"
                ? "bg-secondary text-black"
                : "hover:bg-secondary/20 text-muted-foreground"
            }`}
          >
            Aktyvios rezervacijos
          </Link>
          <Link
            href="/dashboard/bookings/past"
            className={`flex-1 rounded-full py-3 text-center text-sm transition-colors ${
              tab === "past"
                ? "bg-secondary text-black"
                : "hover:bg-secondary/20 text-muted-foreground"
            }`}
          >
            Praėjusios rezervacijos
          </Link>
        </div>

        {/* Render content */}
        <div className="mt-6">
          {tab === "active" ? <ActiveReservations /> : <PastReservations />}
        </div>
      </div>
    </div>
  );
}
