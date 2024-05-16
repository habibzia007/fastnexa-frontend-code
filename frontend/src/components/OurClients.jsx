import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import honor from "../assets/images/honor.png";
import lakecity from "../assets/images/lakecity.png";
import people from "../assets/images/people.png";
import xinhuamall from "../assets/images/xinhuamall.png";
import netutils from "../assets/images/netutils.png";

const OurClients = () => {
  const logos = [honor, lakecity, people, xinhuamall, netutils];

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
  };

  return (
    <div className=" w-[300px] sm:w-[600.44px] lg:w-[1000px] xl:w-[1189.44px] lg:h-[329px] mx-auto my-[30px] sm:my-[40px] md:my-[50px] xl:my-[120px]">
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
              className="w-[64px] h-[64px] md:w-[100px] md:h-[100px]  lg:w-[167.54px] lg:h-[167.54px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurClients;
