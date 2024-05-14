import React from "react";
import testimonialbg from "../../../assets/images/testimonialbg.jpg";
import team1 from "../../../assets/images/team1.jpg";
import team2 from "../../../assets/images/team2.jpg";
import team3 from "../../../assets/images/team3.jpg";
import team4 from "../../../assets/images/team4.jpg";
import Dots from "../../../utils/Dots";

const Team = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${testimonialbg})`,
    backgroundSize: "cover",
    backgroundPosition: "left",
  };
  return (
    <div
      className="relative h-[388px] sm:h-[730px] w-full mt-[60px] sm:mt-[120px] bg-cover bg-left sm:bg-center "
      style={{backgroundImage: `url(${testimonialbg})`}}
    >
      <div className=" h-[517px] pt-[20px] sm:pt-[59px]  mx-auto">
        <h2 className="text-[#FFFFFF] font-Poppins font-semibold text-[12px] sm:text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-center ">
          Our Expert Team
        </h2>
        <h1 className="text-[#FFFFFF] font-Poppins font-bold text-[24px] leading-[28.08px] sm:text-[42px] sm:leading-[61.08px] text-center">
          We have world expert team
        </h1>
        <div className="flex  items-center justify-center w-[350px] sm:w-[610px] lg:w-[1184px] mx-auto mt-2 sm:mt-10 ">
          <div className=" relative cursor-pointer opacity-100 hover:opacity-90 ">
            <img className="w-[175px] h-[225px] sm:w-[297px] sm:h-[381px] " src={team1} alt="" />
            <div className="flex items-center gap-1  sm:gap-3 absolute  bottom-[35px] left-[43px]">
              <div className="w-[8px] h-[23px] sm:w-[15px] sm:h-[40px] bg-gradient-to-b from-[#FF9A58] to-[#FF6500]"></div>
              <div>
                <h3 className="font-Poppins font-bold text-[11.23px] leading-[16.59px]  sm:text-[20.23px] sm:leading-[27.59px] text-[#FFFFFF]">
                  Arnold
                </h3>
                <p className="font-Poppins font-normal text-[7.23px] leading-[11.59px] sm:text-[12.88px] sm:leading-[27.59px] text-[#FFFFFF]">
                  {" "}
                  CEO, FastNexa
                </p>
              </div>
            </div>
          </div>
          <div className=" relative  cursor-pointer opacity-100 hover:opacity-90 ">
            <img className="w-[175px] h-[225px] sm:w-[297px] sm:h-[381px] " src={team2} alt="" />
            <div className="flex items-center gap-3 absolute  bottom-[35px] left-[43px]">
              <div className="w-[8px] h-[23px] sm:w-[15px] sm:h-[40px] bg-gradient-to-b from-[#FF9A58] to-[#FF6500]"></div>
              <div>
                <h3 className="font-Poppins font-bold text-[11.23px] leading-[16.59px]  sm:text-[20.23px] sm:leading-[27.59px] text-[#FFFFFF]">
                  Mike
                </h3>
                <p className="font-Poppins font-normal text-[7.23px] leading-[11.59px] sm:text-[12.88px] sm:leading-[27.59px] text-[#FFFFFF]">
                  
                  CEO, FastNexa
                </p>
              </div>
            </div>
          </div>
          <div className="  hidden lg:block  relative  cursor-pointer opacity-100 hover:opacity-90 ">
            <img className="w-[175px] h-[225px] sm:w-[297px] sm:h-[381px] " src={team3} alt="" />
            <div className="flex items-center gap-3 absolute  bottom-[35px] left-[43px]">
              <div className="w-[15px] h-[40px] bg-gradient-to-b from-[#FF9A58] to-[#FF6500]"></div>
              <div>
                <h3 className="font-Poppins font-bold text-[20.23px] leading-[27.59px] text-[#FFFFFF]">
                  Joakim
                </h3>
                <p className="font-Poppins font-normal text-[12.88px] leading-[27.59px] text-[#FFFFFF]">
                  {" "}
                  CEO, FastNexa
                </p>
              </div>
            </div>
          </div>
          <div className=" hidden xl:block relative  cursor-pointer opacity-100 hover:opacity-90 ">
            <img className="w-[175px] h-[225px] sm:w-[297px] sm:h-[381px] " src={team4} alt="" />
            <div className="flex items-center gap-3 absolute  bottom-[35px] left-[43px]">
              <div className="w-[15px] h-[40px] bg-gradient-to-b from-[#FF9A58] to-[#FF6500]"></div>
              <div>
                <h3 className="font-Poppins font-bold text-[20.23px] leading-[27.59px] text-[#FFFFFF]">
                  Andrew
                </h3>
                <p className="font-Poppins font-normal text-[12.88px] leading-[27.59px] text-[#FFFFFF]">
                  {" "}
                  CEO, FastNexa
                </p>
              </div>
            </div>
          </div>
        </div>
        <Dots />
        {/* <img className="text-[#FF6500] text-center" src={group0} alt="" /> */}
      </div>
    </div>
  );
};

export default Team;
