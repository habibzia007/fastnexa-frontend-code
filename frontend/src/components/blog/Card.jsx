// Card.js
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import personIcon from "../../assets/images/personIcon.svg"; // Import your person icon image
import msgIcon from "../../assets/images/msgIcon.svg"; // Import your message icon image

const Card = ({ data }) => {
  return (
    <div className="w-[171.45px] h-[164.64px] lg:w-[373px] lg:h-[358.64px] relative z-10 group transition hover:duration-1000 hover:transition-all">
      {/* Card image */}
      <img className="h-[101.74px] lg:h-[221.74px] rounded-lg z-10 w-full" src={Object.values(data.image)[0]} alt="" /> {/* Object.values() is used to access the value of the image property */}

      {/* Date badge */}
      <div className="w-[26.35px] h-[26.35px] lg:w-[58.35px] lg:h-[58.35px] flex items-center justify-center flex-col bg-gradient-to-b from-orange-300 to-orange-600 rounded-[5px] absolute top-[16px] left-[16px] lg:top-[33px] lg:left-[1.5rem] z-40 ">
        <span className="font-barlow font-medium text-[11.54px] leading-[12.37px] lg:text-[25.14px] lg:leading-[26.93px] text-center text-white">{data.date}</span>{" "} {/* Date */}
        <span className="font-barlow font-normal text-[5.77px] leading-[4.95px] lg:text-[12.57px] lg:leading-[10.77px] text-center text-white">{data.month}</span> {/* Month */}
      </div>

      {/* Card content */}
      <div className="w-[154.1px] h-[83.38px] lg:w-[336.1px] lg:h-[181.79px] z-50 py-3 px-3 lg:py-[20.99px] lg:px-[20.27px] shadow-md bg-white group transition hover:duration-1000 hover:transition-all absolute left-[8px] top-[74px] lg:left-[19px] lg:top-[163px]">
        <div className="w-[135px] h-[55.74px] lg:w-[296px] lg:h-[121.74px] space-y-1 lg:space-y-4">
          {/* Author and comments */}
          <div className="flex gap-2">
            {/* Author */}
            <div className="flex gap-[2px] lg:gap-1 items-center">
              <img className="w-[10.51px] h-[11.67px]" src={personIcon} alt="" /> {/* Person icon */}
              <h2 className="font-Poppins font-medium text-[5.36px] leading-[9.89px] lg:text-[11.67px] lg:leading-[21.55px] text-left text-[#999999]">{data.author}</h2> {/* Author name */}
            </div>
            {/* Number of comments */}
            <div className="flex gap-1 items-center">
              <img className="w-[13.47px] h-[11.67px]" src={msgIcon} alt="" /> {/* Message icon */}
              <h2 className="font-Poppins font-medium text-[5.36px] leading-[9.89px] lg:text-[11.67px] lg:leading-[21.55px] text-left text-[#999999]">{data.comments} Comments</h2> {/* Number of comments */}
            </div>
          </div>

          {/* Title */}
          <h3 className="w-[135.92px] h-[24.8px] lg:w-[296px] lg:h-[54px] font-Poppins font-semibold text-[9.29px] leading-[12.67px] lg:text-[20.23px] lg:leading-[27.59px] text-left group-hover:text-[#FF6500]">{data.title}</h3>

          {/* Read full */}
          <div className="flex items-center">
            <h3 className="w-[34.33px] h-[8.66px] lg:w-[65.47px] lg:h-[18.85px] font-Poppins font-semibold text-[4.95px] leading-[8.66px] lg:text-[10.77px] lg:leading-[18.85px] tracking-[0.8977px] text-left text-[#FF6500] group-hover:text-black">READ FULL</h3> {/* Read full text */}
            <MdArrowRightAlt className="text-orange-500 group-hover:text-black group-hover:transition group-hover:duration-500 group-hover:ease-in-out" />
          </div>
        </div>
      </div>

      {/* Orange overlay */}
      <div className="w-[152.1px] h-[60.38px] lg:w-[336.1px] lg:h-[177.79px] bg-orange-600 z-40 absolute left-[10px] bottom-[9px] lg:left-[19px] lg:bottom-4 group-hover:bottom-[5px] lg:group-hover:bottom-[10px] rounded-md group-hover:transition-all duration-300"></div>
    </div>
  );
};

export default Card;
