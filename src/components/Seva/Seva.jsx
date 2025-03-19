import React from "react";
import white from "../../assets/white.svg";

const Seva = () => {
  return (
    <div id="seva" className="mt-8 mb-8">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-white ">Sevas</h1>
        <h1 className="text-xl sm:text-3xl md:text-4xl text-mainColor">
          Our Collections
        </h1>
        <img className="w-1/8 animate-pulse" src={white} alt="" />
      </div>
      {
        // container work for seva types
      }
      <div className="sevaImg flex  gap-2 flex-wrap mt-12  justify-center items-center w-[90%] m-auto scroll-m-0">
        {/*
          sevas.map((value,index)=>(
            <img className=' h-[320px] opacity-35 hover:opacity-100 hover:translate-y-[-12px] transition-all duration-[0.8s] ' key={index} src={value}></img>
          ))
             <img className=' h-[320px] opacity-35 hover:opacity-100 hover:translate-y-[-12px] transition-all duration-[0.8s] ' src={assets.seva2} alt="" />
        <img className=' h-[320px] opacity-35 hover:opacity-100 hover:translate-y-[-12px] transition-all duration-[0.8s] ' src={assets.seva3} alt="" />
        <img className=' h-[320px] opacity-35 hover:opacity-100 hover:translate-y-[-12px] transition-all duration-[0.8s] ' src={assets.seva4} alt="" />
        */}
        {
          //img1
        }
        <div className="hover:translate-y-[-12px]  h-[350px] w-[280px] bg-sevaImg bg-cover bg-center relative transition-all duration-[0.8s] p-4 ">
          <div className="text-white absolute bottom-2  ">
            <h1>DAILY</h1>
            <span>
              In 1861, a remarkable fossil was unearthed in the Solnhofen
              limestone quarries in Bavaria, Germany. Lorem Ipsum is simply
            </span>
          </div>
        </div>
        {
          //img2
        }
        <div className="hover:translate-y-[-12px]  h-[350px] w-[280px] bg-sevaImg2 bg-cover bg-center relative transition-all duration-[0.8s] p-4 ">
          <div className="text-white absolute bottom-2  ">
            <h1>WEEKLY</h1>
            <span>
              In 1861, a remarkable fossil was unearthed in the Solnhofen
              limestone quarries in Bavaria, Germany. Lorem Ipsum is simply
            </span>
          </div>
        </div>
        {
          //img3
        }
        <div className="hover:translate-y-[-12px]  h-[350px] w-[280px] bg-sevaImg3 bg-cover bg-center relative transition-all duration-[0.8s] p-4 ">
          <div className="text-white absolute bottom-2  ">
            <h1>MONTHLY</h1>
            <span>
              In 1861, a remarkable fossil was unearthed in the Solnhofen
              limestone quarries in Bavaria, Germany. Lorem Ipsum is simply
            </span>
          </div>
        </div>
        {
          //img4
        }
        <div className="hover:translate-y-[-12px]  h-[350px] w-[280px] bg-sevaImg4 bg-cover bg-center relative transition-all duration-[0.8s] p-4 ">
          <div className="text-white absolute bottom-2  ">
            <h1>ASPECIOUS</h1>
            <span>
              In 1861, a remarkable fossil was unearthed in the Solnhofen
              limestone quarries in Bavaria, Germany. Lorem Ipsum is simply
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seva;
