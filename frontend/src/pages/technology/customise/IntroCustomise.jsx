import React from "react";
import group from "../../../assets/images/group.png";
import rightArrow from "../../../assets/images/rightArrow.png";
import { WhatWeProvideData } from "../../../utils/fakedb/data.jsx";

const Intro = () => {
  return (
    <div className="container mx-auto mt-[23px] p-4 max-w-[874px]  border-orange-500">
      <div className="w-full h-auto pt-[37px] pb-[37px]">
        <h3 className="font-Poppins font-bold text-[24px] sm:text-[36px] leading-[34px] sm:leading-[54.08px] text-[#1F1F1F] text-center">
          Unleash Your Digital Vision with Tailored Software Development Solutions by FAST NEXA
        </h3>
        <p className="font-Poppins text-xs sm:text-[16px] leading-[22px] sm:leading-[30px] text-[#747474] font-normal text-center mt-[20px] mb-[20px] sm:mt-[30px] sm:mb-[30px]">
          At FAST NEXA, we specialize in delivering customized Software development solutions that cater to the unique needs of our clients. We understand that in today’s competitive digital landscape, a one-size-fits-all approach does not suffice. Our team of expert developers and designers work collaboratively to craft bespoke Software experiences that not only reflect your brand’s identity but also drive user engagement and business growth.
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
