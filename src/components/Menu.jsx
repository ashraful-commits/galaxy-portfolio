import { useEffect, useRef, useState } from "react";
import DropMenu from "./DropMenu";

const Menu = () => {
  const [menu,setMenu]= useState(false)
  const menuRef=useRef()
const closeMenu=(e)=>{
  if(menuRef.current&& !menuRef.current.contains(e.target)){
    setMenu(false)
  }
}

  useEffect(()=>{
    window.addEventListener("click",closeMenu)
    return ()=> window.removeEventListener("click",closeMenu)
  },[])
  return <div ref={menuRef} className="container fixed top-0 z-[9999999] flex justify-between w-full mt-10 md:px-0 lg:px-0 xl:px-0 pr-5 group">
    <div   className="flex backdrop-blur-sm items-center justify-center px-5 relative z-[999999] cursor-pointer">
      <a className="reflection" href="#home">
       <span  className="text-5xl   font-moirai text-white  font-[900] group-hover:text-red-600">DA</span>
      </a>
    </div>
    {menu &&
    <div className="absolute z-[9999999] right-7 top-7 ">
      <DropMenu/>
    </div> 
      }
    <button onClick={()=>setMenu(!menu)}  className="reflection backdrop-blur-sm svgAnimation">
     <svg 
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path  
        d="M3.29701 5.2338C3.52243 4.27279 4.27279 3.52243 5.2338 3.29701C6.06663 3.10165 6.93337 3.10165 7.7662 3.29701C8.72721 3.52243 9.47757 4.27279 9.70299 5.2338C9.89835 6.06663 9.89835 6.93337 9.70299 7.7662C9.47757 8.72721 8.72721 9.47757 7.7662 9.70299C6.93337 9.89835 6.06663 9.89835 5.2338 9.70299C4.27279 9.47757 3.52243 8.72721 3.29701 7.7662C3.10166 6.93337 3.10166 6.06663 3.29701 5.2338Z"
        fill="#fff"
        fillOpacity="0.15"
        stroke="#fff"
        strokeWidth="1.5"
    />
    <path
        d="M3.29701 16.2338C3.52243 15.2728 4.27279 14.5224 5.2338 14.297C6.06663 14.1017 6.93337 14.1017 7.7662 14.297C8.72721 14.5224 9.47757 15.2728 9.70299 16.2338C9.89835 17.0666 9.89835 17.9334 9.70299 18.7662C9.47757 19.7272 8.72721 20.4776 7.7662 20.703C6.93337 20.8983 6.06663 20.8983 5.2338 20.703C4.27279 20.4776 3.52243 19.7272 3.29701 18.7662C3.10166 17.9334 3.10166 17.0666 3.29701 16.2338Z"
        fill="#fff"
        fillOpacity="0.15"
        stroke="#fff"
        strokeWidth="1.5"
    />
    <path
        d="M14.297 5.2338C14.5224 4.27279 15.2728 3.52243 16.2338 3.29701C17.0666 3.10165 17.9334 3.10165 18.7662 3.29701C19.7272 3.52243 20.4776 4.27279 20.703 5.2338C20.8983 6.06663 20.8983 6.93337 20.703 7.7662C20.4776 8.72721 19.7272 9.47757 18.7662 9.70299C17.9334 9.89835 17.0666 9.89835 16.2338 9.70299C15.2728 9.47757 14.5224 8.72721 14.297 7.7662C14.1017 6.93337 14.1017 6.06663 14.297 5.2338Z"
        fill="#fff"
        fillOpacity="0.15"
        stroke="#fff"
        strokeWidth="1.5"
    />
    <path
        d="M14.297 16.2338C14.5224 15.2728 15.2728 14.5224 16.2338 14.297C17.0666 14.1017 17.9334 14.1017 18.7662 14.297C19.7272 14.5224 20.4776 15.2728 20.703 16.2338C20.8983 17.0666 20.8983 17.9334 20.703 18.7662C20.4776 19.7272 19.7272 20.4776 18.7662 20.703C17.9334 20.8983 17.0666 20.8983 16.2338 20.703C15.2728 20.4776 14.5224 19.7272 14.297 18.7662C14.1017 17.9334 14.1017 17.0666 14.297 16.2338Z"
        fill="#fff"
        fillOpacity="0.15"
        stroke="#fff"
        strokeWidth="1.5"
    />
    </svg>
    </button>
  </div>;
};

export default Menu;
