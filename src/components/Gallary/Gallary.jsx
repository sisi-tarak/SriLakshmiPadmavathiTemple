import React, { useState } from "react";
import white from "../../assets/white.svg";
import img1 from "../../assets/Gallery/img1.svg";
import img2 from "../../assets/Gallery/img2.svg";
import img3 from "../../assets/Gallery/im3.svg";
import img4 from "../../assets/Gallery/img4.svg";
;
import ImageModal from "./ImageModal"; 

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
          onClick={() => openModal(img1)} 
        />
        <div className="flex flex-col  h-[420px] items-center justify-center">
          <img
            className="h-[190px] cursor-pointer"
            src={img2}
            alt=""
            onClick={() => openModal(img2)} 
          />
          <img
            className="h-[190px] rounded-lg cursor-pointer"
            src={img3}
            alt=""
            onClick={() => openModal(img3)} 
          />
        </div>
        <img
          className="max-w-[320px] h-[390px] rounded-lg cursor-pointer"
          src={img4}
          alt=""
          onClick={() => openModal(img4)} 
        />
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={selectedImage}
      />
    </section>
  );
};

export default Gallary;