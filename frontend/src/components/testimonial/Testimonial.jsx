import React from "react";
import testimonialbg from "../../assets/images/testimonialbg.jpg";
import men from "../../assets/images/men.jpg";
import men1 from "../../assets/images/men1.jpg";
import msg from "../../assets/images/msg.png";
import Dots from "../../utils/Dots";

const Testimonial = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${testimonialbg})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  };
  return (
    <div
      className="relative h-[388.2px] sm:h-[588.2px] w-full bg-gradient-to-br from-[#E16F1F] to-[rgba(255, 101, 0, 0.5)] mt-5 sm:mt-32"
      style={backgroundImageStyle}
    >
      <div className="w-[350px] h-full sm:w-[1020px] pt-[40px] sm:pt-[80px]   mx-auto ">
        <h2 className="text-[#FFFFFF] font-Poppins font-semibold text-[12px] sm:text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-center">
          Testimonial
        </h2>
        <h1 className="text-[#FFFFFF] font-Poppins font-semibold text-[22px] leading-[33.08px] sm:text-[42px] sm:leading-[61.08px] text-center">
          Our Clients Worldwide.
        </h1>
        <div className="flex justify-between items-center">
          <div className="pt-[40px] sm:pt-[60px] pl-1 sm:pl-6">
            <div className="w-[329.86px]  h-[160.01px]  sm:w-[448.82px] sm:h-[217.72px] bg-white rounded-md shadow-md relative ">
              <img
                className="rounded-md w-[78px] h-[77px]  sm:h-[106px] sm:w-[105px] absolute left-[-19px] top-[28px] sm:top-[2.5rem] sm:-left-[2.25rem] "
                src={men}
                alt=""
              />
              <p className="font-Poppins text-[17.59px] text-[#FFFFFF]  leading-[41px] font-semibold"></p>
              <div className="ml-[80px] sm:ml-[130px]  pt-[28.5px] sm:pt-[31.5px] space-y-2 sm:space-y-4">
                <img
                  className="w-[27.01px] h-[23.28px]  sm:w-[37.01px] sm:h-[32.28px]"
                  src={msg}
                  alt=""
                />
                <p className="w-[223.06px] h-[55.59px] sm:w-[304.06px] sm:h-[75.59px] text-[#4C4D56] font-jost font-normal text-[12px] leading-[18.50px] sm:text-[15.75px] sm:leading-[25.2px] text-left">
                  Accelerate innovation with world-class tech teams Beyond more
                  stoic this along goodness hey this this wow manatee
                </p>
                <p className="font-jost font-normal text-[9px] leading-[12px] sm:text-[12.6px] sm:leading-[15.75px] text-left text-black">
                  Mike Holder{" "}
                  <span className="font-jost font-normal text-[6.94px] leading-[11.57px] sm:text-[9.45px] sm:leading-[15.75px] text-left text-[#47484A]">
                    / CEO, Harlond inc
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden sm:block pt-[60px] pl-6">
            <div className=" w-[448.82px] h-[217.72px] bg-white rounded-md shadow-md relative ">
              <img
                className="rounded-md sm:h-[106px] sm:w-[105px] absolute top-[2.5rem] -left-[2.25rem] "
                src={men1}
                alt=""
              />
              <div className="ml-[130px]  pt-[31.5px] space-y-4">
                <img className=" w-[37.01px] h-[32.28px]" src={msg} alt="" />
                <p className="w-[304.06px] h-[75.59px] text-[#4C4D56] font-jost font-normal text-[15.75px] leading-[25.2px] text-left">
                  Accelerate innovation with world-class tech teams Beyond more
                  stoic this along goodness hey this this wow manatee
                </p>
                <p className="font-jost font-normal text-[12.6px] leading-[15.75px] text-left text-black">
                  Mike Fermalin{" "}
                  <span className="font-jost font-normal text-[9.45px] leading-[15.75px] text-left text-[#47484A]">
                    / CEO, Harlond inc
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        
       <Dots/>
        {/* <img className="text-[#FF6500] text-center" src={group0} alt="" /> */}
      </div>
    </div>
  );
};

export default Testimonial;
