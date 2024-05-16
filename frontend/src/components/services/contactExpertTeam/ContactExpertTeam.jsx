import React from "react";
import bg from "../../../assets/rectangle-orange.svg";
import contactImage from "../../../assets/images/contact.png";

const ContactExpertTeam = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    // backgroundSize: "contain",
    backgroundPosition: "center",
  };

  return (
    <div className="flex justify-center w-full mb-[50px] md:my-[90px] p-5 lg:p-0">
      <div
        className="container  relative mx-auto w-full xl:w-[1186px]  md:h-[250px] lg:h-[285px] px-2"
        style={backgroundImageStyle}
      >
        <div className="flex items-center justify-between p-4 max-h-fit ">
          <div className="w-4/5 text-container lg:text-left">
            <p className="font-Poppins text-[#FFFFFF] font-semibold text-[12px] md:text-[14.59px] lg:text-[17.59px] leading-[18px] md:leading-[25px] lg:leading-[28px] tracking-[1px] mb-2 lg:mb-4">
              Contact our Expert Team
            </p>
            <h2 className="text-[#FFFFFF] font-Poppins font-bold text-[12px] md:text-[28px] lg:text-[42px] leading-[19px] md:leading-[40px] lg:leading-[50px] tracking-[0.9px]">
              To make requests for further information, contact us,
            </h2>
          </div>
          <div className="w-[20%] sm:w-1/6 mt-4 lg:mt-0 lg:pr-9 lg:mr-6">
            <img
              src={contactImage}
              alt="Image description"
              className="w-[100px] h-[108px] sm:w-[100px] sm:h-[108px] md:w-[200px] md:h-[209px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactExpertTeam;
