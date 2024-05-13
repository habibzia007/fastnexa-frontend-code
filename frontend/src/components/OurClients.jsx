import React from "react";
import honor from "../assets/images/honor.png";
import lakecity from "../assets/images/lakecity.png";
import people from "../assets/images/people.png";
import xinhuamall from "../assets/images/xinhuamall.png";
import netutils from "../assets/images/netutils.png";
import group0 from "../assets/images/group0.png";

const OurClients = () => {
  return (
    <div className="container  sm:h-[329.17px] mx-auto sm:mt-[80px] sm:w-[1134px]">
      <h2 className="text-[#FF6500] font-Poppins font-semibold text-[12px] sm:text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-center">
        Our Clients
      </h2>
      <h1 className="text-[#232F3B] font-Poppins font-semibold text-[22px] leading-[33.08px] sm:text-[42px] sm:leading-[61.08px] text-center">
        We share our confidence and passion with.
      </h1>
      <div className="grid  grid-cols-12 gap-5 sm:gap-10 mt-5 sm:mt-0">
        <div className="col-span-12 sm:col-span-12 flex justify-between">
          <img
            className="w-[64.54px] h-[64.54px] sm:w-[167.54px] sm:h-[167.54px] filter grayscale"
            src={honor}
            alt=""
          />
          <img
            className="w-[64.54px] h-[64.54px] sm:w-[167.54px] sm:h-[167.54px] filter grayscale"
            src={lakecity}
            alt=""
          />
          <img
            className="w-[64.54px] h-[64.54px] sm:w-[167.54px] sm:h-[167.54px] filter grayscale"
            src={people}
            alt=""
          />
          <img
            className="w-[64.54px] h-[64.54px] sm:w-[167.54px] sm:h-[167.54px] filter grayscale"
            src={xinhuamall}
            alt=""
          />
          <img
            className="w-[64.54px] h-[64.54px] sm:w-[167.54px] sm:h-[167.54px] filter grayscale"
            src={netutils}
            alt=""
          />
        </div>
        <div className="col-span-12 flex justify-center">
          <img
            className="w-[53px] h-[5.35] sm:w-[110px] sm:h-[11px] text-[#FF6500] text-center"
            src={group0}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurClients;

// import React from "react";
// import honor from "../assets/images/honor.png";
// import lakecity from "../assets/images/lakecity.png";
// import people from "../assets/images/people.png";
// import xinhuamall from "../assets/images/xinhuamall.png";
// import netutils from "../assets/images/netutils.png";
// import group0 from "../assets/images/group0.png";

// const OurClients = () => {
//   return (
//     <div class="w-[350px] h-[240px] sm:w-[1134px] sm:h-[329.17px] border border-red-500   mx-auto  mt-[80px] flex flex-col items-center gap-2 sm:gap-5">
//       <h2 className="text-[#FF6500] font-Poppins font-semibold text-[12px] sm:text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-center">
//         Our Clients
//       </h2>
//       <h1 className="text-[#232F3B] font-Poppins font-semibold text-[22px] leading-[33.08px]  sm:text-[42px] sm:leading-[61.08px] text-center">
//         We share our confidence and passion with.
//       </h1>
//       <div className="h-[64px] w-[434px]  sm:w-[1134px] sm:h-[168px] top-[2691px] left-[189px]   flex items-center justify-between ">
//         <img
//           className="w-[64.54px] h-[64.54px] sm:w-[167.54px] sm:h-[167.54px]  filter grayscale"
//           src={honor}
//           alt=""
//         />
//         <img
//           className="w-[64.54px] h-[64.54px] sm:w-[167.54px] sm:h-[167.54px] filter grayscale"
//           src={lakecity}
//           alt=""
//         />
//         <img
//           className="w-[64.54px] h-[64.54px] sm:w-[167.54px] sm:h-[167.54px] filter grayscale"
//           src={people}
//           alt=""
//         />
//         <img
//           className="w-[64.54px] h-[64.54px] sm:w-[167.54px] sm:h-[167.54px] filter grayscale"
//           src={xinhuamall}
//           alt=""
//         />
//         <img
//           className="w-[64.54px] h-[64.54px] sm:w-[167.54px] sm:h-[167.54px] filter grayscale"
//           src={netutils}
//           alt=""
//         />
//       </div>
//       <img
//         className=" w-[53px] h-[5.35] sm:w-[110px] sm:h-[11px] text-[#FF6500] text-center"
//         src={group0}
//         alt=""
//       />
//     </div>
//   );
// };

// export default OurClients;

// import React, { useState, useEffect } from "react";
// import honor from "../assets/images/honor.png";
// import lakecity from "../assets/images/lakecity.png";
// import people from "../assets/images/people.png";
// import xinhuamall from "../assets/images/xinhuamall.png";
// import netutils from "../assets/images/netutils.png";
// import group0 from "../assets/images/group0.png";

// const images = [honor, lakecity, people, xinhuamall, netutils];

// const OurClients = () => {
//   const [currentImages, setCurrentImages] = useState(images);
//   const [transitioning, setTransitioning] = useState(false);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTransitioning(true);
//       setTimeout(() => {
//         setCurrentImages((prevImages) => {
//           const newImages = [...prevImages];
//           newImages.push(newImages.shift()); // Move the first image to the end
//           return newImages;
//         });
//         setTransitioning(false);
//       }, 1000); // Transition duration
//     }, 3000); // Slide change interval

//     return () => {
//       clearInterval(intervalId); // Clean up the interval on component unmount
//     };
//   }, []);

//   return (
//     <div className="w-[1134px] h-[329.17px]   mx-auto  mt-[80px] flex flex-col items-center gap-5 relative overflow-hidden">
//       <h2 className="text-[#FF6500] font-Poppins font-semibold text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-center">
//         Our Clients
//       </h2>
//       <h1 className="text-[#232F3B] font-Poppins font-semibold text-[42px] leading-[61.08px] text-center">
//         We share our confidence and passion with.
//       </h1>
//       <div
//         className="flex w-[1134px] h-[168px] "
//         style={{
//           transition: "transform 1s ease", // Transition effect
//         }}
//       >
//         {currentImages.map((image, index) => (
//           <img
//             key={index}
//             className="w-[283.54px] h-[283.54px] filter grayscale"
//             src={image}
//             alt=""
//           />
//         ))}
//       </div>
//       <img className="text-[#FF6500] text-center" src={group0} alt="" />
//     </div>
//   );
// };

// export default OurClients;
