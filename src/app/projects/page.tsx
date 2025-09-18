import { Button } from "@/components/ui/button";
import Image from "next/image";
import DialogProject from "./dialogProj";

function Projects() {
    return (
        <div>
            <div className="bg-gray-300 w-full flex justify-center p-2 rounded-3xl">
                <h1 className="font-extrabold text-3xl">Projects</h1>
            </div>

            <section className="flex gap-24 items-center justify-center w-full p-8 px-32 mt-10">
                <div className="flex flex-col gap-6">
                    <h1 className="text-2xl font-bold">Project Name</h1>
                     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                    <Button className="w-fit">View Details</Button>
                    <DialogProject/>  
                </div>
                <div>
                    <Image
                        src="https://placehold.co/600x400/jpg"
                        alt="Project pic"
                        width={600}
                        height={400}
                    />

                    
                </div>
            </section>
             <section className="flex gap-24 items-center justify-center w-full p-8 px-32 mt-10">
                <div className="flex flex-col gap-6">
                    <h1 className="text-2xl font-bold">Project Name</h1>
                     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                    <Button className="w-fit">View Details</Button>
                </div>
                <div>
                    <Image
                        src="https://placehold.co/600x400/jpg"
                        alt="Project pic"
                        width={600}
                        height={400}
                    />

                    
                </div>
            </section>

             <section className="flex gap-24 items-center justify-center w-full p-8 px-32 mt-10">
                <div className="flex flex-col gap-6">
                    <h1 className="text-2xl font-bold">Project Name</h1>
                     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                    <Button className="w-fit">View Details</Button>
                </div>
                <div>
                    <Image
                        src="https://placehold.co/600x400/jpg"
                        alt="Project pic"
                        width={600}
                        height={400}
                    />

                    
                </div>
            </section>
        </div>

      );
}

export default Projects;