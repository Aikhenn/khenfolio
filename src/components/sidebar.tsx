"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type SidebarProps = {
  isOpen: boolean;
};

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <motion.aside
        className={`h-full box-border  transition-all duration-300 ${isOpen ? "px-6" : "p-0"}`}
      initial={{ width: 0 }}
      animate={{ width: isOpen ? 150 : 0 }}
      transition={{ type: "tween", duration: 0.1 }}
    >
      <div
        className={`overflow-hidden ${
          isOpen ? "opacity-100" : "opacity-0"
        } transition-opacity duration-200`}
      >
        <h2 className="text-xl font-bold">Menu</h2>
        <ul className="flex flex-col gap-4 mt-2">
            <li><Link href="/" className="hover:text-[#343DE0] cursor-pointer">
                Home
                </Link>
            </li>
            <li>
                <Link href="/about" className="hover:text-[#343DE0] cursor-pointer">
                About
                </Link>
            </li>
            <li>
                <Link href="/projects" className="hover:text-[#343DE0] cursor-pointer">
                Projects
                </Link>
            </li>
            <li>
                <Link href="/skills" className="hover:text-[#343DE0] cursor-pointer">
                Skills
                </Link>
            </li>
            <li>
                <Link href="/contact" className="hover:text-[#343DE0] cursor-pointer">
                Contact
                </Link>
            </li>
        </ul>
      </div>
    </motion.aside>
  );
}
