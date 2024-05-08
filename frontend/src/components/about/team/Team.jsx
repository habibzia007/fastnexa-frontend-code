import React from "react";
import testimonialbg from "../../../assets/images/testimonialbg.jpg";
import team1 from "../../../assets/images/team1.jpg";
import team2 from "../../../assets/images/team2.jpg";
import team3 from "../../../assets/images/team3.jpg";
import team4 from "../../../assets/images/team4.jpg";

const Team = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${testimonialbg})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  };
  return (
    <div
      className="relative h-[730px] w-full mt-[120px]"
      style={backgroundImageStyle}
    >
      <div className=" h-[517px] pt-[59px]  mx-auto">
        <h2 className="text-[#FFFFFF] font-Poppins font-semibold text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-center ">
          Our Expert Team
        </h2>
        <h1 className="text-[#FFFFFF] font-Poppins font-bold text-[42px] leading-[61.08px] text-center">
          We have world expert team
        </h1>
        <div className="flex  items-center w-[1184px] mx-auto">
          <div className=" relative ">
            <img src={team1} alt="" />
            <div className="flex items-center gap-3 absolute  bottom-[35px] left-[43px]">
              <div className="w-[15px] h-[40px] bg-gradient-to-b from-[#FF9A58] to-[#FF6500]"></div>
              <div>
                <h3 className="font-Poppins font-bold text-[20.23px] leading-[27.59px] text-[#FFFFFF]">
                  Arnold
                </h3>
                <p className="font-Poppins font-normal text-[12.88.23px] leading-[27.59px] text-[#FFFFFF]">
                  {" "}
                  CEO, FastNexa
                </p>
              </div>
            </div>
          </div>
          <div className=" relative ">
            <img src={team2} alt="" />
            <div className="flex items-center gap-3 absolute  bottom-[35px] left-[43px]">
              <div className="w-[15px] h-[40px] bg-gradient-to-b from-[#FF9A58] to-[#FF6500]"></div>
              <div>
                <h3 className="font-Poppins font-bold text-[20.23px] leading-[27.59px] text-[#FFFFFF]">
                  Mike
                </h3>
                <p className="font-Poppins font-normal text-[12.88.23px] leading-[27.59px] text-[#FFFFFF]">
                  {" "}
                  CEO, FastNexa
                </p>
              </div>
            </div>
          </div>
          <div className=" relative ">
            <img src={team3} alt="" />
            <div className="flex items-center gap-3 absolute  bottom-[35px] left-[43px]">
              <div className="w-[15px] h-[40px] bg-gradient-to-b from-[#FF9A58] to-[#FF6500]"></div>
              <div>
                <h3 className="font-Poppins font-bold text-[20.23px] leading-[27.59px] text-[#FFFFFF]">
                  Joakim
                </h3>
                <p className="font-Poppins font-normal text-[12.88.23px] leading-[27.59px] text-[#FFFFFF]">
                  {" "}
                  CEO, FastNexa
                </p>
              </div>
            </div>
          </div>
          <div className=" relative ">
            <img src={team4} alt="" />
            <div className="flex items-center gap-3 absolute  bottom-[35px] left-[43px]">
              <div className="w-[15px] h-[40px] bg-gradient-to-b from-[#FF9A58] to-[#FF6500]"></div>
              <div>
                <h3 className="font-Poppins font-bold text-[20.23px] leading-[27.59px] text-[#FFFFFF]">
                  Andrew
                </h3>
                <p className="font-Poppins font-normal text-[12.88.23px] leading-[27.59px] text-[#FFFFFF]">
                  {" "}
                  CEO, FastNexa
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="  flex items-center justify-center mt-10 gap-5">
          <div className="w-[16.54px]   h-[16.54px] ring-1 ring-white rounded-full flex items-center justify-center">
            <div className="w-[5.51px]   h-[5.51px] bg-white rounded-full "></div>
          </div>
          <div className="w-[5.51px]   h-[5.51px] bg-white rounded-full "></div>
          <div className="w-[5.51px]   h-[5.51px] bg-white rounded-full "></div>
        </div>
        {/* <img className="text-[#FF6500] text-center" src={group0} alt="" /> */}
      </div>
    </div>
  );
};

export default Team;
