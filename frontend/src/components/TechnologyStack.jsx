import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nodejs from "../assets/images/nodejs.svg";
import reactjs from "../assets/images/react.svg";
import angular from "../assets/images/angular.svg";
import python from "../assets/images/python.svg";
import dotnet from "../assets/images/aspnet.svg";
import laravel from "../assets/images/laravel.svg";
import rectangle from "../assets/images/rectangle.png";
import rectangle1 from "../assets/images/rectangle1.png";
import {Link} from "react-router-dom";

const TechnologyStack = () => {
    const logos = [nodejs, reactjs, angular, python, dotnet, laravel];

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    const settingsMobile = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="container mx-auto xl:max-w-[1110px] my-8 lg:my-16">
            {/* Wrapper */}
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-12 gap-5 p-4 bg-white">
                {/* Left Side */}
                <div className="sm:col-span-6 px-2 flex flex-col items-center sm:items-start text-center sm:text-left">
                    <h2 className="font-Poppins font-semibold text-orange-400 text-sm lg:text-base tracking-wider">
                        Technology Stack
                    </h2>
                    <h1 className="font-Poppins font-semibold text-xl lg:text-3xl leading-tight mt-2">
                        Need a Talent to Work for You Directly?
                    </h1>
                    <p className="hidden sm:block font-Poppins text-base text-gray-700 mt-6">
                        We offer staff augmentation services to get your things done right,
                        from right now. Hire a fully dedicated team, a talent that fits your
                        business idea.
                    </p>
                    {/* Slider */}
                    <div className="w-full mt-6 md:block hidden">
                        <Slider {...settings}>
                            {logos.map((logo, index) => (
                                <div key={index} className="flex items-center justify-center">
                                    <img
                                        src={logo}
                                        alt={`Logo ${index}`}
                                        className="w-20 h-10 lg:w-20 lg:h-12"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="w-full mt-6 md:hidden block">
                        <Slider {...settingsMobile}>
                            {logos.map((logo, index) => (
                                <div key={index} className="flex items-center justify-center">
                                    <img
                                        src={logo}
                                        alt={`Logo ${index}`}
                                        className="w-20 h-10 lg:w-20 lg:h-12"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <Link to="/services/human-resource"
                        className="mt-6 lg:mt-12 py-3 px-6 lg:py-4 lg:px-8 font-lato text-xs lg:text-base text-white bg-orange-600 rounded-md hover:bg-transparent hover:text-orange-600 hover:ring-1 hover:ring-orange-600 transition-colors duration-300">
                        Discover More
                    </Link>
                </div>
                {/* Right Side */}
                <div className="sm:col-span-6 flex justify-center sm:justify-end items-center relative mt-8 sm:mt-0">
                    <div className="relative w-[260px] h-[198px] sm:w-[261px] sm:h-[207px] lg:w-[350px] lg:h-[276px]">
                        <img
                            className="absolute w-[210px] h-[158px] sm:w-[214px] sm:h-[177px] lg:w-[273px] lg:h-[236px]"
                            src={rectangle1}
                            alt="Rectangle Background"
                        />
                        <img
                            className="absolute bottom-[-.7rem] sm:bottom-[-2.7rem] right-0 w-[197px] h-[145px] sm:w-[214px] sm:h-[177px] lg:w-[250px] lg:h-[215px]"
                            src={rectangle}
                            alt="Rectangle Overlay"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnologyStack;
