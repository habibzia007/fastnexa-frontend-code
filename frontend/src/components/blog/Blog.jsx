// import React from "react";
// import { MdArrowRightAlt } from "react-icons/md";
// import personIcon from "../../assets/images/personIcon.svg";
// import msgIcon from "../../assets/images/msgIcon.svg";

// const Card = ({ data }) => {
//   return (
//     <div className="w-[171.45px] h-[164.64px] lg:w-[373px] lg:h-[358.64px] relative z-10 group hover:duration-1000 hover:transition-all">
//       {/* Card image */}
//       <img
//         className="h-[101.74px] lg:h-[221.74px] rounded-lg z-10 w-full"
//         src={Object.values(data.image)[0]}
//         alt=""
//       />
//       {/* Date badge */}
//       <div className="w-[26.35px] h-[26.35px] lg:w-[58.35px] lg:h-[58.35px] flex items-center justify-center flex-col bg-gradient-to-b from-orange-300 to-orange-600 rounded-[5px] absolute top-[16px] left-[16px] lg:top-[33px] lg:left-[1.5rem] z-40">
//         <span className="font-barlow font-medium text-[11.54px] leading-[12.37px] lg:text-[25.14px] lg:leading-[26.93px] text-center text-white">
//           {data.date}
//         </span>
//         {/* Month */}
//         <span className="font-barlow font-normal text-[5.77px] leading-[4.95px] lg:text-[12.57px] lg:leading-[10.77px] text-center text-white">
//           {data.month}
//         </span>
//       </div>
//       {/* Card content */}
//       <div className="hover:shadow-[0px_3px_0px_rgba(255,101,0)] duration-300  w-[154.1px] h-[83.38px] lg:w-[336.1px] lg:h-[181.79px] z-50 py-3 px-3 lg:py-[20.99px] lg:px-[20.27px] shadow-md bg-white group transition hover:duration-1000 hover:transition-all absolute left-[8px] top-[74px] lg:left-[19px] lg:top-[163px]">
//         <div className="w-[135px] h-[55.74px] lg:w-[296px] lg:h-[121.74px] space-y-1 lg:space-y-4">
//           {/* Author and comments */}
//           <div className="flex gap-2">
//             {/* Author */}
//             <div className="flex gap-[2px] lg:gap-1 items-center">
//               <img
//                 className="w-[10.51px] h-[11.67px]"
//                 src={personIcon}
//                 alt=""
//               />
//               <h2 className="font-Poppins font-medium text-[5.36px] leading-[9.89px] lg:text-[11.67px] lg:leading-[21.55px] text-left text-[#999999]">
//                 {data.author}
//               </h2>
//             </div>
//             {/* Number of comments */}
//             <div className="flex gap-1 items-center">
//               <img className="w-[13.47px] h-[11.67px]" src={msgIcon} alt="" />
//               <h2 className="font-Poppins font-medium text-[5.36px] leading-[9.89px] lg:text-[11.67px] lg:leading-[21.55px] text-left text-[#999999]">
//                 {data.comments} Comments
//               </h2>
//             </div>
//           </div>
//           {/* Title */}
//           <h3 className="w-[135.92px] h-[24.8px] lg:w-[296px] lg:h-[54px] font-Poppins font-semibold text-[9.29px] leading-[12.67px] lg:text-[20.23px] lg:leading-[27.59px] text-left transition-colors group-hover:text-[#FF6500]">
//             {data.title}
//           </h3>
//           {/* Read full */}
//           <div className="flex items-center">
//             <h3 className="w-[34.33px] h-[8.66px] lg:w-[65.47px] lg:h-[18.85px] font-Poppins font-semibold text-[4.95px] leading-[8.66px] lg:text-[10.77px] lg:leading-[18.85px] tracking-[0.8977px] text-left text-[#FF6500] group-hover:text-black">
//               READ FULL
//             </h3>
//             <MdArrowRightAlt className="text-[#FF6500] group-hover:text-black group-hover:transition group-hover:duration-500 group-hover:ease-in-out" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import personIcon from "../../assets/images/personIcon.svg";
import msgIcon from "../../assets/images/msgIcon.svg";

const Blog = ({ data }) => {
  return (
    <div className="relative w-full group transition-all duration-300 ease-in-out ">
      {/* Card image */}
      <img
        className="w-full h-36 sm:h-40 md:h-48 lg:h-56 rounded-lg object-cover"
        src={Object.values(data.image)[0]}
        alt={data.title}
      />
      {/* Date badge */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-gradient-to-b from-orange-300 to-orange-600 rounded-lg  px-4 py-2 text-center text-white">
        <span className="block text-xs sm:text-sm md:text-lg lg:text-xl font-semibold">
          {data.date}
        </span>
        <span className="block text-[0.6em] sm:text-xs md:text-sm lg:text-base font-normal">
          {data.month}
        </span>
      </div>
      {/* Card content */}
      <div className="absolute bottom-[-100px] left-3 right-3 bg-white p-4 sm:p-6 md:p-4 lg:p-8  rounded-b-lg transition-shadow duration-300 ease-in-out hover:transition-all group-hover:shadow-[0px_3px_0px_rgba(255,101,0)]">
        <div className="flex items-center mb-2 space-x-4 text-xs sm:text-sm md:text-base lg:text-lg text-[#999999]">
          <div className="flex items-center space-x-1">
            <img src={personIcon} alt="Author" className="w-4 h-4" />
            <span className="text-[.5rem]  md:text-[.5rem] lg:text-[.7rem] lg:leading-5 font-Poppins">{data.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <img src={msgIcon} alt="Comments" className="w-4 h-4" />
            <span className="text-[.5rem]  md:text-[.5rem] lg:text-[.7rem] leading-5 font-Poppins">
              {data.comments} Comments
            </span>
          </div>
        </div>
        <h3 className="font-Poppins text-base sm:text-lg md:text-[0.75rem] md:leading-5 lg:text-[1.25rem] lg:leading-6 font-semibold text-[#0E0E0E] group-hover:text-[#FF6500] transition-colors duration-300">
          {data.title}
        </h3>
        <div className="flex items-center mt-4">
          <span className="font-Poppins text-xs sm:text-sm md:text-[0.625rem] lg:text-[.63rem] lg:leading-5 font-semibold text-[#FF6500] group-hover:text-gray-800 transition-colors duration-300">
            READ FULL
          </span>
          <MdArrowRightAlt className="ml-2 text-[#FF6500] group-hover:text-gray-800 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
