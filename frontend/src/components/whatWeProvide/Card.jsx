import React from "react";
import link from "../../assets/images/link.png";
import { FaPlus } from "react-icons/fa6";
const Card = ({ title, description, image }) => {
  return (
    <div className="relative w-[287px] h-[364.3px]  hover:border  rounded-md hover:border-r-[4px] hover:border-r-orange-500 hover:border-t-[4px] hover:border-t-orange-500 transition-all duration-300 ">
      <div className="w-[281.44px] h-[363.3px] group  bg-[#FFFFFF] rounded-[9.2px] p-5  z-50 ">
        <img className="w-[46px] h-[46px]" src={image} alt="" />
        <div className="space-y-4 mt-5 h-[237.79px]">
          <h3 className="font-Poppins font-bold text-[20.23px] leading-[27.59px] text-left text-[#0E0E0E] h-[55px]">
            {title}
          </h3>
          <p className="font-Poppins font-normal text-[12.88px] leading-[27.59px] text-left text-[#444444]">
            {description}
          </p>
          <div className="flex gap-3 items-center">
            <div className="w-[36px] h-[36px] rounded-full bg-[#EBEBEB] flex items-center justify-center group-hover:bg-[#FF6500]">
              <FaPlus className=" text-[#FF6500] group-hover:text-[#ffff]" />
            </div>
            <span className="font-Poppins font-normal text-[12.88px] leading-[27.59px] text-left text-[#232F3B]">
              Read More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
