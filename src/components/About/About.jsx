import React from "react";
import ma from "../../assets/ma.svg";
import white from "../../assets/white.svg";
import paper from "../../assets/Container.svg";

const About = () => {
  return (


    <div className="mb-3 h-full">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-white">About Us</h1>
        <h1 className="text-xl sm:text-3xl md:text-4xl text-mainColor">
          The Story of Our Journey
        </h1>
        <img className="w-1/8 animate-pulse" src={white} alt="" />
      </div>

      <div className="mx-auto w-[80%] flex flex-col md:flex-row md:justify-around items-center gap-x-10 py-10 md:py-0">
        <img className="md:w-3/5 md:scale-[70%]" src={ma} alt="" />
        <img className="md:w-2/5 md:scale-75" src={paper} alt="" />
      </div>
      <div className="w-72 h-1 bg-mainColor mt-2 animate-pulse">
        <span className="w-20 h-2 bg-mainColor"></span>
      </div>
    </div>

  );
};

export default About;
