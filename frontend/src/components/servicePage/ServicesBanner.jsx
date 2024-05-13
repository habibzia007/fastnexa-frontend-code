import React from "react";
import bg from "../../assets/images/image-top.png";


const AboutBanner = () => {
  const backgroundImageStyle = {
    backgroundImage: ` url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative h-[300px] w-full " style={backgroundImageStyle}>
      <div className="w-[1185px] mx-auto ">
        <div className=" flex gap-[600px] h-[284px]">
          <div className="mt-[70px] ml-[80px]">
            <h2 className="font-poppins font-bold text-[42px] leading-[61.08px] text-left pt-[55px] text-white">
              Services
            </h2>
            <p className="font-barlow font-normal text-[12.6px] leading-[20.48px] text-left text-orangeColor">
              Home ➜ Services
            </p>
          </div>
          {/* <img className=" w-[312.31px] h-[230.08px]" src={about} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
