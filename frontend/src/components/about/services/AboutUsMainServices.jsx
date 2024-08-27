import React from "react";
import aboutusservicesbg from "../../../assets/images/aboutusservicebg.jpg";
import { aboutUsServicesDataMain } from "../../../utils/fakedb/data.jsx";

import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevron from "../../../assets/chevron-down.svg";

const AboutUsServices = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${aboutusservicesbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <>
          {header}
          <img
            className={`text-left ml-auto transition-transform duration-200 ease-out ${
              isEnter ? "rotate-90" : ""
            }`}
            src={chevron}
            alt="Chevron"
          />
        </>
      )}
      className="border-b"
      buttonProps={{
        className: ({ isEnter }) =>
          `flex w-full px-4 py-[5px] sm:py-5 md:py-5 text-left hover:text-[#FF6500] ${
            isEnter ? "text-orange-600" : ""
          }`,
      }}
      headingProps={{
        className:
          "font-Poppins text-normal text-[10px] sm:text-[16px] leading-[24px] font-bold", // Smaller text size
      }}
      contentProps={{
        className:
          "transition-height duration-200 ease-out font-Poppins text-normal text-[9px] sm:text-[16px] leading-[28px]",
      }}
      panelProps={{ className: "px-4" }}
    />
  );

  return (
    <div
      className="relative w-full h-auto py-10 lg:py-[60px] mb-[2rem] sm:mb-0"
      style={backgroundImageStyle}
    >
      <div className="max-w-[1184px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-[50px] lg:space-y-[62px]">
          {aboutUsServicesDataMain.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${
                card.reverse ? "lg:flex-row-reverse" : ""
              } gap-4 items-center lg:items-start`}
            >
              <div className="flex flex-col lg:w-1/2 space-y-4 items-center lg:items-start text-center lg:text-left">
                <h2 className="font-Poppins font-bold text-[27px] leading-[39.08px] lg:text-[42px] lg:leading-[61.08px] text-[#232F3B]">
                  {card.title}
                </h2>
                <p className="font-Poppins font-normal text-xs leading-[26px] lg:text-[16px] lg:leading-[26px] text-[#4c4d56]">
                  {card.description}
                </p>
              </div>
              {card.hasAccordion ? (
                <div className="w-[350px] sm:w-[510px] lg:w-[540px] h-full rounded-md">
                  <Accordion transition transitionTimeout={200}>
                    <AccordionItem header="Innovation">
                      <span className="font-Poppins text-[16px]">
                        We embrace innovation as the driving force behind
                        progress. We continuously seek out new ideas,
                        technologies, and methodologies to stay ahead of the
                        curve and pioneer groundbreaking solutions that redefine
                        industry standards.
                      </span>
                    </AccordionItem>
                    <AccordionItem header="Integrity">
                      <span className="font-Poppins text-[16px]">
                        Integrity is non-negotiable. We conduct ourselves with
                        honesty, transparency, and accountability in every
                        interaction, ensuring that our actions align with our
                        words and our commitments are upheld with the utmost
                        integrity.
                      </span>
                    </AccordionItem>
                    <AccordionItem header="Collaboration">
                      <span className="font-Poppins text-[16px]">
                        Collaboration is at the core of our success. We
                        recognize that our greatest achievements are the result
                        of collective effort, and we foster a culture of
                        collaboration where diverse perspectives are valued, and
                        teamwork is celebrated.
                      </span>
                    </AccordionItem>
                    <AccordionItem header="Excellence">
                      <span className="font-Poppins text-[16px]">
                        We strive for excellence in everything we do. From the
                        quality of our work to the level of service we provide,
                        we hold ourselves to the highest standards of
                        excellence, continuously raising the bar and exceeding
                        expectations.
                      </span>
                    </AccordionItem>
                    <AccordionItem header="Customer-Centricity">
                      <span className="font-Poppins text-[16px]">
                        Our customers are at the heart of everything we do. We
                        are committed to understanding their needs, anticipating
                        their challenges, and delivering solutions that not only
                        meet but exceed their expectations, fostering
                        long-lasting partnerships built on trust and mutual
                        success.
                      </span>
                    </AccordionItem>
                    <AccordionItem header="Continuous Learning">
                      <span className="font-Poppins text-[16px]">
                        We believe in the power of continuous learning and
                        personal growth. We actively seek out opportunities to
                        expand our knowledge, develop new skills, and adapt to
                        emerging trends and technologies, ensuring that we
                        remain at the forefront of innovation.
                      </span>
                    </AccordionItem>
                    <AccordionItem header="Social Responsibility">
                      <span className="font-Poppins text-[16px]">
                        We are dedicated to making a positive impact on society
                        and the environment. We strive to conduct our business
                        in a sustainable and responsible manner, contributing to
                        the well-being of our communities and the preservation
                        of our planet for future generations.
                      </span>
                    </AccordionItem>
                    <AccordionItem header="Empowerment">
                      <span className="font-Poppins text-[16px]">
                        We empower our team members to unleash their full
                        potential. We provide them with the resources, support,
                        and encouragement they need to thrive professionally and
                        personally, fostering an environment where creativity
                        flourishes, and success is achieved together.
                      </span>
                    </AccordionItem>
                  </Accordion>
                </div>
              ) : (
                <img
                  className="w-[350px] h-[200px] sm:w-[510px] lg:w-[540px] lg:h-full rounded-md"
                  src={card.img}
                  alt={card.title}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsServices;

// import React from "react";
// import aboutusservicesbg from "../../../assets/images/aboutusservicebg.jpg";
// import newImage from "../../../assets/images/aboutservice1.jpg"; // Ensure the image path is correct
// import { aboutUsServicesDataMain } from "../../../utils/fakedb/data";

// import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
// import chevron from "../../../assets/chevron-down.svg";

// const AboutUsServices = () => {
//   const backgroundImageStyle = {
//     backgroundImage: `url(${aboutusservicesbg})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   };

//   const AccordionItem = ({ header, ...rest }) => (
//     <Item
//       {...rest}
//       header={({ state: { isEnter } }) => (
//         <>
//           {header}
//           <img
//             className={`text-left ml-auto transition-transform duration-200 ease-out ${
//               isEnter ? "rotate-90" : ""
//             }`}
//             src={chevron}
//             alt="Chevron"
//           />
//         </>
//       )}
//       className="border-b"
//       buttonProps={{
//         className: ({ isEnter }) =>
//           `flex w-full px-4 py-[5px] sm:py-5 md:py-8 text-left hover:text-[#FF6500] ${
//             isEnter ? "text-orange-600" : ""
//           }`,
//       }}
//       headingProps={{
//         className:
//           "font-Poppins text-normal text-[10px] sm:text-[16px] leading-[24px] font-bold", // Smaller text size
//       }}
//       contentProps={{
//         className:
//           "transition-height duration-200 ease-out font-Poppins text-normal text-[9px] sm:text-[16px] leading-[28px]",
//       }}
//       panelProps={{ className: "p-4" }}
//     />
//   );

//   return (
//     <div
//       className="relative w-full h-auto py-10 lg:py-[121px] mb-[2rem] sm:mb-0"
//       style={backgroundImageStyle}
//     >
//       <div className="max-w-[1184px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="space-y-[50px] lg:space-y-[62px]">
//           {aboutUsServicesDataMain.map((card, index) => (
//             <div
//               key={index}
//               className={`flex flex-col lg:flex-row ${
//                 card.reverse ? "lg:flex-row-reverse" : ""
//               } gap-4 items-center lg:items-start`}
//             >
//               <div className="flex flex-col lg:w-1/2 space-y-4 items-center lg:items-start text-center lg:text-left">
//                 <h2 className="font-Poppins font-bold text-[27px] leading-[39.08px] lg:text-[42px] lg:leading-[61.08px] text-[#232F3B]">
//                   {card.title}
//                 </h2>
//                 <p className="font-Poppins font-normal text-[11px] leading-[16px] lg:text-[16px] lg:leading-[26px] text-[#444444]">
//                   {card.description}
//                 </p>
//               </div>
//               {card.hasAccordion ? (
//                 <div className="w-[350px] h-[200px] sm:w-[510px] lg:w-[540px] lg:h-full rounded-md">
//                   <Accordion transition transitionTimeout={200}>
//                     <AccordionItem header="Innovation">
//                       <span className="font-Poppins text-[16px]">
//                         We embrace innovation as the driving force behind
//                         progress. We continuously seek out new ideas,
//                         technologies, and methodologies to stay ahead of the
//                         curve and pioneer groundbreaking solutions that redefine
//                         industry standards.
//                       </span>
//                     </AccordionItem>
//                     <AccordionItem header="Integrity">
//                       <span className="font-Poppins text-[16px]">
//                         Integrity is non-negotiable. We conduct ourselves with
//                         honesty, transparency, and accountability in every
//                         interaction, ensuring that our actions align with our
//                         words and our commitments are upheld with the utmost
//                         integrity.
//                       </span>
//                     </AccordionItem>
//                     <AccordionItem header="Collaboration">
//                       <span className="font-Poppins text-[16px]">
//                         Collaboration is at the core of our success. We
//                         recognize that our greatest achievements are the result
//                         of collective effort, and we foster a culture of
//                         collaboration where diverse perspectives are valued, and
//                         teamwork is celebrated.
//                       </span>
//                     </AccordionItem>
//                     <AccordionItem header="Excellence">
//                       <span className="font-Poppins text-[16px]">
//                         We strive for excellence in everything we do. From the
//                         quality of our work to the level of service we provide,
//                         we hold ourselves to the highest standards of
//                         excellence, continuously raising the bar and exceeding
//                         expectations.
//                       </span>
//                     </AccordionItem>
//                     <AccordionItem header="Customer-Centricity">
//                       <span className="font-Poppins text-[16px]">
//                         Our customers are at the heart of everything we do. We
//                         are committed to understanding their needs, anticipating
//                         their challenges, and delivering solutions that not only
//                         meet but exceed their expectations, fostering
//                         long-lasting partnerships built on trust and mutual
//                         success.
//                       </span>
//                     </AccordionItem>
//                     <AccordionItem header="Continuous Learning">
//                       <span className="font-Poppins text-[16px]">
//                         We believe in the power of continuous learning and
//                         personal growth. We actively seek out opportunities to
//                         expand our knowledge, develop new skills, and adapt to
//                         emerging trends and technologies, ensuring that we
//                         remain at the forefront of innovation.
//                       </span>
//                     </AccordionItem>
//                     <AccordionItem header="Social Responsibility">
//                       <span className="font-Poppins text-[16px]">
//                         We are dedicated to making a positive impact on society
//                         and the environment. We strive to conduct our business
//                         in a sustainable and responsible manner, contributing to
//                         the well-being of our communities and the preservation
//                         of our planet for future generations.
//                       </span>
//                     </AccordionItem>
//                     <AccordionItem header="Empowerment">
//                       <span className="font-Poppins text-[16px]">
//                         We empower our team members to unleash their full
//                         potential. We provide them with the resources, support,
//                         and encouragement they need to thrive professionally and
//                         personally, fostering an environment where creativity
//                         flourishes, and success is achieved together.
//                       </span>
//                     </AccordionItem>
//                   </Accordion>
//                 </div>
//               ) : (
//                 <img
//                   className="w-[350px] h-[200px] sm:w-[510px] lg:w-[540px] lg:h-full rounded-md"
//                   src={card.img}
//                   alt={card.title}
//                 />
//               )}
//             </div>
//           ))}
//           {/* New Image Placement */}
//           <div className="w-full flex justify-center pt-10">
//             <img
//               src={newImage} // Path to your new image
//               alt="Descriptive Alt Text"
//               style={{ width: "auto", maxHeight: "300px" }} // Adjust size as necessary
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsServices;
