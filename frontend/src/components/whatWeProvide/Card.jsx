// import { FaPlus } from "react-icons/fa";

// const Card = ({ title, description, image }) => {
//   return (
//     <div className="cursor-pointer relative w-[160px] h-[207.3px] lg:w-[281.44px] lg:h-[363.3px] group">
//       <div className=" hover:shadow-[3px_-3px_0_rgba(255,101,0)]  transition-all duration-300 relative z-10 w-[160px] h-[207.3px] lg:w-[281.44px] lg:h-[363.3px] group bg-[#FFFFFF] rounded-[9.2px] p-3 lg:p-5 ">
//         <img
//           className="w-[26px] h-[26px] lg:w-[46px] lg:h-[46px]"
//           src={image}
//           alt=""
//         />
//         <div className="space-y-4 lg:mt-5 mt-2 w-[133px] h-[135px] lg:w-[243px] lg:h-[237.79px]">
//           <h3 className="font-Poppins h-[31px] lg:0 font-bold text-[10.58px] lg:text-[20.23px] lg:leading-[27.59px] text-left text-[#0E0E0E] lg:h-[55px]">
//             {title}
//           </h3>
//           <p className="font-Poppins line-clamp-4 font-normal text-[7.37px] leading-[15.59px] lg:text-[12.88px] lg:leading-[27.59px] text-left text-[#444444]">
//             {description}
//           </p>
//           <div className="flex gap-1 lg:gap-3 items-center">
//             <div className="w-[21px] h-[21px] lg:w-[36px] lg:h-[36px] rounded-full bg-[#EBEBEB] flex items-center justify-center group-hover:bg-[#FF6500]">
//               <FaPlus className="h-[7px] lg:h-[12px] text-[#FF6500] group-hover:text-[#ffff]" />
//             </div>
//             <span className="font-Poppins font-normal text-[7.837px] leading-[15.59px] lg:text-[12.88px] lg:leading-[27.59px] text-left text-[#232F3B]">
//               Read More
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
import { FaPlus } from "react-icons/fa";

const Card = ({ title, description, image }) => {
  return (
    <div className="cursor-pointer relative w-[160px] h-[207.3px] lg:w-[281.44px] lg:h-[363.3px] group">
      <div className="hover:shadow-[3px_-3px_0_rgba(255,101,0)] transition-all duration-300 relative z-10 w-full h-full bg-[#FFFFFF] rounded-[9.2px] p-3 lg:p-5">
        <img
          className="w-[26px] h-[26px] lg:w-[46px] lg:h-[46px]"
          src={image}
          alt={title}
        />
        <div className="space-y-2 lg:space-y-4 mt-2 lg:mt-5">
          <h3 className="font-Poppins font-bold text-[10.58px] lg:text-[20.23px] text-left text-[#0E0E0E] h-[31px] lg:h-[55px] leading-tight lg:leading-[27.59px]">
            {title}
          </h3>
          <p className="font-Poppins font-normal text-[7.37px] lg:text-[12.88px] text-left text-[#444444] line-clamp-4 leading-[15.59px] lg:leading-[27.59px]">
            {description}
          </p>
          <div className="flex gap-1 lg:gap-3 items-center">
            <div className="w-[21px] h-[21px] lg:w-[36px] lg:h-[36px] rounded-full bg-[#EBEBEB] flex items-center justify-center group-hover:bg-[#FF6500]">
              <FaPlus className="h-[7px] lg:h-[12px] text-[#FF6500] group-hover:text-white" />
            </div>
            <span className="font-Poppins font-normal text-[7.837px] lg:text-[12.88px] text-left text-[#232F3B] leading-[15.59px] lg:leading-[27.59px]">
              Read More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
