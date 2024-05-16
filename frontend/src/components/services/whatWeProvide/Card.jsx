import React from "react";
import { FaPlus } from "react-icons/fa6";
const Card = ({ title, description, image }) => {
  return (
    <div className="hover:shadow-[3px_-3px_0_rgba(255,101,0)]  transition-all duration-300 shadow-sm relative  w-[287px] h-[364.3px]    rounded-md ">
      <div className="  w-[281.44px] h-[363.3px] group  bg-[#FFFFFF] rounded-[9.2px] p-3   z-50 ">
        <img className=" w-[46px] h-[46px]" src={image} alt="" />
        <div className="space-y-4 mt-5 w-[243px] h-[237.79px]">
          <h3 className="font-Poppins 0 font-bold   text-[20.23px] leading-[27.59px] text-left text-[#0E0E0E]   h-[55px]">
            {title}
          </h3>
          <p className="font-Poppins  line-clamp-4  font-normal  text-[12.88px] leading-[27.59px] text-left text-[#444444]">
            {description}
          </p>
          <div className="flex  gap-3 items-center">
            <div className="  w-[36px] h-[36px] rounded-full bg-[#EBEBEB] flex items-center justify-center group-hover:bg-[#FF6500]">
              <FaPlus className="  h-[12px] text-[#FF6500] group-hover:text-[#ffff]" />
            </div>
            <span className="font-Poppins font-normal  text-[12.88px] leading-[27.59px] text-left text-[#232F3B]">
              Read More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// import React from "react";
// import { FaPlus } from "react-icons/fa6";
// const Card = ({ title, description, image }) => {
//   return (
//     <div className="border border-black relative w-[163px] h-[207.3px] w-[287px] h-[364.3px]  hover:border  rounded-md hover:border-r-[4px] hover:border-r-orange-500 hover:border-t-[4px] hover:border-t-orange-500 transition-all duration-300 ">
//       <div className=" w-[160px] h-[207.3px] w-[281.44px] h-[363.3px] group  bg-[#FFFFFF] rounded-[9.2px] p-3 p-5  z-50 ">
//         <img
//           className="w-[26px] h-[26px] w-[46px] h-[46px]"
//           src={image}
//           alt=""
//         />
//         <div className="space-y-4 mt-5 mt-2 w-[133px]  h-[135px]  w-[243px] h-[237.79px]">
//           <h3 className="font-Poppins h-[31px] 0 font-bold text-[10.58px]  text-[20.23px] leading-[27.59px] text-left text-[#0E0E0E]   h-[55px]">
//             {title}
//           </h3>
//           <p className="font-Poppins  line-clamp-4  font-normal text-[7.37px] leading-[15.59px] text-[12.88px] leading-[27.59px] text-left text-[#444444]">
//             {description}
//           </p>
//           <div className="flex gap-1 gap-3 items-center">
//             <div className=" w-[21px] h-[21px] w-[36px] h-[36px] rounded-full bg-[#EBEBEB] flex items-center justify-center group-hover:bg-[#FF6500]">
//               <FaPlus className=" h-[7px] h-[12px] text-[#FF6500] group-hover:text-[#ffff]" />
//             </div>
//             <span className="font-Poppins font-normal text-[7.837px] leading-[15.59px] text-[12.88px] leading-[27.59px] text-left text-[#232F3B]">
//               Read More
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
