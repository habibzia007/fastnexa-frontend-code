import React from "react";
import aboutusservicesbg from "../../../assets/images/aboutusservicebg.jpg";
import aboutservice1 from "../../../assets/images/aboutservice1.jpg";
import aboutservice2 from "../../../assets/images/aboutservice2.jpg";
import aboutservice3 from "../../../assets/images/aboutservice3.jpg";

const AboutUsServices = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${aboutusservicesbg})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  };
  return (
    <div
      className="relative h-[1236px] sm:h-[1236px] w-full mt-10 sm:mt-[121px]"
      style={backgroundImageStyle}
    >
      {/* wrapper */}
      <div className=" w-[350px] sm:w-[1185px]  mx-auto pt-[30px] sm:pt-[66px]  ">
        <div className=" w-full flex flex-col space-y-[62px]">

          {/* first card  */}
          <div className="w-full h-[311px] flex gap-4 sm:gap-0 flex-col sm:flex-row justify-between items-center sm:items-start">
            <div className=" flex flex-col  sm:w-[540px] space-y-4 items-center sm:items-start ">
              <h2 className="font-Poppins font-bold text-[27px] leading-[39.08px] sm:text-[42px] sm:leading-[61.08px] text-left text-[#232F3B]">
                Our Approach
              </h2>
              <p className="font-Poppins font-normal text-[11px] leading-[16px] sm:text-[16px] sm:leading-[26px]  text-[#444444] text-center sm:text-left">
                Delivering specialized services worldwide, Lucerna, as part of
                the ABM Group, utilizes highly qualified professionals across
                unlimited geographical boundaries. Whether you are located in
                the META region, Europe, or beyond, we provide tailor-made
                services that precisely fit your requirements. Building upon ABM
                IT's four-decade legacy,{" "}
              </p>

              <button className="font-lato w-[83.16px] h-[29.99px] sm:w-[170.16px] sm:h-[59.99px] left-[160px] py-[8px] px-[4px] sm:py-[19.15px] sm:px-[26.37px] ring-1 sm:ring-2 text-orange-500 sm:rounded-md rounded-sm text-[10px] sm:text-[18px] leading-[10.46px] ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors  duration-500 ">
                Discover More
              </button>
            </div>
            <img
              className="w-[350px] h-[200px] sm:w-[540px] sm:h-full rounded-md"
              src={aboutservice1}
              alt=""
            />
          </div>
          {/* second card */}
          <div className="w-full h-[311px] flex gap-4 sm:gap-0 flex-col sm:flex-row justify-between items-center sm:items-start">
            <div className=" flex flex-col  sm:w-[540px] space-y-4 items-center sm:items-start ">
              <h2 className="font-Poppins font-bold text-[27px] leading-[39.08px] sm:text-[42px] sm:leading-[61.08px] text-left text-[#232F3B]">
                IT Staff Augmentation
              </h2>
              <p className="font-Poppins font-normal text-[11px] leading-[16px] sm:text-[16px] sm:leading-[26px]  text-[#444444] text-center sm:text-left">
                In addition to our cyber security expertise, we excel in
                offering IT staff augmentation services to businesses in the US,
                UK, and MENA region. Our skilled IT professionals seamlessly
                integrate into your existing teams, providing the necessary
                support to meet your project requirements effectively. Whether
                you require technical support
              </p>

              <button className="font-lato w-[83.16px] h-[29.99px] sm:w-[170.16px] sm:h-[59.99px] left-[160px] py-[8px] px-[4px] sm:py-[19.15px] sm:px-[26.37px] ring-1 sm:ring-2 text-orange-500 sm:rounded-md rounded-sm text-[10px] sm:text-[18px] leading-[10.46px] ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors  duration-500 ">
                Discover More
              </button>
            </div>
            <img
              className="w-[350px] h-[200px] sm:w-[540px] sm:h-full rounded-md"
              src={aboutservice2}
              alt=""
            />
          </div>
          {/* third card */}
          <div className="w-full h-[311px] flex gap-4 sm:gap-0 flex-col  sm:flex-row-reverse justify-between items-center sm:items-start">
            <div className=" flex flex-col  sm:w-[540px] space-y-4 items-center sm:items-start ">
              <h2 className="font-Poppins font-bold text-[27px] leading-[39.08px] sm:text-[42px] sm:leading-[61.08px] text-left text-[#232F3B]">
                The IT Imperative
              </h2>
              <p className="font-Poppins font-normal text-[11px] leading-[16px] sm:text-[16px] sm:leading-[26px]  text-[#444444] text-center sm:text-left">
                At Lucerna Tech, our sought-after cyber security talents are
                backed by technical certifications from various security vendors
                and industry -leading risk management and information security
                certifications. Our services adhere to industry best practices
                and standards, ensuring top-notch solution s for our customers.
                Partnering with us means collaborating with security experts
              </p>

              <button className="font-lato w-[83.16px] h-[29.99px] sm:w-[170.16px] sm:h-[59.99px] left-[160px] py-[8px] px-[4px] sm:py-[19.15px] sm:px-[26.37px] ring-1 sm:ring-2 text-orange-500 sm:rounded-md rounded-sm text-[10px] sm:text-[18px] leading-[10.46px] ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors  duration-500 ">
                Discover More
              </button>
            </div>
            <img
              className="w-[350px] h-[200px] sm:w-[540px] sm:h-full rounded-md"
              src={aboutservice3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsServices;
