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
    <div className="relative mt-[23px] w-full" style={backgroundImageStyle}>
      <div className="container sm:w-[1220px] mx-auto px-4 sm:px-6 grid grid-cols-12 gap-4 pt-[20px] sm:pt-[37px] ">
        <h3 className="col-span-full font-Poppins font-semibold text-[12px] leading-[28.19px] sm:text-[16px] sm:leading-[28.19px] text-[#FF6500] tracking-[0.9396284818649292px] text-center">
          What We Provide
        </h3>
        <h3 className="col-span-full  font-Poppins font-semibold text-[21px] leading-[34.19px] lg:text-[42px] lg:leading-[41.08px] text-[#232F3B] text-center">
          We provide truly prominent Software solutions
        </h3>
        <div className="col-span-full mt-6 lg:mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 sm:gap-x-9 gap-y-2 lg:gap-[3rem] mr-8">
          {WhatWeProvideData.map((card, index) => (
            <WhatWeProvideCard
              key={index}
              image={Object.values(card.img)[0]}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="col-span-full flex items-center justify-center py-[5px] lg:py-[10px]">
          <h3 className="font-Poppins font-normal text-[12px] lg:text-[16px] leading-[30px] text-center text-[#232F3B]">
            Learn more about{" "}
            <span className="font-Poppins font-semibold text-[12px] lg:text-[16px] leading-[30px] text-[#FF6500] cursor-pointer">
              More Services
            </span>
          </h3>
          <img
            className="object-contain cursor-pointer ml-2"
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;

// import React from "react";
// import bg from "../../assets/images/whatweprovidebg.jpeg";
// import group from "../../assets/images/group.png";
// import rightArrow from "../../assets/images/rightArrow.svg";
// import WhatWeProvideCard from "./Card";
// import { WhatWeProvideData } from "../../utils/fakedb/data";

// const WhatWeProvide = () => {
//   const backgroundImageStyle = {
//     backgroundImage: ` url(${bg})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   };
//   return (
//     <div
//       className="relative h-[617px]  lg:h-[663px]  mt-[23px] w-full"
//       style={backgroundImageStyle}
//     >
//       <div className="w-[350px] lg:w-[1184.44px] lg:h-[517.3px]  mx-auto pt-[20px]  lg:pt-[37px] border border-red-600">
//         <h3 className="font-Poppins font-semibold  text-[12px]  leading-[28.19px]  lg:text-[16px]  lg:leading-[28.19px] text-[#FF6500] tracking-[0.9396284818649292px] text-center">
//           What we provide
//         </h3>
//         <h3 className="font-Poppins font-semibold text-[23px]  leading-[34.19px] lg:text-[42px] lg:leading-[61.08px] text-[#232F3B]   text-center">
//           We provide truly prominent Software solutions
//         </h3>
//         <div className="mt-6 lg:mt-12 flex gap-5 lg:gap-6 flex-wrap lg:flex-nowrap">
//           {WhatWeProvideData.map((card, index) => (
//             <WhatWeProvideCard
//               key={index}
//               image={Object.values(card.img)[0]}
//               title={card.title}
//               description={card.description}
//             />
//           ))}
//         </div>
//         <div className="flex items-center gap-3 justify-center mt-5 lg:mt-[50px]">
//           <h3 className="font-Poppins font-normal text-[12px]  lg:text-[16px] leading-[30px] text-center text-[#232F3B]">
//             Learn more about{" "}
//             <span className="font-Poppins font-semibold text-[12px]  lg:text-[16px] leading-[30px] text-center text-[#FF6500] cursor-pointer">
//               More Services
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

// export default WhatWeProvide;
