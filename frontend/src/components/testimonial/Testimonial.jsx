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
      className="relative h-[388.2px] lg:h-[588.2px] w-full bg-gradient-to-br from-[#E16F1F] to-[rgba(255, 101, 0, 0.5)] mt-5 lg:mt-32"
      style={backgroundImageStyle}
    >
      <div className="w-[350px] sm:w-[670px] h-full lg:w-[1020px] pt-[40px] lg:pt-[80px]   mx-auto ">
        <h2 className="text-[#FFFFFF] font-Poppins font-semibold text-[12px] lg:text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-center">
          Testimonial
        </h2>
        <h1 className="text-[#FFFFFF] font-Poppins font-semibold text-[22px] leading-[33.08px] lg:text-[42px] lg:leading-[61.08px] text-center">
          Our Clients Worldwide.
        </h1>
        <div className="flex items-center justify-between">
          <div className="pt-[40px] lg:pt-[60px] pl-1 lg:pl-6 ml-6">
            <div className="w-[310.86px] mx-auto h-[146.01px]  lg:w-[448.82px] lg:h-[217.72px] bg-white rounded-md shadow-md relative ">
              <img
                className="rounded-md w-[78px] h-[77px]  lg:h-[106px] lg:w-[105px] absolute left-[-19px] top-[28px] lg:top-[2.5rem] lg:-left-[2.25rem] "
                src={men}
                alt=""
              />
              {/* <p className="font-Poppins text-[17.59px] text-[#FFFFFF]  leading-[41px] font-semibold"></p> */}
              <div className="ml-[80px] lg:ml-[130px]  pt-[28.5px] lg:pt-[31.5px] space-y-2 lg:space-y-4">
                <img
                  className="w-[27.01px] h-[23.28px]  lg:w-[37.01px] lg:h-[32.28px]"
                  src={msg}
                  alt=""
                />
                <p className="w-[223.06px] h-[55.59px] lg:w-[304.06px] lg:h-[75.59px] text-[#4C4D56] font-jost font-normal text-[12px] leading-[18.50px] lg:text-[15.75px] lg:leading-[25.2px] text-left">
                  Accelerate innovation with world-class tech teams Beyond more
                  stoic this along goodness hey this this wow manatee
                </p>
                <p className="font-jost font-normal text-[9px] leading-[12px] lg:text-[12.6px] lg:leading-[15.75px] text-left text-black">
                  Mike Holder
                  <span className="font-jost font-normal text-[6.94px] leading-[11.57px] lg:text-[9.45px] lg:leading-[15.75px] text-left text-[#47484A]">
                    / CEO, Harlond inc
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden sm:block pt-[40px] lg:pt-[60px] pl-1 lg:pl-6 ml-6">
            <div className="w-[310.86px] mx-auto h-[146.01px]  lg:w-[448.82px] lg:h-[217.72px] bg-white rounded-md shadow-md relative ">
              <img
                className="rounded-md w-[78px] h-[77px]  lg:h-[106px] lg:w-[105px] absolute left-[-19px] top-[28px] lg:top-[2.5rem] lg:-left-[2.25rem] "
                src={men}
                alt=""
              />
              {/* <p className="font-Poppins text-[17.59px] text-[#FFFFFF]  leading-[41px] font-semibold"></p> */}
              <div className="ml-[80px] lg:ml-[130px]  pt-[28.5px] lg:pt-[31.5px] space-y-2 lg:space-y-4">
                <img
                  className="w-[27.01px] h-[23.28px]  lg:w-[37.01px] lg:h-[32.28px]"
                  src={msg}
                  alt=""
                />
                <p className="w-[223.06px] h-[55.59px] lg:w-[304.06px] lg:h-[75.59px] text-[#4C4D56] font-jost font-normal text-[12px] leading-[18.50px] lg:text-[15.75px] lg:leading-[25.2px] text-left">
                  Accelerate innovation with world-class tech teams Beyond more
                  stoic this along goodness hey this this wow manatee
                </p>
                <p className="font-jost font-normal text-[9px] leading-[12px] lg:text-[12.6px] lg:leading-[15.75px] text-left text-black">
                  Mike Holder
                  <span className="font-jost font-normal text-[6.94px] leading-[11.57px] lg:text-[9.45px] lg:leading-[15.75px] text-left text-[#47484A]">
                    / CEO, Harlond inc
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* <div className="hidden md:block pt-[60px] pl-6">
            <div className=" w-[448.82px] h-[217.72px] bg-white rounded-md shadow-md relative ">
              <img
                className="rounded-md lg:h-[106px] lg:w-[105px] absolute top-[2.5rem] -left-[2.25rem] "
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
          </div> */}
        </div>
        
       <Dots/>
        {/* <img className="text-[#FF6500] text-center" src={group0} alt="" /> */}
      </div>
    </div>
  );
};

export default Testimonial;
