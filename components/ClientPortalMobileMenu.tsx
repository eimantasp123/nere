"use client";
import React, { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";

const ClientPortalMobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="bg-secondary w-full rounded-full py-3 text-center text-sm"
      >
        Kliento profilio meniu
      </button>
      <nav
        className={`bg-background ${openMenu ? "h-120 border-neutral-200 p-8" : "h-0 border-transparent p-0"} absolute top-14 right-0 left-0 overflow-hidden rounded-[20px] border shadow-lg transition-all duration-200 ease-in-out`}
      >
        <DashboardSidebar closeAction={() => setOpenMenu(false)} />
      </nav>
    </div>
  );
};

export default ClientPortalMobileMenu;
