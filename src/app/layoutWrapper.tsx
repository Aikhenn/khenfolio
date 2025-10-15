"use client";

import { useState } from "react";
import Header from "@/components/header";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex box-border p-10 w-screen h-screen gap-16">
      <div className="fixed top-0 left-0 h-screen p-10">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

     <main
        className={`flex-1 px-24 justify-center items-center h-full transition-all duration-300  ${
          isOpen ? "ml-64" : "ml-16"
        }`}
      >{children}</main>
    </div>
  );
}
