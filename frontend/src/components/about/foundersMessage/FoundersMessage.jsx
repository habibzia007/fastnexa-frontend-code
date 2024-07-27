// import React from "react";
// import aboutus1 from "../../../assets/images/aboutus1.jpg";
// import aboutus2 from "../../../assets/images/aboutus2.jpg";

// const FoundersMessage = () => {
//   return (
//     <div className="w-full h-[795px] lg:h-[536px]  lg:mt-[103px] ">
//       <div className="container w-[350px] sm:w-[513px] h-full lg:w-[1185px] lg:h-[536px] mx-auto flex  flex-col-reverse lg:flex-row  gap-2  ">
//         {/* left side  */}
//         <div className=" w-[350px] sm:w-[513px] h-[332px] lg:w-[599px] lg:h-[512px] ">
//           <div className="relative mt-10 lg:mt-10 sm:w-[513px]  ">
//             <img
//               className=" w-[207px] h-[276px] lg:w-[303px] lg:h-[402px] rounded-md absolute top-[3rem] left-[133px] lg:top-16 lg:left-[204px] z-40"
//               src={aboutus2}
//               alt=""
//             />
//           </div>
//         </div>
{
  /* right side  */
}
{
  /* <div className="w-[341px] sm:w-[536px]  h-[420px] lg:h-[536px] flex-col  ">
  <div className="w-[349px] sm:w-[513px]  h-[187px] lg:w-[510px] lg:h-[228px]  flex flex-col mb-2 lg:mb-4  items-center lg:items-start ">
    <h4 className="font-Poppins font-semibold text-[12px] leading-[28.19px] lg:text-[16px] lg:leading-[28.19px] text-[#FF6500]  tracking-[0.9496284818649292px] text-left">
      ABOUT US
    </h4>
    <h1 className="font-Poppins font-semibold text-[#232F3B] text-[22px]  leading-[28.1px] lg:text-[42px]  lg:leading-[61.1px] text-left">
      Why Choose FAST NEXA?
    </h1>
    <p className="font-Poppins text-[#4C4D56] font-normal text-[11px] leading-[26px] lg:text-[16px] lg:leading-[26px] text-center lg:text-left ">
      We introduced FastNexa Tech, a specialized company offering
      professional services in various domains including Information
      Systems & Security, Cyber Security, Infrastructure, E-commerce,
      Project Management, Software Design & Development, Social Media
      Management, and Digital Marketing.
    </p>
  </div>
</div> */
}
//       </div>
//     </div>
//   );
// };

// export default FoundersMessage;

import React from "react";
import foundersImage from "../../../assets/images/aboutus2.jpg";

const FoundersMessage = () => {
  return (
    <div className="w-full h-[1200px] mt-[103px] flex mx-auto">
      {/* Left side - Image */}
      <div className="w-[599px] h-full flex justify-center items-center">
        <img
          className="w-[403px] h-[502px] rounded-md"
          src={foundersImage}
          alt="Founders Image"
        />
      </div>

      {/* Right side - Text */}
      <div className="w-[341px] sm:w-[536px]  h-[420px] lg:h-[536px] flex-col  ">
        <div className="w-[349px] sm:w-[513px]  h-[187px] lg:w-[510px] lg:h-[228px]  flex flex-col mb-2 lg:mb-4  items-center lg:items-start ">
          <h4 className="font-Poppins font-semibold text-[12px] leading-[28.19px] lg:text-[16px] lg:leading-[28.19px] text-[#FF6500]  tracking-[0.9496284818649292px] text-left">
            Founder's Story: A Journey of Innovation and Impact
          </h4>
          <h1 className="font-Poppins font-semibold text-[#232F3B] text-[22px]  leading-[28.1px] lg:text-[42px]  lg:leading-[61.1px] text-left">
            The Spark of Inspiration
          </h1>
          <p className="font-Poppins text-[#4C4D56] mb-16 font-normal text-[11px] leading-[26px] lg:text-[16px] lg:leading-[26px] text-center lg:text-left ">
            [Founder's Name] embarked on the path of entrepreneurship with a
            deep-seated belief in the potential of technology to reshape
            industries and improve lives. Inspired by the rapid advancements in
            artificial intelligence and its ability to revolutionize business
            processes, [Founder's Name] set out to create a company that would
            lead the charge in leveraging AI to unlock new possibilities and
            drive innovation.
          </p>
          <h1 className="font-Poppins font-semibold text-[#232F3B] text-[22px]  leading-[28.1px] lg:text-[42px]  lg:leading-[61.1px] text-left">
            Transforming Idea into Reality
          </h1>
          <p className="font-Poppins text-[#4C4D56] mb-16 font-normal text-[11px] leading-[26px] lg:text-[16px] lg:leading-[26px] text-center lg:text-left ">
            Armed with a vision and a relentless drive to succeed, [Founder's
            Name] founded FAST NEXA, laying the foundation for what would soon
            become a beacon of innovation in the world of IT software. From the
            outset, [Founder's Name] instilled a culture of creativity,
            collaboration, and excellence, assembling a team of like-minded
            individuals dedicated to pushing the boundaries of what's possible
            and delivering unparalleled solutions to clients worldwide.
          </p>
          <h1 className="font-Poppins font-semibold text-[#232F3B] text-[22px]  leading-[28.1px] lg:text-[42px]  lg:leading-[61.1px] text-left">
            Overcoming Challenges, Embracing Growth
          </h1>
          <p className="font-Poppins text-[#4C4D56] mb-16 font-normal text-[11px] leading-[26px] lg:text-[16px] lg:leading-[26px] text-center lg:text-left ">
            The journey of FAST NEXA has been marked by both triumphs and
            challenges. From navigating the complexities of a rapidly evolving
            industry to overcoming obstacles on the path to success, [Founder's
            Name] and the FAST NEXA team have remained steadfast in their
            commitment to innovation and excellence. Each challenge has served
            as an opportunity for growth, fueling our determination to continue
            pushing forward and making a difference in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoundersMessage;
