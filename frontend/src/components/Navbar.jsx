// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/FastNexa-logo.svg";
// import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";

// const primaryLinks = [
//   { path: "/about", label: "About Us" },
//   {
//     path: "/services",
//     label: "Services",
//     dropdown: [
//       { path: "/services/software-development", label: "Software Development" },
//       { path: "/services/dev-ops", label: "Dev Ops" },
//       { path: "/services/cloud-computing", label: "Cloud Computing" },
//       { path: "/services/cyber-security", label: "Cybersecurity" },
//       {
//         path: "/services/network-infrastructure",
//         label: "Network Infrastructure",
//       },
//       { path: "/services/information-security", label: "Information Security" },
//       {
//         path: "/services/business-continuity-disaster-recovery",
//         label: "Business Continuity & Disaster Recovery",
//       },
//     ],
//   },
//   {
//     path: "/technology",
//     label: "Technology",
//     dropdown: [
//       {
//         path: "/technology/customise-web-development",
//         label: "Customise Web Development",
//       },
//       {
//         path: "/technology/prototyping-ux-designing",
//         label: "Prototyping & UX Designing",
//       },
//       {
//         path: "/technology/third-party-integration",
//         label: "Third Party Integration",
//       },
//       {
//         path: "/technology/software-product-development",
//         label: "Software Product Development",
//       },
//       {
//         path: "/technology/api-development-services",
//         label: "API Development Services",
//       },
//       {
//         path: "/technology/upgradation-migration",
//         label: "Upgradation And Migration",
//       },
//     ],
//   },
//   { path: "#", label: "Portfolio" },
//   { path: "/contact", label: "Contact Us" },
// ];

// const buttonLink = {
//   path: "#",
//   label: "Request Job Opportunity",
// };

// const Navbar = () => {
//   const [navOpen, setNavOpen] = useState(false);
//   const [opacity, setOpacity] = useState("bg-opacity-100");
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setOpacity(window.scrollY > 80 ? "bg-opacity-90" : "bg-opacity-100");
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleNav = () => {
//     setNavOpen(!navOpen);
//     // Reset dropdown on mobile nav toggle to prevent open dropdowns from persisting
//     setDropdownOpen(null);
//   };

//   const toggleDropdown = (menu, event) => {
//     event.stopPropagation(); // Prevents nav link action and other event bubbling
//     setDropdownOpen(dropdownOpen === menu ? null : menu);
//   };

//   return (
//     <nav
//       className={`bg-white shadow-md shadow-[#00000026] z-50 sticky top-0 ${opacity} w-full`}
//     >
//       <div className="container lg:w-[1184px] mx-auto px-4 lg:px-6 grid grid-cols-12">
//         <div className="col-span-12">
//           <div className="flex justify-between items-center py-1">
//             <Link to="/">
//               <img
//                 className="w-[59px] h-[38px] lg:w-[132.19px] lg:h-[86px]"
//                 src={logo}
//                 alt="FastNexa Logo"
//               />
//             </Link>
//             <div className="hidden lg:flex items-center gap-5">
//               {primaryLinks.map((link) =>
//                 link.dropdown ? (
//                   <div key={link.label} className="relative">
//                     <div className="flex items-center cursor-pointer">
//                       <Link to={link.path} className="mr-2">
//                         {link.label}
//                       </Link>
//                       <FaCaretDown
//                         onClick={(e) => toggleDropdown(link.label, e)}
//                       />
//                     </div>
//                     {dropdownOpen === link.label && (
//                       <div className="absolute bg-white shadow-md mt-1 z-10">
//                         {link.dropdown.map((item) => (
//                           <Link
//                             key={item.label}
//                             to={item.path}
//                             // dropdown menu items
//                             className="block w-[15rem] px-4 py-3 text-sm text-gray-700 hover:bg-orange-500 hover:text-white"
//                           >
//                             {item.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <Link key={link.label} to={link.path}>
//                     {link.label}
//                   </Link>
//                 )
//               )}
//               <Link to={buttonLink.path} className="nav-button">
//                 {/* <button className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded"> */}
//                 <button className="bg-[#FF6500] text-white font-poppins font-bold px-4 text-xs lg:text-[16px] leading-[2.7rem] rounded-[6px] lg:rounded-[10px] hover:bg-slate-900 transition-all duration-500 focus:outline-none focus:bg-blue-600">
//                   {buttonLink.label}
//                 </button>
//               </Link>
//             </div>
//             <div className="lg:hidden">
//               {navOpen ? (
//                 <FaTimes
//                   onClick={toggleNav}
//                   size={25}
//                   className="cursor-pointer"
//                 />
//               ) : (
//                 <FaBars
//                   onClick={toggleNav}
//                   size={25}
//                   className="cursor-pointer"
//                 />
//               )}
//             </div>
//           </div>
//           {navOpen && (
//             <div className="absolute top-full left-0 w-full bg-white shadow-lg">
//               {primaryLinks.map((link) =>
//                 link.dropdown ? (
//                   <div
//                     key={link.label}
//                     className="block py-2 px-4 text-gray-700 hover:bg-orange-500"
//                   >
//                     {/* dropdown nav items */}
//                     <Link to={link.path}>{link.label} </Link>
//                     <FaCaretDown
//                       onClick={(e) => toggleDropdown(link.label, e)}
//                       className="inline"
//                     />
//                     {dropdownOpen === link.label && (
//                       <div className="bg-white">
//                         {link.dropdown.map((item) => (
//                           <Link
//                             key={item.label}
//                             to={item.path}
//                             // drowpdown menu items
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white"
//                           >
//                             {item.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <Link
//                     key={link.label}
//                     to={link.path}
//                     onClick={() => setNavOpen(false)}
//                     // not dropdown nav items
//                     className="block py-2 px-4 text-gray-700 hover:bg-orange-500"
//                   >
//                     {link.label}
//                   </Link>
//                 )
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/FastNexa-logo.svg";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";

const primaryLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About Us",
    dropdown: [
        { path: "/about/our-vision", label: "Our Vision" },
        { path: "/about/team", label: "Team" },

    ],
  },
  {
    path: "/services",
    label: "Services",
    dropdown: [
      { path: "/services/software-development", label: "Software Development" },
      { path: "/services/dev-ops", label: "DevOps" },
      { path: "/services/cloud-computing", label: "Cloud Computing" },
      { path: "/services/cyber-security", label: "Cybersecurity" },
      {
        path: "/services/network-infrastructure",
        label: "Network Infrastructure",
      },
      { path: "/services/information-security", label: "Information Security" },
      {
        path: "/services/business-continuity-disaster-recovery",
        label: "Business Continuity & Disaster Recovery",
      },
      {
        path: "/services/human-resource",
        label: "Human Resource Augmentation",
      },
    ],
  },
  {
    path: "/technology",
    label: "Technology",
    dropdown: [
      {
        path: "/technology/customise-web-development",
        label: "Customise Web Development",
      },
      {
        path: "/technology/prototyping-ux-designing",
        label: "Prototyping & UX Designing",
      },
      {
        path: "/technology/third-party-integration",
        label: "Third Party Integration",
      },
      {
        path: "/technology/software-product-development",
        label: "Software Product Development",
      },
      {
        path: "/technology/api-development-services",
        label: "API Development Services",
      },
      {
        path: "/technology/upgradation-migration",
        label: "Upgradation And Migration",
      },
    ],
  },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact Us" },
];

