import React from "react";
import white from "../../assets/white.svg";
import { assets } from "@/assets/assets";

const Gallary = () => {
  const gData = assets.GallaryData;
  return (
    <div id="gallary" className="mt-14 mb-8 ">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-white">GALLERY</h1>
        <h1 className="text-xl sm:text-3xl md:text-4xl text-mainColor">
          CURATED SHOWCASE
        </h1>
        <img className="w-1/8 animate-pulse" src={white} alt="" />
      </div>
      {
        //for placing images here
      }
      <div className="mt-24 flex flex-wrap  w-[85%] m-auto items-center justify-center gap-3">
        {gData.map((val, index) => (
          <a key={index} href={val}>
            {" "}
            <img
              className="h-[200px] opacity-40 hover:opacity-100 transition-all duration-[0.5s]"
              key={index}
              src={val}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
