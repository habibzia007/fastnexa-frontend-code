import React from "react";
import aboutus1 from "../../../assets/images/aboutus1.jpg";
import aboutus2 from "../../../assets/images/aboutus2.jpg";
import Card from "./Card";

const AboutUs = () => {
  return (
    <div className="w-full h-[536px]  mt-[103px]">
      <div className="w-[1193px] h-[536px] mx-auto flex gap-2  ">
        {/* left side  */}
        <div className="w-[599px] h-[512px] ">
          <div className="relative mt-10 ">
            <div className="w-[211px] h-[402px] bg-[#FF6500] rounded-[18px] z-10 "></div>
            <img
              className=" w-[303px] h-[405px] rounded-md absolute top-16 left-[204px]   z-50  "
              src={aboutus2}
              alt=""
            />
            <img
              className=" w-[303px] h-[405px] rounded-md absolute  bottom-3 left-[8px] z-30 "
              src={aboutus1}
              alt=""
            />
          </div>
        </div>
        {/* right side  */}
        <div className="w-[531px] h-[536px] flex-col ">
          <div className="w-[510px] h-[228px] top-[999px] flex flex-col  mb-4">
            <h4 className="font-Poppins font-semibold text-[16px] text-[#FF6500] leading-[28.19px] tracking-[0.9496284818649292px] text-left">
              ABOUT US
            </h4>
            <h1 className="font-Poppins font-semibold text-[42px] text-[#232F3B] leading-[61.1px] text-left">
              Introduction
            </h1>
            <p className="font-Poppins text-[#4C4D56] font-normal text-[16px] leading-[26px] text-left">
              we introduced FastNexa Tech, a specialized company offering
              professional services in various domains including Information
              Systems & Security, Cyber Security, Infrastructure, E-commerce,
              Project Management, Software Design & Development, Social Media
              Management, and Digital Marketing.
            </p>
          </div>

          <div className="w-[526px] h-[397px]  ">
            <div className="w-[516px] ml-160 border-[#ECECEC] border-b-[2px] flex gap-8">
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
            <div className="w-[516px] ml-160 border-[#ECECEC]  flex gap-8">
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
