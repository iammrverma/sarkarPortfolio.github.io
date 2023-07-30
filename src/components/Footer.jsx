import React from "react";

const footer = () => {
  return (
    <div className="w-screen h-32 flex">
      <div
        className="w-2/6 text-black text-4xl flex 
      items-end mb-4"
      >
        <div className="pb-4 pl-4">
          &copy; Copyright 2023- All Right Reserved
        </div>
      </div>
      <div
        className="w-2/6 flex text-4xl items-end 
      justify-center mb-4 pb-4"
      >
        <div className="pr-6">Created By - Abdul Mobasir Sarkar</div>
      </div>
      <div className="w-2/6 flex mb-4 items-end justify-end pr-20">
        <div
          className="text-4xl pb-4 hover:scale-105 transition-all delay-75
         ease in out hover:text-white"
        >
          <a href="mailto:mobasirsarkar3@gmail.com" target="_blank">
            Mail Me Directly
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;
