import React from "react";
import footerbg from "../assets/images/footerbg.jpg";
import logo from "../assets/images/logo.png";
import phoneicon from "../assets/images/phoneicon.png";
import messageicon from "../assets/images/messageicon.png";
import locationicon from "../assets/images/locationicon.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(250.49deg, rgba(0, 0, 0, 0) 43.25%, rgba(0, 0, 0, 0.6) 71.49%), url(${footerbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className=" h-[430.91px] w-full  "
      style={backgroundImageStyle}
    >
      {/* wrapper */}
      <div className="mx-auto w-[1184px] ">
        <div className=" flex items-center gap-[170px] mx-auto h-[363px]">
          <div className=" flex flex-col gap-4 w-[190px] h-[261px] ">
            <img className="w-[152px] h-[101px] text-white" src={logo} alt="" />
            <p className="w-[190px] h-[94px] font-Poppins font-normal text-[11.02px] leading-[23.62px] text-left text-[#FFFFFF]">
              Accelerate innovation with world- class tech teams We’ll match you
              to an entire remote team of incredible freelance talent.
            </p>
            <div className="w-[97.17px] h-[27.56px] flex justify-between">
              <FaFacebookF className="text-orange-700 bg-white w-[27.56px] h-[27.56px] rounded-full p-2 cursor-pointer" />
              <FaTwitter className="text-orange-700 bg-white w-[27.56px] h-[27.56px] rounded-full p-2 cursor-pointer" />
              <FaLinkedinIn className="text-orange-700 bg-white w-[27.56px] h-[27.56px] rounded-full p-2 cursor-pointer" />
            </div>
          </div>
          <div className="w-[108px] h-[140px] ">
            <h3 className="font-Poppins font-semibold text-[15.75px] leading-[23.62px] text-left text-[#FF6500]">
              Useful Links
            </h3>
            <ul className="mt-4 space-y-[6px]">
              <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[11.02px] leading-[19.29px] text-left">
                Terms & Conditions
              </li>
              <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[11.02px] leading-[19.29px] text-left">
                About Company
              </li>
              <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[11.02px] leading-[19.29px] text-left">
                Payment Gatway
              </li>
              <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[11.02px] leading-[19.29px] text-left ">
                Policy
              </li>
            </ul>
          </div>
          <div className="w-[108px] h-[140px] ">
            <h3 className="font-Poppins font-semibold text-[15.75px] leading-[23.62px] text-left text-[#FF6500]">
              Our Services
            </h3>
            <ul className="mt-4 space-y-[6px]">
              <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[11.02px] leading-[19.29px] text-left">
                Data Security
              </li>
              <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[11.02px] leading-[19.29px] text-left">
                IT Managment
              </li>
              <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[11.02px] leading-[19.29px] text-left">
                Outsourcing
              </li>
              <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[11.02px] leading-[19.29px] text-left">
                Networking
              </li>
            </ul>
          </div>
          <div className=" h-[140px] ">
            <h3 className="font-Poppins font-semibold text-[15.75px] leading-[23.62px] text-left text-[#FF6500]">
              Contact Information
            </h3>
            <ul className="mt-4 space-y-5">
              <li className="  flex gap-2">
                <img className="w-[14px.17] h-[14.17]" src={phoneicon} alt="" />
                <p className="font-barlow font-semibold text-[12.6px] leading-[15.75px] text-left text-[#C4C5C7] cursor-pointer">
                  +91 458 654 528
                </p>
              </li>
              <li className="  flex gap-2">
                <img
                  className="w-[14px.17] h-[14.17]"
                  src={messageicon}
                  alt=""
                />
                <p className="font-barlow font-semibold text-[12.6px] leading-[15.75px] text-left text-[#C4C5C7] cursor-pointer">
                  info@example.com
                </p>
              </li>
              <li className="  flex gap-2">
                <img
                  className="w-[14px.17] h-[14.17]"
                  src={locationicon}
                  alt=""
                />
                <p className="font-barlow font-semibold text-[12.6px] leading-[15.75px] text-left text-[#C4C5C7] cursor-pointer">
                  60 East 65th Street, NY
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <div className="w-full h-[67.32px]  py-[23.41px] border-t-[0.79px] border-[#1B202F] ">
          <h2 className="font-Poppins font-normal text-[11.02px] leading-[19.29px] text-center text-[#C4C5C7]">
            © Copyrights 2024, FastNexa All rights reserved.
          </h2>
        </div>
    </div>
  );
};

export default Footer;
