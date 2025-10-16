"use client"


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import DialogProject from "./dialogProj";
import FadeInSection from "@/lib/intersectionObserver";
import NextButton from "@/components/nextButton";
import ScrollIndicator from "@/components/scrollIndicator";


const projectData = [
  {
    id: 1,
    name: "Helen: An E-Commerce Application of Agricultural Products using Blockchain Technology for the Office of the Provincial Agriculture - Quezon",
  
    description:
      "Built a full-stack MERN web app and Flutter mobile commerce app integrated via RESTful APIs. Used MongoDB and AWS for scalable cloud data management. Led an Agile team developing an e-commerce platform for the agricultural sector, helping farmers market and manage their products efficiently.",
    image: "/helen.png",
    techStack: ["React", "ExpressJS", "NodeJS","MUI", "MongoDB", "AWS", "Flutter", "Github"],
    features: [
      "Web Admin Dashboard with Product and Account Management",
      "Agriculture Product Catalogue with sorting and filtering",
      "Mobile Commerce with responsive Interface Design",
      "Client Side Product Management",
      "Order Management and Tracking",
      "Payment and Checkout Process",
      "Login with OTP Verification",

    ]
  },
  {
    id: 2,
    name: "Tara Auct!; Web Commercialization and eCommerce ",
    description:
      "Developed a web application using Next.js, Node.js, Shadcn, and DaisyUI for a modern and responsive UI. Implemented MongoDB for efficient and scalable database management.",
    image: "/auct.png",
    techStack: ["React","NodeJS", "ExpressJS","Shadcn","MongoDB","Github"],
     features: [
      "Admin Dashboard with Product and Account Management",
      "Web Product List with Category System",
      "Shopping Cart and Checkout Process",
      "Order Management and Tracking",
      "Login with OTP Verification",
      
    ]

  },
  {
    id: 3,
    name: "Caphe Project",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/caphe.png",
    techStack: ["React", "NodeJS", "Shadcn","Github"],
    features: [
        "Shopping Cart and Checkout Process",
        "Order Management and Tracking",
        "Admin Dashboard with Product and Account Management",
        "Web Product List with Category System",
        "Login with OTP Verification",
      ]
  },
];

function Projects() {
    return (
        <div>

            <Breadcrumb className="py-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Projects</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

          <FadeInSection>
            <div className="bg-gray-300 w-full flex justify-center p-2 rounded-3xl">
                <h1 className="font-extrabold text-3xl">PROJECTS</h1>
            </div>
          </FadeInSection>

            {projectData.map((project) =>(
              <div  key={project.id}>

          
                <FadeInSection>
              <section 
               
                className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-24 items-center justify-center w-full p-2 lg:p-8 mt-4 lg:mt-10 mb-8">
                 
                <div className="flex flex-col gap-6 w-full">
                    <h1 className="text-sm lg:text-2xl font-bold text-justify ">{project.name}</h1>
                    <p className="hidden md:flex text-justify text-sm">{project.description}</p>

                    <div>
                        <DialogProject 
                          title={project.name}
                          desc={project.description}
                          techStack={project.techStack} 
                          features={project.features}
                        
                        />  
                    </div>
                </div>
                <div>
                    <Image
                        src={project.image}
                        alt={project.name}
                        width={800}
                        height={400}
                          className="w-[360px] h-[200px] lg:w-[800px] lg:h-[300px] object-cover rounded-lg"

                    />

                    
                </div>
              
            </section>
              </FadeInSection>
                  </div>
              ))}
          <NextButton previous="About Me" next="My Skills"/>
            <ScrollIndicator/>
        </div>

      );
}

export default Projects;