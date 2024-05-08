import React from "react";
import aboutBig from "../../assets/images/about-big.png";
import divabout from "../../assets/images/divabout.png";
import WhoWeAreCard from "./Card";

const WhoWeAre = () => {
  return (
    <div className="w-[1185px] h-[704px]  mx-auto mt-[80px]">
      <div className="w-[1185px] h-[677.96px]    mx-auto flex gap-2 ">
        {/* left side  */}
        <div className="w-[526px] flex-col gap-10">
          {/* left side top */}
          <div className="w-[510px] h-[278px] top-[999px] flex flex-col gap-[14.3px] ">
            <h4 className="font-Poppins font-semibold text-[16px] text-[#FF6500] leading-[20.19px] tracking-[0.9396284818649292px] text-left">
              WHO WE ARE?
            </h4>
            <h1 className="font-Poppins font-semibold text-[32px] text-[#232F3B] leading-[42.1px] text-left">
              Boost Business with <br /> Human Resource <br /> Augmentation
            </h1>
            <p className="font-Poppins text-[#4C4D56] font-normal text-[16px] leading-[26px] text-left">
              Fast Nexa is into Human Resource Augmentation, Software
              Development, and IT Services, catering to diverse industries with
              tailored solutions.
            </p>
          </div>
          {/* left side bottom */}
          <div className="w-[526px] h-[397px]  ">
            <div className="w-[516px] ml-160 border-[#ECECEC] border-b-[2px] flex gap-8">
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
            <div className="w-[516px] ml-160 border-[#ECECEC] border-b-[2px] flex gap-8">
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
            <div className="w-[516px] ml-160 border-[#ECECEC]  flex gap-8">
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
        {/* right side  */}
        <div className="w-[599px] h-[610.96px] top-[1066px]  mt-[70px] flex ml-[39px]">
          <div className="relative ml-auto">
            <div className="w-[397px] h-[503px] bg-[#FF6500] rounded-[18px] "></div>

            <img className="absolute -top-0 -right-3 " src={aboutBig} alt="" />
            <img
              className="absolute bottom-0 -left-[194px] "
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
