
import React from "react";
import bg from "../../assets/images/whatweprovidebg.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import WhatWeProvideCard from "./Card";
import { WhatWeProvideData } from "../../utils/fakedb/data";

const WhatWeProvide = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="relative mt-[23px] lg:mt-[40px]" style={backgroundImageStyle}>
      <div className="container w-[350px] sm:w-[645px] lg:w-[1184px] mx-auto px-4 sm:px-6 grid grid-cols-12 gap-4 pt-[63px] sm:pt-[37px] ">
        <h3 className="col-span-full font-Poppins font-semibold text-[12px] leading-[28.19px] sm:text-[16px] sm:leading-[28.19px] text-[#FF6500] tracking-[0.9396284818649292px] text-center">
          What We Provide
        </h3>
        <h3 className="col-span-full font-Poppins font-semibold text-[23px] leading-[34.19px] sm:text-[42px] sm:leading-[41.08px] text-[#232F3B] text-center">
          We provide truly prominent Software solutions
        </h3>
        <div className="col-span-full mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-1 gap-x-12  md:gap-x-4 xl:gap-x-20 mr-8">
          {WhatWeProvideData.map((card, index) => (
            <WhatWeProvideCard
              key={index}
              image={Object.values(card.img)[0]}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="col-span-full flex items-center justify-center py-[5px] sm:pt-[30px] sm:pb-[48px]">
          <h3 className="font-Poppins font-normal text-[12px] sm:text-[16px] leading-[30px] text-center text-[#232F3B]">
            Learn more about{" "}
            <span className="font-Poppins font-semibold text-[12px] sm:text-[16px] leading-[30px] text-[#FF6500] cursor-pointer">
              More Services
            </span>
          </h3>
          <img
            className="object-contain cursor-pointer ml-2"
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;

