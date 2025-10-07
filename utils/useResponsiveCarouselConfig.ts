"use client";
import { useState, useEffect } from "react";

export const useResponsiveCarouselConfig = (
  itemCount: number,
  defaultLg = 3,
) => {
  const [visibleCards, setVisibleCards] = useState(defaultLg);
  const [slidesToScroll, setSlidesToScroll] = useState(defaultLg);

  useEffect(() => {
    const updateConfig = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleCards(1);
        setSlidesToScroll(1);
      } else if (width < 1024) {
        setVisibleCards(2);
        setSlidesToScroll(2);
      } else {
        setVisibleCards(defaultLg);
        setSlidesToScroll(defaultLg);
      }
    };

    updateConfig(); // Initialize
    window.addEventListener("resize", updateConfig);
    return () => window.removeEventListener("resize", updateConfig);
  }, [defaultLg]);

  const showArrows = itemCount > visibleCards;

  return { visibleCards, slidesToScroll, showArrows };
};
