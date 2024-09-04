import {useEffect, useState} from "react";
import WhatWeProvideCard from "./Card";
import bg from "../../../assets/images/whatweprovidebg.svg";
import config from '../../../config';
import http from '../../../http';

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
    <div className="relative mt-6 w-full" style={backgroundImageStyle}>
      <div className="lg:max-w-[1230px] mx-auto px-4 sm:px-6 pt-10 w-full">
        <div className="text-container max-w-3xl mx-auto text-center">
          <h3 className="font-Poppins font-semibold text-lg lg:text-3xl text-[#1F1F1F] mb-4">
            {serviceHeading.homepage_serv_api?.section_title || ""}
          </h3>
          <p className="font-Poppins text-xs sm:text-base text-gray-500 px-2">
            {serviceHeading.homepage_serv_api?.section_heading || ""}
          </p>
        </div>
        <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-4">
          {services.services_sections && services.services_sections.map((service) => (
            <WhatWeProvideCard
                key={service.id}
                image={`${baseURL}${service.image}`}
                link={service.short_title}
                title={service.service_name}
                description={service.short_desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
