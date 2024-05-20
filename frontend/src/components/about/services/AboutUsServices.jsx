import React from "react";
import aboutusservicesbg from "../../../assets/images/aboutusservicebg.jpg";
import aboutservice1 from "../../../assets/images/aboutservice1.jpg";
import aboutservice2 from "../../../assets/images/aboutservice2.jpg";
import aboutservice3 from "../../../assets/images/aboutservice3.jpg";

const AboutUsServices = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${aboutusservicesbg})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  };
  return (
    <div
      className="relative h-[1236px] lg:h-[1236px] w-full mt-10 lg:mt-[121px] mb-32 sm:mb-0"
      style={backgroundImageStyle}
    >
      {/* wrapper */}
      <div className=" w-[350px] sm:w-[510px]  lg:w-[1185px]  mx-auto pt-[30px] lg:pt-[66px]  ">
        <div className=" w-full flex flex-col space-y-[120px] sm:space-y-[85px] lg:space-y-[62px]">
          {/* first card  */}
          <div className="w-full h-[311px] flex gap-4 lg:gap-0 flex-col lg:flex-row justify-between items-center lg:items-start">
            <div className=" flex flex-col  lg:w-[540px] space-y-4 items-center lg:items-start ">
              <h2 className="font-Poppins font-bold text-[27px] leading-[39.08px] lg:text-[42px] lg:leading-[61.08px] text-left text-[#232F3B]">
                Our Approach
              </h2>
              <p className="font-Poppins font-normal text-[11px] leading-[16px] lg:text-[16px] lg:leading-[26px]  text-[#444444] text-center lg:text-left">
                Delivering specialized services worldwide, Lucerna, as part of
                the ABM Group, utilizes highly qualified professionals across
                unlimited geographical boundaries. Whether you are located in
                the META region, Europe, or beyond, we provide tailor-made
                services that precisely fit your requirements. Building upon ABM
                IT's four-decade legacy,{" "}
              </p>

              <button className="font-lato w-[83.16px] h-[29.99px] lg:w-[170.16px] lg:h-[59.99px] left-[160px] py-[8px] px-[4px] lg:py-[19.15px] lg:px-[26.37px] ring-1 lg:ring-2 text-orange-500 lg:rounded-md rounded-sm text-[10px] lg:text-[18px] leading-[10.46px] ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors  duration-500 ">
                Discover More
              </button>
            </div>
            <img
              className="w-[350px] h-[200px] sm:w-[510px] lg:w-[540px] lg:h-full rounded-md"
              src={aboutservice1}
              alt=""
            />
          </div>
          {/* second card */}
          <div className="w-full h-[311px] flex gap-4 lg:gap-0 flex-col lg:flex-row-reverse justify-between items-center lg:items-start">
            <div className=" flex flex-col  lg:w-[540px] space-y-4 items-center lg:items-start ">
              <h2 className="font-Poppins font-bold text-[27px] leading-[39.08px] lg:text-[42px] lg:leading-[61.08px] text-left text-[#232F3B]">
                IT Staff Augmentation
              </h2>
              <p className="font-Poppins font-normal text-[11px] leading-[16px] lg:text-[16px] lg:leading-[26px]  text-[#444444] text-center lg:text-left">
                In addition to our cyber security expertise, we excel in
                offering IT staff augmentation services to businesses in the US,
                UK, and MENA region. Our skilled IT professionals seamlessly
                integrate into your existing teams, providing the necessary
                support to meet your project requirements effectively. Whether
                you require technical support
              </p>

              <button className="font-lato w-[83.16px] h-[29.99px] lg:w-[170.16px] lg:h-[59.99px] left-[160px] py-[8px] px-[4px] lg:py-[19.15px] lg:px-[26.37px] ring-1 lg:ring-2 text-orange-500 lg:rounded-md rounded-sm text-[10px] lg:text-[18px] leading-[10.46px] ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors  duration-500 ">
                Discover More
              </button>
            </div>
            <img
              className="w-[350px]  sm:w-[510px] h-[200px] lg:w-[540px] lg:h-full rounded-md"
              src={aboutservice2}
              alt=""
            />
          </div>
          {/* third card */}
          <div className="w-full h-[311px] flex gap-4 lg:gap-0 flex-col  lg:flex-row justify-between items-center lg:items-start">
            <div className=" flex flex-col  lg:w-[540px] space-y-4 items-center lg:items-start ">
              <h2 className="font-Poppins font-bold text-[27px] leading-[39.08px] lg:text-[42px] lg:leading-[61.08px] text-left text-[#232F3B]">
                The IT Imperative
              </h2>
              <p className="font-Poppins font-normal text-[11px] leading-[16px] lg:text-[16px] lg:leading-[26px]  text-[#444444] text-center lg:text-left">
                At Lucerna Tech, our sought-after cyber security talents are
                backed by technical certifications from various security vendors
                and industry -leading risk management and information security
                certifications. Our services adhere to industry best practices
                and standards, ensuring top-notch solution s for our customers.
                Partnering with us means collaborating with security experts
              </p>

              <button className="font-lato w-[83.16px] h-[29.99px] lg:w-[170.16px] lg:h-[59.99px] left-[160px] py-[8px] px-[4px] lg:py-[19.15px] lg:px-[26.37px] ring-1 lg:ring-2 text-orange-500 lg:rounded-md rounded-sm text-[10px] lg:text-[18px] leading-[10.46px] ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors  duration-500 ">
                Discover More
              </button>
            </div>
            <img
              className="w-[350px]  sm:w-[510px] h-[200px] lg:w-[540px] lg:h-full rounded-md"
              src={aboutservice3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsServices;


// import React from "react";
// import aboutusservicesbg from "../../../assets/images/aboutusservicebg.jpg";
// import aboutservice1 from "../../../assets/images/aboutservice1.jpg";
// import aboutservice2 from "../../../assets/images/aboutservice2.jpg";
// import aboutservice3 from "../../../assets/images/aboutservice3.jpg";

// const AboutUsServices = () => {
//   const backgroundImageStyle = {
//     backgroundImage: `url(${aboutusservicesbg})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   };

//   return (
//     <div
//       className="relative w-full py-10 lg:py-[121px] mb-32"
//       style={backgroundImageStyle}
//     >
//       <div className="container mx-auto px-4 lg:px-0 w-full lg:max-w-[1085px] xl:max-w-[1185px]">
//         <div className="flex flex-col space-y-10 lg:space-y-[62px]">
//           {/* First card */}
//           <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8">
//             <div className="flex flex-col lg:w-1/2 space-y-4 items-center lg:items-start text-center lg:text-left">
//               <h2 className="font-Poppins font-bold text-[27px] lg:text-[42px] text-[#232F3B]">
//                 Our Approach
//               </h2>
//               <p className="font-Poppins text-[11px] lg:text-[16px] text-[#444444]">
//                 Delivering specialized services worldwide, Lucerna, as part of
//                 the ABM Group, utilizes highly qualified professionals across
//                 unlimited geographical boundaries. Whether you are located in
//                 the META region, Europe, or beyond, we provide tailor-made
//                 services that precisely fit your requirements. Building upon ABM
//                 IT's four-decade legacy,
//               </p>
//               <button className="font-lato w-[83.16px] lg:w-[170.16px] h-[29.99px] lg:h-[59.99px] py-[8px] lg:py-[19.15px] px-[4px] lg:px-[26.37px] ring-1 lg:ring-2 text-orange-500 rounded-sm lg:rounded-md text-[10px] lg:text-[18px] leading-[10.46px] ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-500">
//                 Discover More
//               </button>
//             </div>
//             <img
//               className="w-full lg:w-1/2 h-auto rounded-md object-cover"
//               src={aboutservice1}
//               alt="Service 1"
//             />
//           </div>

//           {/* Second card */}
//           <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-4 lg:gap-8">
//             <div className="flex flex-col lg:w-1/2 space-y-4 items-center lg:items-start text-center lg:text-left">
//               <h2 className="font-Poppins font-bold text-[27px] lg:text-[42px] text-[#232F3B]">
//                 IT Staff Augmentation
//               </h2>
//               <p className="font-Poppins text-[11px] lg:text-[16px] text-[#444444]">
//                 In addition to our cyber security expertise, we excel in
//                 offering IT staff augmentation services to businesses in the US,
//                 UK, and MENA region. Our skilled IT professionals seamlessly
//                 integrate into your existing teams, providing the necessary
//                 support to meet your project requirements effectively. Whether
//                 you require technical support
//               </p>
//               <button className="font-lato w-[83.16px] lg:w-[170.16px] h-[29.99px] lg:h-[59.99px] py-[8px] lg:py-[19.15px] px-[4px] lg:px-[26.37px] ring-1 lg:ring-2 text-orange-500 rounded-sm lg:rounded-md text-[10px] lg:text-[18px] leading-[10.46px] ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-500">
//                 Discover More
//               </button>
//             </div>
//             <img
//               className="w-full lg:w-1/2 h-auto rounded-md object-cover"
//               src={aboutservice2}
//               alt="Service 2"
//             />
//           </div>

//           {/* Third card */}
//           <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8">
//             <div className="flex flex-col lg:w-1/2 space-y-4 items-center lg:items-start text-center lg:text-left">
//               <h2 className="font-Poppins font-bold text-[27px] lg:text-[42px] text-[#232F3B]">
//                 The IT Imperative
//               </h2>
//               <p className="font-Poppins text-[11px] lg:text-[16px] text-[#444444]">
//                 At Lucerna Tech, our sought-after cyber security talents are
//                 backed by technical certifications from various security vendors
//                 and industry-leading risk management and information security
//                 certifications. Our services adhere to industry best practices
//                 and standards, ensuring top-notch solutions for our customers.
//                 Partnering with us means collaborating with security experts
//               </p>
//               <button className="font-lato w-[83.16px] lg:w-[170.16px] h-[29.99px] lg:h-[59.99px] py-[8px] lg:py-[19.15px] px-[4px] lg:px-[26.37px] ring-1 lg:ring-2 text-orange-500 rounded-sm lg:rounded-md text-[10px] lg:text-[18px] leading-[10.46px] ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-500">
//                 Discover More
//               </button>
//             </div>
//             <img
//               className="w-full lg:w-1/2 h-auto rounded-md object-cover"
//               src={aboutservice3}
//               alt="Service 3"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsServices;
