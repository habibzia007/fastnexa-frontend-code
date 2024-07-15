import React from "react";
import aboutusservicesbg from "../../../assets/images/aboutusservicebg.jpg";
import { aboutUsServicesData } from "../../../utils/fakedb/data";

const AboutUsServices = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${aboutusservicesbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="relative w-full h-auto py-10 lg:py-[121px] mb-[2rem] sm:mb-0"
      style={backgroundImageStyle}
    >
      {/* Wrapper */}
      <div className="max-w-[1184px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-[50px] lg:space-y-[62px]">
          {/* Card Component */}
          {aboutUsServicesData.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${
                card.reverse ? "lg:flex-row-reverse" : ""
              } gap-4 items-center lg:items-start`}
            >
              <div className="flex flex-col lg:w-1/2 space-y-4 items-center lg:items-start text-center lg:text-left">
                <h2 className="font-Poppins font-bold text-[27px] leading-[39.08px] lg:text-[42px] lg:leading-[61.08px] text-[#232F3B]">
                  {card.title}
                </h2>
                <p className="font-Poppins font-normal text-[11px] leading-[16px] lg:text-[16px] lg:leading-[26px] text-[#444444]">
                  {card.description}
                </p>
                <button className="font-lato w-[83.16px] h-[29.99px] lg:w-[170.16px] lg:h-[59.99px] py-[8px] px-[4px] lg:py-[19.15px] lg:px-[26.37px] ring-1 lg:ring-2 text-orange-500 lg:rounded-md rounded-sm text-[10px] lg:text-[18px] leading-[10.46px] ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-500">
                  Discover More
                </button>
              </div>
              <img
                className="w-[350px] h-[200px] sm:w-[510px] lg:w-[540px] lg:h-full rounded-md"
                src={card.img}
                alt={card.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsServices;
