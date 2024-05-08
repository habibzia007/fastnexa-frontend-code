import React from "react";
import symbol from "../../../assets/images/symbol.png";

const Card = ({ title, description, border }) => {
  return (
    <div
      className={`w-[258px] h-[130px] border-[#ECECEC] ${
        border ? "border-r-[2px]" : ""
      }`}
    >
      <div className="flex gap-2">
        <img
          className="text-[20.78px] object-contain leading-[20.78px]"
          src={symbol}
          alt=""
        />
        <h3 className="font-barlow font-bold text-[20.78px] leading-[34.63px] text-left">
          {title}
        </h3>
      </div>
      <p className="font-Poppins font-normal text-[16px] leading-[26px] text-left text-[#4C4D56] mt-3">
        {description}
      </p>
    </div>
  );
};

export default Card;
