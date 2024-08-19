import React from "react";
import bg from "../../assets/images/image-top.png";
import {FaLongArrowAltRight} from "react-icons/fa";

const Banner = ({text}) => {
    return (
        <div
            className="relative h-[200px] sm:h-[354px] w-full bg-cover bg-center"
            style={{backgroundImage: `url(${bg})`}}
        >
            <div className="max-w-[1185px] mx-auto ">
                <div className="flex justify-between sm:h-[284px] sm:justify-start sm:gap-[600px]">
                    <div className="mt-[30px] ml-[38px] sm:mt-[70px] sm:ml-[80px] space-y-0">
                        <div>
                            <h2 className="font-outfit font-bold xl:text-[36px]  text-sm xl:leading-[58.08px] sm:text-[28px] sm:leading-[40.08px] text-left md:pt-[55px] pt-5 text-white tracking-wide">
                                {text}
                            </h2>
                        </div>
                        <div>
                            <p className="flex flex-wrap font-outfit font-normal text-[9.6px] leading-[21.48px] sm:text-[14.6px] sm:leading-[22.48px] text-left text-[#FF6500] items-center gap-x-2">
                                Home{" "}
                                <span>
                                <FaLongArrowAltRight className="mt-1"/>
                              </span>
                                Portfolio
                                <span>
                                <FaLongArrowAltRight className="mt-1"/>
                              </span>
                                Case Studies
                                <span>
                                <FaLongArrowAltRight className="mt-1"/>
                              </span>
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
