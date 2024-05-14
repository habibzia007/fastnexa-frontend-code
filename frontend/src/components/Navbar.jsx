import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/FastNexa-logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="relative bg-white shadow-md  shadow-[#00000026] z-50">
      <div className="container lg:w-[1184px] mx-auto px-4 lg:px-6 grid grid-cols-12">
        <div className="col-span-12  lg:col-span-12">
          <div className="flex justify-between items-center py-1">
            {/* Logo */}
            <Link to="/">
              <img
                className="w-[59px] h-[38px] lg:w-[132.19px] lg:h-[86px]"
                src={logo}
                alt="Logo"
              />
            </Link>
            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-5">
              <Link to="/about">
                <span
                  className={`  font-Poppins font-medium text-[14px] leading-5 ${
                    location.pathname === "/about"
                      ? "text-[#FF6500] font-extrabold "
                      : "text-[#444444]"
                  }`}
                >
                  About Us
                </span>
              </Link>
              <Link to="/services">
                <span
                  className={`  font-Poppins font-medium text-[14px] leading-5 ${
                    location.pathname === "/services"
                      ? "text-[#FF6500] font-extrabold "
                      : "text-[#444444]"
                  }`}
                >
                  Services
                </span>
              </Link>
              <Link to="#">
                <span
                  className={`text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 ${
                    location.pathname === "#" ? "text-black font-bold" : ""
                  }`}
                >
                  Technology
                </span>
              </Link>
              <Link to="#">
                <span
                  className={`text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 ${
                    location.pathname === "#" ? "text-black font-bold" : ""
                  }`}
                >
                  Solutions
                </span>
              </Link>
              <Link to="#">
                <span
                  className={`text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 ${
                    location.pathname === "#" ? "text-black font-bold" : ""
                  }`}
                >
                  Hire Developer
                </span>
              </Link>
              <Link to="#">
                <span
                  className={`text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 ${
                    location.pathname === "#" ? "text-black font-bold" : ""
                  }`}
                >
                  Portfolio
                </span>
              </Link>
              <Link to="#">
                <span
                  className={`text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 ${
                    location.pathname === "#" ? "text-black font-bold" : ""
                  }`}
                >
                  Contact Us
                </span>
              </Link>
              <Link to="#" className="nav-button">
                <button className="w-[163px] h-[37px] rounded-md ml-[8px] p-1 font-Poppins font-medium text-[12px] leading-4 text-white bg-[#FF6500] border-[#FF6500] hover:bg-transparent hover:text-orange-600 hover:border hover:border-orange-600 transition-colors duration-700 hover:shadow-md">
                  Request Job Opportunity
                </button>
              </Link>
            </div>
            {/* Mobile Navigation */}
            <div className="lg:hidden">
              {navOpen ? (
                <FaTimes
                  color="#324558"
                  size={25}
                  onClick={toggleNav}
                  className="cursor-pointer"
                />
              ) : (
                <FaBars
                  color="#324558"
                  size={25}
                  onClick={toggleNav}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
          {/* Mobile Navigation Menu */}
          {navOpen && (
            <div className="lg:hidden mt-2">
              <Link to="/aboutus">
                <span
                  className={`  font-Poppins font-medium text-[14px] leading-5 ${
                    location.pathname === "/aboutus"
                      ? "text-orange-700 font-extrabold"
                      : "text-[#444444]"
                  }`}
                >
                  About Us
                </span>
              </Link>
              <Link to="/services">
                <span
                  className={`  font-Poppins font-medium text-[14px] leading-5 block py-2 ${
                    location.pathname === "/services"
                      ? "text-[#FF6500] font-extrabold"
                      : "text-[#444444]"
                  }`}
                >
                  Services
                </span>
              </Link>
              <Link to="#">
                <span
                  className={`text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 block py-2 ${
                    location.pathname === "#" ? "text-black font-extrabold" : ""
                  }`}
                >
                  Technology
                </span>
              </Link>
              <Link to="#">
                <span
                  className={`text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 block py-2 ${
                    location.pathname === "#" ? "text-black font-bold" : ""
                  }`}
                >
                  Solutions
                </span>
              </Link>
              <Link to="#">
                <span
                  className={`text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 block py-2 ${
                    location.pathname === "#" ? "text-black font-bold" : ""
                  }`}
                >
                  Hire Developer
                </span>
              </Link>
              <Link to="#">
                <span
                  className={`text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 block py-2 ${
                    location.pathname === "#" ? "text-black font-bold" : ""
                  }`}
                >
                  Portfolio
                </span>
              </Link>
              <Link to="#">
                <span
                  className={`text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 block py-2 ${
                    location.pathname === "#" ? "text-black font-bold" : ""
                  }`}
                >
                  Contact Us
                </span>
              </Link>
              <Link to="#" className="nav-button">
                <button className="w-[163px] h-[37px] rounded-md  p-1 font-Poppins font-medium text-[12px] leading-4 text-white bg-[#FF6500] border-[#FF6500] hover:bg-transparent hover:text-orange-600 hover:border hover:border-orange-600 transition-colors duration-700 hover:shadow-md mr-5 mb-7">
                  Request Job Opportunity
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
