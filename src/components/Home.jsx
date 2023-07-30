import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Learner", "Coder", "Programmer", "Developer"],
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
    <div className="w-screen h-screen flex  mt-12 ">
      <div className="w-3/5  h-full">
        {/*inner div */}
        <div
          className="w-full h-3/6  flex
        justify-center items-start"
        >
          <div
            className="text-black text-8xl font-bold mt-36 
          ml-12"
          >
            <p>Empowering Imagination</p>
            <p>through the synergy of</p>
            <p>Code and Design.</p>
            <div className="text-5xl mt-20 ml-10">
              <p>“A designer knows he has achieved perfection </p>
              <p>not when there is nothing left to add, but when</p>
              <p>there is nothing left to take away”</p>
            </div>
          </div>
        </div>
        <div
          className="w-full h-3/6
        text-8xl flex flex-col justify-start items-center
        text-black font-bold ml-24"
        >
          <p className="mt-36">Hi,My Name Is Mobasir</p>
          <span>
            I am a <span ref={el} className="ani-text"></span>
          </span>
        </div>
      </div>
      <div
        className="w-2/4 h-5/6  flex-1 flex  
      justify-around items-center flex-col"
      >
        <img src="src/images/logo.png" alt="logo" className="logo" />
      </div>
    </div>
  );
};

export default Home;
