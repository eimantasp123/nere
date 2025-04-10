import ClientPortalMobileMenu from "@/components/ClientPortalMobileMenu";
import DashboardSidebar from "@/components/DashboardSidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <section className="bg-neutral-800">
        <div className="container mx-auto px-4 py-14 text-center lg:py-20">
          <h2 className="text-neutral-100">Kliento profilis</h2>
        </div>
      </section>
      <section className="bg-background font-jakarta">
        <div className="container mx-auto flex flex-col gap-3 space-y-3 px-4 pt-8 pb-20 md:flex-row md:gap-10 md:pt-12">
          <aside className="hidden w-[250px] md:block">
            <DashboardSidebar />
          </aside>
          <ClientPortalMobileMenu />
          {children}
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
