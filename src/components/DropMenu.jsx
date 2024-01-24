
import { BiHomeAlt2 } from "react-icons/bi";
import { SiAboutdotme,SiSkillshare } from "react-icons/si";
import { FaBlog } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { RiFunctionLine } from "react-icons/ri";
import { GrServices ,  } from "react-icons/gr";
const DropMenu = () => {
  return <div className="w-[200px] h-auto z-[99999] relative ">
    <div className="absolute z-50 w-full h-auto p-3 bg-blue-600 border border-gray-800 backdrop-blur-sm bg-opacity-15">
  <ul className="flex flex-col gap-3">
    <li className="flex gap-2 p-1 transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-blue-700 hover:bg-opacity-30"><BiHomeAlt2 size={25} color="white"/><a href="#home" className="text-white font-gruppo text-[20px]">Home</a></li>
    <li className="flex gap-2 p-1 transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-blue-700 hover:bg-opacity-30"> <SiAboutdotme size={25} color="white"/><a href="#about" className="text-white font-gruppo text-[20px]">About</a></li>
    <li className="flex gap-2 p-1 transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-blue-700 hover:bg-opacity-30"> <FaBlog size={25} color="white"/><a href="#blog" className="text-white font-gruppo text-[20px]">Blog</a></li>
    <li className="flex gap-2 p-1 transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-blue-700 hover:bg-opacity-30"> <IoIosContact size={25} color="white"/><a href="#contact" className="text-white font-gruppo text-[20px]">Contact</a></li>
    <li className="flex gap-2 p-1 transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-blue-700 hover:bg-opacity-30"> <RiFunctionLine size={25} color="white"/><a href="#project" className="text-white font-gruppo text-[20px]">Project</a></li>
    <li className="flex gap-2 p-1 transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-blue-700 hover:bg-opacity-30"> <GrServices size={25} color="white"/><a href="#service" className="text-white font-gruppo text-[20px]">Service</a></li>
    <li className="flex gap-2 p-1 transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-blue-700 hover:bg-opacity-30"> <SiSkillshare   size={25} color="white"/><a href="#skills" className="text-white font-gruppo text-[20px]">Skills</a></li>
  </ul>
  </div></div>;
};

export default DropMenu;
