"use client";
import { CalendarDays, Lock, UserPenIcon, UserX } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useEffect } from "react";

const links = [
  {
    href: "/dashboard",
    label: "Asmeninė informacija",
    icon: <UserPenIcon size={20} />,
  },
  {
    href: "/dashboard/bookings",
    label: "Rezervacijos",
    icon: <CalendarDays size={20} />,
  },
  {
    href: "/dashboard/password",
    label: "Keisti slaptažodį",
    icon: <Lock size={20} />,
  },
  {
    href: "/dashboard/delete-account",
    label: "Ištrinti paskyrą",
    icon: <UserX size={20} />,
  },
];

/**
 * * Sidebar component for the client dashboard.
 * @param closeAction - function to close the sidebar on mobile devices
 */
const DashboardSidebar = ({ closeAction }: { closeAction?: () => void }) => {
  const pathname = usePathname();
  const router = useRouter();

  // Pre-fetching routes for better performance
  useEffect(() => {
    [
      "/dashboard/delete-account",
      "/dashboard/password",
      "/dashboard/bookings/active",
    ].forEach((route) => router.prefetch(route));
  }, [router]);

  // Function to handle route changes and close the sidebar on mobile devices
  const handleRouteChange = (href: string) => {
    router.push(href);
    if (closeAction) {
      closeAction();
    }
  };

  return (
    <>
      {/* Image and change posibility */}
      <div className="flex flex-col items-center gap-4">
        <Avatar className="h-18 w-18">
          <AvatarImage className="object-cover" src="/hero-1.jpg" />
          <AvatarFallback className="bg-secondary">CN</AvatarFallback>
        </Avatar>

        <button className="bg-background-primary item hover:bg-secondary/80 flex w-full justify-center gap-2 rounded-full px-6 py-3 text-sm transition-all duration-300 ease-in-out hover:-translate-y-[1px] hover:shadow-md">
          <span>Keisti nuotrauka</span>
        </button>
      </div>
      {/* Meniu */}
      <hr className="my-4 h-[0.5px] w-full border-none bg-neutral-200" />
      <h6 className="font-marcellus mb-2 text-sm">Meniu</h6>
      <div className="flex flex-col gap-2">
        {links.map(({ href, label, icon }) => (
          <button
            key={href}
            onClick={() => handleRouteChange(href)}
            className={`${
              pathname === href
                ? "bg-secondary text-black"
                : "bg-background-primary text-text"
            } item hover:bg-secondary/80 flex w-full items-center gap-2 rounded-full px-6 py-3 text-sm transition-all duration-300 ease-in-out hover:-translate-y-[1px] hover:shadow-md`}
          >
            {icon}
            <span>{label}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default DashboardSidebar;
