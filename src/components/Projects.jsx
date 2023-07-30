import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Resume from "./Resume";

const Projects = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["UpLoading", "Soon..."],
      typeSpeed: 100,
      startDelay: 300,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!",
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      className="mt-32 flex w-screen h-screen
    justify-center items-center "
    >
      <div
        ref={el}
        className="mb-72 text-9xl text-white 
        flex w-screen h-screen font-bold justify-center items-center"
      ></div>
    </div>
  );
};

export default Projects;
