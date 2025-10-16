"use client"

import NextButton from "@/components/nextButton";
import ScrollIndicator from "@/components/scrollIndicator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import FadeInSection from "@/lib/intersectionObserver";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

export default function About() {


  return (
    <>
   <Breadcrumb className="py-4">
    <BreadcrumbList>
        <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator/>
        <BreadcrumbItem>
        <BreadcrumbPage>About Me</BreadcrumbPage>
        </BreadcrumbItem>
    </BreadcrumbList>
    </Breadcrumb>

    <FadeInSection>
      <div className="bg-gray-300 w-full flex justify-center p-2 rounded-3xl">
        <h1 className="font-extrabold text-3xl">ABOUT ME</h1>
      </div>
      </FadeInSection>

      <FadeInSection>
      <div className="flex flex-col lg:flex-row items-start p-0 pt-8 lg:p-8 gap-10 w-full justify-evenly h-full ">
        <div className=" w-full lg:w-fit h-full text-center lg:text-left items-center lg:items-start flex flex-col ">
          <Image
            src="/profile2.jpg"
            alt="profile"
            width={600}
            height={600}
            className="rounded-full lg:rounded-2xl mb-8 w-50 h-50  object-cover  lg:h-auto lg:w-auto"
          />

            <div className="flex lg:hidden flex-col  text-center">
            <h1 className="text-2xl font-bold">Aikhen John F. Patino</h1>
            <h2 className="text-xl pt-2 font-bold text-[#343DE0]">Fullstack Developer | Mobile Developer</h2>
          </div>

        <section className="p-2">
            <h3 className="text-2xl font-bold mb-4">Certifications</h3>
            <div className="flex items-center gap-4">
              <Icon icon="mdi:trophy" width={30} height={30} color="#DAA520
" />
              <h4 className="text-lg">React Basics (Meta)</h4>
            </div>
          </section>

          <h3 className="text-2xl  p-2  font-bold mb-2">Languages</h3>
          <h4 className="text-xl  px-2 ">English</h4>
          <h4 className="text-xl px-2 ">Tagalog</h4>

          <section className="p-2 mt-2 w-full">
            <h3 className="text-2xl font-bold mb-4">Skills</h3>

            <h4>Web Development</h4>
            <div className="flex gap-4 items-center mb-4">
              <Progress value={75} />
              <h4 className="text-[#343DE0] font-bold">75%</h4>
            </div>

            <h4>Mobile Development</h4>
            <div className="flex gap-4 items-center mb-4">
              <Progress value={54} />
              <h4 className="text-[#343DE0] font-bold">54%</h4>
            </div>

            <h4>Graphic Design</h4>
            <div className=" flex gap-4 items-center mb-4">
              <Progress value={63} />
              <h4 className="text-[#343DE0] font-bold">63%</h4>
            </div>

            <h4>Video Editing</h4>
            <div className="flex gap-4 items-center mb-4">
              <Progress value={92} />
              <h4 className="text-[#343DE0] font-bold">92%</h4>
            </div>
          </section>
        </div>

        <div className="w-full p-0 lg:p-8 pt-2 pb-6 lg:pb-0 flex flex-col gap-6  lg:gap-10 ">
          <div className="hidden lg:flex flex-col">
            <h1 className="text-5xl font-bold">Aikhen John F. Patino</h1>
            <h2 className="text-xl pt-2 font-bold text-[#343DE0]">Fullstack Developer | Mobile Developer</h2>
          </div>

          <h1 className="flex lg:hidden text-2xl font-bold">Introduction</h1>
          <p className="text-justify lg:text-xl">
            Passionate Web & Mobile Developer with hands-on experience in
            full-stack development and a strong foundation in both front-end and
            back-end technologies. Adept at problem-solving, building responsive
            user interfaces, and developing scalable applications. Continuously
            learning and adapting to new tools and frameworks while contributing
            to innovative, real-world solutions that make a difference.
          </p>

          <Button className="w-fit"><a href="/docs/Resume_Patiño.pdf" download>Download My CV</a></Button>


          <section>
            <h3 className="text-2xl font-black mb-2">My Experiences</h3>
            <div className="flex flex-col xl:flex-row lg:gap-16 justify-start w-full items-start">
             
              {/* Date */}
              <h4 className="hidden xl:flex text-lg whitespace-nowrap">
                Dec 2024 - June 2025
              </h4>

              {/* Circle */}
              <div className="hidden xl:flex flex-col items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-[#343DE0] mt-1" />
                <div className="w-[2px] h-30 bg-gray-500" />
              </div>

              {/* Content */}
              <div>
                <h4 className="text-xl font-semibold ">Information Technology Intern</h4>
                <h4 className="flex xl:hidden text-md italic whitespace-nowrap pb-2">(Dec 2024 - June 2025)</h4>

                <p className="text-justify">
                  Managed 30+ data sheets (500+ rows each) using Microsoft
                  Office, ensuring accuracy and organization. Utilized
                  Squarespace to create, update and manage 3 websites Applied AI
                  tools to streamline data collection, pattern recognition, and
                  reporting tasks, improving efficiency.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-2">Education</h3>

            {/* Content */}
            <div className="mt-5">
              <h4 className="text-xl font-semibold">
                National University - Manila
              </h4>
              <p className="">
                Bachelor of Science in Information Technology with
                Specialization in Mobile and Web Applications
              </p>
              <div className="ml-4 lg:ml-10 mt-2">
                <ul className="list-disc italic ">
                  <li>
                    Office of the PRO - Most Active Office of the NU CCIT
                    Student Council Term 1 (AY 2023-2024)
                  </li>
                  <li>Consistent Dean&apos;s Lister (AY 2021-2025)</li>
                  <li>Magna Cum Laude)</li>
                </ul>
              </div>
            </div>

            <div className="mt-5">
              <h4 className="text-xl font-semibold">
                AMA Computer College East Rizal Campus
              </h4>
              <p>Tech-Voc - ICT Strand Senior Highschool (2019 -2021) </p>
              <div className="ml-4 lg:ml-10 mt-2">
                <ul className="list-disc italic">
                  <li>
                    Academic Excellence Awardee, With Honors (AY 2019-2021)
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-5">
              <h4 className="text-xl font-semibold">
                ST. Theresa’s School Of Novaliches
              </h4>
              <p>Junior Highschool (2016 - 2019) </p>
              <div className="ml-4 lg:ml-10 mt-2">
                <ul className="list-disc italic">
                  <li>
                    Consistent Academic Excellence Awardee, With Honors (AY
                    2015-2019)
                  </li>
                  <li>
                    Rank 2 Overall as an Academic Achiever (AY 2018 -2019)
                  </li>
                  <li>Editor of the Year (AY 2018 -2019)</li>
                </ul>
              </div>
            </div>
          </section>

        
        </div>


      </div>
      <NextButton previous="Home" next="My Projects"/>

      </FadeInSection>
                  <ScrollIndicator/>

    </>
  );
}
