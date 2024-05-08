import React from "react";
import aboutusservicesbg from "../../../assets/images/aboutusservicebg.jpg";
import aboutservice1 from "../../../assets/images/aboutservice1.jpg";
import aboutservice2 from "../../../assets/images/aboutservice2.jpg";
import aboutservice3 from "../../../assets/images/aboutservice3.jpg";
import team1 from "../../../assets/images/team1.jpg";
import team2 from "../../../assets/images/team2.jpg";
import team3 from "../../../assets/images/team3.jpg";
import team4 from "../../../assets/images/team4.jpg";

const AboutUsServices = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${aboutusservicesbg})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  };
  return (
    <div
      className="relative h-[1236px] w-full mt-[121px]"
      style={backgroundImageStyle}
    >
      {/* wrapper */}
      <div className=" w-[1185px]  mx-auto pt-[66px]  ">
        <div className=" w-full flex flex-col space-y-[62px]">
          <div className=" w-full h-[311px] flex  justify-between items-center">
            {/* left side  */}
            <div className=" flex flex-col w-[540px] space-y-4 ">
              <h2 className="font-Poppins font-bold text-[42px] leading-[61.08px] text-left text-[#232F3B]">
                Our Approach
              </h2>
              <p className="font-Poppins font-normal text-[16px] leading-[26px] text-left text-[#444444]">
                Delivering specialized services worldwide, Lucerna, as part of
                the ABM Group, utilizes highly qualified professionals across
                unlimited geographical boundaries. Whether you are located in
                the META region, Europe, or beyond, we provide tailor-made
                services that precisely fit your requirements. Building upon ABM
                IT's four-decade legacy,{" "}
              </p>
              {/* right side  */}
              <button className="font-lato w-[170.16px] h-[59.99px] left-[160px] py-[19.15px] px-[26.37px] ring-2 text-orange-500 rounded-md ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors  duration-500">
                Discover More
              </button>
            </div>
            <img
              className="w-[540px] h-full rounded-md"
              src={aboutservice1}
              alt=""
            />
          </div>
          <div className=" w-full h-[311px] flex flex-row-reverse  justify-between items-center">
            {/* left side  */}
            <div className=" flex flex-col w-[540px] space-y-4 ">
              <h2 className="font-Poppins font-bold text-[42px] leading-[61.08px] text-left text-[#232F3B]">
                Our Approach
              </h2>
              <p className="font-Poppins font-normal text-[16px] leading-[26px] text-left text-[#444444]">
                Delivering specialized services worldwide, Lucerna, as part of
                the ABM Group, utilizes highly qualified professionals across
                unlimited geographical boundaries. Whether you are located in
                the META region, Europe, or beyond, we provide tailor-made
                services that precisely fit your requirements. Building upon ABM
                IT's four-decade legacy,{" "}
              </p>
              {/* right side  */}
              <button className="font-lato w-[170.16px] h-[59.99px] left-[160px] py-[19.15px] px-[26.37px] ring-2 text-orange-500 rounded-md ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors  duration-500">
                Discover More
              </button>
            </div>
            <img
              className="w-[540px] h-full rounded-md"
              src={aboutservice2}
              alt=""
            />
          </div>
          <div className=" w-full h-[311px] flex  justify-between items-center">
            {/* left side  */}
            <div className=" flex flex-col w-[540px] space-y-4 ">
              <h2 className="font-Poppins font-bold text-[42px] leading-[61.08px] text-left text-[#232F3B]">
                Our Approach
              </h2>
              <p className="font-Poppins font-normal text-[16px] leading-[26px] text-left text-[#444444]">
                Delivering specialized services worldwide, Lucerna, as part of
                the ABM Group, utilizes highly qualified professionals across
                unlimited geographical boundaries. Whether you are located in
                the META region, Europe, or beyond, we provide tailor-made
                services that precisely fit your requirements. Building upon ABM
                IT's four-decade legacy,{" "}
              </p>
              {/* right side  */}
              <button className="font-lato w-[170.16px] h-[59.99px] left-[160px] py-[19.15px] px-[26.37px] ring-2 text-orange-500 rounded-md ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors  duration-500">
                Discover More
              </button>
            </div>
            <img
              className="w-[540px] h-full rounded-md"
              src={aboutservice3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsServices;
