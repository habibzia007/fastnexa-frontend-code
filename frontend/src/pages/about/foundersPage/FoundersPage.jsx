import React from "react";
import { Link } from "react-router-dom";
import foundersImage from "../../../assets/images/aboutus2.jpg";
import rightArrow from "../../../assets/images/rightArrow.svg";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const FoundersPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row w-full mt-[5rem] mx-auto">
        {/* Left side - Image */}
        <div className="flex-1 flex justify-center items-center p-4">
          <img
            className="max-w-full h-auto rounded-md"
            src={foundersImage}
            alt="Founders Image"
          />
        </div>

        {/* Right side - Text */}
        <div className="flex-1 flex flex-col m-[5rem]">
          <div className="flex flex-col mb-4 lg:mb-6">
            <h4 className="font-Poppins font-semibold text-[#FF6500] text-sm leading-7 lg:text-lg lg:leading-7 tracking-wide text-left">
              Founder's Story: A Journey of Innovation and Impact
            </h4>
            <h1 className="font-Poppins font-semibold text-[#232F3B] text-xl leading-7 lg:text-4xl lg:leading-tight text-left">
              The Spark of Inspiration
            </h1>
            <p className="font-Poppins text-[#4C4D56] mb-4 lg:mb-16 text-sm leading-7 lg:text-base lg:leading-7 text-center lg:text-left">
              [Founder's Name] embarked on the path of entrepreneurship with a
              deep-seated belief in the potential of technology to reshape
              industries and improve lives. Inspired by the rapid advancements
              in artificial intelligence and its ability to revolutionize
              business processes, [Founder's Name] set out to create a company
              that would lead the charge in leveraging AI to unlock new
              possibilities and drive innovation.
            </p>
            <h1 className="font-Poppins font-semibold text-[#232F3B] text-xl leading-7 lg:text-4xl lg:leading-tight text-left">
              Transforming Idea into Reality
            </h1>
            <p className="font-Poppins text-[#4C4D56] mb-4 lg:mb-16 text-sm leading-7 lg:text-base lg:leading-7 text-center lg:text-left">
              Armed with a vision and a relentless drive to succeed, [Founder's
              Name] founded FAST NEXA, laying the foundation for what would soon
              become a beacon of innovation in the world of IT software. From
              the outset, [Founder's Name] instilled a culture of creativity,
              collaboration, and excellence, assembling a team of like-minded
              individuals dedicated to pushing the boundaries of what's possible
              and delivering unparalleled solutions to clients worldwide.
            </p>
            <h1 className="font-Poppins font-semibold text-[#232F3B] text-xl leading-7 lg:text-4xl lg:leading-tight text-left">
              Overcoming Challenges, Embracing Growth
            </h1>
            <p className="font-Poppins text-[#4C4D56] mb-4 lg:mb-16 text-sm leading-7 lg:text-base lg:leading-7 text-center lg:text-left">
              The journey of FAST NEXA has been marked by both triumphs and
              challenges. From navigating the complexities of a rapidly evolving
              industry to overcoming obstacles on the path to success,
              [Founder's Name] and the FAST NEXA team have remained steadfast in
              their commitment to innovation and excellence. Each challenge has
              served as an opportunity for growth, fueling our determination to
              continue pushing forward and making a difference in the world.
            </p>
            <h1 className="font-Poppins font-semibold text-[#232F3B] text-xl leading-7 lg:text-4xl lg:leading-tight text-left">
              Looking to the Future
            </h1>
            <p className="font-Poppins text-[#4C4D56] mb-4 lg:mb-16 text-sm leading-7 lg:text-base lg:leading-7 text-center lg:text-left">
              As we reflect on our journey thus far, we remain ever more
              committed to our founding principles and values. The future holds
              endless possibilities, and we are excited to continue shaping it
              together with our clients, partners, and team members. With
              innovation as our compass and impact as our guide, we are
              confident that the best is yet to come for FAST NEXA and the
              communities we serve.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FoundersPage;
