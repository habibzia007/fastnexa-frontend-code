import React from "react";
import { Link } from "react-router-dom";
import foundersImage from "../../../assets/images/ghulam-kusar.jpeg.jpg";
import rightArrow from "../../../assets/images/rightArrow.svg";
import { ourVisionData } from "../../../utils/fakedb/data.jsx";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const OurVision = () => {
  return (
    <>
      <Navbar />
      <h3 className="font-Poppins text-[20px] sm:text-[42px] font-bold leading-[41px] sm:leading-[61.08px] tracking-[1px] lg:mt-[50px] text-center">
        Our Vision
      </h3>
      {ourVisionData.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row mt-10 ${
            card.reverse ? "lg:flex-row-reverse" : ""
          } gap-4 items-center lg:items-start`}
        >
          <div className="flex flex-col lg:w-1/2 space-y-4 items-center lg:items-start text-center lg:text-left">
            {/* <h2 className="font-Poppins font-bold text-[27px] leading-[39.08px] lg:text-[42px] lg:leading-[61.08px] text-[#232F3B]">
              {card.title}
            </h2> */}
            <p className="font-Poppins font-normal w-[30rem] text-[11px] leading-[16px] lg:text-[16px] lg:leading-[26px] text-[#444444]">
              {card.description}
            </p>
          </div>
          <img
            className="w-[350px] h-[200px] sm:w-[510px] lg:w-[540px] lg:h-full rounded-md"
            src={card.img}
            alt={card.title}
          />
        </div>
      ))}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left side - Image */}
        <div className="flex-1 flex justify-center items-center p-4">
          <img
            className="max-w-full h-auto rounded-md"
            src={foundersImage}
            alt="Founders Image"
            width={500}
            height={700}
          />
        </div>

        {/* Right side - Text */}
        <div className="flex-1 flex flex-col m-[5rem]">
          <div className="flex flex-col w-[30rem] mt-4 lg:mb-6">
            <h4 className="font-Poppins font-semibold text-[#FF6500] text-sm leading-7 lg:text-lg lg:leading-7 tracking-wide text-left">
              Our Founder's Story
            </h4>
            <h1 className="font-Poppins font-semibold text-[#232F3B] text-xl leading-7 lg:text-4xl lg:leading-tight text-left">
              A Journey of Innovation and Impact
            </h1>
            <p className="font-Poppins text-[#4C4D56] mb-4 lg:mb-16 text-sm leading-7 lg:text-base lg:leading-7 text-center lg:text-left">
              At FAST NEXA, our journey began with a simple yet powerful vision: to harness the transformative power of
              technology to solve real-world challenges and drive positive change. This vision was born out of the
              passion, determination, and entrepreneurial spirit of our founder, Maj Gen Ghulam Mustafa Kausar ®, Hilal
              i Imtiaz (M).<br/><br/>
              Maj Gen Ghulam Mustafa Kausar (R) embarked on the path of entrepreneurship with a deep-seated belief in
              the potential of technology to reshape industries and improve lives. Inspired by the rapid advancements in
              artificial intelligence and its ability to revolutionize business processes, Maj Gen Ghulam Mustafa Kausar
              (R) set out to create a company that would lead the charge in leveraging AI to unlock new possibilities
              and drive innovation.<br/><br/>
              Armed with a vision and a relentless drive to succeed, Maj Gen Ghulam Mustafa Kausar ® founded FAST NEXA,
              laying the foundation for what would soon become a beacon of innovation in the world of IT software. From
              the outset, Maj Gen Ghulam Mustafa Kausar (R) instilled a culture of creativity, collaboration, and
              excellence, assembling a team of like-minded individuals dedicated to pushing the boundaries of what's
              possible and delivering unparalleled solutions to clients worldwide.<br/><br/>
              The journey of FAST NEXA has been marked by both triumphs and challenges. From navigating the complexities
              of a rapidly evolving industry to overcoming obstacles on the path to success, Maj Gen Ghulam Mustafa
              Kausar (R) and the FAST NEXA team have remained steadfast in their commitment to innovation and
              excellence. Each challenge has served as an opportunity for growth, fueling our determination to continue
              pushing forward and making a difference in the world.<br/><br/>
              As we reflect on our journey thus far, we remain ever more committed to our founding principles and
              values. The future holds endless possibilities, and we are excited to continue shaping it together with
              our clients, partners, and team members. With innovation as our compass and impact as our guide, we are
              confident that the best is yet to come for FAST NEXA and the communities we serve.

            </p>
            {/*<h1 className="font-Poppins font-semibold text-[#232F3B] text-xl leading-7 lg:text-4xl lg:leading-tight text-left">*/}
            {/*  Transforming Idea into Reality*/}
            {/*</h1>*/}
            {/*<p className="font-Poppins text-[#4C4D56] mb-4 lg:mb-16 text-sm leading-7 lg:text-base lg:leading-7 text-center lg:text-left">*/}
            {/*  Armed with a vision and a relentless drive to succeed, [Founder's*/}
            {/*  Name] founded FAST NEXA, laying the foundation for what would soon*/}
            {/*  become a beacon of innovation in the world of IT software. From*/}
            {/*  the outset, [Founder's Name] instilled a culture of creativity,*/}
            {/*  collaboration, and excellence, assembling a team of like-minded*/}
            {/*  individuals dedicated to pushing the boundaries of what's possible*/}
            {/*  and delivering unparalleled solutions to clients worldwide.*/}
            {/*</p>*/}
            {/*<h1 className="font-Poppins font-semibold text-[#232F3B] text-xl leading-7 lg:text-4xl lg:leading-tight text-left">*/}
            {/*  Overcoming Challenges, Embracing Growth*/}
            {/*</h1>*/}
            {/*<p className="font-Poppins text-[#4C4D56] mb-4 lg:mb-16 text-sm leading-7 lg:text-base lg:leading-7 text-center lg:text-left">*/}
            {/*  The journey of FAST NEXA has been marked by both triumphs and*/}
            {/*  challenges. From navigating the complexities of a rapidly evolving*/}
            {/*  industry to overcoming obstacles on the path to success,*/}
            {/*  [Founder's Name] and the FAST NEXA team have remained steadfast in*/}
            {/*  their commitment to innovation and excellence. Each challenge has*/}
            {/*  served as an opportunity for growth, fueling our determination to*/}
            {/*  continue pushing forward and making a difference in the world.*/}
            {/*</p>*/}
            {/*<h1 className="font-Poppins font-semibold text-[#232F3B] text-xl leading-7 lg:text-4xl lg:leading-tight text-left">*/}
            {/*  Looking to the Future*/}
            {/*</h1>*/}
            {/*<p className="font-Poppins text-[#4C4D56] mb-4 lg:mb-16 text-sm leading-7 lg:text-base lg:leading-7 text-center lg:text-left">*/}
            {/*  As we reflect on our journey thus far, we remain ever more*/}
            {/*  committed to our founding principles and values. The future holds*/}
            {/*  endless possibilities, and we are excited to continue shaping it*/}
            {/*  together with our clients, partners, and team members. With*/}
            {/*  innovation as our compass and impact as our guide, we are*/}
            {/*  confident that the best is yet to come for FAST NEXA and the*/}
            {/*  communities we serve.*/}
            {/*</p>*/}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurVision;
