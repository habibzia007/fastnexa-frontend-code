// import React from "react";

// const Card = ({ image, title }) => {
//   const cardImageStyle = {
//     backgroundImage: `linear-gradient(180deg, rgba(249, 80, 0, 0) 35%, rgba(14, 14, 14, 0.92) 78%), url(${image})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   };

//   return (
//     <div className="w-[276.62px] h-[314.96px] sm:w-[382.62px] sm:h-[435.96px] rounded-[9.2px] relative group hover:opacity-[0.95] mx-auto overflow-hidden">
//     <div className="w-full h-full rounded-[9.2px] bg-cover bg-center relative">
//       {/* Card image */}
//       <img style={cardImageStyle} className="bg-gradient-to-r from-black to bg-orange-600 w-full h-full rounded-[9.2px] object-cover" src={image} alt="" />

//       {/* Content */}
//       <div className="absolute bottom-[-3rem] group-hover:bottom-8 left-[3rem] flex flex-col gap-2 items-start transition-all duration-500 opacity- group-hover:opacity-100">
//         <div className="flex gap-1 sm:gap-2 items-center">
//           <div className="w-[1.99px] h-[33.99px] sm:w-[2.76px] sm:h-[45.99px] bg-[#FF9A58]"></div>
//           <h3 className="font-Poppins font-bold text-[14.23px] leading-[19.59px] sm:text-[20.23px] sm:leading-[27.59px] text-white max-w-[271px]">
//             {title}
//           </h3>
//         </div>
//         <p className="text-white font-Poppins leading-[20.59px] sm:leading-[27.59px] text-[10px] sm:text-[12px] max-w-[271px] transition-transform duration-500 transform -translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
//           Accelerate innovation with world-class tech teams. We'll match you to an entire remote team of incredible freelance talent.
//         </p>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default Card;

import React from "react";

const Card = ({image, title, description}) => {
    const cardImageStyle = {
        backgroundImage: `linear-gradient(180deg, rgba(249, 80, 0, 0) 35%, rgba(14, 14, 14, 0.92) 78%), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <div
            className="w-full max-w-[276.62px] sm:max-w-[300px] md:max-w-[280px] xl:max-w-[370.62px] lg:max-w-[317.62px] h-[314.96px] sm:h-[350px] md:h-[320px] lg:h-[435.96px] rounded-[9.2px] relative group mx-auto overflow-hidden">
            <div
                className="w-full h-full rounded-[9.2px] bg-cover bg-center relative hover:transition-opacity duration-500"
                style={cardImageStyle}
            >
                <div
                    className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 hover:transition-opacity duration-500"></div>
                <div
                    className="absolute -bottom-2 group-hover:bottom-8 left-4 sm:left-6 md:left-8 flex flex-col gap-2 items-start transition-all duration-500">
                    <div className="flex gap-1 sm:gap-2 items-center">
                        <div
                            className="w-[2px] h-[34px] sm:w-[2px] sm:h-[38px] md:w-[2px] md:h-[40px] lg:w-[3px] lg:h-[46px] bg-[#FF9A58]"></div>
                        <h3 className="font-Poppins font-bold text-[14px] sm:text-[16px] md:text-[14px] lg:text-[20px] leading-[20px] sm:leading-[24px] md:leading-[20px] lg:leading-[28px] text-white max-w-[240px] sm:max-w-[260px] md:max-w-[240px] lg:max-w-[300px]">
                            {title}
                        </h3>
                    </div>
                    <p className="text-white font-Poppins leading-[21px] sm:leading-[24px] md:leading-[20px] lg:leading-[28px] text-[10px] sm:text-[11px] md:text-[10px] lg:text-[12px] max-w-[240px] sm:max-w-[260px] md:max-w-[240px] lg:max-w-[300px] transition-transform duration-500 transform translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:line-clamp-none overflow-hidden line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Card;
