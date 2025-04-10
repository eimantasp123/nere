"use server";

import { revalidatePath } from "next/cache";

export async function cancelReservation(reservationId: string) {
  // 1. Cancel it in DB
  console.log("Canceling reservation with ID:", reservationId);

  // 2. Revalidate bookings page (SSG or SSR)
  revalidatePath("/dashboard/bookings");
}
