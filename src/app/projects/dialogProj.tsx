import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface DialogProjectProps {
  title: string;
  desc: string;
  techStack: string[];
  features: string[];

}

function DialogProject({ title, techStack, features,desc }: DialogProjectProps) {
    return ( 

        <Dialog>
            <DialogTrigger><Button>View Details</Button></DialogTrigger>
            <DialogContent className="lg:!max-w-2xl w-full pt-10 lg:pt-6 lg:pr-14">
                <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                  <p className="text-justify">{desc}</p>
                    <div className="mt-2 flex flex-col gap-2">
                      <h1 className="text-black font-bold">Tech Stack</h1>
                      <div className=" flex flex-wrap justify-center lg:justify-start gap-2"> 
                        {techStack.map((tech, index)=>(
                          <Badge key={index}>{tech}</Badge>

                        ))}
                      </div>
                    </div>

                     <div className="mt-5 flex flex-col gap-3">
                      <h1 className="text-black font-bold">Key Features</h1>
                        <ul>
                          {features.map((feature, index) =>(
                            <li className="list-disc ml-5 text-left  marker:text-blue-500" key={index}>{feature}</li>


                          ))} 
                            
                        </ul>
                    </div>
                   
                  
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
     );
}

export default DialogProject;