import React from "react";


const Intro = ({title, description}) => {
    return (
        <div className="container mx-auto p-4 max-w-[874px]  border-orange-500">
            <div className="w-full h-auto pt-[37px] pb-[37px]">
                <h3 className="font-Poppins font-bold text-[24px] sm:text-[36px] leading-[34px] sm:leading-[54.08px] text-[#1F1F1F] text-center">
                    {title}
                </h3>
                <p className="font-Poppins text-xs sm:text-[16px] leading-[22px] sm:leading-[30px] text-[#747474] font-normal text-center mt-[20px] sm:mt-[30px]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Intro;

// import React from "react";
// import bg from "../../../assets/images/whatweprovidebg.jpeg";
// import group from "../../../assets/images/group.png";
// import rightArrow from "../../../assets/images/rightArrow.png";
// // import WhatWeProvideCard from "./Card";
// import { WhatWeProvideData } from "../../../utils/fakedb/data";

// const Intro = () => {
//   const backgroundImageStyle = {
//     backgroundImage: ` url(${bg})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   };
//   return (
//     <div className="container mx-auto relative h-[327px]  mt-[23px] w-[874px]">
//       <div className="w-[874px] h-[320px]  mx-auto  pt-[37px] ">
//         <h3 className="font-Poppins font-bold text-[36px] leading-[54.08px]  text-[#1F1F1F]  text-center">
//           Outperform Your Competitors With Exceptional Software Development Services
//         </h3>
//         <p className=" font-Poppins text-[16px] leading-[30px] text-[#747474] font-normal  text-center mt-[30px]">
//           FastNexa provides comprehensive web-based solutions that include
//           several steps. Our approach involves actively listening to our
//           clients, comprehending their demands and requirements, and crafting a
//           holistic web solution. This is how our clients leverage their online
//           presence, enhance user experience and ultimately achieve their goals
//           in the digital landscape.
//         </p>
//         <div className="flex justify-center">
//           <button className="font-Poppins text-[16px] w-[271px] h-[54px] mt-[30px] ring-2 text-orange-500 rounded-md ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors  duration-500">
//             Explore Solutions and Prices
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Intro;
