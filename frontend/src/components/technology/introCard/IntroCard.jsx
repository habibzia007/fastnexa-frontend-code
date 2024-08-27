// import React from "react";
// import { Link } from "react-router-dom";
// import card1 from "../../../assets/card1-tech.svg";
// import card2 from "../../../assets/card2-tech.svg";
// import card3 from "../../../assets/card3-tech.svg";
// import card4 from "../../../assets/card4-tech.svg";
// import card5 from "../../../assets/card5-tech.svg";
// import card6 from "../../../assets/card6-tech.svg";

// const cardsData = [
//   { imgSrc: card1, text: "Customise Web Development" },
//   { imgSrc: card2, text: "Prototyping & UX Designing" },
//   { imgSrc: card3, text: "Third Party Integration" },
//   { imgSrc: card4, text: "Software Product Development" },
//   { imgSrc: card5, text: "API Development Services" },
//   { imgSrc: card6, text: "Upgradation and Migration" },
// ];

// const IntroCard = () => {
//   return (
//     <div className="w-full mt-[110px] mb-[90px] flex justify-center">
//       <div className="max-w-[930px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
//         {cardsData.map((card, index) => (
//           <div
//             key={index}
//             className="group relative border-t-8 border-orange-500 rounded-md overflow-hidden bg-white shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#ccc] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
//             <div className="relative px-6 py-4">
//               <div className="flex justify-center">
//                 <img
//                   className="w-[200px] h-[130px] mt-5 transform transition duration-500 group-hover:scale-110"
//                   src={card.imgSrc}
//                   alt={card.text}
//                 />
//               </div>
//               <div className="font-Poppins font-bold text-[13.23px] leading-[100.59px] mb-2 text-center">
//                 {card.text}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IntroCard;

import React from "react";
import { Link } from "react-router-dom";
import card1 from "../../../assets/card1-tech.svg";
import card2 from "../../../assets/card2-tech.svg";
import card3 from "../../../assets/card3-tech.svg";
import card4 from "../../../assets/card4-tech.svg";
import card5 from "../../../assets/card5-tech.svg";
import card6 from "../../../assets/card6-tech.svg";

const cardsData = [
  {
    imgSrc: card1,
    text: "Customise Web Development",
    url: "/technology/customise-web-development",
  },
  {
    imgSrc: card2,
    text: "Prototyping & UX Designing",
    url: "/technology/prototyping-ux-designing",
  },
  {
    imgSrc: card3,
    text: "Third Party Integration",
    url: "/technology/third-party-integration",
  },
  {
    imgSrc: card4,
    text: "Software Product Development",
    url: "/technology/software-product-development",
  },
  {
    imgSrc: card5,
    text: "API Development Services",
    url: "/technology/api-development-services",
  },
  {
    imgSrc: card6,
    text: "Upgradation and Migration",
    url: "/technology/upgradation-migration",
  },
];

const IntroCard = () => {
  return (
    <div className="w-full mt-[70px] mb-[90px] flex justify-center">
      <div className="max-w-[930px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {cardsData.map((card, index) => (
          <Link
            key={index}
            to={card.url}
            className="group relative border-t-8 border-orange-500 rounded-md overflow-hidden bg-white shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#ccc] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative px-6 py-4">
              <div className="flex justify-center">
                <img
                  className="w-[200px] h-[130px] mt-5 transform transition duration-500 group-hover:scale-110"
                  src={card.imgSrc}
                  alt={card.text}
                />
              </div>
              <div className="font-Poppins font-bold text-[13.23px] leading-[100.59px] mb-2 text-center">
                {card.text}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IntroCard;
