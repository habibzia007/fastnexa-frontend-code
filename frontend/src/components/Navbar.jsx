import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="relative w-full h-[93px]  bg-white  z-50">
      <div className="w-[1185px] mx-auto">
        <div className="flex justify-between h-[93px]  ">
          {/* Logo */}
          <img className=" w-[132.19px] h-[86px] pt-[3px]" src={logo} alt="" />
          {/* Navigation Links */}
          <div className="hidden  sm:min-w-[869px]  md:flex items-center pt-[20px] gap-5 ">
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
            <button className="w-[163px] h-[37px] rounded-md ml-[8px] p-1 font-Poppins font-medium text-[12px] leading-4 text-white bg-[#FF6500] border-[#FF6500] hover:bg-transparent  hover:text-orange-600 hover:border hover:border-orange-600 transition-colors duration-700 hover:shadow-md">
              Request Job Opportunity
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
