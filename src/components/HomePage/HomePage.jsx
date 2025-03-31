import React from "react";
import Cover from "../Cover/Cover";
import About from "../About/About";
import Seva from "../Seva/Seva";
import Gallary from "../Gallary/Gallary";
import Trust from "../Trust/Trust";
import ResearchPage from "../ResearchPage/ResearchPage";

const HomePage = () => {
  return (
    <>
      <Cover />
      <Seva />
      <Gallary />
      <Trust />
      <ResearchPage />
    </>
  );
};

export default HomePage;
