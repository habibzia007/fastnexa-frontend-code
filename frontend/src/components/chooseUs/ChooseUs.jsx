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
      className="relative lg:w-full mt-10 lg:mt-20"
      style={backgroundImageStyle}
    >
      <div className="container mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-12 mx-auto">
          <h3 className="font-Poppins font-semibold text-[12px] lg:text-[16px] pt-4 lg:pt-[58px] text-[#FF6500] leading-[28.19px] tracking-[0.9396284818649292px] text-center">
            REASON TO CHOOSE US
          </h3>
          <h3 className="font-Poppins font-semibold text-[22px] leading-[33.08px] lg:text-[42px] lg:leading-[61.08px] lg:pt-4 text-[#232F3B] text-center">
            We Provide Truly Prominent IT Solutions.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4 pt-4 lg:pt-10">
            {chooseUsData.map((card, index) => (
              <Card
                key={index}
                image={Object.values(card.img)[0]}
                title={card.title}
              />
            ))}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 flex  justify-center py-5 sm:pt-[20px] sm:pb-[57px]">
          <div className="flex items-center gap-3">
            <h3 className="font-Poppins font-normal text-[12px] sm:text-[16px] leading-[30px] text-center text-[#232F3B]">
              Learn more about{" "}
              <span className="font-Poppins font-semibold text-[12px] lg:text-[16px] leading-[30px] text-center text-[#FF6500] cursor-pointer">
                More Reasons
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
    </div>
  );
};

export default ChooseUs;

