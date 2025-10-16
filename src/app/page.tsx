"use client";

import ScrollIndicator from "@/components/scrollIndicator";
import FadeInSection from "@/lib/intersectionObserver";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = ["DEVELOPER", "GRAPHIC DESIGNER", "VIDEO EDITOR"];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex-1 flex flex-col h-full w-full  sm:py-6 md:py-10">
      {/* Large Gray Box */}
      <div className="bg-[#dfdfdf] flex flex-col-reverse md:flex-row justify-between items-center rounded-4xl p-6 md:p-10 gap-0 ">
        {/* Text Section */}
        <div className="font-bold  flex flex-col text-center md:text-left">
          <FadeInSection>
            <h2 className="text-md sm:text-lg md:text-2xl font-light">HI I AM</h2>
            <h1 className="text-lg sm:text-5xl md:text-4xl lg:text-4xl xl:text-6xl">
              AIKHEN JOHN PATIÑO
            </h1>
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black text-[#343DE0] transition-all duration-500 transform ${
                fade ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
            >
              {roles[index]}
            </h1>
          </FadeInSection>
        </div>

        {/* Image Section */}
        <FadeInSection>
          <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px]">
            <Image
              src="/pfptest.png"
              alt="profile icon"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </FadeInSection>
      </div>

      {/* Violet Boxes Row */}
      <FadeInSection>
        <div className="flex flex-wrap justify-center  items-center gap-6 md:gap-8 mt-8">
          {/* About Me */}
          <Link href="/about" className="w-full sm:w-fit  flex justify-center">
            <div className="bg-gray-100 max-w-[360px] w-full sm:w-[300px] md:w-[400px] lg:w-[250px] h-[160px] sm:h-[180px] md:h-[200px] rounded-3xl text-center flex flex-col justify-center items-center shadow-md cursor-pointer transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-black/40 hover:bg-gray-200">
              <Icon icon="carbon:user" width="40" height="40" color="#343DE0" />
              <h3 className="font-black text-lg sm:text-xl mt-2">About Me</h3>
              <p className="text-xs sm:text-sm">learn more about me</p>
            </div>
          </Link>

          {/* Projects */}
          <Link href="/projects" className="w-full sm:w-fit flex justify-center">
            <div className="bg-[#343DE0] text-white max-w-[360px] w-full sm:w-[300px] md:w-[400px] lg:w-[250px] h-[160px] sm:h-[180px] md:h-[200px] rounded-3xl text-center flex flex-col justify-center items-center shadow-md cursor-pointer transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-black/40 hover:bg-[#323ad1]">
              <Icon icon="carbon:document" width="35" height="35" />
              <h3 className="font-black text-lg sm:text-xl mt-2">Projects</h3>
              <p className="text-xs sm:text-sm">see all my personal projects</p>
            </div>
          </Link>

          {/* Skills */}
          <Link href="/skills" className="w-full sm:w-fit flex justify-center">
            <div className="bg-gray-100 max-w-[360px] w-full sm:w-[300px] md:w-[400px] lg:w-[250px] h-[160px]  sm:h-[180px] md:h-[200px] rounded-3xl text-center flex flex-col justify-center items-center shadow-md cursor-pointer transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-black/40 hover:bg-gray-200">
              <Icon icon="carbon:lightning" width="40" height="40" color="#343DE0" />
              <h3 className="font-black text-lg sm:text-xl mt-2">Skills</h3>
              <p className="text-xs sm:text-sm">see all my expertise</p>
            </div>
          </Link>

          {/* Contact */}
          <Link href="/contact" className="w-full sm:w-fit flex justify-center">
            <div className="bg-[#343DE0] text-white max-w-[360px] w-full sm:w-[300px] md:w-[420px] lg:w-[250px] h-[160px] sm:h-[180px] md:h-[200px] rounded-3xl text-center flex flex-col justify-center items-center shadow-md cursor-pointer transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-black/40 hover:bg-[#323ad1]">
              <Icon icon="carbon:gem" width="40" height="40" />
              <h3 className="font-black text-lg sm:text-xl mt-2">Contact Me</h3>
              <p className="text-xs sm:text-sm">my contact information</p>
            </div>
          </Link>
        </div>
      </FadeInSection>
      
    </main>
  );
}
