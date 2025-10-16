"use client"
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Sidebar from "./sidebar";
import DrawerBar from "./drawerBar";
import Link from "next/link";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ isOpen, setIsOpen }: HeaderProps) {

  const [isMobile, setIsMobile] = useState(false);

  // Detect if user is on mobile or desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint (Tailwind default)
    };

    handleResize(); // check on first render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="flex h-full pr-2 px-0 :px-4 border-r  border-gray-300">
      {/* Left sidebar with menu + socials */}
    <div className="flex flex-row lg:flex-col items-center justify-between  w-full lg:w-fit ">
        {/* Menu Button */}
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <Icon icon="material-symbols:menu" width="36" height="36" />
        </button>

        {/* Socials in the middle */}
        <div className="flex flex-row lg:flex-col gap-6 flex-1 justify-center items-center">
          <Link href="https://github.com/Aikhenn"  target="_blank" rel="noopener noreferrer"  passHref>
            <Icon icon="entypo-social:linkedin" width="20" height="20" /> 
         </Link>
        <Link href="https://www.linkedin.com/in/aikhen-patino"target="_blank"rel="noopener noreferrer"passHref>
          <Icon icon="entypo-social:github" width="20" height="20" />
          </Link>
        </div>
      </div>

      {/* Expanding Sidebar  (right beside header) */}
      
      
         {/* Conditionally render DrawerBar or Sidebar */}
      {isMobile ? (
        <DrawerBar isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <Sidebar isOpen={isOpen} />
      )}
    </header>
  );
}
