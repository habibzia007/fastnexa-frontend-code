import React from "react";
import bg from "../../../assets/images/whatweprovidebg.jpeg";
import group from "../../../assets/images/group.png";
import rightArrow from "../../../assets/images/rightArrow.svg";
import WhatWeProvideCard from "./Card";
import { WhatWeProvideData } from "../../../utils/fakedb/data";

const WhatWeProvide = () => {
  const backgroundImageStyle = {
    // backgroundImage: ` url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className="relative h-[663px]  mt-[23px] w-full"
      style={backgroundImageStyle}
    >
      <div className="w-[1184.44px] h-[517.3px]  mx-auto  pt-[37px] ">
        {/* <h3 className="font-Poppins font-semibold text-[16px] text-[#FF6500] leading-[28.19px] tracking-[0.9396284818649292px] text-center">
          What we provide
        </h3> */}
        <div className= "text-container">
          <h3 className="font-Poppins font-semibold text-[36px] text-[#1F1F1F] leading-[61.08px]  text-center">
            Services that Speed Up Success
          </h3>
          <p className=" font-Poppins text-[16px] text-[#747474] leading-[41px]  text-center">
          Integer mauris ipsum, consequat tincidunt orci eu, consectetur tempus est. 
          Sed posuere sem a convallis maximus. Curabitur consequat dignissim nisl, at efficitur justo
          </p>
        </div>
        <div className="mt-12 flex gap-6">
          {WhatWeProvideData.map((card, index) => (
            <WhatWeProvideCard
              key={index}
              image={Object.values(card.img)[0]}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default WhatWeProvide;
