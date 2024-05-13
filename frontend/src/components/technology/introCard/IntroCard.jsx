import React from "react";
import cardbg from "../../../assets/images/cardbg.png";
import card1 from "../../../assets/card1-tech.svg";
import card2 from "../../../assets/card2-tech.svg";
import card3 from "../../../assets/card3-tech.svg";
import card4 from "../../../assets/card4-tech.svg";
import card5 from "../../../assets/card5-tech.svg";
import card6 from "../../../assets/card6-tech.svg";

const card = {
  backgroundImage: ` url(${cardbg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const IntroCard = () => {
  return (
    // Outer Div
    <div className="w-full h-[610px] mt-[110px] mb-[90px]">
      {/* Top Div */}
      <div className="w-[930px] h-[261px] flex flex-center mx-auto justify-center mb-[87px]">
        {/* Card 1 */}
        <div
          className="w-[286px] h-[261px] rounded overflow-hidden"
          style={card}
        >
          <div className="px-6 py-4">
            <div>
              <img
                className="w-[200px] h-[130px] mx-auto mt-5"
                src={card1}
                alt=""
              />
            </div>
            <div className="font-Poppins font-bold text-[13.23px] leading-[100.59px] mb-2 text-center">
              Customise Web Development
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="w-[286px] h-[261px] rounded overflow-hidden"
          style={card}
        >
          <div className="px-6 py-4">
            <div>
              <img
                className="w-[200px] h-[130px] mx-auto mt-5"
                src={card2}
                alt=""
              />
            </div>
            <div className="font-Poppins font-bold text-[13.23px] leading-[100.59px] mb-2 text-center">
              Prototyping & UX Designing
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="w-[286px] h-[261px] rounded overflow-hidden"
          style={card}
        >
          <div className="px-6 py-4">
            <div>
              <img
                className="w-[200px] h-[130px] mx-auto mt-5"
                src={card3}
                alt=""
              />
            </div>
            <div className="font-Poppins font-bold text-[13.23px] leading-[100.59px] mb-2 text-center">
              Third Party Integration
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Div */}
      <div className="w-[930px] h-[261px] flex flex-center mx-auto justify-center items-center">
        {/* Card 4 */}
        <div
          className="w-[286px] h-[261px] rounded overflow-hidden"
          style={card}
        >
          <div className="px-6 py-4">
            <div>
              <img
                className="w-[200px] h-[130px] mx-auto mt-5"
                src={card4}
                alt=""
              />
            </div>
            <div className="font-Poppins font-bold text-[13.23px] leading-[100.59px] mb-2 text-center">
              Software Product Development
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div
          className="w-[286px] h-[261px] rounded overflow-hidden"
          style={card}
        >
          <div className="px-6 py-4">
            <div>
              <img
                className="w-[200px] h-[130px] mx-auto mt-5"
                src={card5}
                alt=""
              />
            </div>
            <div className="font-Poppins font-bold text-[13.23px] leading-[100.59px] mb-2 text-center">
              API Development Services
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div
          className="w-[286px] h-[261px] rounded overflow-hidden"
          style={card}
        >
          <div className="px-6 py-4">
            <div>
              <img
                className="w-[200px] h-[130px] mx-auto mt-5"
                src={card6}
                alt=""
              />
            </div>
            <div className="font-Poppins font-bold text-[13.23px] leading-[100.59px] mb-2 text-center">
              Upgradation and Migration
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
