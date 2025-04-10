import ReservationsTabsAndManagement from "./ReservationsTabsAndManagement";

export default function BookingsPage() {
  return (
    <div className="flex-1 gap-10">
      <div className="bg-background-primary flex-1 rounded-[20px] p-6">
        <h6 className="font-marcellus text-lg">Mano Rezervacijos</h6>
        <ReservationsTabsAndManagement />
        {/* bookings={{
    active: bookings.filter(b => b.status === "active"),
    past: bookings.filter(b => b.status === "past"),
  }} */}
      </div>
    </div>
  );
}
