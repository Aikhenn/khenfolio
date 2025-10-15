"use client";

import FadeInSection from "@/lib/intersectionObserver";
import Image from "next/image";

function skills() {
  const skillImage = [
    { src: "/assets/html.png", name: "HTML" },
    { src: "/assets/css.png", name: "CSS" },
    { src: "/assets/javascript.png", name: "JavaScript" },
    { src: "/assets/react.png", name: "React" },
    { src: "/assets/tailwind.png", name: "Tailwind" },
    { src: "/assets/MUI.png", name: "MUi" },
    { src: "/assets/vite.png", name: "Vite" },
  ];

  const skillImage2 = [
    { src: "/assets/nodeJS.png", name: "Node.JS" },
    { src: "/assets/expressJS.png", name: "expressJS" },
    { src: "/assets/python.png", name: "python" },
    { src: "/assets/csharp.png", name: "csharp" },
    { src: "/assets/php.png", name: "php" },
    { src: "/assets/mongoDB.png", name: "mongoDB" },
    { src: "/assets/mysql.png", name: "mysql" },
  ];

  return (
    <div className="flex flex-col items-center   ">
      <div className="w-full  ">
        <FadeInSection>
          <div className="bg-gray-300 w-full flex justify-center p-2 rounded-3xl">
            <h1 className="font-extrabold text-3xl">Skills</h1>
          </div>
        </FadeInSection>
      </div>

      <div className="w-full  ">
        <FadeInSection>
          <div className="w-full bg-[#343DE0] p-8 flex flex-col justify-center items-center my-4 rounded-2xl  py-12">
            <h1 className="text-white font-bold text-3xl">Developer</h1>
            <h3 className="text-white">
              skills and tech stacks I’ve used and have an experience with
            </h3>
          </div>
        </FadeInSection>
      </div>

      <div className="w-full  max-w-[1080px]">
        <FadeInSection>
          <div className="font-bold">Front End</div>
          <div className="w-full p-16 grid grid-cols-4 gap-8 items-stretch  justify-center border-2  max-w-[1080px]">
            {skillImage.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <Image
                  src={skill.src}
                  alt={skill.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <h4 className="font-bold text-md">{skill.name}</h4>
              </div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="font-bold">Back End</div>
          <div className="w-full p-16 grid grid-cols-4 gap-8  justify-center border-2  max-w-[1080px]">
            {skillImage2.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={skill.src}
                  alt={skill.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <h4 className="font-bold text-md">{skill.name}</h4>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>


     
    </div>
  );
}

export default skills;
