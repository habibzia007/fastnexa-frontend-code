import React from "react";
import testimonialbg from "../../../assets/images/testimonialbg.jpg";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ctoImg from "../../../assets/images/abdulla.jpg";
import ceoImg from "./faisalShehzad.jpg";
import cooImg from "../../../assets/images/fatima.jpg";
import cioImg from "./fizzaAbdulla.png";

const Team = () => {
  const teamMembers = [
    {
      imgSrc: ceoImg,
      name: "Faisal Shahzad",
      position: "Fractional CEO & vCISO FastNexa",
    },
    { imgSrc: ctoImg, name: "Abdulla Faisal", position: "CTO, FastNexa" },
    { imgSrc: cooImg, name: "Fatimah Faisal", position: "COO, FastNexa" },
    { imgSrc: cioImg, name: "Fizza Abdulla", position: "CIO, FastNexa" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    className: "center",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
          // centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
        },
      },
    ],
  };

  return (
    <div
      className="relative bg-cover bg-left sm:bg-center px-3"
      style={{ backgroundImage: `url(${testimonialbg})` }}
    >
      <div className="py-20 mx-auto">
        <h2 className="text-[#FFFFFF] font-Poppins font-semibold text-[9.44px] sm:text-[16px] leading-[16.19px] tracking-[0.9396284818649292px] text-center">
          Our Expert Team
        </h2>
        <h1 className="text-[#FFFFFF] font-Poppins font-bold text-[16px] leading-[36.08px] md:text-[42px] md:leading-[61.08px] text-center">
          We have a world-class expert team
        </h1>

        <div className="flex justify-center items-center w-full max-w-[1184px] px-2 md:px-4 mx-auto mt-2 sm:mt-5 slider-container">
          <Slider
            {...settings}
            className=" w-[300px] sm:w-[700.44px] lg:w-[950.44px] xl:w-[1189.44px] mx-auto "
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`py-[12px] relative px-2 cursor-pointer !flex !justify-center !items-center  opacity-100 hover:opacity-90  group transition-transform duration-500 transform hover:scale-105 overflow-visible ${
                  index >= 2 && "hidden"
                } sm:block ${index >= 3 && "sm:hidden"} lg:block ${
                  index >= 4 && "lg:hidden"
                } xl:block`}
              >
                <div>
                  <img
                      // className="w-[175px] h-[225px] sm:w-[220px] sm:h-[280px] md:w-[260px] md:h-[330px] lg:w-[300px] lg:h-[380px] xl:w-[350px] xl:h-[450px] object-cover rounded-[5rem]"
                      // className="w-[15rem] h-[20rem] object-cover rounded-[5rem]"
                      className="w-[15rem] h-[17rem] sm:w-[12rem] sm:h-[18rem] md:w-[15rem] md:h-[20rem] lg:w-[18rem] lg:h-[24rem] xl:w-[20rem] xl:h-[26rem] object-cover rounded-[2rem] lg:rounded-[20px]"
                      src={member.imgSrc}
                      alt={member.name}
                  />
                </div>
                <div className="flex justify-center md:items-center items-start gap-1 sm:gap-3 absolute lg:bottom-9 md:bottom-5 bottom-3 lg:left-[43px] md:left-[37px] left-24">
                  <div
                      className="w-[8px] h-[23px] sm:w-[15px] sm:h-[40px] bg-gradient-to-b from-[#FF9A58] to-[#FF6500] md:mt-0 mt-1"></div>
                  <div>
                    <h3 className="font-Poppins font-bold text-[11.23px] leading-[16.59px] sm:text-[20.23px] sm:leading-[27.59px] text-[#FFFFFF]">
                      {member.name}
                    </h3>
                    <p className="font-Poppins font-normal text-[7.23px] leading-[11.59px] sm:text-[12.88px] sm:leading-[27.59px] text-[#FFFFFF]">
                      {member.position}
                    </p>
                    <div className="flex space-x-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <FaFacebookF className="text-white hover:text-orange-500" />
                      <FaTwitter className="text-white hover:text-orange-500" />
                      <FaLinkedinIn className="text-white hover:text-orange-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
