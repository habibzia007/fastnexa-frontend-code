import React from "react";
import bg from "../../assets/images/chooseusbg.jpeg";
import link1 from "../../assets/images/link1.png";
import link2 from "../../assets/images/link2.png";
import link3 from "../../assets/images/link3.png";
import group from "../../assets/images/group.png";
import rightArrow from "../../assets/images/rightArrow.png";
import WhatWeProvideCard from "./Card";
import { WhatWeProvideData, chooseUsData } from "../../utils/fakedb/data";
import Card from "./Card";

const ChooseUs = () => {
  const backgroundImageStyle = {
    backgroundImage: ` url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="relative h-[804px] w-full  mt-[100px]"
      style={backgroundImageStyle}
    >
      <div className="w-[1184.44px] h-[804px] mx-auto top-[1847px]   ">
        <h3 className="font-Poppins font-semibold text-[16px] pt-[67px] text-[#FF6500]  leading-[28.19px] tracking-[0.9396284818649292px] text-center">
          REASON TO CHOOSE US
        </h3>
        <h3 className="font-Poppins font-semibold text-[42px]  pt-[20px] text-[#232F3B] leading-[61.08px]  text-center">
          We Provide Truly Prominent IT Solutions.
        </h3>
        <div className="flex gap-4 pt-[60px]">
          {chooseUsData.map((card, index) => (
            <Card
              key={index}
              image={Object.values(card.img)[0]}
              title={card.title}
            />
          ))}
        </div>

        <div className="flex items-center gap-3 justify-center mt-[37px]">
          <h3 className="font-Poppins font-normal text-[16px] leading-[30px] text-center text-[#232F3B]">
            Learn more about{" "}
            <span className="font-Poppins font-semibold text-[16px] leading-[30px] text-center text-[#FF6500] cursor-pointer">
              More reason
            </span>
          </h3>
          <img className="object-contain cursor-pointer" src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
