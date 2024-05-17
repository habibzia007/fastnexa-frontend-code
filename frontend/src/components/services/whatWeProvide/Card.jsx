import React from "react";
import { FaPlus } from "react-icons/fa6";
const Card = ({ title, description, image }) => {
  return (
    <div className="hover:shadow-[3px_-3px_0_rgba(255,101,0)]  transition-all duration-300 shadow-sm relative  w-full max-w-sm mx-auto   rounded-md ">
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
//     <div className="hover:shadow-lg transition-all duration-300 shadow-sm relative rounded-md w-full max-w-sm mx-auto">
//       <div className="bg-white rounded-lg p-4 group">
//         <img className="w-12 h-12 mx-auto" src={image} alt="" />
//         <div className="mt-5">
//           <h3 className="font-Poppins font-bold text-lg text-center text-gray-900 mb-2">
//             {title}
//           </h3>
//           <p className="font-Poppins text-sm text-center text-gray-600 mb-4 line-clamp-4">
//             {description}
//           </p>
//           <div className="flex justify-center items-center gap-3">
//             <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-orange-500">
//               <FaPlus className="text-orange-500 group-hover:text-white" />
//             </div>
//             <span className="font-Poppins text-sm text-gray-800">
//               Read More
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
