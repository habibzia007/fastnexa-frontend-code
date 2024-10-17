
import React from "react";

// eslint-disable-next-line react/prop-types
const ServicesFeatures = ({serviceFeatures, baseURL}) => {
    return (
        <div className="max-w-[1184px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-[50px] lg:space-y-[62px]">
                {/* eslint-disable-next-line react/prop-types */}
                {serviceFeatures.map((card) => (
                    <div
                        key={card.id}
                        className={`flex flex-col lg:flex-row ${
                            card.id % 2 === 1 ? "lg:flex-row-reverse" : ""
                        } gap-4 items-center lg:items-center`}
                    >
                        <div className="flex flex-col lg:w-1/2 space-y-4 items-center lg:items-start text-center lg:text-left">
                            <h2 className="font-Poppins font-bold text-[27px] leading-[39.08px] lg:text-[42px] lg:leading-[61.08px] text-[#232F3B]">
                                {card.featured_item_heading}
                            </h2>
                            <p className="font-Poppins font-normal text-[11px] leading-[16px] lg:text-[16px] lg:leading-[26px] text-[#747474]">
                                {card.featured_item_desc}
                            </p>
                        </div>
                        <img
                            className="w-[350px] h-[200px] sm:w-[510px] lg:w-[540px] lg:h-full rounded-md object-contain"
                            src={`${baseURL}${card.image}`}
                            alt={card.featured_item_heading}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesFeatures;
