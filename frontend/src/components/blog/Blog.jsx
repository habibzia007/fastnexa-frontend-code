import React from "react";
import bg from "../../assets/images/chooseusbg.jpeg";
import blog0 from "../../assets/images/blog0.png";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import personIcon from "../../assets/images/personIcon.png";
import msgIcon from "../../assets/images/msgIcon.png";
import rightArrow from "../../assets/images/rightArrow.png";
import { MdArrowRightAlt } from "react-icons/md";

import WhatWeProvideCard from "./Card";
import { WhatWeProvideData, chooseUsData } from "../../utils/fakedb/data";
import Card from "./Card";

const Blog = () => {
  return (
    <div className="relative h-[498px] w-[1519px] mx-auto mt-[71px]">
      <div className="w-[1184.44px] h-[804px] top-[1847px] ml-[160px]   ">
        <h3 className="font-Poppins font-semibold text-[16px]  text-[#FF6500]  leading-[28.19px] tracking-[0.9396284818649292px] text-center">
          latest Blog
        </h3>
        <h3 className="font-Poppins font-semibold text-[42px]  pt-[5px] text-[#232F3B] leading-[61.08px]  text-center">
          From the News Room
        </h3>
        <div className=" flex gap-5 items-center h-[358.64px] mt-[37px] transition  hover:duration-1000 hover:transition-all">
          <div className="W-[373.45px] h-[358.64px] relative z-10 group transition  hover:duration-1000 hover:transition-all">
            <img
              className="h-[221.74px] rounded-lg  z-10 "
              src={blog0}
              alt=""
            />
            <div className="w-[58.35px] h-[58.35px] flex items-center justify-center flex-col bg-gradient-to-b from-orange-300 to-orange-600 rounded-[5px] absolute top-[33px] left-[1.5rem] z-40 ">
              <span className="font-barlow font-medium text-[25.14px] leading-[26.93px] text-center text-white">
                08
              </span>{" "}
              <span className="font-barlow font-normal text-[12.57px] leading-[10.77px] text-center text-white">
                Aug
              </span>
            </div>

            <div className="w-[336.1px] h-[181.79px]  z-50  py-[20.99px] px-[20.27px] shadow-md left-[19px] top-[163px] absolute bg-white group transition  hover:duration-1000 hover:transition-all">
              <div className="w-[296px] h-[121.74px] space-y-4">
                <div className=" flex gap-2">
                  <div className="flex gap-1 items-center ">
                    <img
                      className="w-[10.51px] h-[11.76px]"
                      src={personIcon}
                      alt=""
                    />
                    <h2 className="font-Poppins font-medium text-[11.67px] leading-[21.55px] text-left text-[#999999]">
                      Andrew Paker
                    </h2>
                  </div>
                  <div className="flex gap-1 items-center ">
                    <img
                      className="w-[10.51px] h-[11.76px]"
                      src={msgIcon}
                      alt=""
                    />
                    <h2 className="font-Poppins font-medium text-[11.67px] leading-[21.55px] text-left text-[#999999]">
                      0 Comments
                    </h2>
                  </div>
                </div>
                <h3 className="w-[296px] h-[54px] font-Poppins font-semibold text-[20.23px] leading-[27.59px] text-left group-hover:text-[#FF6500] ">
                  How to become a successful businessman
                </h3>
                <div className="flex items-center">
                  <h3 className=" w-[65.47px] h-[18.85px] font-Poppins font-semibold text-[10.77px] leading-[18.85px] tracking-[0.8977px] text-left text-[#FF6500] group-hover:text-black">
                    READ FULL
                  </h3>
                  <MdArrowRightAlt className="text-orange-500 group-hover:text-black  group-hover:transition group-hover:duration-500 group-hover:ease-in-out" />
                  {/* <img className="object-contain" src={rightArrow} alt="" /> */}
                </div>
              </div>
            </div>
            <div className="w-[336.1px] h-[177.79px] bg-orange-600 z-40  absolute left-[19px] bottom-4 group-hover:bottom-[10px]  rounded-md group-hover:transition-all duration-300"></div>
          </div>
          <div className="W-[373.45px] h-[358.64px] relative z-10 group transition  hover:duration-1000 hover:transition-all">
            <img
              className="h-[221.74px] rounded-lg  z-10 "
              src={blog0}
              alt=""
            />
            <div className="w-[58.35px] h-[58.35px] flex items-center justify-center flex-col bg-gradient-to-b from-orange-300 to-orange-600 rounded-[5px] absolute top-[33px] left-[1.5rem] z-40 ">
              <span className="font-barlow font-medium text-[25.14px] leading-[26.93px] text-center text-white">
                08
              </span>{" "}
              <span className="font-barlow font-normal text-[12.57px] leading-[10.77px] text-center text-white">
                Aug
              </span>
            </div>

            <div className="w-[336.1px] h-[181.79px]  z-50  py-[20.99px] px-[20.27px] shadow-md left-[19px] top-[163px] absolute bg-white group transition  hover:duration-1000 hover:transition-all">
              <div className="w-[296px] h-[121.74px] space-y-4">
                <div className=" flex gap-2">
                  <div className="flex gap-1 items-center ">
                    <img
                      className="w-[10.51px] h-[11.76px]"
                      src={personIcon}
                      alt=""
                    />
                    <h2 className="font-Poppins font-medium text-[11.67px] leading-[21.55px] text-left text-[#999999]">
                      Andrew Paker
                    </h2>
                  </div>
                  <div className="flex gap-1 items-center ">
                    <img
                      className="w-[10.51px] h-[11.76px]"
                      src={msgIcon}
                      alt=""
                    />
                    <h2 className="font-Poppins font-medium text-[11.67px] leading-[21.55px] text-left text-[#999999]">
                      0 Comments
                    </h2>
                  </div>
                </div>
                <h3 className="w-[296px] h-[54px] font-Poppins font-semibold text-[20.23px] leading-[27.59px] text-left group-hover:text-[#FF6500] ">
                  How to become a successful businessman
                </h3>
                <div className="flex items-center">
                  <h3 className=" w-[65.47px] h-[18.85px] font-Poppins font-semibold text-[10.77px] leading-[18.85px] tracking-[0.8977px] text-left text-[#FF6500] group-hover:text-black">
                    READ FULL
                  </h3>
                  <MdArrowRightAlt className="text-orange-500 group-hover:text-black  group-hover:transition group-hover:duration-500 group-hover:ease-in-out" />
                  {/* <img className="object-contain" src={rightArrow} alt="" /> */}
                </div>
              </div>
            </div>
            <div className="w-[336.1px] h-[177.79px] bg-orange-600 z-40  absolute left-[19px] bottom-4 group-hover:bottom-[10px]  rounded-md group-hover:transition-all duration-300"></div>
          </div>
          <div className="W-[373.45px] h-[358.64px] relative z-10 group transition  hover:duration-1000 hover:transition-all">
            <img
              className="h-[221.74px] rounded-lg  z-10 "
              src={blog0}
              alt=""
            />
            <div className="w-[58.35px] h-[58.35px] flex items-center justify-center flex-col bg-gradient-to-b from-orange-300 to-orange-600 rounded-[5px] absolute top-[33px] left-[1.5rem] z-40 ">
              <span className="font-barlow font-medium text-[25.14px] leading-[26.93px] text-center text-white">
                08
              </span>{" "}
              <span className="font-barlow font-normal text-[12.57px] leading-[10.77px] text-center text-white">
                Aug
              </span>
            </div>

            <div className="w-[336.1px] h-[181.79px]  z-50  py-[20.99px] px-[20.27px] shadow-md left-[19px] top-[163px] absolute bg-white group transition  hover:duration-1000 hover:transition-all">
              <div className="w-[296px] h-[121.74px] space-y-4">
                <div className=" flex gap-2">
                  <div className="flex gap-1 items-center ">
                    <img
                      className="w-[10.51px] h-[11.76px]"
                      src={personIcon}
                      alt=""
                    />
                    <h2 className="font-Poppins font-medium text-[11.67px] leading-[21.55px] text-left text-[#999999]">
                      Andrew Paker
                    </h2>
                  </div>
                  <div className="flex gap-1 items-center ">
                    <img
                      className="w-[10.51px] h-[11.76px]"
                      src={msgIcon}
                      alt=""
                    />
                    <h2 className="font-Poppins font-medium text-[11.67px] leading-[21.55px] text-left text-[#999999]">
                      0 Comments
                    </h2>
                  </div>
                </div>
                <h3 className="w-[296px] h-[54px] font-Poppins font-semibold text-[20.23px] leading-[27.59px] text-left group-hover:text-[#FF6500] ">
                  How to become a successful businessman
                </h3>
                <div className="flex items-center">
                  <h3 className=" w-[65.47px] h-[18.85px] font-Poppins font-semibold text-[10.77px] leading-[18.85px] tracking-[0.8977px] text-left text-[#FF6500] group-hover:text-black">
                    READ FULL
                  </h3>
                  <MdArrowRightAlt className="text-orange-500 group-hover:text-black  group-hover:transition group-hover:duration-500 group-hover:ease-in-out" />
                  {/* <img className="object-contain" src={rightArrow} alt="" /> */}
                </div>
              </div>
            </div>
            <div className="w-[336.1px] h-[177.79px] bg-orange-600 z-40  absolute left-[19px] bottom-4 group-hover:bottom-[10px]  rounded-md group-hover:transition-all duration-300"></div>
          </div>
        </div>
        {/* <div className="flex gap-4 pt-[60px]">
          {chooseUsData.map((card, index) => (
            <Card key={index} image={Object.values(card.img)[0]} title={card.title} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Blog;
