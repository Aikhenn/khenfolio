"use client";

import { useState } from "react";
import Header from "@/components/header";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row box-border w-screen min-h-[100dvh]">
      <div className="p-2 w-full lg:w-auto lg:h-screen">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <main className="flex-1 min-h-0 overflow-y-auto p-4 lg:px-12 justify-center items-center transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
