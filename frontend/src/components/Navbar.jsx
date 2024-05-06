import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="relative sm:w-[1513px] h-[93px]  bg-white shadow-[#00000026] shadow-sm  sm:container sm:mx-auto z-50">
      <div className="flex sm:w-[1513px] h-[93px] ">
        {/* Logo */}
        <div className=" sm:ml-[160px]">
          <img className=" w-[132.19px] h-[86px] pt-[3px]" src={logo} alt="" />
        </div>

        {/* Navigation Links */}
        <div className="hidden  sm:min-w-[869px]  md:flex items-center pt-[20px] gap-5 sm:ml-[220px]">
          <a
            href="/"
            className="text-[#444444] hover:text-black  font-Poppins font-medium text-[14px] leading-5"
          >
            Company
          </a>
          <a
            href="/"
            className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 "
          >
            Services
          </a>
          <a
            href="/"
            className="text-[#444444] hover:text-black  font-Poppins font-medium text-[14px] leading-5 "
          >
            Technology
          </a>
          <a
            href="/"
            className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 "
          >
            Solutions
          </a>
          <a
            href="/"
            className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 "
          >
            Hire Developer
          </a>
          <a
            href="/"
            className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 "
          >
            Portfolio
          </a>
          <a
            href="/"
            className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 "
          >
            Contact Us
          </a>
          <button className="w-[163px] h-[37px] rounded-md ml-[8px] p-1  font-Poppins font-medium text-[12px] leading-4 text-white bg-[#FF6500] hover:bg-orange-600">
            Request Job Opportunity
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
