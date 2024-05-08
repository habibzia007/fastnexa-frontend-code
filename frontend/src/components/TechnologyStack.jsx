import React from "react";
import nodejs from "../assets/images/nodejs.png";
import reactjs from "../assets/images/reactjs.png";
import angular from "../assets/images/angular.png";
import python from "../assets/images/python.png";
import dotnet from "../assets/images/dotnet.png";
import laravel from "../assets/images/laravel.png";
import rectangle from "../assets/images/rectangle.png";
import rectangle1 from "../assets/images/rectangle1.png";
const TechnologyStack = () => {
  return (
    <div className=" ">
      {/* wrapper */}
      <div className=" h-[437px] w-[1519px] bg-[#FFFFFF] mx-auto my-[90px] flex gap-5">
        {/* left side */}
        <div className="ml-[161px]">
          <h3 className="font-Poppins font-semibold text-[#FF6500] text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-left h-[29px]  ">
            Technology Stack
          </h3>
          <h1 className=" h-[123px] w-[637px] font-Poppins font-semibold text-[42px] leading-[61.08px] text-left">
            Need a talent to work for you directly?
          </h1>
          <p className="h-[58px] w-[751px] font-Poppins font-normal text-[16px] leading-[26px] text-left text-[#444444] pt-[31px]">
            We offer team augmentation services to get your things done right,
            from right now. Hire a fully dedicated team, a talent that fits your
            business idea.
          </p>
          <div className="w-[770px] h-[50.09px] flex gap-[1.8rem] items-center pt-[80px]">
            <img src={nodejs} alt="" />
            <img src={reactjs} alt="" />
            <img src={angular} alt="" />
            <img src={python} alt="" />
            <img src={dotnet} alt="" />
            <img src={laravel} alt="" />
          </div>

          <button className="w-[170.16px] font-lato text-[#FFFFFF] font-normal text-[17.87px] leading-[21.44px] tracking-[0.06382132321596146px] text-center bg-gradient-to-b from-orange-400 to-orange-600 rounded-md p-5 flex items-center justify-center mt-[50px] bg-[#FF6500] border-[#FF6500] hover:from-white hover:to-white  hover:text-orange-600 hover:border  transition-colors duration-700 hover:shadow-md">
            Discover More
          </button>
        </div>
        {/* right side */}

        <div className="h-[437px] w-[1519px] bg-[#FFFFFF] mx-auto ">
          <div class="w-[409px] h-[418px]  gap-0 rounded-tl-[9px] relative">
            <img
              className="w-[372px] h-[302px] relative"
              src={rectangle1}
              alt=""
            />
            <img
              className="w-[321px] h-[276px] absolute bottom-0 -right-[.5rem]"
              src={rectangle}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
