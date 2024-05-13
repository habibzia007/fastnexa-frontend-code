import React from "react";
import bg from "../../assets/images/contactbg.jpg";
// import group from "../../assets/images/group.png";
import phone from "../../assets/images/phone.svg";
import message from "../../assets/images/message.svg";
import location from "../../assets/images/location.svg";
// import WhatWeProvideCard from "./Card";
// import { WhatWeProvideData } from "../../utils/fakedb/data";

const ContactUs = () => {
  const backgroundImageStyle = {
    backgroundImage: ` url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="w-full h-[605] sm:h-[716px]" style={backgroundImageStyle}>
      <div className="relative w-[350px] sm:w-[1184px] mx-auto ">
        <div className="h-[605] sm:h-[716px]   ">
          <div className=" h-[586.56px]  pt-4 sm:pt-[64px] flex">
            <div className="w-full sm:w-1/2 ">
              {/* wrapper */}
              <div className="w-full h-full flex gap-4 flex-col sm:gap-8">
                <div className="flex  gap-2 sm:gap-[41px]">
                  <div className="bg-[#FF6500] w-[4px] h-[129px] sm:w-[3.66px] sm:h-[148px]"></div>
                  <div className="w-[266px] h-[99px] sm:w-[478px] sm:h-[137px] font-poppins font-semibold text-[22px] leading-[33.1px] sm:text-[42px] sm:leading-[51.1px] text-left text-[#0E0E0E]">
                    To make requests for further information, contact us
                  </div>
                </div>

                <div className="sm:space-y-6  flex sm:flex-col sm:items-start items-center gap-2">
                  <div className=" flex gap-1 sm:gap-4 items-center  w-[95px] h-[21px]   sm:w-fit sm:h-fit">
                    <img
                      className="w-[17.8px] h-[17.14px]  sm:w-[43px] sm:h-[43px]"
                      src={phone}
                      alt=""
                    />
                    <div>
                      <h2 className=" text-[#0E0E0E] font-Poppins font-bold text-[7.94px] leading-[10.59px] sm:text-[20.23px] sm:leading-[27.59px] text-left">
                        Contact Number
                      </h2>
                      <p className=" text-[#0E0E0E] font-Poppins font-normal text-[6.28px] leading-[10.2px] sm:text-[16px] sm:leading-[26px] text-left">
                        +00(1) 123 456 7890
                      </p>
                    </div>
                  </div>
                  <div className=" flex gap-1 sm:gap-4 items-center w-[107px] h-[20px] sm:w-fit sm:h-fit">
                    <img
                      className="w-[17.8px] h-[17.14px] sm:w-[43px] sm:h-[43px]"
                      src={message}
                      alt=""
                    />
                    <div>
                      <h2 className=" text-[#0E0E0E] font-Poppins font-bold text-[7.94px] leading-[10.59px] sm:text-[20.23px] sm:leading-[27.59px] text-left">
                        Our Mail
                      </h2>
                      <p className=" text-[#0E0E0E] font-Poppins font-normal text-[6px] leading-[9.8px] sm:text-[16px] sm:leading-[26px] text-left">
                        infotechmax@ourmail.com
                      </p>
                    </div>
                  </div>
                  <div className=" flex gap-1 sm:gap-4 items-center w-[124px] h-[33px]  sm:w-fit sm:h-fit">
                    <img
                      className="w-[17.8px] h-[17.14px] sm:w-[43px] sm:h-[43px]"
                      src={location}
                      alt=""
                    />
                    <div>
                      <h2 className=" text-[#0E0E0E] font-Poppins font-bold text-[7.4px] leading-[9.59px] sm:text-[20.23px] sm:leading-[27.59px] text-left">
                        Our Location
                      </h2>
                      <p className=" text-[#0E0E0E] font-Poppins font-normal text-[5px] leading-[8px] sm:text-[16px] sm:leading-[26px] text-left">
                        New ipsum dolor amet, eiusmod adipisicing 147 New Yors,
                        NY Adipisicing 123
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[350.53px] h-[353.56px] sm:w-[581.53px] sm:h-[510.56px]  bg-white shadow-sm absolute right-[.25rem] top-[13.25rem] sm:right-[1.25rem] sm:top-[5.25rem] rounded-md">
          <h6 className="font-barlow font-bold text-[7.8px] leading-[16.43px] sm:text-[12.8px] sm:leading-[27.43px] text-center text-[#FF6500] pt-[20px] sm:pt-[40px]">
            LEAVE US MESSAGE
          </h6>
          <h1 className="font-Poppins font-semibold text-[22.4px] leading-[29.38px] sm:text-[38.4px] sm:leading-[49.38px] text-center text-[#333333]">
            How May We Help You!
          </h1>
          <form className=" w-[300px] sm:w-[500px] mx-auto mt-[26px] sm:mt-[40px] ">
            <div className="mb-4 flex">
              <div className="w-1/2 mr-2">
                <input
                  className="flex items-center w-full px-3 pt-1 pb-2 border border-gray-300 rounded-md focus:outline-none  focus:border-orange-500 placeholder:text-[#4C4D56]  placeholder:font-poppins placeholder:font-normal placeholder:text-[12.8px] placeholder:leading-[19.2px]"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name *"
                  required
                />
              </div>
              <div className="w-1/2 ml-2">
                <input
                  className="w-full px-3 pt-1 pb-2 border border-gray-300 rounded-md focus:outline-none  focus:border-orange-500 placeholder:text-[#4C4D56]  placeholder:font-poppins placeholder:font-normal placeholder:text-[12.8px] placeholder:leading-[19.2px]"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email *"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                className="w-full px-3 pt-1 pb-2 border border-gray-300 rounded-md focus:outline-none  focus:border-orange-500 placeholder:text-[#4C4D56]  placeholder:font-poppins placeholder:font-normal placeholder:text-[12.8px] placeholder:leading-[19.2px]"
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject *"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                className="w-full px-3 pt-1 pb-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500 placeholder:text-[#4C4D56]  placeholder:font-poppins placeholder:font-normal placeholder:text-[12.8px] placeholder:leading-[19.2px] "
                id="message"
                name="message"
                rows="3"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div>
              <button
                className="w-full bg-[#FF6500] text-white font-poppins font-bold text-[9.63px] leading-[31.62px] sm:text-[16px] sm:leading-[52.62px] rounded-[6px] sm:rounded-[10px] hover:bg-slate-900 transition-all duration-500 focus:outline-none focus:bg-blue-600"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
