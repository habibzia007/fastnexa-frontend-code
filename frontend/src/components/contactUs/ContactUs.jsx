import React from "react";
import bg from "../../assets/images/contactbg.jpg";
// import group from "../../assets/images/group.png";
import phone from "../../assets/images/phone.png";
import message from "../../assets/images/message.png";
import location from "../../assets/images/location.png";
// import WhatWeProvideCard from "./Card";
// import { WhatWeProvideData } from "../../utils/fakedb/data";

const ContactUs = () => {
  const backgroundImageStyle = {
    backgroundImage: ` url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className=" w-full" style={backgroundImageStyle}>
      <div className="relative  h-[640px] w-[1519px] mx-auto ">
        <div className=" h-[716px] w-[1519px] mx-auto mt-16 ">
          <div className="w-[1184.44px] h-[586.56px] ml-[160px]  pt-[64px] flex">
            {/* left side  */}
            <div className="w-1/2 ">
              {/* wrapper */}
              <div className="w-full h-full flex flex-col gap-8">
                <div className="flex gap-[41px]">
                  <div className="bg-[#FF6500] w-[3.66px] h-[148px]"></div>
                  <div className=" w-[478px] h-[137px] font-poppins font-semibold text-[42px] leading-[51.1px] text-left text-[#0E0E0E]">
                    To make requests for further information, contact us
                  </div>
                </div>
                <div className=" flex gap-3 items-center">
                  <img src={phone} alt="" />
                  <div>
                    <h2 className=" text-[#0E0E0E] font-Poppins font-bold text-[20.23px] leading-[27.59px] text-left">
                      Contact Number
                    </h2>
                    <p className=" text-[#0E0E0E] font-Poppins font-normal text-[16px] leading-[26px] text-left">
                      +00(1) 123 456 7890
                    </p>
                  </div>
                </div>
                <div className=" flex gap-3 items-center">
                  <img src={message} alt="" />
                  <div>
                    <h2 className=" text-[#0E0E0E] font-Poppins font-bold text-[20.23px] leading-[27.59px] text-left">
                      Our Mail
                    </h2>
                    <p className=" text-[#0E0E0E] font-Poppins font-normal text-[16px] leading-[26px] text-left">
                      infotechmax@ourmail.com
                    </p>
                  </div>
                </div>
                <div className=" flex gap-3 items-center">
                  <img src={location} alt="" />
                  <div>
                    <h2 className=" text-[#0E0E0E] font-Poppins font-bold text-[20.23px] leading-[27.59px] text-left">
                      Our Location
                    </h2>
                    <p className=" text-[#0E0E0E] font-Poppins font-normal text-[16px] leading-[26px] text-left">
                      New ipsum dolor amet, eiusmod adipisicing 147 New Yors, NY
                      Adipisicing 123
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* right side */}
          </div>
        </div>
        <div className="w-[581.53px] h-[510.56px]  bg-white shadow-sm absolute right-[10.25rem] top-[5.25rem] rounded-md">
          <h6 className="font-barlow font-bold text-[12.8px] leading-[27.43px] text-center text-[#FF6500] pt-[40px]">
            Leave us massage
          </h6>
          <h1 className="font-Poppins font-semibold text-[38.4px] leading-[49.38px] text-center text-[#333333]">
            How May We Help You!
          </h1>
          <form className=" w-[500px] mx-auto mt-[40px]">
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
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div>
              <button
                className="w-full bg-[#FF6500] text-white font-poppins font-bold text-[16px] leading-[52.62px] rounded-[10px] hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
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
