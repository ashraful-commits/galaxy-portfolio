import Menu from "./Menu";
import { FaReact,FaNode,FaFigma   } from "react-icons/fa";
import { TbBrandNextjs,TbBrandThreejs  } from "react-icons/tb";
import { SiRemix,SiSocketdotio,SiExpress ,SiFramer ,SiTailwindcss,SiMui   } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
const Hero = () => {
  return <div className="relative z-0 w-full min-h-screen">
    <img className="absolute top-0 left-0 z-10 w-full h-full" src="/public/galaxy.gif" alt="" />
    <div className="absolute z-50 w-full">
    <Menu/>
    <div className="flex flex-col items-center justify-center w-full h-full px-10 mt-52 logo">
        <span className="reflection lg:text-[50px]  md:text-[50px]  text-[36px] leading-9 mx-auto inline-block text-center my-2 text-white font-syncopate font-[100] bg-gradient-to-b from-red-500 to-white bg-clip-text ">Hi, I&apos;M MD ASHRAFUL ALAM</span>
        
        <div className="flex flex-wrap items-center justify-center gap-5 my-10 reflection">
        <FaReact fill="white" fontSize="24" /> 
        <TbBrandNextjs fill="white" fontSize="24" /> 
        <SiRemix fill="white" fontSize="24" /> 
        <SiSocketdotio fill="white" fontSize="24" /> 
        <FaNode  fill="white" fontSize="24" /> 
        <SiExpress   fill="white" fontSize="24" /> 
        <DiMongodb   fill="white" fontSize="24" /> 
        <SiFramer    fill="white" fontSize="24" /> 
        <TbBrandThreejs     fill="white" fontSize="24" /> 
        <FaFigma      fill="white" fontSize="24" /> 
        <SiTailwindcss       fill="white" fontSize="24" /> 
        <SiMui        fill="white" fontSize="24" /> 
        </div>
        <span className="lg:text-[30px] md:text-[30px] text-[18px] reflection mx-auto inline-block text-center text-white font-syncopate font-[100] my-2 bg-gradient-to-b from-red-500 to-white bg-clip-text leading-6">MERN STACK DEVELOPER</span>
        <button className=" px-10 bg-blue-600 bg-opacity-20 reflection hover:bg-blue-500 transition-all duration-500 ease-linear  py-3 rounded-md text-white  border-[.02px] overflow-hidden mt-10 border-gray-900 font-gruppo">Contact me</button>
    </div>
    </div>

  </div>;
};

export default Hero;
