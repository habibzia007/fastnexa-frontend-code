import React from "react";
import WhatWeProvideCard from "./Card";
import { WhatWeProvideData } from "../../../utils/fakedb/data";

const WhatWeProvide = () => {
  const backgroundImageStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative mt-6 w-full" style={backgroundImageStyle}>
      <div className="lg:max-w-[1230px] mx-auto px-4 sm:px-6 pt-10 w-full">
        <div className="text-container max-w-3xl mx-auto text-center">
          <h3 className="font-Poppins font-semibold text-lg lg:text-3xl text-[#1F1F1F] mb-4">
            Services that Speed Up Success
          </h3>
          <p className="font-Poppins text-xs sm:text-base text-gray-500 px-2">
            Integer mauris ipsum, consequat tincidunt orci eu, consectetur
            tempus est. Sed posuere sem a convallis maximus. Curabitur consequat
            dignissim nisl, at efficitur justo
          </p>
        </div>
        <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-4">
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
      </div>
    </div>
  );
};

export default WhatWeProvide;
