
// import React from "react";
// import bg from "../../assets/images/whatweprovidebg.svg";
// import rightArrow from "../../assets/images/rightArrow.svg";
// import WhatWeProvideCard from "./Card";
// import { WhatWeProvideData } from "../../utils/fakedb/data";

// const WhatWeProvide = () => {
//   const backgroundImageStyle = {
//     backgroundImage: `url(${bg})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   };
//   return (
//     <div className="relative mt-[23px] lg:mt-[40px]" style={backgroundImageStyle}>
//       <div className="container w-[350px] sm:w-[645px] lg:w-[1184px] mx-auto px-4 sm:px-6 grid grid-cols-12 gap-4 pt-[63px] sm:pt-[37px] ">
//         <h3 className="col-span-full font-Poppins font-semibold text-[12px] leading-[28.19px] sm:text-[16px] sm:leading-[28.19px] text-[#FF6500] tracking-[0.9396284818649292px] text-center">
//           What We Provide
//         </h3>
//         <h3 className="col-span-full font-Poppins font-semibold text-[23px] leading-[34.19px] sm:text-[42px] sm:leading-[41.08px] text-[#232F3B] text-center">
//           We provide truly prominent Software solutions
//         </h3>
//         <div className="col-span-full mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-1 gap-x-12  md:gap-x-4 xl:gap-x-20 mr-8">
//           {WhatWeProvideData.map((card, index) => (
//             <WhatWeProvideCard
//               key={index}
//               image={Object.values(card.img)[0]}
//               title={card.title}
//               description={card.description}
//             />
//           ))}
//         </div>
//         <div className="col-span-full flex items-center justify-center py-[5px] sm:pt-[30px] sm:pb-[48px]">
//           <h3 className="font-Poppins font-normal text-[12px] sm:text-[16px] leading-[30px] text-center text-[#232F3B]">
//             Learn more about{" "}
//             <span className="font-Poppins font-semibold text-[12px] sm:text-[16px] leading-[30px] text-[#FF6500] cursor-pointer">
//               More Services
//             </span>
//           </h3>
//           <img
//             className="object-contain cursor-pointer ml-2"
//             src={rightArrow}
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatWeProvide;
import React from "react";
import bg from "../../assets/images/whatweprovidebg.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import WhatWeProvideCard from "./Card";
import { WhatWeProvideData } from "../../utils/fakedb/data";

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
          We provide truly prominent Software solutions
        </h3>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-4 lg:gap-8">
          {WhatWeProvideData.map((card, index) => (
            <WhatWeProvideCard
              key={index}
              image={Object.values(card.img)[0]}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="flex items-center justify-center py-6 sm:py-10">
          <h3 className="font-Poppins text-sm sm:text-base text-center text-[#232F3B]">
            Learn more about{" "}
            <span className="font-Poppins font-semibold text-[#FF6500] cursor-pointer">
              More Services
            </span>
          </h3>
          <img
            className="object-contain cursor-pointer ml-2"
            src={rightArrow}
            alt="Right Arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
