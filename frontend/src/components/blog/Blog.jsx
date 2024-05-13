import React from "react";
import bg from "../../assets/images/chooseusbg.jpeg";
import blog0 from "../../assets/images/blog0.png";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import personIcon from "../../assets/images/personIcon.png";
import msgIcon from "../../assets/images/msgIcon.png";
import rightArrow from "../../assets/images/rightArrow.svg";
import { MdArrowRightAlt } from "react-icons/md";

import WhatWeProvideCard from "./Card";
import {
  BlogCardData,
  WhatWeProvideData,
  chooseUsData,
} from "../../utils/fakedb/data";
import Card from "./Card";

const Blog = () => {
  return (
    <div className="relative h-[323px] sm:h-[604px] w-full mx-auto  ">
      <div className="w-[350px] h-[498.69] sm:w-[1184.44px]  mx-auto pt-[50px]   ">
        <h3 className="font-Poppins font-semibold text-[12px] sm:text-[16px]  text-[#FF6500]  leading-[28.19px] tracking-[0.9396284818649292px] text-center">
          Latest Blog
        </h3>
        <h3 className="font-Poppins font-semibold  text-[22px]  leading-[33.08px]  sm:text-[42px]  sm:leading-[61.08px] pt-[5px] text-[#232F3B]   text-center">
          From the News Room
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center mt-[15px] sm:h-[358.64px] sm:mt-[37px]">
          {BlogCardData.map((data, index) =>
            index < 2 ? (
              // Render only first 2 cards for screens smaller than `sm` size
              <Card key={index} data={data} />
            ) : (
              // Render all cards for screens larger than `sm` size
              <div key={index} className="hidden lg:block">
                <Card data={data} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
