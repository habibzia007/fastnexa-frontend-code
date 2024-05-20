import React from "react";
import testimonialbg from "../../../assets/images/testimonialbg.jpg";
import Dots from "../../../utils/Dots";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import team1 from "../../../assets/images/team1.jpg";
import team2 from "../../../assets/images/team2.jpg";
import team3 from "../../../assets/images/team3.jpg";
import team4 from "../../../assets/images/team4.jpg";


const Team = () => {
  const teamMembers = [
    { imgSrc: team1, name: "Arnold", position: "CEO, FastNexa" },
    { imgSrc: team2, name: "Mike", position: "CEO, FastNexa" },
    { imgSrc: team3, name: "Joakim", position: "CEO, FastNexa" },
    { imgSrc: team4, name: "Andrew", position: "CEO, FastNexa" },
  ];



  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "center",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="relative h-[388px] sm:h-[730px] w-full mt-[60px] sm:mt-[120px] bg-cover bg-left sm:bg-center"
      style={{ backgroundImage: `url(${testimonialbg})` }}
    >
      <div className="lg:h-[517px] pt-[20px] sm:pt-[59px] mx-auto">
        <h2 className="text-[#FFFFFF] font-Poppins font-semibold text-[9.44px] sm:text-[16px] leading-[16.19px] tracking-[0.9396284818649292px] text-center">
          Our Expert Team
        </h2>
        <h1 className="text-[#FFFFFF] font-Poppins font-bold text-[16px] leading-[36.08px] md:text-[42px] md:leading-[61.08px] text-center lg:pb-[50px]">
          We have a world-class expert team
        </h1>
       
        <div className="flex justify-center items-center w-full max-w-[1184px] px-2 md:px-4 mx-auto mt-2 sm:mt-10 slider-container">
          <Slider {...settings}  className=" w-[300px] sm:w-[600.44px] lg:w-[800.44px] xl:w-[1189.44px] mx-auto ">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`relative cursor-pointer opacity-100 hover:opacity-90 group transition-transform duration-500 transform hover:scale-105 ${
                  index >= 2 && "hidden"
                } sm:block ${index >= 3 && "sm:hidden"} lg:block ${
                  index >= 4 && "lg:hidden"
                } xl:block`}
              >

                <img
                  className="w-[175px] h-[225px] sm:w-[220px] sm:h-[280px] md:w-[260px] md:h-[330px] lg:w-[300px] lg:h-[380px] xl:w-[350px] xl:h-[450px] object-cover rounded-md"
                  src={member.imgSrc}
                  alt={member.name}
                />
                <div className="flex items-center gap-1 sm:gap-3 absolute bottom-[35px] left-[43px]">
                  <div className="w-[8px] h-[23px] sm:w-[15px] sm:h-[40px] bg-gradient-to-b from-[#FF9A58] to-[#FF6500]"></div>
                  <div>
                    <h3 className="font-Poppins font-bold text-[11.23px] leading-[16.59px] sm:text-[20.23px] sm:leading-[27.59px] text-[#FFFFFF]">
                      {member.name}
                    </h3>
                    <p className="font-Poppins font-normal text-[7.23px] leading-[11.59px] sm:text-[12.88px] sm:leading-[27.59px] text-[#FFFFFF]">
                      {member.position}
                    </p>
                    <div className="flex space-x-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <FaFacebookF className="text-white hover:text-orange-500" />
                      <FaTwitter className="text-white hover:text-orange-500" />
                      <FaLinkedinIn className="text-white hover:text-orange-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;




// import React from "react";
// import testimonialbg from "../../../assets/images/testimonialbg.jpg";
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import team1 from "../../../assets/images/team1.jpg";
// import team2 from "../../../assets/images/team2.jpg";
// import team3 from "../../../assets/images/team3.jpg";
// import team4 from "../../../assets/images/team4.jpg";

// const Team = () => {
//   const teamMembers = [
//     { imgSrc: team1, name: "Arnold", position: "CEO, FastNexa" },
//     { imgSrc: team2, name: "Mike", position: "CEO, FastNexa" },
//     { imgSrc: team3, name: "Joakim", position: "CEO, FastNexa" },
//     { imgSrc: team4, name: "Andrew", position: "CEO, FastNexa" },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     arrows: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1280,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div
//       className="relative h-[388px] sm:h-[730px] w-full mt-[60px] sm:mt-[120px] bg-cover bg-left sm:bg-center"
//       style={{ backgroundImage: `url(${testimonialbg})` }}
//     >
//       <div className="lg:h-[517px] pt-[20px] sm:pt-[59px] mx-auto text-center">
//         <h2 className="text-white font-Poppins font-semibold text-[9.44px] sm:text-[16px] leading-[16.19px] tracking-[0.94px]">
//           Our Expert Team
//         </h2>
//         <h1 className="text-white font-Poppins font-bold text-[16px] leading-[36.08px] md:text-[42px] md:leading-[61.08px] lg:pb-[50px]">
//           We have a world-class expert team
//         </h1>

//         <div className="flex justify-center items-center w-full max-w-[1184px] px-2 md:px-4 mx-auto mt-2 sm:mt-10">
//           <Slider {...settings} className="w-[300px] sm:w-[600.44px] lg:w-[900px]  xl:w-[1184px] mx-auto">
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 className="relative cursor-pointer opacity-100 hover:opacity-90 group transition-transform duration-500 transform hover:scale-105"
//               >
//                 <img
//                   className="w-[175px] h-[225px] sm:w-[220px] sm:h-[280px] md:w-[260px] md:h-[330px] lg:w-[300px] lg:h-[380px] xl:w-[300px] xl:h-[380px] object-cover rounded-md"
//                   src={member.imgSrc}
//                   alt={member.name}
//                 />
//                 <div className="flex items-center gap-1 sm:gap-3 absolute bottom-[35px] left-[43px]">
//                   <div className="w-[8px] h-[23px] sm:w-[15px] sm:h-[40px] bg-gradient-to-b from-[#FF9A58] to-[#FF6500]"></div>
//                   <div>
//                     <h3 className="font-Poppins font-bold text-[11.23px] leading-[16.59px] sm:text-[20.23px] sm:leading-[27.59px] text-white">
//                       {member.name}
//                     </h3>
//                     <p className="font-Poppins font-normal text-[7.23px] leading-[11.59px] sm:text-[12.88px] sm:leading-[27.59px] text-white">
//                       {member.position}
//                     </p>
//                     <div className="flex space-x-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                       <FaFacebookF className="text-white hover:text-orange-500" />
//                       <FaTwitter className="text-white hover:text-orange-500" />
//                       <FaLinkedinIn className="text-white hover:text-orange-500" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;
