import React from "react";
import homeImage from "../assets/images/homeimagecrop.jpeg";
import chevron from "../assets/images/chevron-right.png";
import svg0 from "../assets/images/svg0.png";
import svg1 from "../assets/images/svg1.png";
import svg from "../assets/images/svg.png";
import Vector2 from "../assets/images/Vector2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(250.49deg, rgba(0, 0, 0, 0) 43.25%, rgba(0, 0, 0, 0.6) 71.49%), url(${homeImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative h-[917px]  " style={backgroundImageStyle}>
      <div className="w-[1185] mx-auto ">
        <div className="absolute left-1 -top-[90px]">
          <img src={svg0} alt="" />
        </div>
        <div className="absolute left-[140px] -top-[90px]">
          <img src={svg1} alt="" />
        </div>
        {/* Content */}
        <div className=" flex flex-col gap-10 w-[1185] mx-auto  ">
          <div className="sm:max-w-[636px] sm:h-[228px] pt-[150px]  sm:ml-[121px]">
            <h1 className="font-inter font-bold sm:text-[68px] sm:leading-[75.5px] text-left text-white">
              We Transform <br />
              Idea into
              <br />
              <span className="text-[#FF751A]">Technology</span>
            </h1>
          </div>
          <div className="sm:max-w-[585.7px] sm:h-[84px] pt-[150px]  sm:ml-[121px]">
            <p className="font-Poppins font-medium sm:text-[16.22px] sm:leading-[27.58px] text-left text-white">
              We are committed to unlocking this potential for you. the future
              is defined by the limitless capabilities of Artificial
              Intelligence (AI). We dedicated to delivering innovative solutions
              with your goals.
            </p>
          </div>
          <div className="flex items-center gap-7 sm:max-w-[585.7px] pt-[90px] sm:ml-[121px]">
            <button className="group flex items-center justify-center w-[209px] h-[52px] font-Poppins font-medium text-[17.85px] text-white leading-[23.2px] bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-200 rounded-[10px] hover:from-white hover:to-white hover:text-[#FF751A] hover:shadow-md transition-all duration-700 ease-in-out">
              Contact Now
              <MdOutlineKeyboardArrowRight className="w-6 h-6  transition-transform duration-700 ease-in-out group-hover:ml-1 group-hover:scale-105" />
            </button>

            <button className="flex items-center justify-center w-[173px] h-[46px] font-Poppins font-medium text-[17.85px] text-white leading-[23.2px] bg-transparent ring-1 hover:ring-0 hover:shadow-md ring-white rounded-[10px] transition duration-500 ease-in-out transform hover:bg-orange-400 ">
              Learn More
            </button>
          </div>
          <div className="absolute bottom-0 right-0">
            <img src={svg} alt="" />
          </div>
          <div className="absolute bottom-0 right-0">
            <img src={Vector2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
