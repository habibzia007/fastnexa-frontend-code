import React from "react";
import card1 from "../../../assets/card1-tech.svg";
import card2 from "../../../assets/card2-tech.svg";
import card3 from "../../../assets/card3-tech.svg";
import card4 from "../../../assets/card4-tech.svg";
import card5 from "../../../assets/card5-tech.svg";
import card6 from "../../../assets/card6-tech.svg";

const cardsData = [
  { imgSrc: card1, text: "Customise Web Development" },
  { imgSrc: card2, text: "Prototyping & UX Designing" },
  { imgSrc: card3, text: "Third Party Integration" },
  { imgSrc: card4, text: "Software Product Development" },
  { imgSrc: card5, text: "API Development Services" },
  { imgSrc: card6, text: "Upgradation and Migration" },
];

const IntroCard = () => {
  return (
    <div className="w-full mt-[110px] mb-[90px] flex justify-center">
      <div className="max-w-[930px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="border-t-8 border-orange-500 rounded-md overflow-hidden bg-white shadow-lg"
          >
            <div className="px-6 py-4">
              <div className="flex justify-center">
                <img
                  className="w-[200px] h-[130px] mt-5"
                  src={card.imgSrc}
                  alt={card.text}
                />
              </div>
              <div className="font-Poppins font-bold text-[13.23px] leading-[100.59px] mb-2 text-center">
                {card.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroCard;
