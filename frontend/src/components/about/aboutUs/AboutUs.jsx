import React from "react";
import aboutus1 from "../../../assets/images/aboutus1.jpg";
import aboutus2 from "../../../assets/images/aboutus2.jpg";
import Card from "./Card";

const AboutUs = () => {
  return (
    <div className="w-full h-[795px] sm:h-[536px]  sm:mt-[103px]">
      <div className="w-[350px] h-full sm:w-[1185px] sm:h-[536px] mx-auto flex  flex-col-reverse sm:flex-row  gap-2  ">
        {/* left side  */}
        <div className=" w-[350px] h-[332px] sm:w-[599px] sm:h-[512px] ">
          <div className="relative mt-0 sm:mt-10 ">
            <div className="w-[207px] h-[276px] sm:w-[211px] sm:h-[402px] bg-[#FF6500] rounded-[18px] z-10 "></div>
            <img
              className=" w-[207px] h-[276px] sm:w-[303px] sm:h-[402px] rounded-md absolute top-[3rem] left-[133px] sm:top-16 sm:left-[204px] z-50  "
              src={aboutus2}
              alt=""
            />
            <img
              className="w-[207px] h-[276px] sm:w-[303px] sm:h-[402px] rounded-md absolute  bottom-3 left-[8px] z-30 "
              src={aboutus1}
              alt=""
            />
          </div>
        </div>
        {/* right side  */}
        <div className="w-[531px] h-[420px] sm:h-[536px] flex-col  ">
          <div className="w-[349px] h-[187px] sm:w-[510px] sm:h-[228px]  flex flex-col mb-2 sm:mb-4  items-center sm:items-start ">
            <h4 className="font-Poppins font-semibold text-[12px] leading-[28.19px] sm:text-[16px] sm:leading-[28.19px] text-[#FF6500]  tracking-[0.9496284818649292px] text-left">
              ABOUT US
            </h4>
            <h1 className="font-Poppins font-semibold text-[#232F3B] text-[22px]  leading-[28.1px] sm:text-[42px]  sm:leading-[61.1px] text-left">
              Introduction
            </h1>
            <p className="font-Poppins text-[#4C4D56] font-normal text-[11px] leading-[26px] sm:text-[16px] sm:leading-[26px] text-center sm:text-left ">
              We introduced FastNexa Tech, a specialized company offering
              professional services in various domains including Information
              Systems & Security, Cyber Security, Infrastructure, E-commerce,
              Project Management, Software Design & Development, Social Media
              Management, and Digital Marketing.
            </p>
          </div>

          <div className="w-[126px] h-[197px] sm:w-[526px] sm:h-[397px]  ">
            <div className="w-[347px] sm:w-[516px] ml-160 border-[#ECECEC] border-b-[2px] flex gap-3 sm:gap-8">
              <Card
                title="Part of ABM Info Tech"
                description="Pakistan's leading provider of technology services and solutions since 1983.
                "
                border={true}
              />
              <Card
                title="ABM Group"
                description="Pakistan's oldest business house with 8 flagship companies."
              />
            </div>
            <div className="w-[347px] sm:w-[516px] mt-[5px] border-[#ECECEC]  flex gap-3 sm:gap-8 ">
              <Card
                title="50+ Resources"
                description="Highly qualified professionals and accredited resources.
                "
                border={true}
              />
              <Card
                title="100+ Projects "
                description="Professional Services projects delivered in MENA/META"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
