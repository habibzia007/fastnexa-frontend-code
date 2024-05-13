import React from "react";
import footerbg from "../assets/images/footerbg.jpg";
import logo from "../assets/images/footerlogo.png";
import phoneicon from "../assets/images/phoneicon.png";
import messageicon from "../assets/images/messageicon.png";
import locationicon from "../assets/images/locationicon.png";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
const Footer = () => {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(250.49deg, rgba(0, 0, 0, 0) 43.25%, rgba(0, 0, 0, 0.6) 71.49%), url(${footerbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className=" sm:h-[430.91px] w-full  " style={backgroundImageStyle}>
      {/* wrapper */}
      <div className="mx-auto w-[350px] sm:w-[1084px] ">
        <div className="flex flex-col md:flex-row  gap-5 sm:gap-44 mx-auto sm:h-[363px] ">
          <div className="flex flex-col gap-4 w-full sm:h-[261px] items-center sm:items-start  sm:w-1/5 sm:self-center pt-5 sm:pt-0">
            <img
              className="w-[96px] h-[64px] sm:w-[152px] sm:h-[101px] text-white"
              src={logo}
              alt=""
            />
            <p className="w-[347px] h-[33pxpx] sm:w-[190px] sm:h-[94px] font-Poppins font-normal text-[10.02px] leading-[15px] sm:text-[11.02px] sm:leading-[23.62px] text-left text-[#FFFFFF]">
              Accelerate innovation with world- class tech teams We’ll match you
              to an entire remote team of incredible freelance talent.
            </p>
            <div className="w-[56.17px] h-[16.56px] sm:w-[97.17px] sm:h-[27.56px] flex justify-between">
              <TiSocialFacebook className="text-orange-700 bg-white w-[15.56px] h-[15.56px] sm:w-[27.56px] sm:h-[27.56px] rounded-full p-[2px] cursor-pointer" />
              <TiSocialTwitter className="text-orange-700 bg-white w-[15.56px] h-[15.56px] sm:w-[27.56px] sm:h-[27.56px] rounded-full p-[2px]  cursor-pointer" />
              <TiSocialLinkedin className="text-orange-700 bg-white w-[15.56px] h-[15.56px] sm:w-[27.56px] sm:h-[27.56px] rounded-full p-[2px]  cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-8 w-full  sm:w-[65%] justify-between sm:items-center">
            <div className=" w-[79px] h-[103px] sm:w-[164px] sm:h-[131px] ">
              <h3 className="font-Poppins font-semibold text-[9.75px] leading-[17.62px] sm:text-[15.75px] sm:leading-[23.62px] text-left text-[#FF6500]">
                Useful Links
              </h3>
              <ul className="mt-2 sm:mt-4 space-y-[4px] sm:space-y-[12px]">
                <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] sm:text-[11.02px] sm:leading-[19.29px] text-left">
                  Terms & Conditions
                </li>
                <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] sm:text-[11.02px] sm:leading-[19.29px] text-left">
                  About Company
                </li>
                <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] sm:text-[11.02px] sm:leading-[19.29px] text-left">
                  Payment Gatway
                </li>
                <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] sm:text-[11.02px] sm:leading-[19.29px] text-left ">
                  Policy
                </li>
              </ul>
            </div>
            <div className=" w-[75px] h-[100px] sm:w-[108px] sm:h-[140px] ">
              <h3 className="font-Poppins font-semibold text-[11.75px] leading-[17.62px] sm:text-[15.75px] sm:leading-[23.62px] text-left text-[#FF6500]">
                Our Services
              </h3>
              <ul className="mt-2 sm:mt-4 space-y-[4px] sm:space-y-[12px]">
                <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[9.75px] leading-[14.29px] sm:text-[11.02px] sm:leading-[19.29px] text-left">
                  Data Security
                </li>
                <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] sm:text-[11.02px] sm:leading-[19.29px] text-left">
                  IT Managment
                </li>
                <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] sm:text-[11.02px] sm:leading-[19.29px] text-left">
                  Outsourcing
                </li>
                <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] sm:text-[11.02px] sm:leading-[19.29px] text-left">
                  Networking
                </li>
              </ul>
            </div>
            <div className=" w-[102px] h-[81px] sm:w-[164px] sm:h-[131px] ">
              <h3 className="font-Poppins font-semibold text-[9.75px] leading-[17.62px] sm:text-[11.75px] sm:leading-[23.62px] text-left text-[#FF6500]">
                Contact Information
              </h3>
              <ul className="mt-2 sm:mt-4 space-y-[4px] sm:space-y-[20px]">
                <li className="  flex gap-2">
                  <img
                    className="w-[8.17px] h-[8.17px] sm:w-[14.17px] sm:h-[14.17px]"
                    src={phoneicon}
                    alt=""
                  />
                  <p className="font-barlow font-semibold text-[7.6px] leading-[9.75px] sm:text-[12.6px] sm:leading-[15.75px] text-left text-[#C4C5C7] cursor-pointer">
                    +91 458 654 528
                  </p>
                </li>
                <li className="  flex gap-2">
                  <img
                    className="w-[8.17px] h-[8.17px] sm:w-[14.17px] sm:h-[14.17px]"
                    src={messageicon}
                    alt=""
                  />
                  <p className="font-barlow font-semibold text-[7.6px] leading-[9.75px] sm:text-[12.6px] sm:leading-[15.75px] text-left text-[#C4C5C7] cursor-pointer">
                    info@example.com
                  </p>
                </li>
                <li className="  flex gap-2">
                  <img
                    className="w-[8.17px] h-[8.17px] sm:w-[14.17px] sm:h-[14.17px] "
                    src={locationicon}
                    alt=""
                  />
                  <p className="font-barlow font-semibold text-[7.6px] leading-[9.75px] sm:text-[12.6px] sm:leading-[15.75px] text-left text-[#C4C5C7] cursor-pointer">
                    60 East 65th Street, NY
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[43.32px] sm:py-[23.41px] border-t-[0.79px] border-[#1B202F] mt-3 ">
        <h2 className="font-Poppins font-normal text-[9.02px] leading-[19.29px] sm:text-[11.02px] sm:leading-[19.29px] my-3 sm:my-0 text-center text-[#C4C5C7] flex items-center justify-center">
          © Copyrights 2024, FastNexa All rights reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";
// import footerbg from "../assets/images/footerbg.jpg";
// import logo from "../assets/images/logo.png";
// import phoneicon from "../assets/images/phoneicon.png";
// import messageicon from "../assets/images/messageicon.png";
// import locationicon from "../assets/images/locationicon.png";
// import { TiSocialFacebook } from "react-icons/ti";
// import { TiSocialTwitter } from "react-icons/ti";
// import { TiSocialLinkedin } from "react-icons/ti";
// const Footer = () => {
//   const backgroundImageStyle = {
//     backgroundImage: `linear-gradient(250.49deg, rgba(0, 0, 0, 0) 43.25%, rgba(0, 0, 0, 0.6) 71.49%), url(${footerbg})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   };

//   return (
//     <div className="h-[430.91px] w-full" style={backgroundImageStyle}>
//       <div className="w-[1100px] mx-auto flex items-center gap-44 py-14 sm:flex-col md:flex-row">
//         <div className="space-y-4">
//           <img src={logo} alt="LogoImage" className="w-[152px]" />
//           <div className="text-white w-[190px]">
//             Accelerate innovation with world- class tech teams We’ll match you
//             to an entire remote team of incredible freelance talent.
//           </div>
//           <div className="w-[56.17px] h-[16.56px] sm:w-[97.17px] sm:h-[27.56px] flex justify-between">
//             <TiSocialFacebook className="text-orange-700 bg-white w-[15.56px] h-[15.56px] sm:w-[27.56px] sm:h-[27.56px] rounded-full p-[2px] cursor-pointer" />
//             <TiSocialTwitter className="text-orange-700 bg-white w-[15.56px] h-[15.56px] sm:w-[27.56px] sm:h-[27.56px] rounded-full p-[2px]  cursor-pointer" />
//             <TiSocialLinkedin className="text-orange-700 bg-white w-[15.56px] h-[15.56px] sm:w-[27.56px] sm:h-[27.56px] rounded-full p-[2px]   cursor-pointer" />
//           </div>
//         </div>
//         <div className="flex items-center justify-evenly border border-white sm:w-[50%] md:w-full">
//           <div className="border border-white sm:w-[110px] sm:h-[140px]">
//             <h3 className="font-Poppins font-semibold text-[11.75px] leading-[17.62px] sm:text-[15.75px] sm:leading-[23.62px] text-left text-[#FF6500]">
//               Useful Links
//             </h3>
//             <ul className="mt-2 sm:mt-4 space-y-[4px] sm:space-y-[6px]">
//               <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] sm:text-[11.02px] sm:leading-[19.29px] text-left">
//                 Terms & Conditions
//               </li>
//               <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] sm:text-[11.02px] sm:leading-[19.29px] text-left">
//                 About Company
//               </li>
//               <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] sm:text-[11.02px] sm:leading-[19.29px] text-left">
//                 Payment Gatway
//               </li>
//               <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] sm:text-[11.02px] sm:leading-[19.29px] text-left ">
//                 Policy
//               </li>
//             </ul>
//           </div>
//           <div className="border border-white sm:w-[108px] sm:h-[140px]">
//             <h3 className="font-Poppins font-semibold text-[11.75px] leading-[17.62px] sm:text-[15.75px] sm:leading-[23.62px] text-left text-[#FF6500]">
//               Our Services
//             </h3>
//             <ul className="mt-2 sm:mt-4 space-y-[4px] sm:space-y-[6px]">
//               <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] sm:text-[11.02px] sm:leading-[19.29px] text-left">
//                 Data Security
//               </li>
//               <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] sm:text-[11.02px] sm:leading-[19.29px] text-left">
//                 IT Managment
//               </li>
//               <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] sm:text-[11.02px] sm:leading-[19.29px] text-left">
//                 Outsourcing
//               </li>
//               <li className="text-[#C4C5C7] cursor-pointer font-Poppins font-normal text-[8.02px] leading-[14.29px] sm:text-[11.02px] sm:leading-[19.29px] text-left">
//                 Networking
//               </li>
//             </ul>
//           </div>
//           <div className="border border-white sm:w-[170px] sm:h-[140px]">
//             <h3 className="font-Poppins font-semibold text-[11.75px] leading-[17.62px] sm:text-[15.75px] sm:leading-[23.62px] text-left text-[#FF6500]">
//               Contact Information
//             </h3>
//             <ul className="mt-2 sm:mt-4 space-y-[4px] sm:space-y-[6px]">
//               <li className="  flex gap-2">
//                 <img className="w-[14px.17] h-[14.17]" src={phoneicon} alt="" />
//                 <p className="font-barlow font-semibold text-[12.6px] leading-[15.75px] text-left text-[#C4C5C7] cursor-pointer">
//                   +91 458 654 528
//                 </p>
//               </li>
//               <li className="  flex gap-2">
//                 <img
//                   className="w-[14px.17] h-[14.17]"
//                   src={messageicon}
//                   alt=""
//                 />
//                 <p className="font-barlow font-semibold text-[12.6px] leading-[15.75px] text-left text-[#C4C5C7] cursor-pointer">
//                   info@example.com
//                 </p>
//               </li>
//               <li className="  flex gap-2">
//                 <img
//                   className="w-[14px.17] h-[14.17]"
//                   src={locationicon}
//                   alt=""
//                 />
//                 <p className="font-barlow font-semibold text-[12.6px] leading-[15.75px] text-left text-[#C4C5C7] cursor-pointer">
//                   60 East 65th Street, NY
//                 </p>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
