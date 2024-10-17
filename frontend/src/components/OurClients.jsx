import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import allcorlogo from "../assets/images/clients/allcorlogo_new.png";
import attock from "../assets/images/clients/attock.png";
import caroyal from "../assets/images/clients/caroyal_logo_new.png";
import dindin from "../assets/images/clients/dindin-logo-new.png";
import elogo from "../assets/images/clients/E.png";
import fastCables from "../assets/images/clients/fastcables.png";
import officeEmpire from "../assets/images/clients/Office empire.png";

import http from '../http';
import config from '../config';

const OurClients = () => {

    const [clients, setClients] = useState([]);
    const { baseURL } = config;
    useEffect(() => {
        http.get('/our-client-api')
            .then((res) => {
                setClients(res.data); // Set API response data to state
            })
            .catch((err) => {
                console.error('Error fetching services data:', err);
            });
    }, []);


    const logos = [
        allcorlogo,
        attock,
        caroyal,
        dindin,
        elogo,
        fastCables,
        officeEmpire,
    ];

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 6, // Default setting
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1025, // Max width of 1024px
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 768, // Max width of 768px (typically considered medium screens)
                settings: {
                    slidesToShow: 5,
                },
            },
        ],
    };


    const settingsMobile = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="w-[360px] sm:w-[600.44px] lg:w-[1000px] xl:w-[1189.44px] mx-auto py-[30px] sm:pb-[40px] md:pb-[50px] xl:pb-[72px] px-3">
            <h2 className="text-[#FF6500] font-Poppins font-semibold text-[12px] md:text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-center">
                {clients.outclient_api && clients.outclient_api.length > 0 && clients.outclient_api[0].section_title}
            </h2>
            <h1 className="text-[#232F3B] font-Poppins font-semibold text-[20px] leading-[33.08px] md:text-[27px] sm:leading-[61.08px]  xl:text-[42px] xl:leading-[100.08px] text-center md:mb-0 mb-4">
                {clients.outclient_api && clients.outclient_api.length > 0 && clients.outclient_api[0].section_heading}
            </h1>
            <Slider {...settings} className="gap-4 md:block hidden">
                {clients.client_logo_api && clients.client_logo_api.map((logo) => (

                    <div key={logo.id} className="flex items-center justify-center mb-4">
                        <img
                            src={`${baseURL}${logo.clients_logo}`}
                            alt={`Logo ${logo.id}`}
                            className="w-[64px] h-[64px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] object-contain !outline-none"
                        />
                    </div>
                ))}
            </Slider>
            <Slider {...settingsMobile} className="gap-4 md:hidden  block">
                {clients.client_logo_api && clients.client_logo_api.map((logo) => (
                    <div key={logo.id} className="flex items-center justify-center mb-4">
                        <img
                            src={`${baseURL}${logo.clients_logo}`}
                            alt={`Logo ${logo.id}`}
                            className="w-[64px] h-[64px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px]"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default OurClients;