const buttonLink = {
  path: "#",
  label: "Request Job Opportunity",
};

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [opacity, setOpacity] = useState("bg-opacity-100");
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(window.scrollY > 80 ? "bg-opacity-90" : "bg-opacity-100");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
    setDropdownOpen(null);
  };

  const toggleDropdown = (menu, event) => {
    event.stopPropagation();
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <nav
      className={`bg-white shadow-md shadow-[#00000026] z-50 sticky top-0 ${opacity} w-full`}
    >
      <div className="container lg:w-[1184px] mx-auto px-4 lg:px-6 grid grid-cols-12">
        <div className="col-span-12">
          <div className="flex justify-between items-center py-1">
            <Link to="/">
              <img
                className="w-[59px] h-[38px] lg:w-[132.19px] lg:h-[86px]"
                src={logo}
                alt="FastNexa Logo"
              />
            </Link>
            <div className="hidden lg:flex items-center gap-5">
              {primaryLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="relative">
                    <div
                        className="flex items-center cursor-pointer"
                        onMouseEnter={(e) => toggleDropdown(link.label, e)}
                    >
                      <Link to={link.path} className="mr-2 p-2">
                        {link.label}
                      </Link>
                      <FaCaretDown/>
                    </div>
                    {dropdownOpen === link.label && (
                      <div className="absolute bg-white shadow-md mt-1 z-10" onMouseLeave={(e) => toggleDropdown(null, e)}>
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.path}
                            className="block w-[15rem] px-4 py-3 text-sm text-gray-700 hover:bg-orange-500 hover:text-white"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.label} to={link.path}>
                    {link.label}
                  </Link>
                )
              )}
              <Link to={buttonLink.path} className="nav-button">
                <button className="bg-[#FF6500] text-white font-poppins font-bold px-4 text-xs lg:text-[16px] leading-[2.7rem] rounded-[6px] lg:rounded-[10px] hover:bg-slate-900 transition-all duration-500 focus:outline-none focus:bg-blue-600">
                  {buttonLink.label}
                </button>
              </Link>
            </div>
            <div className="lg:hidden">
              {navOpen ? (
                <FaTimes
                  onClick={toggleNav}
                  size={25}
                  className="cursor-pointer"
                />
              ) : (
                <FaBars
                  onClick={toggleNav}
                  size={25}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
          {navOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg">
              {primaryLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="block py-2 px-4 text-gray-700"
                  >
                    <Link to={link.path}>{link.label} </Link>
                    <FaCaretDown
                      onClick={(e) => toggleDropdown(link.label, e)}
                      className="inline"
                    />
                    {dropdownOpen === link.label && (
                      <div className="bg-white">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => setNavOpen(false)}
                    className="block py-2 px-4 text-gray-700 hover:bg-orange-500"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
