"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(!scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-gray-800 text-white p-3 rounded-full shadow-lg animate-bounce cursor-pointer">
        <Icon icon="mdi:arrow-down" width={28} height={28} />
      </div>
    </div>
  );
}
