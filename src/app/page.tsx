"use client"

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
      setFade(false); // start fade/slide out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length); // change text
        setFade(true); // fade/slide in new text
      }, 500); // match exit animation duration
    }, 3000); // loop every 3s

    return () => clearInterval(interval);
  }, []);

  return (
  <main className="flex-1 flex flex-col h-full w-full ">

    {/* Large Gray Box */}
    <div className="bg-[#dfdfdf] flex w-full justify-between flex-1 items-center rounded-4xl p-10 h-[75%]">
      {/* Text Section */}
      <div className="font-bold text-left flex flex-col">
        <FadeInSection>
          <h2 className="text-xl font-light ml-2">HI I AM</h2>
          <h1 className="text-5xl">AIKHEN JOHN PATIÑO</h1>
          <h1
            className={`text-8xl font-black text-[#343DE0] transition-all duration-500 transform ${
              fade ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            {roles[index]}
          </h1>
        </FadeInSection>
      </div>

      {/* Image Section */}
      <div className="relative flex-shrink-0">
        <FadeInSection>
          <div className="flex relative top-0 z-10 w-[500px] h-[500px]  overflow-hidden">
            <Image
              aria-hidden
              src="/pfptest.png"
              alt="profile icon"
              fill
              className="object-cover"
            />
          </div>
        </FadeInSection>
      </div>
    </div>


  {/* Violet Boxes Row */}
    <FadeInSection>

  <div className="flex items-center gap-4 justify-center w-full my-8 rounded-xl h-[65%]">

<Link href="/about">
    <div className="bg-gray-100 w-[250px] h-[200px] mx-2 rounded-4xl text-center flex flex-col justify-center overflow-hidden shadow-md 
        cursor-pointer transform transition duration-500 ease-in-out hover:scale-102 hover:shadow-lg hover:shadow-black/40 hover:bg-gray-200">   
        <div className="text-center flex flex-col items-center p-6">  
          <Icon icon="carbon:user" width="50" height="50" color="#343DE0" />
          <h3 className="font-black text-xl mt-2">About Me</h3>
          <p>learn more about me</p>
        </div>
    </div>  
    </Link>
 
    <div className="bg-[#343DE0] text-white w-[250px] h-[200px] rounded-4xl text-center flex flex-col items-center justify-center overflow-hidden shadow-md
       cursor-pointer transform transition duration-500 ease-in-out hover:scale-102 hover:shadow-lg hover:shadow-black/40 hover:bg-[#323ad1]"> 
      
          <div className="text-center flex flex-col items-center p-6">  
            <Icon icon="carbon:document" width="40" height="40" color="white" />
            <h3 className="font-black text-xl mt-2 ">Projects</h3>
            <p className="text-sm">see all my personal projects</p>
          </div>
      
    </div>  
  
        <div className="bg-gray-100 w-[250px] h-[200px] mx-2 rounded-4xl text-center flex flex-col justify-center overflow-hidden shadow-md 
        cursor-pointer transform transition duration-500 ease-in-out hover:scale-102 hover:shadow-lg hover:shadow-black/40 hover:bg-gray-200">   
        
          <div className="text-center flex flex-col items-center p-6"> 
        <Icon icon="carbon:lightning" width="50" height="50" color="#343DE0" />
        <h3 className="font-black text-xl mt-2">Skills</h3>
        <p>see all my expertise</p>
        </div>
      
    </div>  
     <div className="bg-[#343DE0] text-white w-[250px] h-[200px] rounded-4xl text-center flex flex-col items-center justify-center overflow-hidden shadow-md
       cursor-pointer transform transition duration-500 ease-in-out hover:scale-102 hover:shadow-lg hover:shadow-black/40 hover:bg-[#323ad1]">
       
          <div className="text-center flex flex-col items-center p-6"> 
        <Icon icon="carbon:gem" width="50" height="50" color="white" />
        <h3 className="font-black text-xl mt-2 ">Achievements</h3>
        <p>all my awards and milestones</p>
        </div>
      
    </div> 
  </div>
      </FadeInSection> 

  
</main>
  );
}
