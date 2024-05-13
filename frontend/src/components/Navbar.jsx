import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-hd.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="relative bg-white shadow-md shadow-[#00000026] z-50">
      <div className="container sm:w-[1184px] mx-auto px-4 sm:px-6 grid grid-cols-12">
        <div className="col-span-12 sm:col-span-6 lg:col-span-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/">
              <img
                className="w-[59px] h-[38px] sm:w-[132.19px] sm:h-[86px]"
                src={logo}
                alt="Logo"
              />
            </Link>
            {/* Navigation Links */}
            <div className="hidden sm:flex items-center gap-5">
              <Link to="/about">
                <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
                  About Us
                </span>
              </Link>
              <Link to="#">
                <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
                  Services
                </span>
              </Link>
              <Link to="#">
                <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
                  Technology
                </span>
              </Link>
              <Link to="#">
                <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
                  Solutions
                </span>
              </Link>
              <Link to="#">
                <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
                  Hire Developer
                </span>
              </Link>
              <Link to="#">
                <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
                  Portfolio
                </span>
              </Link>
              <Link to="#">
                <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
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
            <div className="sm:hidden">
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
            <div className="sm:hidden mt-2">
              <Link to="/about">
                <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 block py-2">
                  About Us
                </span>
              </Link>
              <Link to="#">
                <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 block py-2">
                  Services
                </span>
              </Link>
              <Link to="#">
                <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 block py-2">
                  Technology
                </span>
              </Link>
              <Link to="#">
                <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 block py-2">
                  Solutions
                </span>
              </Link>
              <Link to="#">
                <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 block py-2">
                  Hire Developer
                </span>
              </Link>
              <Link to="#">
                <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 block py-2">
                  Portfolio
                </span>
              </Link>
              <Link to="#">
                <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5 block py-2">
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

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/images/logo-hd.svg";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   return (
//     <nav className="relative h-[50px] sm:h-[93px] bg-white shadow-md shadow-[#00000026] z-50">
//       <div className="container mx-auto px-4 sm:px-6 grid grid-cols-12">
//         <div className="col-span-12 sm:col-span-6 lg:col-span-12">
//           <div className="flex justify-between h-[50px] sm:h-[93px] items-center">
//             {/* Logo */}
//             <Link to="/">
//               <img
//                 className="w-[59px] h-[38px] sm:w-[132.19px] sm:h-[86px]"
//                 src={logo}
//                 alt=""
//               />
//             </Link>
//             {/* Navigation Links */}
//             <div className="hidden md:flex items-center gap-5">
// <Link to="/about">
//   <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
//     About Us
//   </span>
// </Link>
// <Link to="#">
//   <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
//     Services
//   </span>
// </Link>
// <Link to="#">
//   <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
//     Technology
//   </span>
// </Link>
// <Link to="#">
//   <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
//     Solutions
//   </span>
// </Link>
// <Link to="#">
//   <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
//     Hire Developer
//   </span>
// </Link>
// <Link to="#">
//   <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
//     Portfolio
//   </span>
// </Link>
// <Link to="#">
//   <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
//     Contact Us
//   </span>
// </Link>
// <Link to="#" className="nav-button">
//   <button className="w-[163px] h-[37px] rounded-md ml-[8px] p-1 font-Poppins font-medium text-[12px] leading-4 text-white bg-[#FF6500] border-[#FF6500] hover:bg-transparent hover:text-orange-600 hover:border hover:border-orange-600 transition-colors duration-700 hover:shadow-md">
//     Request Job Opportunity
//   </button>
// </Link>
//             </div>
//             {/* Mobile Navigation */}
//             <div className="sm:hidden">
//               {nav ? (
//                 <FaTimes
//                   color="#324558"
//                   size={25}
//                   onClick={() => setNav(!nav)}
//                 />
//               ) : (
//                 <FaBars
//                   color="#324558"
//                   size={25}
//                   onClick={() => setNav(!nav)}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// // // import React, { useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import logo from "../assets/images/logo-hd.svg";
// // // import { FaBars, FaTimes } from "react-icons/fa";

