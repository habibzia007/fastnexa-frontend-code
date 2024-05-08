import React from "react";

const Card = ({ image, title }) => {
  const cardImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, -0.2) 0%, rgba(249, 80, 0, 0.35) 62%, rgba(0, 0, 0, 0.9) 88%), url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="w-[382.62px] h-[435.96px] rounded-[9.2px] relative group hover:transition-all hover:duration-500  opacity-1 hover:opacity-[0.95]">
      <div
        className="w-full h-full rounded-[9.2px] bg-cover bg-center"
        style={cardImageStyle}
      >
        {/* content */}
        <div className="absolute bottom-[3rem] left-[3rem] flex gap-2 items-center flex-col hover:transition-all hover:duration-500">
          <div className="flex gap-2 items-center">
            <div className="w-[2.76px] h-[45.99px] bg-[#FF9A58]"></div>
            <h3 className="font-Poppins font-bold text-[20.23px] text-white leading-[27.59px] text-left max-w-[271px]">
              {title}
            </h3>
          </div>
          <p className="text-white font-Poppins leading-[27.59px] text-left  text-[12px] max-w-[271px] hidden group-hover:block group-hover:h-[90px]">
            Accelerate innvation with world class tech team We'll match you to
            an entire remote team of incridible freelance talent.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
