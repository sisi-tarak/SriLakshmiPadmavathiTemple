import React from "react";
import ResearchMap from "./ResearchMap.jsx";
import "./ResearchMap.css";

import white from "../../assets/white.svg";

function ResearchPage() {
  const researchLocations = [
    {
      name: "Marine Research Station",
      lat: 8.0883,
      lng: 77.5385,
      description: "Coastal ecology and marine biodiversity research center",
    },
  ];

  return (
    <div className="research-page">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-white">Showcase</h1>
        <h1 className="text-xl sm:text-3xl md:text-4xl text-mainColor">
          Research Locations Explored
        </h1>
        <img className="w-1/8 animate-pulse" src={white} alt="" />
      </div>
      <div className="container">
        <ResearchMap locations={researchLocations} title="" />
      </div>
    </div>
  );
}

export default ResearchPage;
