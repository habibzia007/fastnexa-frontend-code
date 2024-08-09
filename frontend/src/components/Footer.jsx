import React from "react";
import footerbg from "../assets/images/footerbg.svg";
import logo from "../assets/images/logo-footer-hd.svg";
import phoneicon from "../assets/images/phoneicon.svg";
import messageicon from "../assets/images/messageicon.svg";
import locationicon from "../assets/images/locationicon.svg";
import {TiSocialFacebook} from "react-icons/ti";
import {TiSocialTwitter} from "react-icons/ti";
import {TiSocialLinkedin} from "react-icons/ti";
import {Link} from "react-router-dom";

const Footer = () => {
    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(250.49deg, rgba(0, 0, 0, 0) 43.25%, rgba(0, 0, 0, 0.6) 71.49%), url(${footerbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    return (
        <div
            className="lg:h-[430.91px] w-full bg-cover bg-center bg-no-repeat"
            style={backgroundImageStyle}
        >
            <div className="mx-auto w-full max-w-[1184px] px-4 lg:px-6 py-10">
                <div className="flex flex-col lg:flex-row items-center gap-5  lg:gap-10 xl:gap-44">
                    <div className="flex flex-col gap-4 w-[100%] lg:w-1/5 items-center lg:items-start">
                        <img
                            className="w-[96px] h-[64px] sm:w-[152px] lg:w-[152px] lg:h-[101px]"
                            src={logo}
                            alt="Logo"
                        />
                        <p className="w-full sm:w-[70%] lg:w-[190px] font-Poppins text-[10.02px] leading-[15px] sm:text-[11.02px] sm:leading-[23.62px] lg:text-[11.02px] lg:leading-[23.62px] text-center lg:text-left text-[#FFFFFF]">
                            Accelerate innovation with world-class tech teams. We’ll match you
                            to an entire remote team of incredible freelance talent.
                        </p>
                        <div className="flex space-x-2 lg:space-x-4">
                            <TiSocialFacebook
                                className="text-orange-700 bg-white w-[15.56px] h-[15.56px] lg:w-[27.56px] lg:h-[27.56px] rounded-full p-[2px] cursor-pointer"/>
                            <TiSocialTwitter
                                className="text-orange-700 bg-white w-[15.56px] h-[15.56px] lg:w-[27.56px] lg:h-[27.56px] rounded-full p-[2px] cursor-pointer"/>
                            <TiSocialLinkedin
                                className="text-orange-700 bg-white w-[15.56px] h-[15.56px] lg:w-[27.56px] lg:h-[27.56px] rounded-full p-[2px] cursor-pointer"/>
                        </div>
                    </div>
                    <div className="w-full flex justify-center ">
                        <div
                            className="flex flex-col sm:flex-row  gap-8  w-[66%] mx-auto lg:w-4/5 lg:gap-10 lg:justify-between lg:items-start justify-center">
                            <div className="w-[40%] sm:w-1/2 lg:w-1/3">
                                <h3 className="font-Poppins font-semibold text-[8.75px] leading-[17.62px] lg:text-[15.75px] lg:leading-[23.62px] text-[#FF6500]">
                                    Useful Links
                                </h3>
                                <ul className="mt-2 lg:mt-4 space-y-[4px] lg:space-y-[12px]">
                                    <li className="text-[#C4C5C7] max-w-max font-Poppins text-[7.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/about'}>
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins text-[8.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/about/our-vision'}>
                                            Vision
                                        </Link>
                                    </li>
                                    <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins text-[8.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/technology'}>
                                            Technologies
                                        </Link>
                                    </li>
                                    <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins text-[8.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/portfolio'}>
                                            Portfolio
                                        </Link>
                                    </li>
                                    <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins text-[8.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'#'}>
                                            Jobs
                                        </Link>
                                    </li>
                                    <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins text-[8.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/contact'}>
                                            Contact Us
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="w-full sm:w-1/2 lg:w-1/3">
                                <h3 className="font-Poppins font-semibold text-[8.75px] leading-[17.62px] lg:text-[15.75px] lg:leading-[23.62px] text-[#FF6500]">
                                    Our Services
                                </h3>
                                <ul className="mt-2 lg:mt-4 space-y-[4px] lg:space-y-[12px]">
                                    <li className="text-[#C4C5C7] max-w-max font-Poppins text-[7.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/services/software-development'}>
                                            Software Development
                                        </Link>
                                    </li>
                                    <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins text-[8.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/services/dev-ops'}>
                                            DevOps
                                        </Link>
                                    </li>
                                    <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins text-[8.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/services/cloud-computing'}>
                                            Cloud Computing
                                        </Link>
                                    </li>
                                    <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins text-[8.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/services/cyber-security'}>
                                            Cybersecurity
                                        </Link>
                                    </li>
                                    <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins text-[8.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/services/network-infrastructure'}>
                                            Network and Infrastructure
                                        </Link>
                                    </li>
                                    <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins text-[8.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/services/information-security'}>
                                            Information Security
                                        </Link>
                                    </li>
                                    <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins text-[8.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/services/business-continuity-disaster-recovery'}>
                                            Business Continuity & Disaster Recovery
                                        </Link>
                                    </li>
                                    <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins text-[8.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/services/human-resource'}>
                                            Human Resource Augmentation
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full sm:w-1/2 lg:w-1/3">
                                <h3 className="font-Poppins font-semibold text-[8.75px] leading-[17.62px] lg:text-[15.75px] lg:leading-[23.62px] text-[#FF6500]">
                                    Contact Information
                                </h3>
                                <ul className="mt-2 lg:mt-4 space-y-[4px] lg:space-y-[20px]">
                                    <li className="flex gap-2">
                                        <img
                                            className="w-[8.17px] h-[8.17px] lg:w-[14.17px] lg:h-[14.17px]"
                                            src={phoneicon}
                                            alt="Phone"
                                        />
                                        <p className="font-barlow font-semibold text-[7.6px] leading-[9.75px] lg:text-[12.6px] lg:leading-[15.75px] text-[#C4C5C7] max-w-max cursor-pointer">
                                            +92 458 654 528
                                        </p>
                                    </li>
                                    <li className="flex gap-2">
                                        <img
                                            className="w-[8.17px] h-[8.17px] lg:w-[14.17px] lg:h-[14.17px]"
                                            src={messageicon}
                                            alt="Message"
                                        />
                                        <p className="font-barlow font-semibold text-[7.6px] leading-[9.75px] lg:text-[12.6px] lg:leading-[15.75px] text-[#C4C5C7] max-w-max cursor-pointer">
                                            info@fastnexa.com
                                        </p>
                                    </li>
                                    <li className="flex gap-2">
                                        <img
                                            className="w-[8.17px] h-[8.17px] lg:w-[14.17px] lg:h-[14.17px]"
                                            src={locationicon}
                                            alt="Location"
                                        />
                                        <p className="font-barlow font-semibold text-[7.6px] leading-[9.75px] lg:text-[12.6px] lg:leading-[15.75px] text-[#C4C5C7] max-w-max cursor-pointer">
                                            192, Y Block, DHA phase III, Lahore, Pakistan.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full border-t border-[#1B202F] mt-3">
                <p className="font-Poppins text-[9.02px] leading-[19.29px] lg:text-[11.02px] lg:leading-[19.29px] text-center text-[#C4C5C7] py-3 lg:mt-6">
                    © Copyrights 2024, FastNexa All rights reserved.
                </p>
            </div>
        </div>
    );
    // return (
    //   <div className=" lg:h-[430.91px] w-full  " style={backgroundImageStyle}>
    //     {/* wrapper */}
    //     <div className="mx-auto w-[300px] sm:w-[610px] lg:w-[1084px] px-4 lg:px-6">
    //       <div className="flex flex-col lg:flex-row  gap-5  lg:gap-[4.25rem] xl:gap-44 mx-auto lg:h-[363px] ">
    //         <div className="flex flex-col gap-4 w-full lg:h-[261px] items-center lg:items-start  lg:w-1/5 lg:self-center pt-5 lg:pt-0">
    //           <img
    //             className="w-[96px] h-[64px] sm:w-[152px] lg:w-[152px] lg:h-[101px] text-white"
    //             src={logo}
    //             alt=""
    //           />
    //           <p className="w-[300px] h-[33pxpx] sm:w-[70%]  lg:w-[190px] lg:h-[94px] font-Poppins font-normal text-[10.02px] leading-[15px] sm:text-[11.02px] sm:leading-[23.62px leading-[15px] lg:text-[11.02px] lg:leading-[23.62px] text-center lg:text-left text-[#FFFFFF]">
    //             Accelerate innovation with world- class tech teams We’ll match you
    //             to an entire remote team of incredible freelance talent.
    //           </p>
    //           <div className="w-[56.17px] h-[16.56px] lg:w-[97.17px] lg:h-[27.56px] flex justify-between items-center">
    //             <TiSocialFacebook className="text-orange-700 bg-white w-[15.56px] h-[15.56px] lg:w-[27.56px] lg:h-[27.56px] rounded-full p-[2px] cursor-pointer" />
    //             <TiSocialTwitter className="text-orange-700 bg-white w-[15.56px] h-[15.56px] lg:w-[27.56px] lg:h-[27.56px] rounded-full p-[2px]  cursor-pointer" />
    //             <TiSocialLinkedin className="text-orange-700 bg-white w-[15.56px] h-[15.56px] lg:w-[27.56px] lg:h-[27.56px] rounded-full p-[2px]  cursor-pointer" />
    //           </div>
    //         </div>
    //         <div className="flex gap-8 w-full sm:w-[70%] sm:ml-[100px] lg:ml-0  lg:w-[64%] xl:w-[67%] lg:gap-10 lg:justify-between lg:items-center ">
    //           <div className=" w-[79px] h-[103px] sm:w-full sm:h-[131px] lg:w-[164px] lg:h-[131px] ">
    //             <h3 className="font-Poppins font-semibold text-[8.75px] leading-[17.62px] lg:text-[15.75px] lg:leading-[23.62px] text-left text-[#FF6500]">
    //               Useful Links
    //             </h3>
    //             <ul className="mt-2 lg:mt-4 space-y-[4px] lg:space-y-[12px]">
    //               <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins font-normal text-[7.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px] text-left">
    //                 Terms & Conditions
    //               </li>
    //               <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px] text-left">
    //                 About Company
    //               </li>
    //               <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px] text-left">
    //                 Payment Gatway
    //               </li>
    //               <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px] text-left ">
    //                 Policy
    //               </li>
    //             </ul>
    //           </div>
    //           <div className=" w-[75px] h-[100px] sm:w-full  sm:h-[140px] lg:w-[108px] lg:h-[140px] ">
    //             <h3 className="font-Poppins font-semibold text-[8.75px] leading-[17.62px] lg:text-[15.75px] lg:leading-[23.62px] text-left text-[#FF6500]">
    //               Our Services
    //             </h3>
    //             <ul className="mt-2 lg:mt-4 space-y-[4px] lg:space-y-[12px]">
    //               <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins font-normal text-[8.75px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px] text-left">
    //                 Data Security
    //               </li>
    //               <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px] text-left">
    //                 IT Managment
    //               </li>
    //               <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px] text-left">
    //                 Outsourcing
    //               </li>
    //               <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px] text-left">
    //                 Networking
    //               </li>
    //             </ul>
    //           </div>
    //           <div className=" w-[102px] h-[81px] sm:w-full sm:h-[131px]  lg:w-[164px] lg:h-[131px] ">
    //             <h3 className="font-Poppins font-semibold text-[8.75px] leading-[17.62px] lg:text-[11.75px] lg:leading-[23.62px] text-left text-[#FF6500]">
    //               Contact Information
    //             </h3>
    //             <ul className="mt-2 lg:mt-4 space-y-[4px] lg:space-y-[20px]">
    //               <li className="  flex gap-2">
    //                 <img
    //                   className="w-[8.17px] h-[8.17px] lg:w-[14.17px] lg:h-[14.17px]"
    //                   src={phoneicon}
    //                   alt=""
    //                 />
    //                 <p className="font-barlow font-semibold text-[7.6px] leading-[9.75px] lg:text-[12.6px] lg:leading-[15.75px] text-left text-[#C4C5C7] max-w-max cursor-pointer">
    //                   +91 458 654 528
    //                 </p>
    //               </li>
    //               <li className="  flex gap-2">
    //                 <img
    //                   className="w-[8.17px] h-[8.17px] lg:w-[14.17px] lg:h-[14.17px]"
    //                   src={messageicon}
    //                   alt=""
    //                 />
    //                 <p className="font-barlow font-semibold text-[7.6px] leading-[9.75px] lg:text-[12.6px] lg:leading-[15.75px] text-left text-[#C4C5C7] max-w-max cursor-pointer">
    //                   info@example.com
    //                 </p>
    //               </li>
    //               <li className="  flex gap-2">
    //                 <img
    //                   className="w-[8.17px] h-[8.17px] lg:w-[14.17px] lg:h-[14.17px] "
    //                   src={locationicon}
    //                   alt=""
    //                 />
    //                 <p className="font-barlow font-semibold text-[7.6px] leading-[9.75px] lg:text-[12.6px] lg:leading-[15.75px] text-left text-[#C4C5C7] max-w-max cursor-pointer">
    //                   60 East 65th Street, NY
    //                 </p>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-full h-[43.32px] lg:py-[23.41px] border-t-[0.79px] border-[#1B202F] mt-3 ">
    //       <h2 className="font-Poppins font-normal text-[9.02px] leading-[19.29px] lg:text-[11.02px] lg:leading-[19.29px] my-3 lg:my-0 text-center text-[#C4C5C7] flex items-center justify-center">
    //         © Copyrights 2024, FastNexa All rights reserved.
    //       </h2>
    //     </div>
    //   </div>
    // );
};

export default Footer;
