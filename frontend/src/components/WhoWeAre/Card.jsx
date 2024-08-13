import React from "react";
import symbol from "../../assets/images/symbol.svg";

const Card = ({ title, description, border }) => {
  return (
    <div
      className={`w-[183px] h-[100px] sm:w-[258px] sm:h-[130px] border-[#ECECEC] ${
        border ? "border-r-[2px]" : ""
      }`}
    >
      <div className="flex gap-2">
        <img
          className="text-[15.41px] leading-[15.41px]  sm:text-[20.78px] sm:leading-[20.78px] object-contain "
          src={symbol}
          alt=""
        />
        <h3 className="font-barlow font-bold text-[15.41px] leading-[25.68px] sm:text-[20.78px] sm:leading-[34.63px] text-left">
          {title}
        </h3>
      </div>
      <p className="font-Poppins flex md:flex-nowrap flex-wrap font-normal md:text-[11px] text-xs leading-[19px] sm:text-[16px] sm:leading-[26px] text-left text-[#4C4D56] mt-3">
        {description}
      </p>
    </div>
  );
};

export default Card;
