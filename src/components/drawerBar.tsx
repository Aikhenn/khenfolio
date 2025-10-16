"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DrawerBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DrawerBar({ isOpen, setIsOpen }: DrawerBarProps) {
  const pathname = usePathname();
  const handleClose = () => setIsOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
      <DrawerContent className="ml-auto w-full pl-4">
        <DrawerHeader>
          <DrawerClose asChild>
            <Button
              variant="outline"
              className="w-fit py-2 text-xl"
              onClick={handleClose}
            >
              X
            </Button>
          </DrawerClose>

          <h2 className="text-xl font-bold mt-4">Menu</h2>

          <ul className="flex flex-col gap-2 mt-4">
            {navLinks.map((link) => (
              <li key={link.href} onClick={handleClose}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 rounded-md border-b border-black/20 transition-colors
                    hover:bg-gray-200 
                    ${pathname === link.href ? "bg-gray-300/40" : "bg-transparent"}
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </DrawerHeader>
        <DrawerFooter />
      </DrawerContent>
    </Drawer>
  );
}
