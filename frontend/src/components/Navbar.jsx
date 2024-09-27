// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/FastNexa-logo.svg";
// import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
//
// const primaryLinks = [
//     {
//         path: "/",
//         label: "Home",
//     },
//     {
//         path: "/about",
//         label: "About Us",
//         dropdown: [
//             { path: "/about", label: "Company" },
//             { path: "/about/our-vision", label: "Our Vision" },
//             { path: "/about/team", label: "Our Team" },
//             { path: "/about/alliances", label: "Our Alliances" },
//         ],
//     },
//     {
//         path: "/services",
//         label: "Services",
//         dropdown: [
//             { path: "/services/software-development", label: "Software Development" },
//             { path: "/services/dev-ops", label: "DevOps" },
//             { path: "/services/cloud-computing", label: "Cloud Computing" },
//             { path: "/services/cyber-security", label: "Cybersecurity" },
//             {
//                 path: "/services/network-infrastructure",
//                 label: "Network Infrastructure",
//             },
//             { path: "/services/information-security", label: "Information Security" },
//             {
//                 path: "/services/business-continuity-disaster-recovery",
//                 label: "Business Continuity & Disaster Recovery",
//             },
//             {
//                 path: "/services/human-resource",
//                 label: "Human Resource Augmentation",
//             },
//         ],
//     },
//     {
//         path: "/technology",
//         label: "Technology",
//         dropdown: [
//             {
//                 path: "/technology/customise-software-development",
//                 label: "Customize software development",
//             },
//             {
//                 path: "/technology/prototyping-ux-designing",
//                 label: "Prototyping & UX Designing",
//             },
//             {
//                 path: "/technology/third-party-integration",
//                 label: "Third Party Integration",
//             },
//             {
//                 path: "/technology/api-development-services",
//                 label: "API Development Services",
//             },
//             {
//                 path: "/technology/upgradation-migration",
//                 label: "Upgradation And Migration",
//             },
//         ],
//     },
//     {
//         path: "/portfolio",
//         label: "Portfolio",
//         dropdown: [
//             { path: "/portfolio/casestudies", label: "Case Studies" },
//         ],
//     },
//     { path: "/contact-us", label: "Contact Us" },
// ];
//
// const buttonLink = {
//     path: "/job-request",
//     label: "Job Request",
// };
//
// const Navbar = () => {
//     const [navOpen, setNavOpen] = useState(false);
//     const [opacity, setOpacity] = useState("bg-opacity-100");
//     const [dropdownOpen, setDropdownOpen] = useState(null);
//     const location = useLocation();
//
//     useEffect(() => {
//         const handleScroll = () => {
//             setOpacity(window.scrollY > 80 ? "bg-opacity-90" : "bg-opacity-100");
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);
//
//     const toggleNav = () => {
//         setNavOpen(!navOpen);
//         setDropdownOpen(null);
//     };
//
//     const toggleDropdown = (menu, event) => {
//         event.stopPropagation();
//         setDropdownOpen(dropdownOpen === menu ? null : menu);
//     };
//
//     const isActive = (path) => location.pathname === path;
//
//     // Check if the current path starts with the parent path
//     const isParentActive = (path) => location.pathname.startsWith(path);
//
//     return (
//         <nav
//             className={`bg-white shadow-md shadow-[#00000026] z-50 sticky top-0 ${opacity} w-full`}
//         >
//             <div className="container xl:w-[1184px] mx-auto xl:px-4 px-3 grid grid-cols-12 ">
//                 <div className="col-span-12">
//                     <div className="flex justify-between items-center py-1">
//                         <Link to="/">
//                             <img
//                                 className="w-[59px] h-[38px] xl:w-[132.19px] xl:h-[86px] lg:w-[100.19px] lg:h-[65px]"
//                                 src={logo}
//                                 alt="FastNexa Logo"
//                             />
//                         </Link>
//                         <div className="hidden lg:flex items-center xl:gap-5 gap-3">
//                             {primaryLinks.map((link) =>
//                                 link.dropdown ? (
//                                     <div key={link.label} className="relative">
//                                         <div
//                                             className="flex items-center cursor-pointer"
//                                             onMouseEnter={(e) => toggleDropdown(link.label, e)}
//                                         >
//                                             <Link
//                                                 to={link.path}
//                                                 className={`mr-2 p-2 ${isParentActive(link.path) ? "text-[#FF6500]" : ""}`}
//                                             >
//                                                 {link.label}
//                                             </Link>
//                                             <FaCaretDown className={`${isParentActive(link.path) ? "text-[#FF6500]" : ""}`} />
//                                         </div>
//                                         {dropdownOpen === link.label && (
//                                             <div className="absolute bg-white shadow-md mt-1 z-10"
//                                                  onMouseLeave={(e) => toggleDropdown(null, e)}>
//                                                 {link.dropdown.map((item) => (
//                                                     <Link
//                                                         key={item.label}
//                                                         to={item.path}
//                                                         className={`block transition-all duration-150 w-[15rem] px-4 py-3 text-sm text-gray-700 hover:bg-orange-500 hover:text-white ${isActive(item.path) ? "bg-orange-500 text-white hover:text-black" : ""}`}
//                                                     >
//                                                         {item.label}
//                                                     </Link>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                 ) : (
//                                     <Link
//                                         key={link.label}
//                                         to={link.path}
//                                         className={`mr-2 p-2 ${isActive(link.path) ? "text-[#FF6500]" : ""}`}
//                                     >
//                                         {link.label}
//                                     </Link>
//                                 )
//                             )}
//                             <Link to={buttonLink.path} className="nav-button">
//                                 <button
//                                     className="bg-[#FF6500] text-white font-poppins font-bold px-4 text-xs lg:text-[16px] xl:leading-[2.7rem] leading-8 rounded-[6px] lg:rounded-[10px] hover:bg-slate-900 transition-all duration-500 focus:outline-none focus:bg-blue-600 xl:py-0 py-2">
//                                     {buttonLink.label}
//                                 </button>
//                             </Link>
//                         </div>
//                         <div className="lg:hidden">
//                             {navOpen ? (
//                                 <FaTimes
//                                     onClick={toggleNav}
//                                     size={25}
//                                     className="cursor-pointer"
//                                 />
//                             ) : (
//                                 <FaBars
//                                     onClick={toggleNav}
//                                     size={25}
//                                     className="cursor-pointer"
//                                 />
//                             )}
//                         </div>
//                     </div>
//                     {navOpen && (
//                         <div className="absolute top-full left-0 w-full bg-white shadow-lg mb-3 !pb-4">
//                             {primaryLinks.map((link) =>
//                                 link.dropdown ? (
//                                     <div
//                                         key={link.label}
//                                         className="block py-2 px-4 text-gray-700"
//                                     >
//                                         <Link
//                                             to={link.path}
//                                             className={`${isParentActive(link.path) ? "text-[#FF6500]" : ""}`}
//                                         >
//                                             {link.label}
//                                         </Link>
//                                         <FaCaretDown
//                                             onClick={(e) => toggleDropdown(link.label, e)}
//                                             className={`inline ${isParentActive(link.path) ? "text-[#FF6500]" : ""}`}
//                                         />
//                                         {dropdownOpen === link.label && (
//                                             <div className="bg-white">
//                                                 {link.dropdown.map((item) => (
//                                                     <Link
//                                                         key={item.label}
//                                                         to={item.path}
//                                                         className={`block px-4 py-2 text-sm hover:bg-orange-500 hover:text-white ${isActive(item.path) ? "text-[#FF6500]" : "text-gray-700"}`}
//                                                     >
//                                                         {item.label}
//                                                     </Link>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                 ) : (
//                                     <Link
//                                         key={link.label}
//                                         to={link.path}
//                                         onClick={() => setNavOpen(false)}
//                                         className={`block py-2 px-4 text-gray-700 hover:bg-orange-500 ${isActive(link.path) ? "text-[#FF6500]" : ""}`}
//                                     >
//                                         {link.label}
//                                     </Link>
//                                 )
//                             )}
//                             <div className="mt-3">
//                                 <Link to={buttonLink.path} className="nav-button ml-3 !mt-4">
//                                     <button
//                                         className="bg-[#FF6500] text-white font-poppins font-bold px-4 text-xs lg:text-[16px] xl:leading-[2.7rem] leading-8 rounded-[6px] lg:rounded-[10px] hover:bg-slate-900 transition-all duration-500 focus:outline-none focus:bg-blue-600 xl:py-0 py-2">
//                                         {buttonLink.label}
//                                     </button>
//                                 </Link>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// };
//
// export default Navbar;
//



