import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialbg from "../../../assets/rectangle-orange.svg";
import team1 from "./team1.svg";
import team2 from "./team2.svg";
import team3 from "./team3.svg";
import team4 from "./team4.svg";

const Team = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${testimonialbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const logos = [team1, team2, team3, team4];

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  //   // TEAM CARDS ARE IN THE SAME DIRECTORY
  //   // EXAMPLE = "src/components/about/team/team1.svg"

  return (
    <div
      className="relative h-[730px] w-full mb-[160px] mt-[120px]"
      style={backgroundImageStyle}
    >
      <div className="w-full max-w-[1189.44px] pt-[80px] mx-auto">
        <h2 className="text-[#FFFFFF] font-Poppins font-semibold text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-center">
          Our Expert Team
        </h2>
        <h1 className="text-[#FFFFFF] font-Poppins font-bold text-[42px] leading-[61.08px] text-center pb-[50px]">
          We have a world-class expert team
        </h1>
        <Slider {...settings} className="w-[1189.44px] mx-auto">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="w-[297.36px] h-[381.94px] mb-[20px]"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
