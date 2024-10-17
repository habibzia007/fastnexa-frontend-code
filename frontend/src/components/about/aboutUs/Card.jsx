import React from "react";
import symbol from "../../../assets/images/symbol.svg";
import config from "../../../config.js";

const Card = ({ title, description, border, image }) => {
  const { baseURL } = config;
  return (
    <div
      className={`w-[151px] lg:w-[247px] md:w-[165px] py-3 px-2 border-[#ECECEC]  ${
        border ? "border-r-[2px]" : ""
      }`}
    >
      <div className="flex items-center gap-1 lg:gap-2">
        <img
          className="w-[14.78px] h-[13.78px] lg:w-[20.78px] lg:h-[20.78px] object-contain"
          src={image ? `${baseURL}/${image}` : symbol}
          alt=""
        />
        <h3 className="font-barlow font-bold text-[13.78px] leading-[23.63px] lg:text-[20.78px] lg:leading-[34.63px] text-left">
          {title}
        </h3>
      </div>
      <p className="font-Poppins font-normal md:text-[10px] text-xs leading-[23px] lg:text-[16px] lg:leading-[26px] text-left text-[#4C4D56] mt-1 lg:mt-3">
        {description}
      </p>
    </div>
  );
};

export default Card;
