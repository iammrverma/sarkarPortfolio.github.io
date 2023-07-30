import React ,{useState,useEffect}from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import Resume from "./Resume";
const NavBar = () => {
  const handleClick = (event) =>{
    const link = event.currentTarget;
    link.classList.add('links');
  }
  const Navigate = useNavigate();
  return (
    <div className=" text-white text-6xl flex w-screen justify-end 
    h-32  items-center font-bold">
     <div  className="flex flex-1  
     items-center justify-start">
     <div className="w-36 h-36 rounded-full bg - bg-gradient-to-r from-violet-600 to-pink-500
     ml-9 mt-14 absolute mb-5 border-2 border-black"></div>
          <img className=" w-32 h-32
          rounded-full ml-11 mt-9 bg-cover
          relative"
          src="src/images/IMG-0037.jpg" 
          alt="" />
      <Resume/>
     </div>
      <ul className=" text-black flex justify-center 
      items-center pt-14 ">
        <li
          className="links pr-20 hover:scale-75
           duration-500 delay-100 ease in out"
          onClick={() => Navigate("/Projects")}
        >
          Projects
        </li>
        <li
          className="links pr-20 hover:scale-75
           duration-500 delay-100 ease in out"
           onClick={() => Navigate("/")}
        >
          Home
        </li>
        <li
          className="links pr-20 hover:scale-75
           duration-500 delay-100 ease in out"
          onClick={() => Navigate("/Contact")}
        >
          Contact
        </li>
        <li
          className="links pr-20 hover:scale-75
           duration-500 delay-100 ease in out"
          onClick={() => Navigate("/About")}
        >
          About
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
