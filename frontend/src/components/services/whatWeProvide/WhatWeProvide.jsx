import React from "react";
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
      className="relative lg:h-[663px]  mt-[23px] w-full"
      style={backgroundImageStyle}
    >
      <div className="lg:w-[1184.44px] lg:h-[517.3px]  mx-auto  pt-[37px] sm:w-[610px] md:w-[650px]">
        {/* <h3 className="font-Poppins font-semibold text-[16px] text-[#FF6500] leading-[28.19px] tracking-[0.9396284818649292px] text-center">
          What we provide
        </h3> */}
        <div className="text-container w-[340px] sm:w-[650px] mx-auto">
          <h3 className="font-Poppins font-semibold lg:text-[36px] lg:leading-[61.08px] sm:text-[30px] md:leading-[41.08px] text-[#1F1F1F]  text-center ">
            Services that Speed Up Success
          </h3>
          <p className="font-Poppins md:text-[16px] md:leading-[21px] text-[7.57px] text-[#747474] text-center pl-2 pr-2">
            Integer mauris ipsum, consequat tincidunt orci eu, consectetur
            tempus est. Sed posuere sem a convallis maximus. Curabitur consequat
            dignissim nisl, at efficitur justo
          </p>
        </div>
        <div className="container sm:w-[1220px] mx-auto px-4 sm:px-6 grid grid-cols-12 gap-4 pt-[20px] sm:pt-[37px] ">
          <div
              className="col-span-full mt-6 lg:mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 sm:gap-x-9 gap-y-2 lg:gap-[3rem] mr-8">
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
    </div>
  );
};

export default WhatWeProvide;
