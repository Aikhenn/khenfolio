import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

export default function About() {


    return (
        <div className="flex px-24 py-16 gap-10 w-full justify-evenly h-full ">
            <div className="h-full ">
                <Image
                    src="/profile2.jpg"
                    alt="profile"
                    width={800}
                    height={800}
                    className="rounded-2xl mb-8"
                />
                <div className="flex p-2 gap-4 items-center ">
                    <Icon icon="mdi-light:phone" width={25} height={25} />
                    <h4 className="text-xl">Phone Number</h4>
                </div>
                  <div className="flex p-2 gap-4 items-center ">
                    <Icon icon="mdi-light:phone" width={25} height={25} />
                    <h4 className="text-xl">Phone Number</h4>
                </div>
                <h3 className="text-2xl  p-2  font-bold mb-2">Languages</h3>
                <h4 className="text-xl  px-2 ">English</h4>
                <h4 className="text-xl px-2 ">Tagalog</h4>

            </div>

            <div className="w-full  p-8 flex flex-col gap-10 ">
                <div>
                    <h1 className="text-5xl font-bold">Aikhen John F. Patino</h1>
                    <h2 className="text-xl font-bold text-[#343DE0]">Developer</h2>
                </div>
            
                <p className="text-justify text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    labori s nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui  officia deserunt mollit anim id est laborum
                </p>

                <Button  className="w-fit">Download My CV</Button>


                <section>
                    <h3 className="text-2xl font-bold mb-2">My Experiences</h3>
                    <div className="flex gap-16 justify-start w-full items-start">
                            {/* Date */}
                            <h4 className="text-xl whitespace-nowrap">Dec 2024 - June 2025</h4>

                            {/* Circle */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-5 h-5 rounded-full bg-[#343DE0] mt-1" />
                                <div className="w-[2px] h-30 bg-gray-500"/>
                            </div>

                            {/* Content */}
                            <div>
                                <h4 className="text-xl font-bold">Data Analyst Intern</h4>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                </p>
                            </div>
                        </div>
                </section>


                <section>
                    <h3 className="text-2xl font-bold mb-4">Awards & Acheivements</h3>
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi-light:trophy" width={30} height={30} />
                        <h4 className="text-lg">Magna Cum Laude</h4>
                    </div>
                     <div className="flex items-center gap-4">
                        <Icon icon="mdi-light:trophy" width={30} height={30} />
                        <h4 className="text-lg">Magna Cum Laude</h4>
                    </div>
                     <div className="flex items-center gap-4">
                        <Icon icon="mdi-light:trophy" width={30} height={30} />
                        <h4 className="text-lg">Magna Cum Laude</h4>
                    </div>
                </section>

                 <section className="pb-30">
                    <h3 className="text-2xl font-bold mb-4">Skills</h3>

                    <h4>Web Development</h4>
                    <div className="w-3/4 flex gap-4 items-center mb-4">
                            <Progress value={75} />
                            <h4 className="text-[#343DE0] font-bold">75%</h4>
                    </div>

                    <h4>Mobile Development</h4>
                    <div className="w-3/4 flex gap-4 items-center mb-4">
                            <Progress value={54} />
                            <h4 className="text-[#343DE0] font-bold">54%</h4>
                    </div>

                      <h4>Graphic Design</h4>
                    <div className="w-3/4 flex gap-4 items-center mb-4">
                            <Progress value={63} />
                            <h4 className="text-[#343DE0] font-bold">63%</h4>
                    </div>

                      <h4>Video Editing</h4>
                    <div className="w-3/4 flex gap-4 items-center mb-4">
                            <Progress value={92} />
                            <h4 className="text-[#343DE0] font-bold">92%</h4>
                    </div>


                
                </section>


            </div>

            

        </div>


      );
}

 ;