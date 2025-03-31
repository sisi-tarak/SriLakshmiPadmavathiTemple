import React from "react";

import white from "../../assets/white.svg";
import Emap from "./Emap";

function ResearchPage() {
  
  return (
    <div className="research-page">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-white">Showcase</h1>
        <h1 className="text-xl sm:text-3xl md:text-4xl text-mainColor">
          Research Locations Explored
        </h1>
        <img className="w-1/8 animate-pulse" src={white} alt="" />
      </div>
      <div className="container flex mx-auto mt-8 mb-12">
      <Emap />
      </div>
    </div>
  );
}

export default ResearchPage;
