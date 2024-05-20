import React from "react";
import bg from "../assets/images/image-top.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = ({ text }) => {
  return (
    <div
      className="relative h-[200px] sm:h-[354px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-[1185px] mx-auto ">
        <div className="flex justify-between sm:h-[284px] sm:justify-start sm:gap-[600px]">
          <div className="mt-[30px] ml-[38px] sm:mt-[70px] sm:ml-[80px]">
            <h2 className="font-outfit font-bold text-[28px] leading-[35.08px] sm:text-[50px] sm:leading-[58.08px] text-left pt-[55px] text-white tracking-wide">
              {text}
            </h2>
            <p className="font-outfit font-normal text-[12.6px] leading-[22.48px] sm:text-[14.6px] sm:leading-[22.48px] text-left text-[#FF6500] flex items-center gap-2">
              Home{" "}
              <span>
                <FaLongArrowAltRight className="mt-1" />
              </span>{" "}
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
