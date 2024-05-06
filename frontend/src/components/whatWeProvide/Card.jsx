import React from "react";
import link from "../../assets/images/link.png";

const Card = ({ title, description, image }) => {
  console.log(image);
  return (
    <div className="w-[281.44px] h-[350.3px] top-[2001px] bg-[#FFFFFF] rounded-[9.2px] p-5">
      <img className="w-[46px] h-[46px]" src={image} alt="" />
      <div className="space-y-4 mt-5 h-[237.79px]">
        <h3 className="font-Poppins font-bold text-[20.23px] leading-[27.59px] text-left text-[#0E0E0E] h-[55px]">
          {title}
        </h3>
        <p className="font-Poppins font-normal text-[12.88px] leading-[27.59px] text-left text-[#444444]">
          {description}
        </p>
        <div className="flex gap-3 items-center">
          <img src={link} alt="" />
          <span className="font-Poppins font-normal text-[12.88px] leading-[27.59px] text-left text-[#232F3B]">
            Read More
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
