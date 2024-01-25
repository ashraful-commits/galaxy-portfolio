
import { PiCoffeeLight  } from "react-icons/pi"
import { BsFullscreenExit } from "react-icons/bs";
const About = () => {
  return <div id="about" className="container relative z-0 flex items-center justify-center w-full min-h-screen py-20">
    <div className="absolute left-0 z-0 w-full h-full">
        <img className="object-cover w-full h-full" src="/galaxy.gif"/>
    </div>
    <div className="z-10 grid items-center justify-center gap-x-10 gap-y-44 lg:gap-y-40 md:gap-y-40 lg:grid-cols-2 md:grid-cols-1">
        <div className="border   group relative z-0 p-10 flex justify-center items-center border-gray-900 rounded-2xl lg:w-[40vw] md:w-[70vw] bg-opacity-10 bg-blue-600 w-[80vw] hover:bg-blue-700 hover:bg-opacity-50 transition-all duration-500 ease-in-out min-h-[35vw] shadow-2xl ">
            <div className="absolute -top-[30px] shadow-3xl bg-gray-900 bg-opacity-20 rounded-2xl left-0 z-0 w-full h-full -skew-y-3 border-t-[2px] border-t-gray-700 border-dotted"></div>
            <PiCoffeeLight  size={300} className="z-20 font-bold" color="#ffffff"/>
        </div>
        <div className="bg-opacity-10  relative bg-blue-600 border flex flex-col justify-center p-10 items-center border-gray-900 z-10 rounded-2xl lg:w-[40vw] md:w-[70vw] w-[80vw] min-h-[35vw]  hover:bg-blue-600 hover:bg-opacity-50 transition-all duration-500 ease-in-out">
        <div className="absolute -top-[30px] shadow-3xl bg-gray-900 bg-opacity-20 rounded-2xl left-0 z-0 w-full h-full skew-y-3 border-t-[2px] border-t-gray-700 border-dotted"></div>
            <h2 className="text-white reflection leading-8 text-[32px] lg:text-[50px] md:text-[50px] font-syncopate  my-10 z-30">About Me</h2>
            <p className="text-justify text-gray-300 font-gruppo text-[18px] z-20">Greetings! I&apos;m a skilled MERN developer, on a mission to transform ideas into captivating digital experiences. My expertise in React.js empowers me to engineer efficient code, weaving together seamless and intuitive UIs. With a MERN-focused background, I&apos;ve honed my skills in architecting RESTful APIs, orchestrating databases, and integrating cutting-edge libraries that enhance user interactions.</p>
        </div>
        <div className="relative reflection  z-10 border bg-opacity-10 bg-blue-600 flex flex-col justify-center p-10 items-center border-gray-900 rounded-2xl lg:w-[40vw] md:w-[70vw] w-[80vw] min-h-[35vw]  hover:bg-blue-700 hover:bg-opacity-50 transition-all duration-500 ease-in-out">
        <div className="absolute -top-[30px] shadow-3xl bg-gray-900 bg-opacity-20 rounded-2xl left-0 z-0 w-full h-full -skew-y-3 border-t-[2px] border-t-gray-700 border-dotted"></div>
        <h2 className="text-white reflection text-[32px] lg:text-[50px] md:text-[50px] font-syncopate my-10 leading-9 z-20  ">My professional Skills</h2>
            <p className="text-justify text-gray-300 font-gruppo text-[18px] z-30">With expertise in both front-end and back-end technologies, I ensure the creation of dynamic and user-focused web applications. Let&apos;s collaborate to turn your ideas into reality and deliver a seamless digital experience. Reach out to discuss your project today.</p>
            <div className="relative z-50 flex flex-col w-full mt-5 gap-y-2">
                <div className="w-full h-[20px] overflow-hidden border border-blue-900 rounded-full">
                <div className="w-[90%] uppercase h-full bg-blue-600 bg-opacity-20 flex justify-center items-center text-[10px] font-gruppo text-white"><span>fontend</span></div>
                </div>
                <div className="w-[100%] h-[20px] overflow-hidden border border-blue-900 rounded-full">
                    <div className="w-[90%] uppercase h-full bg-blue-600 bg-opacity-20 flex justify-center items-center text-[10px] font-gruppo text-white"><span>backend</span></div>
                </div>
                <div className="w-full h-[20px] overflow-hidden border border-blue-900 rounded-full">
                <div className="w-[90%] uppercase h-full bg-blue-600 bg-opacity-20 flex justify-center items-center text-[10px] font-gruppo text-white"><span>mern</span></div>
                </div>
            </div>
        </div>
        <div className="reflection hover:bg-blue-600 hover:bg-opacity-50 transition-all duration-500 ease-in-out relative z-30 border bg-opacity-10 bg-blue-600 p-10 flex justify-center items-center border-gray-900 rounded-2xl lg:w-[40vw] md:w-[70vw] w-[80vw] min-h-[36vw]"> 
        <div className="absolute  -top-[30px] shadow-3xl rounded-2xl left-0 z-0 w-full h-full skew-y-3 border-t-[2px] border-t-gray-700 border-dotted"></div><BsFullscreenExit  size={300} fontWeight={100} className="z-20 font-bold" color="#ffffff"/></div>
    </div>
  </div>;
};

export default About;
