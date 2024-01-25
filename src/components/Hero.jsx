
import { FaReact,FaNode,FaFigma   } from "react-icons/fa";
import { TbBrandNextjs,TbBrandThreejs  } from "react-icons/tb";
import { SiRemix,SiSocketdotio,SiExpress ,SiFramer ,SiTailwindcss,SiMui   } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
const Hero = () => {
  return <div id="home" className="container relative z-0 w-full min-h-screen group">
    <div className="absolute top-0 left-0 z-10 w-full h-full">
    <img className="object-cover w-full h-full" src="/galaxy.gif" alt="galaxy" />
    </div>
    <div className="absolute z-[9999999] w-full">
    
    <div className="flex flex-col items-center justify-center w-full h-full px-10 mt-52 logo">
        <span className="reflection lg:text-[50px]  md:text-[50px]  text-[36px] leading-9 mx-auto inline-block text-center my-2 text-white font-syncopate font-[100] bg-gradient-to-b from-red-500 to-white bg-clip-text ">Hi, I&apos;M MD ASHRAFUL ALAM</span>
        <span className="lg:text-[30px] md:text-[30px] text-[18px] reflection mx-auto inline-block text-center text-white font-syncopate font-[100] my-5 bg-gradient-to-b from-red-500 to-white bg-clip-text leading-6">MERN STACK DEVELOPER</span>
        <div className="flex flex-wrap items-center justify-center gap-5 my-10 reflection">
        <FaReact fill="white" fontSize="30"  /> 
        <TbBrandNextjs fill="white" fontSize="30"  /> 
        <SiRemix fill="white" fontSize="30"  /> 
        <SiSocketdotio fill="white" fontSize="30"  /> 
        <FaNode  fill="white" fontSize="30"  /> 
        <SiExpress   fill="white" fontSize="30"  /> 
        <DiMongodb   fill="white" fontSize="30"  /> 
        <SiFramer    fill="white" fontSize="30"  /> 
        <TbBrandThreejs     fill="white" fontSize="30"  /> 
        <FaFigma      fill="white" fontSize="30"  /> 
        <SiTailwindcss       fill="white" fontSize="30"  /> 
        <SiMui        fill="white" fontSize="30"  /> 
        </div>
       
        <button className=" px-5 bg-blue-600 bg-opacity-20 reflection hover:bg-blue-500 transition-all duration-500 ease-linear  py-3 rounded-md text-white  border-[.02px] overflow-hidden mt-10 border-gray-900 font-gruppo">Contact me</button>
        <div className="w-32 h-32 mt-10 overflow-hidden transition-all duration-500 rounded-full md:w-72 md:h-72 lg:w-72 lg:h-72 opacity-5 group-hover:opacity-100">

        <img className="object-cover w-full h-full" src="/myphoto.png"/>
        </div>
    </div>
    </div>

  </div>;
};

export default Hero;
