import React from "react";

const Card = ({ image, title }) => {
  const cardImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, -0.2) 0%, rgba(249, 80, 0, 0.35) 62%, rgba(0, 0, 0, 0.9) 88%), url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="w-[382.62px] h-[435.96px] rounded-[9.2px] relative ">
      <div
        className="w-full h-full rounded-[9.2px] bg-cover bg-center"
        style={cardImageStyle}
      >
        <div className="absolute bottom-[3rem] left-[3.75rem] flex gap-2 items-center group">
          <div className="w-[2.76px] h-[45.99px] bg-[#FF9A58]"></div>
          <h3 className="font-Poppins font-bold text-[20.23px] text-white leading-[27.59px] text-left max-w-[271px]">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
