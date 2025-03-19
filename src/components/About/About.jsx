import React from "react";
import ma from "../../assets/ma.svg";
import white from "../../assets/white.svg";
import paper from "../../assets/Container.svg";

const About = () => {
  return (
    <div id="about" className="mt-14 mb-3 ">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-white">About Us</h1>
        <h1 className="text-xl sm:text-3xl md:text-4xl text-mainColor">
          The Story of Our Journey
        </h1>
        <img className="w-1/8 animate-pulse" src={white} alt="" />
      </div>
      {
        //for imgage and container
      }
      <div className="m-auto w-[80%] flex flex-col gap-4 sm:flex-col md:flex-row  mt-4 md:justify-between items-center">
        <img className="w-[460px]  sm:" src={ma} alt="" />
        <img className="w-[400px]" src={paper} alt="" />
      </div>
      <div className="w-72 h-1 bg-mainColor mt-14 animate-pulse">
        <span className="w-20 h-2 bg-mainColor"></span>
      </div>
    </div>
  );
};

export default About;
