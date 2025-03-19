import React from "react";
import white from "../../assets/white.svg";

const Seva = () => {
  const sevaItems = [
    {
      id: 1,
      title: "DAILY",
      bgClass: "bg-sevaImg",
      lineHeight: "h-16",
      description:
        "In 1861, a remarkable fossil was unearthed in the Solnhofen limestone quarries in Bavaria, Germany. Lorem Ipsum is simply",
    },
    {
      id: 2,
      title: "WEEKLY",
      bgClass: "bg-sevaImg2",
      lineHeight: "h-20",
      description:
        "Discovered in 1861 in Erun, this three meter long fossil, dating back around 17,500 years, depicts animals and early human art and",
    },
    {
      id: 3,
      title: "MONTHLY",
      bgClass: "bg-sevaImg3",
      lineHeight: "h-14",
      description:
        "Discovered in 1922 by Howard Carter, the untouched tomb of the king. The tomb of the young Pharaoh Tutankhamun was filled with",
    },
    {
      id: 4,
      title: "AUSPICIOUS",
      bgClass: "bg-sevaImg4",
      lineHeight: "h-18",
      description:
        "In 1904, the most partial design of Tutankhamun was completed by Barnum Brown, a fossil hunter working for the American Museum",
    },
  ];

  return (
    <div id="seva" className="py-16">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-white ">Sevas</h1>
        <h1 className="text-xl sm:text-3xl md:text-4xl text-mainColor">
          Our Collections
        </h1>
        <img className="w-1/8 animate-pulse" src={white} alt="" />
      </div>

      <div className="relative flex justify-center items-start gap-6 my-12 w-[90%] m-auto px-4 -mt-36">
        {sevaItems.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="relative my-5">
              <div
                className="w-[1px] bg-[#B5995A] mx-auto"
                style={{
                  height: `${item.lineHeight.replace("h-", "") * 1}rem`,
                }}
              ></div>
              <div className="w-2 h-2 rounded-full bg-white border border-[#B5995A] absolute -bottom-1 left-1/2 transform -translate-x-1/2 transition-all duration-[0.3s] ease-in-out"></div>
            </div>

            <div
              className={`hover:translate-y-[-12px] h-[350px] w-[280px] ${item.bgClass} bg-cover bg-center relative transition-all duration-[0.3s] ease-in-out p-4 cursor-pointer`}
            >
              <div className="text-white absolute bottom-4 p-2">
                <h1 className="font-montserrat font-bold">{item.title}</h1>
                <p className="mt-2 font-light text-sm text-white/80">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seva;
