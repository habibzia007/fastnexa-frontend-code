import React from "react";
import aboutBig from "../../assets/images/about-big.png";
import divabout from "../../assets/images/divabout.png";
import WhoWeAreCard from "./Card";

const WhoWeAre = () => {
  return (
    <div className="w-full lg:h-[704px] mt-[41px] lg:mt-[80px]">
      <div className="container lg:w-[1184px] mx-auto px-4 lg:px-6 grid grid-cols-12 gap-2 md:gap-10">
        {/* Left side */}
        <div className="col-span-12 md:col-span-6 lg:col-span-6 flex flex-col ">
          {/* Left side top */}
          <div className="w-[350px] mx-auto sm:w-[610px] md:w-[350px] lg:w-[510px] md:mx-0 lg:mx-0 h-[154px] lg:h-[278px] flex flex-col  gap-[10.3px] lg:gap-[7px]">
            <h2 className="font-Poppins font-semibold text-[12px] lg:text-[16px] text-[#FF6500] leading-[28.19px] tracking-[0.9396284818649292px] text-center md:text-left lg:text-left">
              WHO WE ARE
            </h2>
            <h1 className="font-Poppins font-semibold text-[23px] leading-[34.1px] text-center  lg:text-[32px] lg:leading-[42.1px] md:text-left lg:text-left text-[#232F3B]">
              Boost Business with Human Resource Augmentation
            </h1>
            <p className="font-Poppins text-[#4C4D56] font-normal text-[11px] leading-[16.5px] sm:text-[13px] sm:leading-[17.5px]  lg:text-[16px] lg:leading-[26px] text-center md:text-left lg:text-left">
              FAST NEXA specializes in Human Resource Augmentation, Software Development, and IT Services, catering to diverse industries with tailored solutions.
            </p>
          </div>
          {/* Left side bottom */}
          <div className="w-[350px] mx-auto sm:w-[610px] md:w-[350px] lg:w-[526px] md:mx-0 lg:mx-0 lg:h-[397px] mt-7 lg:mt-0 ">
            <div className="w-full border-[#ECECEC] border-b-[2px] flex  gap-5 lg:gap-8 ">
              <WhoWeAreCard
                title="Soft Kode"
                description="Department of Software Coding and Development."
                border={true}
              />
              <WhoWeAreCard
                title="GT"
                description="Department of Gaming Technology."
              />
            </div>
            <div className="w-full border-[#ECECEC] border-b-[2px] flex  gap-5 lg:gap-8">
              <WhoWeAreCard
                title="ISec"
                description="Department of Information and Cybersecurity."
                border={true}
              />
              <WhoWeAreCard
                title="Infra"
                description="Department of Network Infrastructure and Data Center."
              />
            </div>
            <div className="w-full border-[#ECECEC] flex  gap-5 lg:gap-8">
              <WhoWeAreCard
                title="BC & HRA"
                description="Department of Business Continuity and Human Resource Augmentation."
                border={true}
              />
              <WhoWeAreCard
                title="FA"
                description="Professional Service for Financial Advisory."
              />
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="col-span-12 md:col-span-6 lg:col-span-6 h-[356.96px] md:mt-[14.5rem] lg:h-[610.96px] top-[1066px] mt-4 lg:mt-[70px] flex lg:ml-[39px]">
          <div className="relative w-[350px]  sm:w-[610px]  md:w-[70%]  sm:ml-[27px]  lg:ml-auto">
            <img
              className="w-[231px] h-[352px] lg:w-[397px] lg:h-[610px] object-cover border-l-8 rounded-md border-l-orange-600 left-[224px] bottom-0 lg:bottom-0 lg:left-2 lg:-top-0 lg:-right-3 ml-[116px] lg:ml-0"
              src={aboutBig}
              alt=""
            />
            <img
              className="w-[220px] h-[159px] lg:w-[377px] lg:h-[272px] absolute bottom-0 left-[-2px] lg:bottom-[-12px] lg:left-[-194px] object-contain"
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
