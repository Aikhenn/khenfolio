"use client"

import FadeInSection from "@/lib/intersectionObserver";
import Image from "next/image";

function skills() {
    return ( 
        <div className="flex flex-col items-center ">
                <div className="w-full ">
                <FadeInSection>
                <div className="bg-gray-300 w-full flex justify-center p-2 rounded-3xl">
                    <h1 className="font-extrabold text-3xl">Skills</h1>
                </div>
                </FadeInSection>
            </div>
           
           <div className="w-full  max-w-[1080px]">
            <FadeInSection>
            <div className="w-full bg-[#343DE0] p-8 flex flex-col justify-center items-center my-4 rounded-2xl  py-12">
                <h1 className="text-white font-bold text-3xl">Developer</h1>
                <h3 className="text-white">skills  and tech stacks I’ve used and have an experience with</h3>
            </div>
            </FadeInSection>
           </div>
         
           <div className="w-full  max-w-[1080px]">
            
        
        <FadeInSection>
            <div className="font-bold">Front End</div>
        <div className="w-full p-16 grid grid-cols-4 gap-8  justify-center border-2  max-w-[1080px]">
            <div className="flex flex-col items-center ">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
             <div className="flex flex-col items-center">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
        </div>
        </FadeInSection>

          <FadeInSection>
            <div className="font-bold">Back End</div>
        <div className="w-full p-16 grid grid-cols-4 gap-8  justify-center border-2  max-w-[1080px]">
            <div className="flex flex-col items-center ">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
             <div className="flex flex-col items-center">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
        </div>
        </FadeInSection>
 </div>

     <div className="w-full  max-w-[1080px]">
            <FadeInSection>
            <div className="w-full bg-[#343DE0] p-8 flex flex-col justify-center items-center my-4 rounded-2xl  py-12">
                <h1 className="text-white font-bold text-3xl">Developer</h1>
                <h3 className="text-white">skills  and tech stacks I’ve used and have an experience with</h3>
            </div>
            </FadeInSection>
           </div>
         
           <div className="w-full  max-w-[1080px]">
            
        
        <FadeInSection>
        <div className="w-full p-16 grid grid-cols-4 gap-8  justify-center border-2  max-w-[1080px]">
            <div className="flex flex-col items-center ">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
             <div className="flex flex-col items-center">
                <Image src="/html.png" alt="html" width={50} height={50} />
                <h4 className="font-bold text-md">HTML</h4>
            </div>
        </div>
        </FadeInSection>
 </div>
            
                        

        </div>
     );
}

export default skills;