import React from "react";
import bg from "../assets/images/contactbg.jpg";
import phone from "../assets/images/phone.svg";
import message from "../assets/images/message.svg";
import location from "../assets/images/location.svg";
const ContactUs = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="w-full" style={backgroundImageStyle}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1185px] py-11 lg:py-12 flex flex-col lg:flex-row items-center">
        <div className=" w-[100%]  lg:w-1/2 lg:flex lg:items-center">
          <div className="w-full flex flex-col items-start  lg:gap-10 lg:mb-[111px]">
            <div className="flex  gap-2 md:gap-4 w-[236px] lg:w-full h-32">
              <div className="bg-[#FF6500]  w-[6px] mt-2 h-[67%] lg:w-3.66 lg:h-[123px] lg:mt-[7px]"></div>
              <div className="font-poppins  font-semibold text-[22px] leading-[33px] lg:text-[43px] lg:leading-[44px]  text-[#0E0E0E]">
                To make requests for further information, contact us:
              </div>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-4 lg:gap-6 w-[236px] sm:w-full ">
              <div className="flex gap-2 items-center">
                <img
                  className="w-6 h-6 md:w-12 lg:h-11"
                  src={phone}
                  alt="Phone"
                />
                <div>
                  <h2 className="font-Poppins font-bold text-sm lg:text-lg text-[#0E0E0E]">
                    Contact Number
                  </h2>
                  <p className="font-Poppins font-normal text-xs lg:text-base text-[#0E0E0E]">
                    +92 310 4443823
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  className="w-6 h-6 lg:w-11 lg:h-11"
                  src={message}
                  alt="Message"
                />
                <div>
                  <h2 className="font-Poppins font-bold text-sm lg:text-lg text-[#0E0E0E]">
                    Our Mail
                  </h2>
                  <p className="font-Poppins font-normal text-xs lg:text-base text-[#0E0E0E]">
                    info@fastnexa.com
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  className="w-6 h-6 lg:w-11 lg:h-11 "
                  src={location}
                  alt="Location"
                />
                <div>
                  <h2 className="font-Poppins font-bold text-sm lg:text-lg text-[#0E0E0E]">
                    Our Location
                  </h2>
                  <p className="font-Poppins font-normal text-xs lg:text-base text-[#0E0E0E] max-w-[50px">
                    192, Y Block, DHA phase III, Lahore, Pakistan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[100%]  lg:w-1/2 lg:pl-8 mt-8 lg:mt-0 mx-auto">
          <div className="w-full bg-[#FFFFFF] shadow-sm rounded-md p-6 lg:p-10">
            <h6 className="font-barlow font-bold text-xs lg:text-sm text-center text-[#FF6500] mb-4 lg:mb-8">
              LEAVE US MESSAGE
            </h6>
            <h1 className="font-Poppins font-semibold text-base lg:text-[1.9rem] leading-5 text-center text-[#333333] mb-6 lg:mb-14">
              How May We Help You!
            </h1>
            <form>
              <div className="mb-4 flex flex-col sm:flex-row gap-3">
                <div className="w-full sm:w-1/2 lg:mr-2 mb-4 lg:mb-0">
                  <input
                    className="w-full px-3 pt-1 pb-2 border-[0.91px] border-[#EBEBEB] rounded-md focus:outline-none focus:border-orange-500 placeholder:text-[#4C4D56] placeholder:font-Poppins placeholder:font-normal placeholder:text-xs placeholder:leading-[19.2px]"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name *"
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2 lg:ml-2">
                  <input
                    className="w-full px-3 pt-1 pb-2 border-[0.91px] border-[#EBEBEB] rounded-md focus:outline-none focus:border-orange-500 placeholder:text-[#4C4D56] placeholder:font-Poppins placeholder:font-normal placeholder:text-xs placeholder:leading-[19.2px]"
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
                  className="w-full px-3 pt-1 pb-2 border-[0.91px] border-[#EBEBEB] rounded-md focus:outline-none focus:border-orange-500 placeholder:text-[#4C4D56] placeholder:font-Poppins placeholder:font-normal placeholder:text-xs placeholder:leading-[19.2px]"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject *"
                  required
                />
              </div>
              <div className="mb-7">
                <textarea
                  className="w-full px-3 pt-1 pb-2 border-[0.91px]  border-[#EBEBEB] rounded-md focus:outline-none focus:border-orange-500 placeholder:text-[#4C4D56] placeholder:font-Poppins placeholder:font-normal placeholder:text-xs placeholder:leading-[19.2px]"
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  className="w-full bg-[#FF6500] text-white font-poppins font-bold text-xs lg:text-[16px] leading-[2.7rem] rounded-[6px] lg:rounded-[10px] hover:bg-slate-900 transition-all duration-500 focus:outline-none focus:bg-blue-600"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
