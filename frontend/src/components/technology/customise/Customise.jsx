import React from "react";
import serviceImage from "../../../assets/images/service.png";
import bg from "../../../assets/images/contactbg.jpg";

const backgroundImageStyle = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Customise = () => {
  return (
    <div
      className="outer-div flex flex-col items-center gap-3 h-auto w-full lg:pt-8 lg:pb-16 py-10 px-4"
      style={backgroundImageStyle}
    >
      <h3 className="font-Poppins text-[32px] sm:text-[42px] font-bold leading-[41px] sm:leading-[61.08px] tracking-[1px] mt-[10px] text-center">
        Customise Web Development
      </h3>
      <div className="w-full  sm:max-w-[700px] lg:max-w-[1184px] flex  flex-col-reverse  lg:flex-row justify-center items-center lg:mt-8 ">
        {/* left side (IMAGE) */}
        <div className="w-full lg:w-1/2 justify-center lg:justify-start">
          <img
            className="w-full sm:w-[600px] lg:w-[537px] lg:h-[480] mt-4 lg:mt-0 mx-auto"
            src={serviceImage}
            alt=""
          />
        </div>
        {/* right side (TEXT) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start mt-8 lg:mt-0 px-4">
          <div className="mx-2 my-4 lg:h-[466px] border-b text-xs sm:text-[16px] leading-[24px] sm:leading-[27.59px] text-center lg:text-start max-w-[600px] lg:max-w-full">
            <p className="text-[#747474]">
              Is Your Business Vision Reflected in Your Website? We understand
              the importance of a website that aligns perfectly with your unique
              business vision.
            </p>
            <p className="mt-4 font-semibold text-[#747474]">
              Our Custom Web Development Services:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li className="mt-2 text-[#747474]">
                <span className="font-semibold">Thorough Consultation:</span> We
                initiate the process with a detailed consultation, where we
                actively listen to your goals and ideas to ensure a deep
                understanding of your vision.
              </li>
              <li className="mt-2 text-[#747474]">
                <span className="font-semibold">Tailor-Made Solutions:</span>{" "}
                Expect nothing less than a perfect and tailor-made website that
                is uniquely yours, reflecting your brand identity and
                captivating your visitors.
              </li>
            </ul>
            <p className="mt-4 text-[#747474]">
              Contact us today to discuss your web development needs, and let
              our well-versed developers craft a captivating and customized
              website that brings your business vision to life. Elevate your
              online presence and leave a lasting impression on your audience
              with our expertly crafted web solutions.
            </p>
          </div>
          <button className="font-Poppins text-[14px] sm:text-[16px] w-full max-w-[347px] h-[50px] mt-4 ring-2 text-orange-500 rounded-md ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-500">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customise;