// // // const Navbar = () => {
// // //   const [nav, setNav] = useState(false);
// // //   return (
// // //     <nav className="relative h-[50px] sm:h-[93px] bg-white shadow-md shadow-[#00000026] z-50">
// // //       <div className="container mx-auto px-4 sm:px-6">
// // //         <div className="flex justify-between h-[50px] sm:h-[93px] items-center">
// // //           {/* Logo */}
// // //           <Link to="/">
// // //             <img
// // //               className="w-[59px] h-[38px] sm:w-[132.19px] sm:h-[86px]"
// // //               src={logo}
// // //               alt=""
// // //             />
// // //           </Link>
// // //           {/* Navigation Links */}
// // //           <div className="hidden sm:flex items-center gap-5">
// // //             {/* Your navigation links */}
// // //           </div>
// // //           {/* Mobile Navigation */}
// // //           <div className="sm:hidden">
// // //             {nav ? (
// // //               <FaTimes color="#324558" size={25} onClick={() => setNav(!nav)} />
// // //             ) : (
// // //               <FaBars color="#324558" size={25} onClick={() => setNav(!nav)} />
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;

// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import logo from "../assets/images/logo-hd.svg";
// // import { FaBars, FaTimes } from "react-icons/fa";

// // const Navbar = () => {
// //   const [nav, setNav] = useState(false);
// //   return (
// //     <nav className="relative w-[430px] h-[50px] sm:w-full sm:h-[93px] bg-white shadow-md shadow-[#00000026] z-50">
// //       <div className="w-[350px] sm:w-[1185px] mx-auto">
// //         <div className="flex justify-between h-[50px] sm:h-[93px] ">
// //           {/* Logo */}
// //           <Link to="/">
// //             <img
// //               className="w-[59px] h-[38px] pt-[6px] sm:w-[132.19px] sm:h-[86px] sm:pt-[3px]"
// //               src={logo}
// //               alt=""
// //             />
// //           </Link>
// //           {/* Navigation Links */}
// //           <div className="hidden sm:min-w-[869px] md:flex items-center pt-[20px] gap-5">
// //             <Link to="/about">
// //               <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
// //                 About Us
// //               </span>
// //             </Link>
// //             <Link to="/services">
// //               <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
// //                 Services
// //               </span>
// //             </Link>
// //             <Link to="/technology">
// //               <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
// //                 Technology
// //               </span>
// //             </Link>
// //             <Link to="/solutions">
// //               <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
// //                 Solutions
// //               </span>
// //             </Link>
// //             <Link to="/hire-developer">
// //               <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
// //                 Hire Developer
// //               </span>
// //             </Link>
// //             <Link to="/portfolio">
// //               <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
// //                 Portfolio
// //               </span>
// //             </Link>
// //             <Link to="/contact-us">
// //               <span className="text-[#444444] hover:text-black font-Poppins font-medium text-[14px] leading-5">
// //                 Contact Us
// //               </span>
// //             </Link>
// //             <Link to="/request-job" className="nav-button">
// //               <button className="w-[163px] h-[37px] rounded-md ml-[8px] p-1 font-Poppins font-medium text-[12px] leading-4 text-white bg-[#FF6500] border-[#FF6500] hover:bg-transparent hover:text-orange-600 hover:border hover:border-orange-600 transition-colors duration-700 hover:shadow-md">
// //                 Request Job Opportunity
// //               </button>
// //             </Link>
// //           </div>
// //           {/* Mobile Navigation */}
// //           <div className="sm:hidden pt-4 cursor-pointer sm:pt-[20px]">
// //             {nav ? (
// //               <FaTimes color="#324558" size={25} onClick={() => setNav(!nav)} />
// //             ) : (
// //               <FaBars color="#324558" size={25} onClick={() => setNav(!nav)} />
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;
