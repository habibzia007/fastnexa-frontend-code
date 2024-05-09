import React from "react";
import bg from "../../assets/images/whatweprovidebg.jpeg";
import group from "../../assets/images/group.png";
import rightArrow from "../../assets/images/rightArrow.png";
import WhatWeProvideCard from "./Card";
import { WhatWeProvideData } from "../../utils/fakedb/data";

const WhatWeProvide = () => {
  const backgroundImageStyle = {
    backgroundImage: ` url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className="relative h-[663px]  mt-[23px] w-full"
      style={backgroundImageStyle}
    >
      <div className="w-[1184.44px] h-[517.3px]  mx-auto  pt-[37px] ">
        <h3 className="font-Poppins font-semibold text-[16px] text-[#FF6500] leading-[28.19px] tracking-[0.9396284818649292px] text-center">
          What we provide
        </h3>
        <h3 className="font-Poppins font-semibold text-[42px] text-[#232F3B] leading-[61.08px]  text-center">
          We provide truly prominent Software solutions
        </h3>
        <div className="mt-12 flex gap-6">
          {WhatWeProvideData.map((card, index) => (
            <WhatWeProvideCard
              key={index}
              image={Object.values(card.img)[0]}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="flex items-center gap-3 justify-center mt-[50px]">
          <h3 className="font-Poppins font-normal text-[16px] leading-[30px] text-center text-[#232F3B]">
            Learn more about{" "}
            <span className="font-Poppins font-semibold text-[16px] leading-[30px] text-center text-[#FF6500] cursor-pointer">
              More Services
            </span>
          </h3>
          <img
            className="object-contain cursor-pointer"
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
