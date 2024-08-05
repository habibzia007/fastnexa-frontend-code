import React from "react";
import bg from "../../assets/images/chooseusbg.jpeg";
import rightArrow from "../../assets/images/rightArrow.svg";
import Card from "./Card";
import { chooseUsData } from "../../utils/fakedb/data";

const ChooseUs = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="relative w-full mt-10 lg:mt-20"
      style={backgroundImageStyle}
    >
      <div className="container mx-auto lg:max-w-[1184px] px-4 ">
        <div className="text-center">
          <h3 className="font-Poppins font-semibold text-[12px] sm:text-[14px] lg:text-[16px] pt-4 lg:pt-[58px] text-[#FF6500] leading-[28.19px] tracking-wide">
            REASON TO CHOOSE US
          </h3>
          <h3 className="font-Poppins font-semibold text-[22px] sm:text-[32px] lg:text-[42px] leading-[33.08px] sm:leading-[43.08px] lg:leading-[61.08px] lg:pt-4 text-[#232F3B] mt-2">
            We Provide Truly Prominent IT Solutions
          </h3>
          <p className="font-Poppins text-[22px] sm:text-[16px] lg:text-[24px] leading-[20.08px] sm:leading-[20.08px] lg:leading-[30.08px] lg:pt-4 text-[#232F3B] mt-2">
            At FAST NEXA, we deliver truly outstanding IT solutions designed to
            elevate your business. Our expertise includes:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 lg:pt-10">
          {chooseUsData.map((card, index) => (
            <Card
              key={index}
              image={Object.values(card.img)[0]}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="flex justify-center py-5 lg:py-10">
          <div className="flex items-center gap-3">
            <h3 className="font-Poppins font-normal text-[12px] sm:text-[14px] lg:text-[16px] leading-[30px] text-center text-[#232F3B]">
              Learn more about{" "}
              <span className="font-Poppins font-semibold text-[12px] sm:text-[14px] lg:text-[16px] text-[#FF6500] cursor-pointer">
                More Reasons
              </span>
            </h3>
            <img
              className="object-contain cursor-pointer"
              src={rightArrow}
              alt="right arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
