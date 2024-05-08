import React from "react";
import testimonialbg from "../../assets/images/testimonialbg.jpg";
import men from "../../assets/images/men.jpg";
import men1 from "../../assets/images/men1.jpg";
import msg from "../../assets/images/msg.png";

const Testimonial = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${testimonialbg})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  };
  return (
    <div
      className="relative h-[588.2px] w-full bg-gradient-to-br from-[#E16F1F] to-[rgba(255, 101, 0, 0.5)] "
      style={backgroundImageStyle}
    >
      <div className="w-[1020px]  h-[517px] pt-[80px]  mx-auto">
        <h2 className="text-[#FFFFFF] font-Poppins font-semibold text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-center">
          Testimonial
        </h2>
        <h1 className="text-[#FFFFFF] font-Poppins font-semibold text-[42px] leading-[61.08px] text-center">
          Our Clients Worldwide.
        </h1>
        <div className="flex justify-between items-center">
          <div className="pt-[60px] pl-6">
            <div className=" w-[448.82px] h-[217.72px] bg-white rounded-md shadow-md relative ">
              <img
                className="rounded-md absolute top-[2.5rem] -left-[2.25rem] "
                src={men}
                alt=""
              />
              <div className="ml-[130px]  pt-[31.5px] space-y-4">
                <img className=" w-[37.01px] h-[32.28px]" src={msg} alt="" />
                <p className="w-[304.06px] h-[75.59px] text-[#4C4D56] font-jost font-normal text-[15.75px] leading-[25.2px] text-left">
                  Accelerate innovation with world-class tech teams Beyond more
                  stoic this along goodness hey this this wow manatee
                </p>
                <p className="font-jost font-normal text-[12.6px] leading-[15.75px] text-left text-black">
                  Mike Holder{" "}
                  <span className="font-jost font-normal text-[9.45px] leading-[15.75px] text-left text-[#47484A]">
                    / CEO, Harlond inc
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="pt-[60px] pl-6">
            <div className=" w-[448.82px] h-[217.72px] bg-white rounded-md shadow-md relative ">
              <img
                className="rounded-md absolute top-[2.5rem] -left-[2.25rem] "
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
        <div className="  flex items-center justify-center mt-10 gap-5">
          <div className="w-[16.54px]   h-[16.54px] ring-1 ring-white rounded-full flex items-center justify-center">
            <div className="w-[5.51px]   h-[5.51px] bg-white rounded-full "></div>
          </div>
          <div className="w-[5.51px]   h-[5.51px] bg-white rounded-full "></div>
          <div className="w-[5.51px]   h-[5.51px] bg-white rounded-full "></div>
        </div>
        {/* <img className="text-[#FF6500] text-center" src={group0} alt="" /> */}
      </div>
    </div>
  );
};

export default Testimonial;
