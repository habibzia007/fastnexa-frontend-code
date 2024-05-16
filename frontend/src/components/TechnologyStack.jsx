import React from "react";
import nodejs from "../assets/images/nodejs.svg";
import reactjs from "../assets/images/react.svg";
import angular from "../assets/images/angular.svg";
import python from "../assets/images/python.svg";
import dotnet from "../assets/images/aspnet.svg";
import laravel from "../assets/images/laravel.svg";
import rectangle from "../assets/images/rectangle.png";
import rectangle1 from "../assets/images/rectangle1.png";

const TechnologyStack = () => {
  return (
    <div className="container mx-auto mt-8 lg:my-20">
      {/* wrapper */}
      <div className="grid  w-[350px] sm:w-[600px] lg:w-[1184px] grid-cols-12 lg:place-items-center gap-5 bg-white mx-auto p-4 ">
        {/* left side */}
        <div className="col-span-12 sm:col-span-6  lg:col-span-6">
          <h3 className="font-Poppins font-semibold text-orange-400 text-[12px] lg:text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-center sm:text-left">
            Technology Stack
          </h3>
          <h1 className="lg:h-[123px] sm:w-[400px] lg:w-[537px] font-Poppins font-semibold text-[22px] leading-[33.08px] lg:text-[42px] lg:leading-[61.08px] text-center sm:text-left">
            Need a talent to work for you directly?
          </h1>
          <p className="hidden sm:block lg:h-[58px] sm:w-[300px] lg:w-[551px] font-Poppins font-normal text-[16px] leading-[26psm text-left text-gray-700 pt-[31px]">
            We offer team augmentation services to get your things done right,
            from right now. Hire a fully dedicated team, a talent that fits your
            business idea.
          </p>
          <div className="w-[340px]  lg:w-[570px] h-[50.09px] flex gap-[.8rem] lg:gap-[1.8rem] items-center pt-7 lg:pt-[80px] mx-auto lg:mx-0">
            <img
              className="w-[75px] h-[36px] lg:w-[80px] lg:h-[50px]"
              src={nodejs}
              alt=""
            />
            <img
              className="w-[75px] h-[36px] lg:w-[80px] lg:h-[50px]"
              src={reactjs}
              alt=""
            />
            <img
              className="w-[75px] h-[36px] lg:w-[80px] lg:h-[50px]"
              src={angular}
              alt=""
            />
            <img
              className="w-[75px] h-[36px] lg:w-[80px] lg:h-[50px]"
              src={python}
              alt=""
            />
            <img
              className="hidden lg:block w-[75px] h-[36px] lg:w-[80px] lg:h-[50px]"
              src={dotnet}
              alt=""
            />
            <img
              className="hidden lg:block w-[75px] h-[36px] lg:w-[80px] lg:h-[50px]"
              src={laravel}
              alt=""
            />
          </div>
       
          <button className="w-32 lg:w-48 font-lato     p-1  font-normal text-sm lg:text-base leading-normal lg:leading-tight tracking-tighter text-center sm:text-left rounded-md py-3 lg:py-5 px-4 lg:px-6 flex items-center justify-center   mt-7 lg:mt-12 mx-auto sm:mx-0 text-[12px]  text-white bg-[#FF6500] border-[#FF6500] hover:bg-transparent hover:text-orange-600 hover:ring-1 hover:ring-orange-600 transition-colors duration-700 hover:shadow-md  mb-7">
            Discover More
          </button>
      
        </div>
        {/* right side */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-6 lg:mr-[12rem] xl:mr-[0rem]">
          <div className="w-[340px] lg:w-[350px] h-[310px] lg:h-[357px] relative sm:mt-[63px] sm:ml-[20px] md:mt-[0px] md:ml-[61px]">
            <img
              className="w-[260px] h-[198px] sm:w-[261px] sm:h-[207px] lg:w-[350px] lg:h-[276px] absolute"
              src={rectangle1}
              alt=""
            />
            <img
              className="w-[237px] h-[194px]  sm:w-[214px] sm:h-[177px] lg:w-[321px] lg:h-[276px] absolute bottom-[12px] right-[50px] sm:bottom-[92px] sm:right-[36px] lg:bottom-[-36px] lg:right-[-52px]"
              src={rectangle}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;



// import React from "react";
// import nodejs from "../assets/images/nodejs.png";
// import reactjs from "../assets/images/reactjs.png";
// import angular from "../assets/images/angular.png";
// import python from "../assets/images/python.png";
// import dotnet from "../assets/images/dotnet.png";
// import laravel from "../assets/images/laravel.png";
// import rectangle from "../assets/images/rectangle.png";
// import rectangle1 from "../assets/images/rectangle1.png";
// const TechnologyStack = () => {
//   return (
//     <div className=" w-[350px] h-[658px] lg:h-[437px] lg:w-[1519px] mx-auto mt-[312px]  lg:mt-0">
//       {/* wrapper */}
//       <div className=" w-[350px] h-[658px] lg:h-[437px] lg:w-[1519px] bg-[#FFFFFF] mx-auto border border-red-700 ">
//         <div className="my-4 lg:my-[90px] flex flex-col lg:flex-row gap-5">
//           {/* left side */}
//           <div className="mx-auto lg:ml-[161px]">
//             <h3 className="font-Poppins font-semibold text-[#FF6500] text-[12px] lg:text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-center lg:text-left h-[29px]  ">
//               Technology Stack
//             </h3>
//             <h1 className=" lg:h-[123px] lg:w-[637px] font-Poppins font-semibold text-[22px] leading-[33.08px]  lg:text-[42px] lg:leading-[61.08px] text-center lg:text-left">
//               Need a talent to work for you directly?
//             </h1>
//             <p className="hidden lg:block lg:h-[58px] lg:w-[751px] font-Poppins font-normal text-[16px] leading-[26px] text-left text-[#444444] pt-[31px]">
//               We offer team augmentation services to get your things done right,
//               from right now. Hire a fully dedicated team, a talent that fits
//               your business idea.
//             </p>
//             <div className="w-[350px] h-[35px] lg:w-[770px] lg:h-[50.09px] flex gap-[.2rem] lg:gap-[1.8rem] items-center pt-7 lg:pt-[80px]">
//               <img className="w-[75px] h-[36px]" src={nodejs} alt="" />
//               <img src={reactjs} alt="" />
//               <img src={angular} alt="" />
//               <img src={python} alt="" />
//               <img src={dotnet} alt="" />
//               <img src={laravel} alt="" />
//             </div>

//             <button className="w-[98px.16px] lg:w-[170.16px] font-lato text-[#FFFFFF] font-normal text-[10.33px] leading-[12.44px]  lg:text-[17.87px] lg:leading-[21.44px] tracking-[0.06382132321596146px] text-center lg:text-left bg-gradient-to-b from-orange-400 to-orange-600 rounded-md p-3 lg:p-5 flex items-center justify-center mt-7 lg:mt-[50px] bg-[#FF6500] border-[#FF6500] hover:from-white hover:to-white  hover:text-orange-600 hover:border  transition-colors duration-700 hover:shadow-md mx-auto lg:mx-0">
//               Discover More
//             </button>
//           </div>
//           {/* right side */}
//           <div className="h-[437px] w-[1519px] lg:h-[437px] lg:w-[1519px] bg-[#FFFFFF] mx-auto ">
//             <div class="w-[409px] h-[418px]  gap-0 rounded-tl-[9px] relative">
//               <img
//                 className="w-[318px] h-[257px] lg:w-[350px] lg:h-[357px] relative"
//                 src={rectangle1}
//                 alt=""
//               />
//               <img
//                 className="w-[274px] h-[228px] lg:w-[321px] lg:h-[276px] absolute bottom-[37px] right-[50px] lg:bottom-0 lg:-right-[.5rem]"
//                 src={rectangle}
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechnologyStack;
