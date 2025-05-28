"use client";

import { useEffect } from "react";
import "cookieconsent/build/cookieconsent.min.css";

export const CookieBanner = () => {
  useEffect(() => {
    import("cookieconsent").then(() => {
      if (typeof window !== "undefined" && "cookieconsent" in window) {
        // TypeScript fix: declare cookieconsent type
        (window as any).cookieconsent.initialise({
          palette: {
            popup: { background: "#000" },
            button: { background: "#9CD2D1" },
          },
          theme: "classic",
          position: "bottom-right",
          content: {
            message:
              "Mes naudojame slapukus, kad pagerintume jūsų naršymo patirtį.",
            dismiss: "Supratau!",
            link: "Sužinoti daugiau",
            href: "/privatumo-politika",
          },
        });
      }
    });
  }, []);

  return null;
};
