import React from "react";
import white from "../../assets/white.svg";
import { assets } from "@/assets/assets";
import InteractiveGallery from "../InteractiveGallery";
import img1 from "../../assets/Gallery/img1.svg";
import img2 from "../../assets/Gallery/img2.svg";
import img3 from "../../assets/Gallery/img3.svg";
import img4 from "../../assets/Gallery/img4.svg";
import img5 from "../../assets/seva1.svg";
import img6 from "../../assets/seva2.svg";
import img7 from "../../assets/seva3.svg";

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "PLVV",
    desc: "",
    url: img1,
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "PLVV",
    desc: "",
    url: img2,
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "PLVV",
    desc: "",
    url: img3,
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
  },
  {
    id: 4,
    type: "image",
    title: "PLVV",
    desc: "",
    url: img4,
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 5,
    type: "image",
    title: "PLVV",
    desc: "",
    url: img5,
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 6,
    type: "image",
    title: "PLVV",
    desc: "",
    url: img6,
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 7,
    type: "image",
    title: "PLVV",
    desc: "",
    url: img7,
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
];
const Gallary = () => {
  return (
    <div id="gallary" className="mt-14 mb-8 ">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-white">GALLERY</h1>
        <h1 className="text-xl sm:text-3xl md:text-4xl text-mainColor">
          CURATED SHOWCASE
        </h1>
        <img className="w-1/8 animate-pulse" src={white} alt="" />
      </div>

      <div className="flex flex-wrap  w-[85%] m-auto items-center justify-center gap-3">
        <InteractiveGallery mediaItems={mediaItems} title="" description="" />
      </div>
    </div>
  );
};

export default Gallary;
