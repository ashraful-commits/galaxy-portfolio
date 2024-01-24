import { FaReact ,FaNodeJs,FaNpm ,FaGithub  } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRemix,SiMongodb ,SiExpress,SiTailwindcss,SiMui    } from "react-icons/si";
const Skills = () => {
  return <div className="container relative z-0 flex flex-col items-center justify-center w-full min-h-screen py-20">
    <div className="absolute top-0 left-0 z-10 w-full h-full">
        <img className="w-full h-full" src="/galaxy.gif"/>
    </div>
     <h2 className="text-white font-syncopate text-[32px] lg:text-[50px] md:text-[50px] leading-9 relative text-center z-30 reflection ">Professional skills</h2>
    <div className="relative z-20 grid items-center justify-center h-full grid-cols-2 mt-20 gap-x-1 gap-y-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
        <div className="relative z-0 flex items-center justify-center transition-all duration-500 ease-in-out bg-blue-600 border border-gray-900  hover:bg-blue-700 hover:bg-opacity-70 min-w-[40vw] md:min-w-[20vw] lg:min-w-[15vw] min-h-[25vh] bg-opacity-10">
            
            <FaReact className="relative z-30 reflection" size={100} color="#ffffff"/>
        </div>
        <div className="relative z-0 flex items-center justify-center transition-all duration-500 ease-in-out bg-blue-600 border border-gray-900  hover:bg-blue-700 hover:bg-opacity-70 min-w-[40vw] md:min-w-[20vw] lg:min-w-[15vw] min-h-[25vh] bg-opacity-10">
            
            <TbBrandNextjs className="relative z-30 reflection" size={100} color="#ffffff"/>
        </div>
        <div className="relative z-0 flex items-center justify-center transition-all duration-500 ease-in-out bg-blue-600 border border-gray-900  hover:bg-blue-700 hover:bg-opacity-70 min-w-[40vw] md:min-w-[20vw] lg:min-w-[15vw] min-h-[25vh] bg-opacity-10">
            
            <SiRemix className="relative z-30 reflection" size={100} color="#ffffff"/>
        </div>
        <div className="relative z-0 flex items-center justify-center transition-all duration-500 ease-in-out bg-blue-600 border border-gray-900  hover:bg-blue-700 hover:bg-opacity-70 min-w-[40vw] md:min-w-[20vw] lg:min-w-[15vw] min-h-[25vh] bg-opacity-10">
            
            <FaNodeJs  className="relative z-30 reflection" size={100} color="#ffffff"/>
        </div>
        <div className="relative z-0 flex items-center justify-center transition-all duration-500 ease-in-out bg-blue-600 border border-gray-900  hover:bg-blue-700 hover:bg-opacity-70 min-w-[40vw] md:min-w-[20vw] lg:min-w-[15vw] min-h-[25vh] bg-opacity-10">
            
            <SiMongodb   className="relative z-30 reflection" size={100} color="#ffffff"/>
        </div>
        <div className="relative z-0 flex items-center justify-center transition-all duration-500 ease-in-out bg-blue-600 border border-gray-900  hover:bg-blue-700 hover:bg-opacity-70 min-w-[40vw] md:min-w-[20vw] lg:min-w-[15vw] min-h-[25vh] bg-opacity-10">
            
            <SiExpress    className="relative z-30 reflection" size={100} color="#ffffff"/>
        </div>
        <div className="relative z-0 flex items-center justify-center transition-all duration-500 ease-in-out bg-blue-600 border border-gray-900  hover:bg-blue-700 hover:bg-opacity-70 min-w-[40vw] md:min-w-[20vw] lg:min-w-[15vw] min-h-[25vh] bg-opacity-10">
            
            <SiTailwindcss    className="relative z-30 reflection" size={100} color="#ffffff"/>
        </div>
        <div className="relative z-0 flex items-center justify-center transition-all duration-500 ease-in-out bg-blue-600 border border-gray-900  hover:bg-blue-700 hover:bg-opacity-70 min-w-[40vw] md:min-w-[20vw] lg:min-w-[15vw] min-h-[25vh] bg-opacity-10">
            
            <SiMui     className="relative z-30 reflection" size={100} color="#ffffff"/>
        </div>
        <div className="relative z-0 flex items-center justify-center transition-all duration-500 ease-in-out bg-blue-600 border border-gray-900  hover:bg-blue-700 hover:bg-opacity-70 min-w-[40vw] md:min-w-[20vw] lg:min-w-[15vw] min-h-[25vh] bg-opacity-10">
            
            <FaNpm      className="relative z-30 reflection" size={100} color="#ffffff"/>
        </div>
        <div className="relative z-0 flex items-center justify-center transition-all duration-500 ease-in-out bg-blue-600 border border-gray-900  hover:bg-blue-700 hover:bg-opacity-70 min-w-[40vw] md:min-w-[20vw] lg:min-w-[15vw] min-h-[25vh] bg-opacity-10">
            
            <FaGithub        className="relative z-30 reflection" size={100} color="#ffffff"/>
        </div>
    </div>
  </div>;
};

export default Skills;

