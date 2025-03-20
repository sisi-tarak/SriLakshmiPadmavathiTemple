import React from "react";
import Waves from "./Waves";
import gold from "../../assets/gold.png";
import bannerPic from "../../assets/padmavathi.svg";
import vectorImg from "../../assets/Vector.png";

const Cover = () => {
  return (
    <>
      <div className="w-full h-screen h-dvh h-svh flex flex-col justify-center items-center pb-14">
        <Waves className="z-[-1]" />
        <div className="absolute top-1/3 left-0 w-full h-full overflow-hidden bg-cover bg-center bg-no-repeat z-[-2]">
          <img src={vectorImg} alt="" />
        </div>
        <div
          id="home"
          className="w-full flex flex-col-reverse md:flex-row items-center  justify-evenly align-center my-auto gap-y-6 md:gap-2"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-5xl font-playFair font-semibold text-mainColor">
              Sri Lakshmi Padmavathi
            </h1>
            <span className="text-center font-montserrat text-white">
              Something here
            </span>
          </div>
          <img className="w-1/2 md:w-1/4 rounded-xl" src={bannerPic} alt="" />
        </div>
        <img className="m-auto animate-pulse" src={gold} alt="" />
      </div>
    </>
  );
};

export default Cover;
