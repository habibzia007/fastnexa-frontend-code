import React from "react";
import foundersImage from "../../../assets/images/aboutus2.jpg";
import { Link } from "react-router-dom";
import rightArrow from "../../../assets/images/rightArrow.svg";

const FoundersMessage = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full mt-[103px] mx-auto">
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
        <div className="flex flex-col mb-4">
          <h4 className="font-Poppins font-semibold text-orange-600 text-sm lg:text-lg leading-7 tracking-wider text-left">
            Founder's Story: A Journey of Innovation and Impact
          </h4>
          <p className="font-Poppins text-gray-700 mb-4 lg:mb-8 text-sm lg:text-base leading-7 text-center lg:text-left">
            At FAST NEXA, our journey began with a simple yet powerful vision:
            to harness the transformative power of technology to solve
            real-world challenges and drive positive change. This vision was
            born out of the passion, determination, and entrepreneurial spirit
            of our founder, [Founder's Name].
          </p>
          <h1 className="font-Poppins font-semibold text-[#232F3B] text-xl lg:text-4xl leading-tight text-left">
            The Spark of Inspiration
          </h1>
          <p className="font-Poppins text-gray-700 mb-16 text-sm lg:text-base leading-7 text-center lg:text-left">
            [Founder's Name] embarked on the path of entrepreneurship with a
            deep-seated belief in the potential of technology to reshape
            industries and improve lives. Inspired by the rapid advancements in
            artificial intelligence and its ability to revolutionize business
            processes, [Founder's Name] set out to create a company that would
            lead the charge in leveraging AI to unlock new possibilities and
            drive innovation.
          </p>
          <Link
            to="/about/founders-message"
            className="flex items-center justify-center lg:justify-start"
          >
            <h3 className="font-Poppins text-[#232F3B] text-sm lg:text-base text-center lg:text-left">
              Read more about{" "}
              <span className="font-Poppins font-semibold text-orange-600">
                Our Founder
              </span>
            </h3>
            <img
              className="object-contain ml-2"
              src={rightArrow}
              alt="Right Arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoundersMessage;
