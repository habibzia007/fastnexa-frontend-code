import React from "react";
import bg from "../../assets/images/whatweprovidebg.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import WhatWeProvideCard from "./Card";
import { WhatWeProvideData } from "../../utils/fakedb/data";
import { Link } from "react-router-dom";

const WhatWeProvide = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative mt-6 lg:mt-10" style={backgroundImageStyle}>
      <div className="container mx-auto px-4 sm:px-6 pt-10 w-full max-w-[1184px]">
        <h3 className="font-Poppins font-semibold text-sm sm:text-base text-[#FF6500] tracking-wider text-center">
          What We Provide
        </h3>
        <h3 className="font-Poppins font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#232F3B] text-center mt-2">
          We offer truly prominent software solutions designed to meet your
          business needs.
        </h3>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-4 lg:gap-8">
          {WhatWeProvideData.map((card, index) => (
            <WhatWeProvideCard
              key={index}
              image={Object.values(card.img)[0]}
              link={card.link}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="flex items-center justify-center py-6 sm:py-10">
          <Link to="/services" className="flex items-center justify-center">
            <h3 className="font-Poppins text-sm sm:text-base text-center text-[#232F3B]">
              Learn more about{" "}
              <span className="font-Poppins font-semibold text-[#FF6500]">
                More Services
              </span>
            </h3>
            <img
              className="object-contain ml-2"
              src={rightArrow}
              alt="Right Arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
