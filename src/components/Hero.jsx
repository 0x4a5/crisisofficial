import React from "react";
import Typed from "react-typed";
import {Link} from 'react-router-dom';
const Hero = () => {
  return (
    <div className='hero'>
      <div className="text-[#D9D9D9]">
      <div className="max-w-[800px] mt-[-0px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="text-[#6A8FD4] font-normal p-2">RAISING THE BAR</p>
        <h1 className="md:text-6xl sm-text-5xl text-4xl font-normal md-py-6">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-[#6A8FD4] to-gray-100"> We Create Tomorrow.. Today</span>
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm-text-3xl text-xl font-normal py-4">
            Impressive, Elegant & Provocative{" "}
          </p>
          <Typed
            className="md:text-4xl sm-text-3xl text-xl font-normal md:pl-4 pl-2"
            strings={["Full-Stack", "Blockchain", "Smart Contracts"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-normal text-[#D9D9D9]">
          Everything we create improves people’s lives
        </p>
        <Link to='/contact'><button className='bg-[#6A8FD4] w-[200px] rounded-md font-medium my-6 mx-auto py-3 border border-[#D9D9D9] hover:border-transparent text-[#1B1B1B] '>Let's Do This</button></Link>
      </div>
    </div>
    </div> 
  );
};

export default Hero;