import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/FastNexa-logo.svg";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import http from "../http";
import slugify from "slugify";

const buttonLink = {
    path: "/job-request",
    label: "Job Request",
};

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [opacity, setOpacity] = useState("bg-opacity-100");
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [services, setServices] = useState([]);
    const location = useLocation();

    // Primary links definition
    const [primaryLinks, setPrimaryLinks] = useState([
        {
            path: "/",
            label: "Home",
        },
        {
            path: "/about",
            label: "About Us",
            dropdown: [
                { path: "/about", label: "Company" },
                { path: "/about/our-vision", label: "Our Vision" },
                { path: "/about/team", label: "Our Team" },
                { path: "/about/alliances", label: "Our Alliances" },
            ],
        },
        {
            path: "/services",
            label: "Services",
            dropdown: [], // Placeholder for dynamic services
        },
        {
            path: "/technology",
            label: "Technology",
            dropdown: [
                {
                    path: "/technology/customise-software-development",
                    label: "Customize software development",
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
                    path: "/technology/api-development-services",
                    label: "API Development Services",
                },
                {
                    path: "/technology/upgradation-migration",
                    label: "Upgradation And Migration",
                },
            ],
        },
        {
            path: "/portfolio",
            label: "Portfolio",
            dropdown: [
                { path: "/portfolio/casestudies", label: "Case Studies" },
            ],
        },
        { path: "/contact-us", label: "Contact Us" },
    ]);

    useEffect(() => {
        const handleScroll = () => {
            setOpacity(window.scrollY > 80 ? "bg-opacity-90" : "bg-opacity-100");
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await http.get('/services-api/');
                const fetchedServices = response.data.services_sections || []; // Extract services_sections

                // Update primary links to include fetched services
                setPrimaryLinks(prevLinks => {
                    return prevLinks.map(link => {
                        if (link.path === "/services") {
                            return {
                                ...link,
                                dropdown: fetchedServices.map(service => ({
                                    path: `/services/${slugify(service.service_name, { lower: true })}/${service.id}`,
                                    label: service.service_name,
                                })),
                            };
                        }
                        return link;
                    });
                });
            } catch (error) {
                console.error('Error fetching services:', error);
                setServices([]); // Reset services on error
            }
        };

        fetchServices();
    }, []);

    const toggleNav = () => {
        setNavOpen(!navOpen);
        setDropdownOpen(null);
    };

    const toggleDropdown = (menu, event) => {
        event.stopPropagation();
        setDropdownOpen(dropdownOpen === menu ? null : menu);
    };

    const isActive = (path) => location.pathname === path;

    const isParentActive = (path) => location.pathname.startsWith(path);

    const handleLinkClick = () => {
        setDropdownOpen(null); // Close the dropdown after clicking a link
        setNavOpen(false); // Optionally close the mobile nav as well
    };

    return (
        <nav className={`bg-white shadow-md shadow-[#00000026] z-50 sticky top-0 ${opacity} w-full`}>
            <div className="container xl:w-[1184px] mx-auto xl:px-4 px-3 grid grid-cols-12">
                <div className="col-span-12">
                    <div className="flex justify-between items-center py-1">
                        <Link to="/" onClick={handleLinkClick}>
                            <img
                                className="w-[59px] h-[38px] xl:w-[132.19px] xl:h-[86px] lg:w-[100.19px] lg:h-[65px]"
                                src={logo}
                                alt="FastNexa Logo"
                            />
                        </Link>
                        <div className="hidden lg:flex items-center xl:gap-5 gap-3">
                            {primaryLinks.map((link) =>
                                link.dropdown ? (
                                    <div key={link.label} className="relative">
                                        <div
                                            className="flex items-center cursor-pointer"
                                            onMouseEnter={(e) => toggleDropdown(link.label, e)}
                                        >
                                            <Link
                                                to={link.path}
                                                className={`mr-2 p-2 ${isParentActive(link.path) ? "text-[#FF6500]" : ""}`}
                                            >
                                                {link.label}
                                            </Link>
                                            <FaCaretDown className={`${isParentActive(link.path) ? "text-[#FF6500]" : ""}`} />
                                        </div>
                                        {dropdownOpen === link.label && (
                                            <div className="absolute bg-white shadow-md mt-1 z-10" onMouseLeave={(e) => toggleDropdown(null, e)}>
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.label}
                                                        to={item.path}
                                                        className={`block transition-all duration-150 w-[15rem] px-4 py-3 text-sm text-gray-700 hover:bg-orange-500 hover:text-white ${isActive(item.path) ? "bg-orange-500 text-white hover:text-black" : ""}`}
                                                        onClick={handleLinkClick} // Close dropdown on click
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
                                        className={`mr-2 p-2 ${isActive(link.path) ? "text-[#FF6500]" : ""}`}
                                        onClick={handleLinkClick} // Close nav when a non-dropdown link is clicked
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                            <Link to={buttonLink.path} className="nav-button" onClick={handleLinkClick}>
                                <button className="bg-[#FF6500] text-white font-poppins font-bold px-4 text-xs lg:text-[16px] xl:leading-[2.7rem] leading-8 rounded-[6px] lg:rounded-[10px] hover:bg-slate-900 transition-all duration-500 focus:outline-none focus:bg-blue-600 xl:py-0 py-2">
                                    {buttonLink.label}
                                </button>
                            </Link>
                        </div>
                        <div className="lg:hidden">
                            {navOpen ? (
                                <FaTimes onClick={toggleNav} size={25} className="cursor-pointer" />
                            ) : (
                                <FaBars onClick={toggleNav} size={25} className="cursor-pointer" />
                            )}
                        </div>
                    </div>
                    {navOpen && (
                        <div className="absolute top-full left-0 w-full bg-white shadow-lg mb-3 !pb-4">
                            {primaryLinks.map((link) =>
                                link.dropdown ? (
                                    <div key={link.label} className="block py-2 px-4 text-gray-700">
                                        <Link to={link.path} className={`${isParentActive(link.path) ? "text-[#FF6500]" : ""}`} onClick={handleLinkClick}>
                                            {link.label}
                                        </Link>
                                        <FaCaretDown
                                            onClick={(e) => toggleDropdown(link.label, e)}
                                            className={`inline ${isParentActive(link.path) ? "text-[#FF6500]" : ""}`}
                                        />
                                        {dropdownOpen === link.label && (
                                            <div className="bg-white">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.label}
                                                        to={item.path}
                                                        className={`block px-4 py-2 text-sm hover:bg-orange-500 hover:text-white ${isActive(item.path) ? "text-[#FF6500]" : "text-gray-700"}`}
                                                        onClick={handleLinkClick} // Close dropdown on click
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
                                        className={`block py-2 px-4 text-gray-700 hover:bg-orange-500 hover:text-white ${isActive(link.path) ? "text-[#FF6500]" : ""}`}
                                        onClick={handleLinkClick} // Close nav on non-dropdown link click
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                            <Link to={buttonLink.path} className="nav-button" onClick={handleLinkClick}>
                                <button className="bg-[#FF6500] text-white font-poppins font-bold px-4 text-xs lg:text-[16px] xl:leading leading-8 rounded-[6px] lg:rounded-[10px] hover:bg-slate-900 transition-all duration-500 focus:outline-none focus:bg-blue-600 xl:py-0 py-2">
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







