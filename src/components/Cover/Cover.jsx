import React from "react";
import Waves from "./Waves";
import gold from "../../assets/goldline.png";
import bannerPic from "../../assets/padmavathi.svg";

const Cover = () => {
  return (
    <>
      <Waves className="z-[-1]" />
      <div
        id="home"
        className="w-full flex flex-col-reverse md:flex-row items-center  justify-evenly p-6 mb-6"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl md:text-5xl text-mainColor">
            Sri Lakshmi Padmavathi
          </h1>
          <span className="text-center  text-white">Something here</span>
        </div>

        <img className="w-1/4 rounded-xl" src={bannerPic} alt="" />
      </div>
      <img className="m-auto" src={gold} alt="" />
    </>
  );
};

export default Cover;
