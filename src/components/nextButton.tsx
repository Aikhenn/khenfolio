import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";



interface Props {
    next: string;
    previous: string;
}
function NextButton({next, previous}: Props ) {

   const getLink = (label: string) => {
    switch (label) {
      case "Home":
        return "/";
      case "About Me":
        return "/about";
      case "Contact":
        return "/contact";
      case "My Projects":
        return "/projects";
       case "My Skills":
        return "/skills";
      default:
        return "#"; // fallback if no match
    }
  };

  return (
    <>
      <div className="flex w-full gap-8 pb-12">
        <Link href={getLink(previous)} className="w-1/2">
          <div
            className="flex border-1 shadow-xl rounded-2xl hover:border-[#343DE0] hover:scale-105 hover:shadow-[#343DE0]/40 
            transition-all duration-300 ease-in-out transform items-center gap-4 w-full h-full p-12"
          >
            <Icon icon="material-symbols:arrow-back-rounded" width={50} />
            <h2 className="font-bold text-5xl">{previous} </h2>
          </div>
        </Link>

         <Link href={getLink(next)} className="w-1/2">
          <div
            className="flex border-1 shadow-xl rounded-2xl hover:border-[#343DE0] hover:scale-105 hover:shadow-[#343DE0]/40 
            transition-all duration-300 ease-in-out transform items-center gap-4 w-full h-full p-12 justify-end"
          >
            <h2 className="font-bold text-5xl">{next} </h2>
           <Icon icon="material-symbols:arrow-forward-rounded" width={50} />

          </div>
        </Link>
      </div>
    </>
  );
}

export default NextButton;
