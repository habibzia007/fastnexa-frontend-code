import React from "react";
import aboutusservicesbg from "../../../assets/images/aboutusservicebg.jpg";
import { aboutUsServicesDataDevOps } from "../../../utils/fakedb/data.jsx";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevron from "../../../assets/chevron-down.svg";
import ServicesFeatures from "../../../components/services/ServicesFeatures.jsx";

const AboutUsServices = ({serviceFeatures,baseURL}) => {
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
                    `flex w-full px-4 py-[5px] sm:py-5 md:py-8 text-left hover:text-[#FF6500] ${
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
            panelProps={{ className: "p-4" }}
        />
    );

    return (
        <div
            className="relative w-full h-auto py-10 lg:py-[45px] mb-[2rem] sm:mb-0"
            style={backgroundImageStyle}
        >
            < ServicesFeatures serviceFeatures={serviceFeatures} baseURL={baseURL}/>
        </div>
    );
};

export default AboutUsServices;

