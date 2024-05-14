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
    <div className=" flex justify-center w-full md:mb-[150px] mb-[50px] p-5 lg:p-0">
      <div
        className="relative lg:h-[285px] md:h-[250px] w-[1186px] center-div text-container "
        style={backgroundImageStyle}
      >
        <div className="flex items-center justify-between p-4">
          <div className="lg:w-4/6 lg:start-8 top-7 relative h-[209px] text-container text-center">
            <p className="font-Poppins lg:text-[17.59px] md:text-[14.59px] md:leading-[60px] text-[#FFFFFF] font-semibold text-left lg:leading-[75px] tracking-[1px] text-[6.89px] leading-[25px]">
              Contact our Expert Team
            </p>
            <h2 className="text-[#FFFFFF] font-Poppins font-bold lg:text-[42px] lg:leading-[50px] md:text-[28px] md:leading-[40px] md:tracking-[0.9396284818649292px] text-left text-[16.46px]">
              To make requests for further information, contact us,
            </h2>
          </div>
          <div className="lg:pr-9 lg:mr-6 lg:w-1/6 md:w-1/4 md:pr-5 w-1/2">
            <img
              src={contactImage}
              alt="Image description"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactExpertTeam;
