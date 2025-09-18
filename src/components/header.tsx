import { Dispatch, SetStateAction } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Sidebar from "./sidebar";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ isOpen, setIsOpen }: HeaderProps) {
  return (
    <header className="flex h-full border-r border-gray-300">
      {/* Left sidebar with menu + socials */}
      <div className="flex flex-col items-center h-full w-16 ">
        {/* Menu Button */}
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <Icon icon="material-symbols:menu" width="36" height="36" />
        </button>

        {/* Socials in the middle */}
        <div className="flex flex-col gap-6 flex-1 justify-center items-center">
          <Icon icon="entypo-social:facebook" width="20" height="20" />
          <Icon icon="entypo-social:linkedin" width="20" height="20" />
          <Icon icon="entypo-social:github" width="20" height="20" />
        </div>
      </div>

      {/* Expanding Sidebar (right beside header) */}
      <Sidebar isOpen={isOpen} />
    </header>
  );
}
