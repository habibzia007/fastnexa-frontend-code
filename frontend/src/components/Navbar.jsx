import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/FastNexa-logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const primaryLinks = [
  { path: "/about", label: "About Us" },
  { path: "/services", label: "Services" },
  { path: "/technology", label: "Technology" },
  { path: "#", label: "Portfolio" },
  { path: "/contact", label: "Contact Us" },
];

const buttonLink = {
  path: "#",
  label: "Request Job Opportunity",
};

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [opacity, setOpacity] = useState("bg-opacity-100"); // Initialize the opacity state
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const newOpacity =
        window.scrollY > 80 ? "bg-opacity-80" : "bg-opacity-100"; // Change opacity based on scroll
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav
      className={`relative bg-white shadow-md shadow-[#00000026] z-50 sticky top-0 ${opacity} w-full`}
    >
      <div className="container lg:w-[1184px] mx-auto px-4 lg:px-6 grid grid-cols-12">
        <div className="col-span-12">
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
              {primaryLinks.map((link) => (
                <Link key={link.label} to={link.path}>
                  <span
                    className={`font-Poppins font-medium text-[14px] leading-5 ${
                      location.pathname === link.path
                        ? "text-[#FF6500] font-extrabold"
                        : "text-[#444444]"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link to={buttonLink.path} className="nav-button">
                <button className="w-[163px] h-[37px] rounded-md ml-[8px] p-1 font-Poppins font-medium text-[12px] leading-4 text-white bg-[#FF6500] border-[#FF6500] hover:bg-transparent hover:text-orange-600 hover:border hover:border-orange-600 transition-colors duration-700 hover:shadow-md">
                  {buttonLink.label}
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
            <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden">
              {primaryLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={toggleNav}
                  className="block py-2 px-4 border-b border-gray-200"
                >
                  <span
                    className={`font-Poppins font-medium text-[14px] leading-5 ${
                      location.pathname === link.path
                        ? "text-[#FF6500] font-extrabold"
                        : "text-[#444444]"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link
                to={buttonLink.path}
                className="block py-2 px-4"
                onClick={toggleNav}
              >
                <button className="w-[163px] h-[37px] rounded-md p-1 font-Poppins font-medium text-[12px] leading-4 text-white bg-[#FF6500] border-[#FF6500] hover:bg-transparent hover:text-orange-600 hover:border hover:border-orange-600 transition-colors duration-700 hover:shadow-md">
                  {buttonLink.label}
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

////////////// ORANGE NAVBAR ON SCROLL ///////////////
//////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/FastNexa-logo.svg";
// import { FaBars, FaTimes } from "react-icons/fa";

// const primaryLinks = [
//   { path: "/about", label: "About Us" },
//   { path: "/services", label: "Services" },
//   { path: "/technology", label: "Technology" },
//   { path: "#", label: "Portfolio" },
//   { path: "/contact", label: "Contact Us" },
// ];

// const buttonLink = {
//   path: "#",
//   label: "Request Job Opportunity",
// };

// const Navbar = () => {
//   const [navOpen, setNavOpen] = useState(false);
//   const [background, setBackground] = useState("bg-orange-100 bg-opacity-50"); // Light orange tint initially
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       const newBackground =
//         window.scrollY > 80
//           ? "bg-orange-500 bg-opacity-90"
//           : "bg-orange-100 bg-opacity-50";
//       setBackground(newBackground);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleNav = () => {
//     setNavOpen(!navOpen);
//   };

//   return (
//     <nav
//       className={`relative shadow-md z-50 sticky top-0 w-full transition-all duration-300 ease-in-out ${background}`}
//     >
//       <div className="container mx-auto px-4 lg:px-6">
//         <div className="flex justify-between items-center py-1">
//           <Link to="/">
//             <img
//               className="w-[59px] h-[38px] lg:w-[132.19px] lg:h-[86px]"
//               src={logo}
//               alt="Logo"
//             />
//           </Link>
//           <div className="hidden lg:flex items-center gap-5">
//             {primaryLinks.map((link) => (
//               <Link
//                 key={link.label}
//                 to={link.path}
//                 className={`font-medium text-sm leading-5 ${
//                   location.pathname === link.path
//                     ? "text-orange-600 font-bold"
//                     : "text-gray-800"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link
//               to={buttonLink.path}
//               className="bg-orange-500 text-white px-4 py-1 rounded-md shadow"
//             >
//               <button className="text-sm font-medium">
//                 {buttonLink.label}
//               </button>
//             </Link>
//           </div>
//           <div className="lg:hidden">
//             {navOpen ? (
//               <FaTimes
//                 size={25}
//                 onClick={toggleNav}
//                 className="text-gray-800 cursor-pointer"
//               />
//             ) : (
//               <FaBars
//                 size={25}
//                 onClick={toggleNav}
//                 className="text-gray-800 cursor-pointer"
//               />
//             )}
//           </div>
//         </div>
//         {navOpen && (
//           <div className="absolute w-full bg-white shadow-lg">
//             {primaryLinks.map((link) => (
//               <Link
//                 key={link.label}
//                 to={link.path}
//                 onClick={toggleNav}
//                 className="block px-4 py-2 border-b border-gray-200 text-gray-800"
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link
//               to={buttonLink.path}
//               onClick={toggleNav}
//               className="block px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-md"
//             >
//               {buttonLink.label}
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
