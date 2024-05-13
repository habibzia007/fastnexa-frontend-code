import React from "react";
import symbol from "../../../assets/images/symbol.svg";

const Card = ({ title, description, border }) => {
  return (
    <div
      className={`w-[258px] h-[110px] sm:h-[130px] border-[#ECECEC] ${
        border ? "border-r-[2px]" : ""
      }`}
    >
      <div className="flex items-center gap-1 sm:gap-2">
        <img
          className="w-[14.78px] h-[13.78px] sm:w-[20.78px] sm:h-[20.78px] object-contain "
          src={symbol}
          alt=""
        />
        <h3 className="font-barlow font-bold text-[13.78px] leading-[23.63px] sm:text-[20.78px] sm:leading-[34.63px] text-left">
          {title}
        </h3>
      </div>
      <p className="font-Poppins font-normal text-[10px] leading-[23px] sm:text-[16px] sm:leading-[26px] text-left text-[#4C4D56] mt-1 sm:mt-3">
        {description}
      </p>
    </div>
  );
};

export default Card;
