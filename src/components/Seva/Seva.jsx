import React from "react";
import white from "../../assets/white.svg";
import { Link } from "react-router-dom";
import ScaleWrapper from "../ScaleWrapper";

const Seva = () => {
  const sevaItems = [
    {
      id: 1,
      title: "DAILY",
      bgClass: "bg-sevaImg",
      path: "/sevas/daily-sevas",
      lineHeight: "h-16",
      description:
        "In 1861, a remarkable fossil was unearthed in the Solnhofen limestone quarries in Bavaria, Germany. Lorem Ipsum is simply",
    },
    {
      id: 2,
      title: "WEEKLY",
      bgClass: "bg-sevaImg2",
      path: "/sevas/weekly-sevas",
      lineHeight: "h-20",
      description:
        "Discovered in 1861 in Erun, this three meter long fossil, dating back around 17,500 years, depicts animals and early human art and",
    },
    {
      id: 3,
      title: "MONTHLY",
      bgClass: "bg-sevaImg3",
      path: "/sevas/monthly-sevas",
      lineHeight: "h-14",
      description:
        "Discovered in 1922 by Howard Carter, the untouched tomb of the king. The tomb of the young Pharaoh Tutankhamun was filled with",
    },
    {
      id: 4,
      title: "AUSPICIOUS",
      bgClass: "bg-sevaImg4",
      path: "/sevas/auspicious-sevas",
      lineHeight: "h-18",
      description:
        "In 1904, the most partial design of Tutankhamun was completed by Barnum Brown, a fossil hunter working for the American Museum",
    },
  ];

  return (
    <div id="sevas" className="relative h-full w-full mt-24">
      <div className="flex flex-col items-center gap-2 z-20">
        <h1 className="text-white font-montserrat font-semibold text-base sm:text-lg lg:text-xl tracking-wide uppercase">
          Our
        </h1>
        <h1 className="text-xl sm:text-3xl md:text-4xl text-mainColor font-semibold capitalize">
          Sevas
        </h1>
        <img className="w-1/8 animate-pulse" src={white} alt="" />
      </div>

      <div className="relative hidden md:flex flex-row justify-center items-start gap-2 lg:gap-4 xl:gap-6 mt-8 w-full md:w-[95%] lg:w-[90%] xl:w-[85%] mx-auto px-4 ">
        {sevaItems.map((item) => (
          <Link to={item.path} key={item.id}>
            <div className="flex  items-center ">
              <div
                className={`hover:translate-y-[-12px] h-[280px] lg:h-[320px] xl:h-[350px] w-[180px] lg:w-[230px] xl:w-[280px] ${item.bgClass} bg-cover bg-center relative transition-all duration-300 ease-in-out p-4 cursor-pointer rounded-lg`}
              >
                <div className="text-white absolute bottom-4 p-2">
                  <h1 className="font-montserrat font-bold">{item.title}</h1>
                  <p className="mt-2 font-light text-sm md:text-xs xl:text-sm text-white/80 md:line-clamp-3 lg:line-clamp-4 xl:line-clamp-none">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="relative manVam sm:hidden flex  items-center justify-center gap-2 my-12 w-full px-4">
        {sevaItems.map((item) => (
          <Link to ={item.path}>
          <div key={item.id} className="flex flex-col items-center mx-auto">
            <div
              className={`hover:translate-y-[-12px] min-h-[250px] min-w-[150px] ${item.bgClass} bg-cover bg-center relative transition-all duration-[0.3s] ease-in-out p-1 cursor-pointer`}
            >
              <div className="text-white absolute bottom-2 h-[80px] overflow-scroll p-1 ">
                <h1 className="font-montserrat font-bold">{item.title}</h1>
                <p className="mt-2 font-light text-sm md:text-xs xl:text-sm text-white/80">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>

      <div className="relative manVam sm:flex hidden md:hidden  items-center justify-center gap-2 my-12 w-full px-4">
        {sevaItems.map((item) => (
          <Link to ={item.path}>
          <div key={item.id} className="flex flex-col items-center mx-auto">
            <div
              className={`hover:translate-y-[-12px] min-h-[550px] min-w-[250px] ${item.bgClass} bg-cover bg-center relative transition-all duration-[0.3s] ease-in-out p-1 cursor-pointer`}
            >
              <div className="text-white absolute bottom-2 h-[120px] overflow-scroll p-1 ">
                <h1 className="font-montserrat font-bold">{item.title}</h1>
                <p className="mt-2 font-light text-sm md:text-xs xl:text-sm text-white/80">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
   
  );
};

export default Seva;
