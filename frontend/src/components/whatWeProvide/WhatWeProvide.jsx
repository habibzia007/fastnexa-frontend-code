import { useEffect, useState } from "react";
import bg from "../../assets/images/whatweprovidebg.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import WhatWeProvideCard from "./Card";
import { Link } from "react-router-dom";
import config from '../../config';
import http from '../../http';
import slugify from 'slugify';

const WhatWeProvide = () => {
    const [services, setServices] = useState([]);
    const [serviceHeading, setServiceHeading] = useState([]);

    const { baseURL } = config;

    useEffect(() => {
        fetchServicesData();
        fetchServiceHeading();
    }, []);

    const fetchServicesData = () => {
        http.get('/services-api')
            .then((res) => {
                setServices(res.data); // Set API response data to state
            })
            .catch((err) => {
                console.error('Error fetching services data:', err);
            });
    };

    const fetchServiceHeading = () => {
        http.get('/homePage-service-api')
            .then((res) => {
                setServiceHeading(res.data); // Set API response data to state
            })
            .catch((err) => {
                console.error('Error fetching service heading:', err);
            });
    };

    const backgroundImageStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <div className="relative pt-0 lg:pt-0" style={backgroundImageStyle}>
            <div className="container mx-auto px-4 sm:px-6 pt-10 w-full max-w-[1184px]">
                <h2 className="font-Poppins font-semibold text-sm sm:text-base text-[#FF6500] tracking-wider text-center">
                    {serviceHeading.homepage_serv_api?.section_title || ""}
                </h2>
                <h3 className="font-Poppins font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#232F3B] text-center mt-2">
                    {serviceHeading.homepage_serv_api?.section_heading || ""}
                </h3>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-4 lg:gap-8">
                    {services.services_sections && services.services_sections.map((service) => (
                        <WhatWeProvideCard

                            key={service.id}
                            id={service.id} // Ensure you're passing id here
                            image={`${baseURL}${service.image}`} // Concatenate baseURL with image path
                            link={slugify(service.service_name, { lower: true })} // Use slugify to create the link
                            title={service.service_name}
                            description={service.short_desc}
                            buttonTitle={service.button_title}
                        />
                    ))}
                </div>
                <div className="flex items-center justify-center py-6 sm:py-10">
                    <Link to="/services" className="flex items-center justify-center group">
                        <h3 className="font-Poppins text-sm sm:text-base text-center text-[#232F3B]">
                            {serviceHeading.homepage_serv_api?.section_footer || "" }&nbsp;
                            <span className="font-Poppins font-semibold text-[#FF6500]">
                                {serviceHeading.homepage_serv_api?.section_footer_url || "" }
                            </span>
                        </h3>
                        <img
                            className="object-contain w-[19px] h-[10px] ml-2 group-hover:translate-x-2 transition-all duration-500"
                            src={rightArrow}
                            alt="Right Arrow"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WhatWeProvide;
