import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import allcorlogo from "../assets/images/clients/allcorlogo.png";
import attock from "../assets/images/clients/attock.jpeg";
import caroyal from "../assets/images/clients/caroyal.png";
import dindin from "../assets/images/clients/dindin.png";
import elogo from "../assets/images/clients/elogo.jpeg";
import fastCables from "../assets/images/clients/fastCables.jpeg";
import officeEmpire from "../assets/images/clients/officeEmpire.png";

const OurClients = () => {
  const logos = [
    allcorlogo,
    attock,
    caroyal,
    dindin,
    elogo,
    fastCables,
    officeEmpire,
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className=" w-[300px] sm:w-[600.44px] lg:w-[1000px] xl:w-[1189.44px] lg:h-[329px] mx-auto my-[30px] sm:my-[40px] md:my-[50px] xl:my-[72px]">
      <h2 className="text-[#FF6500] font-Poppins font-semibold text-[12px] md:text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-center">
        Our Clients
      </h2>
      <h1 className="text-[#232F3B] font-Poppins font-semibold text-[20px] leading-[33.08px] md:text-[27px] sm:leading-[61.08px]  xl:text-[42px] xl:leading-[100.08px] text-center">
        We share our confidence and passion with.
      </h1>
      <Slider {...settings} className="filter grayscale ">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={logo}
              alt={`Logo ${index}`}
              // className="w-[64px] h-[64px] md:w-[100px] md:h-[100px]  lg:w-[167.54px] lg:h-[167.54px]"
              className="w-[64px] h-[64px] md:w-[100px] md:h-[100px]  lg:w-[167.54px] lg:h-[167.54px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurClients;
