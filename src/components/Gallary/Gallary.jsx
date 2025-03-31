import React, { useState } from "react";
import white from "../../assets/white.svg";
import img1 from "../../assets/Gallery/img1.svg";
import img2 from "../../assets/Gallery/img2.svg";
import img3 from "../../assets/Gallery/img3.svg";
import img4 from "../../assets/Gallery/img4.svg";
import img5 from "../../assets/seva1.svg";
import img6 from "../../assets/seva2.svg";
import img7 from "../../assets/seva3.svg";
import ImageModal from "./ImageModal"; // Import the modal component

const Gallary = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="mt-14 mb-8 ">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-white">GALLERY</h1>
        <h1 className="text-xl sm:text-3xl md:text-4xl text-mainColor">
          CURATED SHOWCASE
        </h1>
        <img className="w-1/8 animate-pulse" src={white} alt="" />
      </div>

      <div className="flex flex-col md:flex-row gap-2 items-center justify-center w-[80%] m-auto">
        <img
          className="max-w-[320px] h-[400px] cursor-pointer"
          src={img1}
          alt=""
          onClick={() => openModal(img1)} // Open modal on click
        />
        <div className="flex flex-col gap-2 h-[420px] items-center justify-center">
          <img
            className="h-[190px] cursor-pointer"
            src={img2}
            alt=""
            onClick={() => openModal(img2)} // Open modal on click
          />
          <img
            className="h-[190px] rounded-lg cursor-pointer"
            src={img3}
            alt=""
            onClick={() => openModal(img3)} // Open modal on click
          />
        </div>
        <img
          className="max-w-[320px] h-[400px] rounded-lg cursor-pointer"
          src={img4}
          alt=""
          onClick={() => openModal(img4)} // Open modal on click
        />
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={selectedImage}
      />
    </section>
  );
};

export default Gallary;