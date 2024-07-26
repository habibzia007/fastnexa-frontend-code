import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ title, link, description, image }) => {
  return (
    <div className="hover:shadow-[3px_-3px_0_rgba(255,101,0)]  transition-all duration-300 shadow-sm relative  w-full max-w-sm mx-auto   rounded-md ">
      <div className="  w-[281.44px] h-[363.3px] group  bg-[#FFFFFF] rounded-[9.2px] p-3   z-50 ">
        <img className=" w-[46px] h-[46px]" src={image} alt="" />
        <div className="space-y-4 mt-5 w-[243px] h-[237.79px]">
          <h3 className="font-Poppins 0 font-bold   text-[20.23px] leading-[27.59px] text-left text-[#0E0E0E]   h-[55px]">
            {title}
          </h3>
          <p className="font-Poppins  line-clamp-4  font-normal  text-[12.88px] leading-[27.59px] text-left text-[#444444]">
            {description}
          </p>
          <div className="flex  gap-3 items-center">
            <div className="  w-[36px] h-[36px] rounded-full bg-[#EBEBEB] flex items-center justify-center group-hover:bg-[#FF6500]">
              <FaPlus className="  h-[12px] text-[#FF6500] group-hover:text-[#ffff]" />
            </div>
            {/* <span className="font-Poppins font-normal  text-[12.88px] leading-[27.59px] text-left text-[#232F3B]">
              Read More
            </span> */}
            <Link
              to={`/services/${link}`}
              className="font-Poppins font-normal text-[12.88px] leading-[27.59px] text-left text-[#232F3B]"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
