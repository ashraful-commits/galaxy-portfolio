
import { FaReact,FaNode,FaFigma   } from "react-icons/fa";
import { TbBrandNextjs,TbBrandThreejs  } from "react-icons/tb";
import { SiRemix,SiSocketdotio,SiExpress ,SiFramer ,SiTailwindcss,SiMui   } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
const Hero = () => {
  return <div id="home" className="container relative z-0 w-full min-h-screen group">
    <div className="absolute top-0 left-0 z-10 w-full h-full">
    <img className="w-full h-full " src="/galaxy.gif" alt="galaxy" />
    </div>
    <div className="absolute z-[9999999] w-full">
    
    <div className="flex flex-col items-center justify-center w-full h-full px-10 mt-52 logo">
        <span className="reflection lg:text-[50px]  md:text-[50px]  text-[36px] leading-9 mx-auto inline-block text-center my-2 text-white font-syncopate font-[100] bg-gradient-to-b from-red-500 to-white bg-clip-text group-hover:text-green-600">Hi, I&apos;M MD ASHRAFUL ALAM</span>
        <span className="lg:text-[30px] md:text-[30px] text-[18px] reflection mx-auto inline-block text-center text-white font-syncopate font-[100] my-5 bg-gradient-to-b from-red-500 to-white bg-clip-text leading-6">
          <span className="mr-2">A</span>
          <span className="group-hover:text-green-500">M</span>
          <span className="group-hover:text-orange-500">E</span>
          <span className="group-hover:text-blue-500">R</span>
          <span className="mr-2 group-hover:text-green-500">N</span>
            STACK DEVELOPER
          
          </span>
        <div className="flex flex-wrap items-center justify-center gap-5 my-10 reflection">
        <FaReact className="group-hover:fill-red-500" fill="white" fontSize="24" /> 
        <TbBrandNextjs className="group-hover:fill-red-500" fill="white" fontSize="24" /> 
        <SiRemix className="group-hover:fill-red-500" fill="white" fontSize="24" /> 
        <SiSocketdotio className="group-hover:fill-red-500" fill="white" fontSize="24" /> 
        <FaNode  className="group-hover:fill-red-500" fill="white" fontSize="24" /> 
        <SiExpress   className="group-hover:fill-red-500" fill="white" fontSize="24" /> 
        <DiMongodb   className="group-hover:fill-red-500" fill="white" fontSize="24" /> 
        <SiFramer    className="group-hover:fill-red-500" fill="white" fontSize="24" /> 
        <TbBrandThreejs     className="group-hover:fill-red-500" fill="white" fontSize="24" /> 
        <FaFigma      className="group-hover:fill-red-500" fill="white" fontSize="24" /> 
        <SiTailwindcss       className="group-hover:fill-red-500" fill="white" fontSize="24" /> 
        <SiMui        className="group-hover:fill-red-500" fill="white" fontSize="24" /> 
        </div>
    
        <button className=" px-10 bg-blue-600 bg-opacity-5 group-hover: reflection hover:bg-white transition-all duration-500 ease-linear  py-3 rounded-md text-white hover:text-blue-500  border-[.02px] overflow-hidden mt-10 border-gray-900 font-gruppo font-bold">Contact me</button>
        <div className="mt-10 overflow-hidden transition-all duration-500 rounded-full w-72 h-72 opacity-5 group-hover:opacity-100">

        <img className="object-cover w-full h-full" src="/myphoto.png"/>
        </div>
    </div>
    </div>

  </div>;
};

export default Hero;
