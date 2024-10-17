import React from "react";

const Intro = ({title, description}) => {
    return (
        <div className="container mx-auto p-4 max-w-[874px]">
            <div className="w-full h-auto py-[37px]">
                <h3 className="font-Poppins font-bold text-[24px] sm:text-[36px] leading-[34px] sm:leading-[54.08px] text-[#1F1F1F] text-center">
                    {title}
                </h3>
                <p className="font-Poppins text-xs sm:text-[16px] leading-[22px] sm:leading-[30px] text-[#747474] font-normal text-center mt-[20px] sm:mt-[30px]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Intro;
