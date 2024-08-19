import React from "react";
import {Link} from "react-router-dom";
import foundersImage from "../../../assets/images/ghulam-kusar.jpeg.jpg";
import rightArrow from "../../../assets/images/rightArrow.svg";
import {ourVisionData} from "../../../utils/fakedb/data.jsx";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const OurVision = () => {
    return (
        <>
            <Navbar/>
            <h3 className="font-Poppins text-[20px] sm:text-[42px] font-bold leading-[41px] sm:leading-[61.08px] tracking-[1px] lg:mt-[50px] text-center">
                Our Vision
            </h3>
            {ourVisionData.map((card, index) => (
                <div
                    key={index}
                    className={`flex flex-col lg:flex-row md:mt-10 mt-1.5 ${
                        card.reverse ? "lg:flex-row-reverse" : ""
                    } gap-4 items-center lg:items-start`}
                >
                    <div
                        className="flex flex-col lg:w-1/2 space-y-4 items-center lg:items-start text-center lg:text-left px-4">
                        {/* <h2 className="font-Poppins font-bold text-[27px] leading-[39.08px] lg:text-[42px] lg:leading-[61.08px] text-[#232F3B]">
                            {card.title}
                        </h2> */}
                        <p className="font-Poppins font-normal md:w-[30rem] text-xs leading-[26px] lg:text-[16px] lg:leading-[26px] text-[#4c4d56] text-justify">
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
            <div className=" max-w-[1130px] mx-auto flex flex-col lg:flex-row w-full mt-10">
                {/* Left side - Image */}
                <div
                    className="flex-1 flex md:flex-row flex-col md:justify-end justify-center md:items-start items-center p-4 gap-x-10">
                    <img
                        className="max-w-full h-auto rounded-md mt-5 tw-px-12"
                        src={foundersImage}
                        alt="Founders Image"
                        width={220}
                        height={230}
                    />
                    {/* Right side - Text */}
                    <div className="flex-1 flex flex-col">
                        <div className="flex flex-col md:w-[30rem] mt-4 lg:mb-6 gap-y-4">
                            <h4 className="font-Poppins font-semibold text-[#FF6500]  text-base leading-7 md:text-lg lg:leading-7 tracking-wide md:text-left text-center">
                                Our Founder's Story
                            </h4>
                            <div className={`flex flex-col justify-center items-start md:items-center`}>
                                <div>
                                    <h1 className="font-Poppins font-semibold text-[#232F3B] text-xl leading-7 lg:text-4xl lg:leading-tight">
                                        A Journey of Innovation and Impact
                                    </h1>
                                </div>
                                <div>
                                    <p className="font-Poppins text-[#4C4D56] mb-4 md:text-sm text-xs leading-7 lg:text-base lg:leading-7 text-justify">
                                        At FAST NEXA, our journey began with a simple yet powerful vision: to harness
                                        the transformative power of technology to solve real-world challenges and drive
                                        positive change. This vision was born out of the passion, determination, and
                                        entrepreneurial spirit of our founder, Maj Gen Ghulam Mustafa Kausar ®, Hilal i
                                        Imtiaz (M).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" max-w-[1130px] mx-auto flex justify-center lg:justify-start md:px-5 px-4  mb-16">
                <p className="font-Poppins text-[#4C4D56] md:text-sm text-xs leading-7 lg:text-base lg:leading-7  text-justify">
                    Maj Gen Ghulam Mustafa Kausar (R) embarked on the path of entrepreneurship with a
                    deep-seated belief in the potential of technology to reshape industries and improve lives. Inspired
                    by the rapid
                    advancements in artificial intelligence and its ability to revolutionize business processes, Maj Gen
                    Ghulam
                    Mustafa Kausar (R) set out to create a company that would lead the charge in leveraging AI to unlock
                    new
                    possibilities and drive innovation.<br/><br/>
                    Armed with a vision and a relentless drive to succeed, Maj Gen Ghulam Mustafa Kausar ®
                    founded FAST NEXA, laying the foundation for what would soon become a beacon of innovation in the
                    world of IT
                    software. From the outset, Maj Gen Ghulam Mustafa Kausar (R) instilled a culture of creativity,
                    collaboration, and excellence, assembling a team of like-minded individuals dedicated to pushing the
                    boundaries
                    of what's possible and delivering unparalleled solutions to clients worldwide.<br/><br/>
                    The journey of FAST NEXA has been marked by both triumphs and challenges. From navigating
                    the complexities of a rapidly evolving industry to overcoming obstacles on the path to success, Maj
                    Gen
                    Ghulam Mustafa Kausar (R) and the FAST NEXA team have remained steadfast in their commitment to
                    innovation
                    and excellence. Each challenge has served as an opportunity for growth, fueling our
                    determination to continue pushing forward and making a difference in the world.<br/><br/>
                    As we reflect on our journey thus far, we remain ever more committed to our founding
                    principles and values. The future holds endless possibilities, and we are excited to continue
                    shaping it
                    together with our clients, partners, and team members. With innovation as our compass and impact as
                    our
                    guide, we are confident that the best is yet to come for FAST NEXA and the communities we serve.
                </p>
            </div>
            <Footer/>
        </>
    );
};

export default OurVision;
