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
    <div className="container mx-auto mt-16 sm:mt-0">
      {/* wrapper */}
      <div className="grid sm:w-[1184px] grid-cols-12 place-items-center gap-5 bg-white mx-auto  p-4">
        {/* left side */}
        <div className="col-span-12 md:col-span-8">
          <h3 className="font-Poppins font-semibold text-orange-400 text-[12px] sm:text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-center sm:text-left">
            Technology Stack
          </h3>
          <h1 className="sm:h-[123px] sm:w-[637px] font-Poppins font-semibold text-[22px] leading-[33.08px] sm:text-[42px] sm:leading-[61.08px] text-center sm:text-left">
            Need a talent to work for you directly?
          </h1>
          <p className="hidden sm:block sm:h-[58px] sm:w-[751px] font-Poppins font-normal text-[16px] leading-[26px] text-left text-gray-700 pt-[31px]">
            We offer team augmentation services to get your things done right,
            from right now. Hire a fully dedicated team, a talent that fits your
            business idea.
          </p>
          <div className="w-[350px] sm:w-[770px] h-[50.09px] flex gap-[.8rem] sm:gap-[1.8rem] items-center pt-7 sm:pt-[80px] mx-auto sm:mx-0">
            <img
              className="w-[75px] h-[36px] sm:w-[103px] sm:h-[50px]"
              src={nodejs}
              alt=""
            />
            <img
              className="w-[75px] h-[36px] sm:w-[103px] sm:h-[50px]"
              src={reactjs}
              alt=""
            />
            <img
              className="w-[75px] h-[36px] sm:w-[103px] sm:h-[50px]"
              src={angular}
              alt=""
            />
            <img
              className="w-[75px] h-[36px] sm:w-[103px] sm:h-[50px]"
              src={python}
              alt=""
            />
            <img
              className="hidden sm:block w-[75px] h-[36px] sm:w-[103px] sm:h-[50px]"
              src={dotnet}
              alt=""
            />
            <img
              className="hidden sm:block w-[75px] h-[36px] sm:w-[103px] sm:h-[50px]"
              src={laravel}
              alt=""
            />
          </div>

          <button className="w-32 sm:w-48 font-lato text-white font-normal text-sm sm:text-base leading-normal sm:leading-tight tracking-tighter text-center sm:text-left bg-gradient-to-b from-orange-400 to-orange-600 rounded-md py-3 sm:py-5 px-4 sm:px-6 flex items-center justify-center mt-7 sm:mt-12 mx-auto sm:mx-0 bg-[#FF6500] border-[#FF6500] hover:from-white hover:to-white hover:text-orange-600 hover:ring-1 hover:ring-[#FF6500] transition-colors duration-700 hover:shadow-md">
            Discover More
          </button>
        </div>
        {/* right side */}
        <div className="col-span-12 md:col-span-4 ">
          <div className="w-[409px] sm:w-[350px] h-[418px] sm:h-[357px] relative">
            <img
              className="w-[318px] h-[257px] sm:w-[350px] sm:h-[276px] absolute"
              src={rectangle1}
              alt=""
            />
            <img
              className="w-[274px] h-[228px] sm:w-[321px] sm:h-[276px] absolute bottom-[88px] right-[61px] sm:bottom-[-36px] sm:right-[-52px]"
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
//     <div className=" w-[350px] h-[658px] sm:h-[437px] sm:w-[1519px] mx-auto mt-[312px]  sm:mt-0">
//       {/* wrapper */}
//       <div className=" w-[350px] h-[658px] sm:h-[437px] sm:w-[1519px] bg-[#FFFFFF] mx-auto border border-red-700 ">
//         <div className="my-4 sm:my-[90px] flex flex-col sm:flex-row gap-5">
//           {/* left side */}
//           <div className="mx-auto sm:ml-[161px]">
//             <h3 className="font-Poppins font-semibold text-[#FF6500] text-[12px] sm:text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-center sm:text-left h-[29px]  ">
//               Technology Stack
//             </h3>
//             <h1 className=" sm:h-[123px] sm:w-[637px] font-Poppins font-semibold text-[22px] leading-[33.08px]  sm:text-[42px] sm:leading-[61.08px] text-center sm:text-left">
//               Need a talent to work for you directly?
//             </h1>
//             <p className="hidden sm:block sm:h-[58px] sm:w-[751px] font-Poppins font-normal text-[16px] leading-[26px] text-left text-[#444444] pt-[31px]">
//               We offer team augmentation services to get your things done right,
//               from right now. Hire a fully dedicated team, a talent that fits
//               your business idea.
//             </p>
//             <div className="w-[350px] h-[35px] sm:w-[770px] sm:h-[50.09px] flex gap-[.2rem] sm:gap-[1.8rem] items-center pt-7 sm:pt-[80px]">
//               <img className="w-[75px] h-[36px]" src={nodejs} alt="" />
//               <img src={reactjs} alt="" />
//               <img src={angular} alt="" />
//               <img src={python} alt="" />
//               <img src={dotnet} alt="" />
//               <img src={laravel} alt="" />
//             </div>

//             <button className="w-[98px.16px] sm:w-[170.16px] font-lato text-[#FFFFFF] font-normal text-[10.33px] leading-[12.44px]  sm:text-[17.87px] sm:leading-[21.44px] tracking-[0.06382132321596146px] text-center sm:text-left bg-gradient-to-b from-orange-400 to-orange-600 rounded-md p-3 sm:p-5 flex items-center justify-center mt-7 sm:mt-[50px] bg-[#FF6500] border-[#FF6500] hover:from-white hover:to-white  hover:text-orange-600 hover:border  transition-colors duration-700 hover:shadow-md mx-auto sm:mx-0">
//               Discover More
//             </button>
//           </div>
//           {/* right side */}
//           <div className="h-[437px] w-[1519px] sm:h-[437px] sm:w-[1519px] bg-[#FFFFFF] mx-auto ">
//             <div class="w-[409px] h-[418px]  gap-0 rounded-tl-[9px] relative">
//               <img
//                 className="w-[318px] h-[257px] sm:w-[350px] sm:h-[357px] relative"
//                 src={rectangle1}
//                 alt=""
//               />
//               <img
//                 className="w-[274px] h-[228px] sm:w-[321px] sm:h-[276px] absolute bottom-[37px] right-[50px] sm:bottom-0 sm:-right-[.5rem]"
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
