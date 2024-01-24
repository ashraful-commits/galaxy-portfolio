
import  {  useState } from "react";
import chat from "../../public/chat.jpg";
import aboutbg from "../../public/herobg3.jpg";
import aboutbg3 from "../../public/bgabout2.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaFacebook,
  FaGithub,
  FaLink,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import CopyToClipboard from "./Clipboard";



const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = input;
    if (!name) {
      toast("Name field required!", {
        position: "bottom-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!email) {
      toast("Email field required!", {
        position: "bottom-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (!message) {
      toast("Message field required!", {
        position: "bottom-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const res = await fetch(
        "https://portfolio-6a5dc-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "content-Type": "aplication/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );
      if (res) {
        toast("Thank you!", {
          position: "bottom-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setInput({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast("🦄sorry!try again", {
          position: "bottom-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };
  return (
    <div
      className="relative z-0 flex items-center justify-center w-full min-h-screen overflow-auto container-fluid px "
    >
      
        <div className="absolute left-0 z-10 w-full h-full ">
            <img className="w-full h-full" src="/galaxy.gif" alt="" />
        </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      
      <div className="relative z-20 flex items-center justify-center w-full h-full ">
        <div className="flex flex-col items-center justify-center w-full h-full col">
          <div className="contact w-[85vw] h-[85vh] md:w-[85vw] md:h-[50vh] lg:w-[60vw] lg:h-[60vh] flex flex-col md:flex-row lg:flex-row">
            <div className="part1 w-[100%] bg-blue-500 bg-opacity-10 rounded-tl-xl  lg:rounded-tl-xl rounded-tr-xl md:rounded-tr-none lg:rounded-tr-none md:rounded-tl-xl md:rounded-bl-xl dark:bg-gray-900 dark:bg-opacity-80 z-0 h-[100%]  flex justify-center items-center relative">
             
              <div className="absolute z-20 flex flex-col items-center justify-center w-full h-full">
                <p
                  
                  className="flex items-center justify-center gap-2 text-xl text-white font-gruppo"
                >
                  Hi, Let&apos;s Quick chat <AiFillMessage />
                </p>
                <p
          
                  className="mb-2 text-white font-gruppo"
                >
                  I reply within 24 hours
                </p>
                <button
                  
                  className="flex bg-blue-500 bg-opacity-20 hover:bg-opacity-60 text-white px-[12px] py-[6px] text-sm gap-2 rounded-md justify-center items-center"
                >
                  <CopyToClipboard />
                  <FaLink />
                </button>
              </div>
            </div>
            <div className="part2 w-[100%] h-[100%] relative flex flex-col rounded-bl-xl lg:rounded-bl-none md:rounded-bl-none rounded-br-xl  md:rounded-tr-xl lg:rounded-tr-xl md:rounded-br-xl  lg:rounded-br-xl justify-between bg-blue-500 bg-opacity-10 dark:bg-gray-900 dark:bg-opacity-80 lg:p-10 md:p-7 p-5">
              <span className="absolute w-5 h-5 bg-white rounded-full"></span>
              <h1
               
                className="text-right text-[32px] lg:text-[45px] leading-10 text-white md:text-[40px] capitalize font-syncopate italic"
              >
                Contact <br />
                <span className="text-[30px] lg:text-[32px] md:text-[32px] font-syncopate">
                  {" "}
                  <span className="text-gray-500"> ________Me</span>
                </span>
              </h1>
              <form
                action=""
                onSubmit={handleSubmit}
                className="flex flex-col gap-7 lg:gap-10 md:gap-5 "
              >
                <input
                  name="name"
                  value={input.name}
                  
                  type="text"
                  onChange={handleInput}
                  className="py-2 text-sm bg-transparent border-b border-gray-800 focus:outline-none placeholder:text-white font-gruppo"
                  placeholder="Your Name"
                />
                <input
         
                  type="text"
                  name="email"
                  onChange={handleInput}
                  value={input.email}
                  className="py-2 text-sm bg-transparent border-b border-gray-800 focus:outline-none placeholder:text-white font-gruppo"
                  placeholder="Your Email"
                />
                <input
                  name="message"
                  value={input.message}
                  onChange={handleInput}
                  
                  type="text"
                  className="py-2 text-sm bg-transparent border-b border-gray-800 focus:outline-none placeholder:text-white font-gruppo"
                  placeholder="Your message here"
                />
                <button
                  
                  type="submit"
                  className="px-2 py-1 mt-5 mb-5 font-bold text-white transition-all duration-100 delay-75 bg-blue-600 bg-opacity-20 lg:px-4 lg:py-2 hover:bg-blue-600 hover:text-white font-gruppo"
                >
                  Submit
                </button>
              </form>
              <div className="icons">
                <ul className="flex justify-center gap-3">
                  <li
        
                    className="group"
                  >
                    <a
                      target="blank"
                      href={"https://www.facebook.com/beautyformind/"}
                    >
                      <FaFacebook className="text-lg text-white transition-all duration-100 delay-100 scale-100 group-hover:text-blue-500 group-hover:scale-110" />
                    </a>
                  </li>
                  <li
          
                    className="group"
                  >
                    <a
                      target="blank"
                      href="https://www.linkedin.com/in/beautifulmind/"
                    >
                      <FaLinkedinIn className="text-lg text-white transition-all duration-100 delay-100 scale-100 group-hover:text-blue-800 group-hover:scale-125" />
                    </a>
                  </li>
                  <li
                  
                    className="group"
                  >
                    <a target="blank" href="">
                      <FaTwitter className="text-lg text-white transition-all duration-100 delay-100 scale-100 group-hover:text-sky-500 group-hover:scale-125" />
                    </a>
                  </li>
                  <li
    
                    className="group"
                  >
                    <a
                      target="blank"
                      href="https://github.com/ashraful-commits"
                    >
                      <FaGithub className="text-lg text-white transition-all duration-100 delay-100 scale-100 group-hover:text-black group-hover:scale-125" />
                    </a>
                  </li>
                  <li
              
                    className="group"
                  >
                    <a target="blank" href="https://wa.me/01955127330">
                      <FaWhatsapp className="text-lg text-white transition-all duration-100 delay-100 scale-100 group-hover:text-green-500 group-hover:scale-125" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
