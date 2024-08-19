import React from "react";
import aboutus1 from "../../../assets/images/aboutus1.jpg";
import aboutus2 from "../../../assets/images/aboutus2.jpg";
import Card from "./Card";

const AboutUs = () => {
  return (
    <div className="w-full h-[795px] lg:h-[536px]  lg:mt-[103px] ">
      <div className="container w-[350px] sm:w-[513px] h-full lg:w-[1185px] lg:h-[536px] mx-auto flex  flex-col-reverse lg:flex-row  gap-2  ">
        {/* left side  */}
        <div className=" w-[350px] sm:w-[513px] h-[332px] lg:w-[599px] lg:h-[512px] mt-40 lg:mt-10 md:mb-0 mb-4">
          <div className="relative  sm:w-[513px]  ">
            <div className="w-[207px] h-[276px] lg:w-[211px] lg:h-[402px] bg-[#FF6500] rounded-[18px] z-10 "></div>
            <img
              className=" w-[207px] h-[276px] lg:w-[303px] lg:h-[402px] rounded-md absolute top-[3rem] left-[133px] lg:top-16 lg:left-[204px] z-40"
              src={aboutus2}
              alt=""
            />
            <img
              className="w-[207px] h-[276px] lg:w-[303px] lg:h-[402px] rounded-md absolute  bottom-3 left-[8px] z-30 "
              src={aboutus1}
              alt=""
            />
          </div>
        </div>
        {/* right side  */}
        <div className="w-[341px] sm:w-[536px]  h-[420px] lg:h-[536px] flex-col  ">
          <div className="w-[349px] sm:w-[513px]  h-[187px] lg:w-[510px] lg:h-[228px]  flex flex-col mb-2 lg:mb-4 md:mt-0 mt-28  items-center lg:items-start ">
            <h4 className="font-Poppins font-semibold text-[12px] leading-[28.19px] lg:text-[16px] lg:leading-[28.19px] text-[#FF6500]  tracking-[0.9496284818649292px] text-left">
              ABOUT US
            </h4>
            <h1 className="font-Poppins font-semibold text-[#232F3B] text-[22px]  leading-[28.1px] lg:text-[42px]  lg:leading-[61.1px] text-left">
              Why Choose FAST NEXA?
            </h1>
            <p className="font-Poppins text-[#4C4D56] font-normal text-xs leading-[26px] lg:text-[16px] lg:leading-[26px] text-center lg:text-left ">
              We introduced FastNexa Tech, a specialized company offering
              professional services in various domains including Information
              Systems & Security, Cybersecurity, Infrastructure, E-commerce,
              Project Management, Software Design & Development, Social Media
              Management, and Digital Marketing.
            </p>
          </div>

          <div className="w-[126px] md:mt-[70px] mt-10 sm:w-[513px]  h-[197px] lg:w-[526px] lg:h-[397px] md:px-0 px-2 ">
            <div className="w-[341px] sm:w-[513px]  lg:w-[516px] ml-160 border-[#ECECEC] border-b-[2px] flex gap-3 lg:gap-8">
              <Card
                title="Expertise"
                description="We possess expertises to navigate the ever-evolving landscape of technology."
                border={true}
              />
              <Card
                title="Innovation"
                description="We're constantly exploring new horizons, and pioneering groundbreaking solutions."
              />
            </div>
            <div className="w-[341px] sm:w-[513px]  lg:w-[516px]  border-[#ECECEC]  flex gap-3 lg:gap-8 ">
              <Card
                title="Collaboration"
                description="We believe in the power of collaboration and work closely with you every step."
                border={true}
              />
              <Card
                title="Results-Driven"
                description="We don't just deliver solutions; we deliver results."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
