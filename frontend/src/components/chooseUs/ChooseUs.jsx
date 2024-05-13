import React from "react";
import bg from "../../assets/images/chooseusbg.jpeg";
import rightArrow from "../../assets/images/rightArrow.png";
import Card from "./Card";
import { chooseUsData } from "../../utils/fakedb/data";

const ChooseUs = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="relative sm:w-full mt-10 sm:mt-20"
      style={backgroundImageStyle}
    >
      <div className="container mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-12 mx-auto">
          <h3 className="font-Poppins font-semibold text-[12px] sm:text-[16px] pt-4 sm:pt-20 text-[#FF6500] leading-[28.19px] tracking-[0.9396284818649292px] text-center">
            REASON TO CHOOSE US
          </h3>
          <h3 className="font-Poppins font-semibold text-[22px] leading-[33.08px] sm:text-[42px] sm:leading-[61.08px] sm:pt-4 text-[#232F3B] text-center">
            We Provide Truly Prominent IT Solutions.
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 sm:pt-10">
            {chooseUsData.map((card, index) => (
              <Card
                key={index}
                image={Object.values(card.img)[0]}
                title={card.title}
              /> 
            ))}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 flex  justify-center py-5 sm:py-[20px]">
          <div className="flex items-center gap-3">
            <h3 className="font-Poppins font-normal text-[12px] sm:text-[16px] leading-[30px] text-center text-[#232F3B]">
              Learn more about{" "}
              <span className="font-Poppins font-semibold text-[12px] sm:text-[16px] leading-[30px] text-center text-[#FF6500] cursor-pointer">
                More Reasons
              </span>
            </h3>
            <img
              className="object-contain cursor-pointer"
              src={rightArrow}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;

// import React from "react";
// import bg from "../../assets/images/chooseusbg.jpeg";
// import link1 from "../../assets/images/link1.png";
// import link2 from "../../assets/images/link2.png";
// import link3 from "../../assets/images/link3.png";
// import group from "../../assets/images/group.png";
// import rightArrow from "../../assets/images/rightArrow.png";
// import WhatWeProvideCard from "./Card";
// import { WhatWeProvideData, chooseUsData } from "../../utils/fakedb/data";
// import Card from "./Card";

// const ChooseUs = () => {
//   const backgroundImageStyle = {
//     backgroundImage: ` url(${bg})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   };

//   return (
//     <div
//       className="relative h-[843px] sm:h-[804px] sm:w-full mt-10  sm:mt-[100px]"
//       style={backgroundImageStyle}
//     >
//       <div className="w-[350px] h-[1150px] border border-red-600   sm:w-[1184.44px] sm:h-[804px] mx-auto    ">
//         <h3 className="font-Poppins font-semibold text-[12px] sm:text-[16px] pt-4 sm:pt-[67px] text-[#FF6500]  leading-[28.19px] tracking-[0.9396284818649292px] text-center">
//           REASON TO CHOOSE US
//         </h3>
//         <h3 className="font-Poppins font-semibold text-[22px] leading-[33.08px] sm:text-[42px] sm:leading-[61.08px]   sm:pt-[20px] text-[#232F3B]  text-center">
//           We Provide Truly Prominent IT Solutions.
//         </h3>
//         <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-[60px]">
//           {chooseUsData.map((card, index) => (
//             <Card
//               key={index}
//               image={Object.values(card.img)[0]}
//               title={card.title}
//             />
//           ))}
//         </div>

//         <div className="flex items-center gap-3 justify-center mt-5 sm:mt-[50px]">
//           <h3 className="font-Poppins font-normal text-[12px]  sm:text-[16px] leading-[30px] text-center text-[#232F3B]">
//             Learn more about{" "}
//             <span className="font-Poppins font-semibold text-[12px]  sm:text-[16px] leading-[30px] text-center text-[#FF6500] cursor-pointer">
//               More Reasons
//             </span>
//           </h3>
//           <img
//             className="object-contain cursor-pointer"
//             src={rightArrow}
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChooseUs;
