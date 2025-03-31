import React from "react";
import gold from "../../assets/gold.png";
import bannerPic from "../../assets/padmavathi.svg";
import vectorImg from "../../assets/Vector.png";
import { WordFadeIn } from "../WordFadeIn";
import { assets } from "@/assets/assets";

const Cover = () => {
  return (
    <>
      <div className="w-full h-screen h-dvh h-svh flex flex-col justify-center items-center pb-14">
        <div className="absolute top-1/3 left-0 w-full h-full overflow-hidden bg-cover bg-center bg-no-repeat z-[-2]">
          <img src={vectorImg} alt="" />
        </div>
        <div
          id="home"
          className="w-full flex flex-col-reverse md:flex-row items-center  justify-evenly align-center my-auto gap-y-6 md:gap-2"
        >
          <img className="w-1/2" src={assets.bannerleft} alt="" />
          <img className="w-1/2 md:w-1/4 rounded-xl" src={assets.bannerimage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Cover;
