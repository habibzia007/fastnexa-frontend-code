import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialbg from "../../assets/rectangle-orange.svg";
import card1 from "./card1.svg";
import card2 from "./card2.svg";

const Testimonial = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${testimonialbg})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  };
  const logos = [card1, card2];

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // TESTIMONIAL CARDS ARE IN THE SAME DIRECTORY
  // EXAMPLE = "src/components/testimonial/card1.svg"

  return (
    <div
      className="relative h-[588.2px] w-full mb-[160px]"
      style={backgroundImageStyle}
    >
      <div className="w-[1020px]  h-[517px] pt-[80px]  mx-auto">
        <h2 className="text-[#FFFFFF] font-Poppins font-semibold text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-center">
          Testimonial
        </h2>
        <h1 className="text-[#FFFFFF] font-Poppins font-semibold text-[42px] leading-[61.08px] text-center">
          Our Clients Worldwide.
        </h1>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="w-[448.82px] h-[217.72px] mt-[60px]"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
