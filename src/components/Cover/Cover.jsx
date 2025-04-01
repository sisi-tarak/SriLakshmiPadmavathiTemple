import React, { useState, useEffect, useRef } from "react";
import vectorImg from "../../assets/Vector.png";
import { assets } from "@/assets/assets";
import Img4 from "../../assets/Gallery/img1.svg";

const Cover = () => {
  // Array of images to cycle through
  const carouselImages = [
    assets.bannerimage,
    assets.seva1,
    assets.seva4,
    Img4,
    // Add more images here as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);
  const imageContainerRef = useRef(null);

  // Function to handle image transition
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Start fade transition
      setIsFading(true);

      // Set up the next image index
      setNextImageIndex((currentImageIndex + 1) % carouselImages.length);

      // After transition completes, update the current image
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setIsFading(false);
      }, 1000); // This timing should match the CSS transition duration
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [currentImageIndex, carouselImages.length, nextImageIndex]);

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center pb-14">
        <div className="absolute top-1/3 left-0 w-full h-full overflow-hidden bg-cover bg-center bg-no-repeat z-[-2]">
          <img src={vectorImg} alt="" />
        </div>
        <div
          id="home"
          className="w-full flex flex-col-reverse md:flex-row items-center justify-evenly align-center my-auto gap-y-6 md:gap-2"
        >
          <img className="w-1/2" src={assets.bannerleft} alt="" />
          <div
            ref={imageContainerRef}
            className="w-1/2 md:w-1/4 relative aspect-[3/4] overflow-hidden"
          >
            {/* Current image */}
            <img
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 rounded-lg ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
              src={carouselImages[currentImageIndex]}
              alt="Carousel image"
            />

            {/* Next image with fade transition */}
            <img
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 rounded-lg ${
                isFading ? "opacity-100" : "opacity-0"
              }`}
              src={carouselImages[nextImageIndex]}
              alt="Next carousel image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cover;
