import { useRef } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { BiHomeAlt2 } from 'react-icons/bi';
import { SiAboutdotme, SiSkillshare } from 'react-icons/si';
import { FaBlog } from 'react-icons/fa';
import { IoIosContact } from 'react-icons/io';
import { RiFunctionLine } from 'react-icons/ri';
import { GrServices } from 'react-icons/gr';

const DropMenu = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const serviceRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      scroll.scrollTo(ref.current.offsetTop, {
        duration: 800,
        smooth: 'easeInOutQuart',
      });
    }
  };

  return (
    <div className="w-[200px] h-auto z-[99999] relative ">
      <div className="absolute z-50 w-full h-auto p-3 bg-blue-600 border border-gray-800 backdrop-blur-sm bg-opacity-15">
        <ul className="flex flex-col gap-3">
          <li ref={homeRef} className="flex gap-2 p-1 transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-blue-700 hover:bg-opacity-30">
            <BiHomeAlt2 size={25} color="white" />
            <ScrollLink to="home" smooth={true} offset={-50} duration={800} className='text-[18px] text-white font-gruppo'>
              Home
            </ScrollLink>
          </li>
          <li ref={aboutRef} className="flex gap-2 p-1 transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-blue-700 hover:bg-opacity-30">
            <SiAboutdotme size={25} color="white" />
            <ScrollLink to="about" smooth={true} offset={-50} duration={800} className='text-[18px] text-white font-gruppo'>
              About
            </ScrollLink>
          </li>
          <li ref={blogRef} className="flex gap-2 p-1 transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-blue-700 hover:bg-opacity-30">
            <FaBlog size={25} color="white" />
            <ScrollLink to="blog" smooth={true} offset={-50} duration={800} className='text-[18px] text-white font-gruppo'>
              Blog
            </ScrollLink>
          </li>
          <li ref={contactRef} className="flex gap-2 p-1 transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-blue-700 hover:bg-opacity-30">
            <IoIosContact size={25} color="white" />
            <ScrollLink to="contact" smooth={true} offset={-50} duration={800} className='text-[18px] text-white font-gruppo'>
              Contact
            </ScrollLink>
          </li>
          <li ref={projectRef} className="flex gap-2 p-1 transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-blue-700 hover:bg-opacity-30">
            <RiFunctionLine size={25} color="white" />
            <ScrollLink to="project" smooth={true} offset={-50} duration={800} className='text-[18px] text-white font-gruppo'>
              Project
            </ScrollLink>
          </li>
          <li ref={serviceRef} className="flex gap-2 p-1 transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-blue-700 hover:bg-opacity-30">
            <GrServices size={25} color="white" />
            <ScrollLink to="service" smooth={true} offset={-50} duration={800} className='text-[18px] text-white font-gruppo'>
              Service
            </ScrollLink>
          </li>
          <li ref={skillsRef} className="flex gap-2 p-1 transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-blue-700 hover:bg-opacity-30">
            <SiSkillshare size={25} color="white" />
            <ScrollLink to="skills" smooth={true} offset={-50} duration={800} className='text-[18px] text-white font-gruppo'>
              Skills
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropMenu;
