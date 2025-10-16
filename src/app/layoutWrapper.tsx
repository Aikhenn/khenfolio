"use client";

import { useState } from "react";
import Header from "@/components/header";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row box-border w-screen h-screen">
      <div className=" top-0 p-2 left-0 h-screen  ">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

     <main
        className={`flex-1 p-4 lg:px-12  justify-center items-center h-full transition-all duration-300`}
      >{children}</main>
    </div>
  );
}
