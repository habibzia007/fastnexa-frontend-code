import React from "react";
import aboutBig from "../../assets/images/about-big.png";
import divabout from "../../assets/images/divabout.png";
import WhoWeAreCard from "./Card";

const WhoWeAre = () => {
  return (
    <div className="w-full sm:h-[704px] mt-[41px] sm:mt-[80px]">
      <div className="  container sm:w-[1184px] mx-auto px-4 sm:px-6 grid grid-cols-12 gap-2">
        {/* Left side */}
        <div className="col-span-12 sm:col-span-6 flex flex-col">
          {/* Left side top */}
          <div className="w-full h-[154px] sm:h-[250px] flex flex-col gap-[10.3px] sm:gap-[7px]">
            <h4 className="font-Poppins font-semibold text-[12px] sm:text-[16px] text-[#FF6500] leading-[28.19px] tracking-[0.9396284818649292px] text-center sm:text-left">
              WHO WE ARE?
            </h4>
            <h1 className="font-Poppins font-semibold text-[23px] leading-[34.1px] text-center sm:text-[32px] sm:leading-[42.1px] sm:text-left text-[#232F3B]">
              Boost Business with Human Resource Augmentation
            </h1>
            <p className="font-Poppins text-[#4C4D56] font-normal text-[11px] leading-[16px] text-center sm:text-[16px] sm:leading-[26px] sm:text-left">
              Fast Nexa is into Human Resource Augmentation, Software
              Development, and IT Services, catering to diverse industries with
              tailored solutions.
            </p>
          </div>
          {/* Left side bottom */}
          <div className="w-full sm:max-w-[526px] sm:h-[397px] mt-7 sm:mt-0 ">
            <div className="w-full border-[#ECECEC] border-b-[2px] flex  gap-5 sm:gap-8 ">
              <WhoWeAreCard
                title="Soft Kode"
                description="A Dept of Software Coding and Development."
                border={true}
              />
              <WhoWeAreCard
                title="GT"
                description="A Dept of Gaming Technology."
              />
            </div>
            <div className="w-full border-[#ECECEC] border-b-[2px] flex  gap-5 sm:gap-8">
              <WhoWeAreCard
                title="ISec"
                description="A Dept of Information and Cybersecurity."
                border={true}
              />
              <WhoWeAreCard
                title="Infra"
                description="A Dept of Networks and Infrastructure."
              />
            </div>
            <div className="w-full border-[#ECECEC] flex  gap-5 sm:gap-8">
              <WhoWeAreCard
                title="BC & HRA"
                description="A Dept of Business Continuity and  Human Resource Augmentation."
                border={true}
              />
              <WhoWeAreCard
                title="FA"
                description="Professional Service for Financial Advisory"
              />
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="col-span-12 sm:col-span-6 h-[356.96px] md:h-[610.96px] top-[1066px] mt-4 sm:mt-[70px] flex sm:ml-[39px]">
          <div className="relative sm:ml-auto">
            <img
              className="w-[231px] h-[352px] sm:w-[397px] sm:h-[610px] object-cover border-l-8 rounded-md border-l-orange-600 left-[224px] bottom-0 sm:bottom-0 sm:left-2 sm:-top-0 sm:-right-3 ml-[116px] sm:ml-0"
              src={aboutBig}
              alt=""
            />
            <img
              className="w-[220px] h-[159px] sm:w-[377px] sm:h-[272px] absolute bottom-0 left-[-2px] sm:bottom-0 sm:left-[-194px] object-contain"
              src={divabout}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
