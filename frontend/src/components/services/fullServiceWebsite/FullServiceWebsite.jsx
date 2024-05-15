import React from "react";
import serviceImage from "../../../assets/images/service.png";
import bg from "../../../assets/images/contactbg.jpg";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevron from "../../../assets/chevron-down.svg";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`text-left ml-auto transition-transform duration-200 ease-out ${
            isEnter && "rotate-90"
          }`}
          src={chevron}
          alt="Chevron"
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full px-4 py-[5px] sm:py-8 text-left hover:text-[#FF6500] ${
          isEnter && "text-orange-600"
        }`,
    }}
    headingProps={{
      className:
        "font-Poppins text-normal text-[12.23px] sm:text-[20.23px] leading-[28px] font-bold",
    }}
    contentProps={{
      className:
        "transition-height duration-200 ease-out font-Poppins text-normal text-[9px] sm:text-[16px] leading-[28px]",
    }}
    panelProps={{ className: "p-4" }}
  />
);

const backgroundImageStyle = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const FullServiceWebsite = () => {
  return (
    <div
      className="outer-div flex flex-col items-center  lg:gap-0 lg:justify-between   lg:h-[941px] w-full mb-[150px]"
      style={backgroundImageStyle}
    >
      <h3 className="font-Poppins text-[20px] sm:text-[42px] font-bold leading-[41px] sm:leading-[61.08px] tracking-[1px] mt-[40px] lg:mt-[110px] text-center">
        Full-Service Website
      </h3>

      <div className="sm:w-[600px] lg:w-[984px] h-auto lg:h-[791px] flex flex-col-reverse lg:flex-row justify-center items-center lg:mt-8 space-x-5">
        {/* left side (IMAGE) */}
        <div className="w-full lg:w-1/2 justify-center lg:justify-start">
          <img
            className="w-[358px] h-[388px] sm:w-[450px] lg:w-[537px] lg:h-[582px] mt-4 lg:mt-0 mx-auto"
            src={serviceImage}
            alt="Service"
          />
        </div>

        {/* right side (TEXT) */}
        <div className="w-full lg:w-[50%]">
          {/* Accordion Start */}
          <div className="mx-2 my-4 border-t text-[20.23px] lg:w-[537] lg:h-[500p] leading-[27.59px] h-auto">
            <Accordion transition transitionTimeout={200}>
              <AccordionItem
                header="Domain names. Data Safety and Added Security Services"
                initialEntered
              >
                <span className="font-Poppins text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </AccordionItem>

              <AccordionItem header="Faster 3x Load Time, CDN and Unlimited Charged Cloud">
                <span className="font-Poppins text-[16px]">
                  Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                  vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                  vitae.
                </span>
              </AccordionItem>

              <AccordionItem header="Data analysis. Automated Restore and Backups">
                <span className="font-Poppins text-[16px]">
                  Suspendisse massa risus, pretium id interdum in, dictum sit
                  amet ante. Fusce vulputate purus sed tempus feugiat.
                </span>
              </AccordionItem>

              <AccordionItem header="24/7/365 Support">
                <span className="font-Poppins text-[16px]">
                  Suspendisse massa risus, pretium id interdum in, dictum sit
                  amet ante. Fusce vulputate purus sed tempus feugiat.
                </span>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex items-center justify-center lg:justify-start ">
            <button className="font-Poppins text-[16px] w-[271px] h-[54px] my-[10px]  ring-2 text-orange-500 rounded-md ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-500 ">
              Explore Solutions and Prices
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullServiceWebsite;

// import React from "react";
// import serviceImage from "../../../assets/images/service.png";
// import bg from "../../../assets/images/contactbg.jpg";
// import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
// import chevron from "../../../assets/chevron-down.svg";
// import { GiOrange } from "react-icons/gi";

// /**
//  * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
//  */
// const AccordionItem = ({ header, ...rest }) => (
//   <Item
//     {...rest}
//     header={({ state: { isEnter } }) => (
//       <>
//         {header}
//         <img
//           className={`text-left ml-auto transition-transform duration-200 ease-out ${
//             isEnter && "rotate-90"
//           }`}
//           src={chevron}
//           alt="Chevron"
//         />
//       </>
//     )}
//     className="border-b"
//     buttonProps={{
//       className: ({ isEnter }) =>
//         `flex w-full px-4 sm:py-8 text-left hover:text-[#FF6500] ${
//           isEnter && "text-orange-600"
//         }`,
//     }}
//     headingProps={{
//       className:
//         " font-Poppins text-normal text-[20.23px]  leading-[28px] font-bold",
//     }}
//     contentProps={{
//       className:
//         "transition-height duration-200 ease-out font-Poppins text-normal text-[16px] leading-[28px]",
//     }}
//     panelProps={{ className: "p-4" }}
//   />
// );

// const backgroundImageStyle = {
//   backgroundImage: ` url(${bg})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// };

// const FullServiceWebsite = () => {
//   return (
//     <div
//       className="outer-div flex flex-col items-center gap-28 lg:gap-0 lg:justify-between h-[1143px] lg:h-[941px] w-full mb-[150px]"
//       style={backgroundImageStyle}
//     >
//       <h3 className="font-Poppins text-[42px] font-bold leading-[61.08px] tracking-[1px] mt-[40px] lg:mt-[110px]">
//         Full-Service Website
//       </h3>

//       <div className="sm:max-w-[800px] lg:max-w-[1284px] h-[791px]  flex  flex-col-reverse  lg:flex-row justify-center items-center">
//         {/* left side (IMAGE) */}
//         <div className=" sm:w-full lg:w-1/2 justify-center lg:justify-start">
//           <img
//             className="w-full sm:w-[600px] lg:w-[537px] lg:h-[580] mt-4 lg:mt-0 mx-auto"
//             src={serviceImage}
//             alt=""
//           />
//         </div>

//         {/* right side () */}
//         <div className="w-full lg:w-1/2 ">
//           {/* Accordion Start */}
//           <div className="mx-2 my-4 border-t text-[20.23px] leading-[27.59px] h-[295px]">
//             {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
//             <Accordion transition transitionTimeout={200}>
//               <AccordionItem
//                 header="Domain names. Data Safety and Added Security Services"
//                 initialEntered
//                 className="font-Poppins text-[20px]"
//               >
//                 <span className="font-Poppins text-[20px]">
//                   {" "}
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                 </span>
//               </AccordionItem>

//               <AccordionItem header="Faster 3x Load Time, CDN and Unlimited Charged Cloud ">
//                 Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
//                 vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
//                 vitae.
//               </AccordionItem>

//               <AccordionItem header="Data analysis. Automated Restore and Backups">
//                 Suspendisse massa risus, pretium id interdum in, dictum sit amet
//                 ante. Fusce vulputate purus sed tempus feugiat.
//               </AccordionItem>

//               <AccordionItem header="24/7/365 Support">
//                 Suspendisse massa risus, pretium id interdum in, dictum sit amet
//                 ante. Fusce vulputate purus sed tempus feugiat.
//               </AccordionItem>
//             </Accordion>
//           </div>
//           <div className="flex items-center justify-center lg:flex-none">
//             <button className="font-Poppins text-[16px] w-[271px] h-[54px] left-[160px] ml-[25px] mt-[50px] lg:mt-[130px] ring-2 text-orange-500 rounded-md ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors  duration-500">
//               Explore Solutions and Prices
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FullServiceWebsite;
