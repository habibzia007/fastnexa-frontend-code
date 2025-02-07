import {useEffect, useState} from "react";
import footerbg from "../assets/images/footerbg.svg";
import logo from "../assets/images/logo-footer-hd.svg";
import phoneicon from "../assets/images/phoneicon.svg";
import messageicon from "../assets/images/messageicon.svg";
import locationicon from "../assets/images/locationicon.svg";
import {TiSocialFacebook, TiSocialInstagram} from "react-icons/ti";
import {TiSocialLinkedin} from "react-icons/ti";
import {Link} from "react-router-dom";
import http from "../http.js";
import slugify from "slugify";

const Footer = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServicesData();
    }, []);

    const fetchServicesData = () => {
        http.get('/services-api')
            .then((res) => {
                setServices(res.data.services_sections);
            })
            .catch((err) => {
                console.error('Error fetching services data:', err);
            });
    };


    console.log(" primaryLinks", services)


    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(250.49deg, rgba(0, 0, 0, 0) 43.25%, rgba(0, 0, 0, 0.6) 71.49%), url(${footerbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    return (
        <div
            className=" w-full bg-cover bg-center bg-no-repeat"
            style={backgroundImageStyle}
        >
            <div className="mx-auto w-full max-w-[1184px] px-4 lg:px-6 py-10">
                <div className="flex flex-col lg:flex-row items-center gap-5  lg:gap-10 xl:gap-44">
                    <div className="flex flex-col gap-4 w-[100%] lg:w-1/5 items-center lg:items-start">
                        <img
                            className="w-[96px] h-[64px] sm:w-[152px] lg:w-[152px] lg:h-[101px]"
                            src={logo}
                            alt="Logo"
                        />
                        <p className="w-full sm:w-[70%] lg:w-[190px] font-Poppins md:text-[10.02px] text-xs leading-[15px] sm:text-[11.02px] sm:leading-[23.62px] lg:text-[11.02px] lg:leading-[23.62px] text-center lg:text-left text-[#FFFFFF]">
                            Accelerate innovation with world-class tech teams. We’ll match you
                            to an entire remote team of incredible freelance talent.
                        </p>
                        <div className="flex space-x-2 lg:space-x-4">
                            <Link to="https://www.linkedin.com/company/fast-nexa/posts/?feedView=all">
                                <TiSocialLinkedin
                                    className="text-orange-700 bg-white w-[15.56px] h-[15.56px] lg:w-[27.56px] lg:h-[27.56px] rounded-full p-[2px] cursor-pointer"/>
                            </Link>
                            <Link to="https://www.facebook.com/fastnexa">
                                <TiSocialFacebook
                                    className="text-orange-700 bg-white w-[15.56px] h-[15.56px] lg:w-[27.56px] lg:h-[27.56px] rounded-full p-[2px] cursor-pointer"/>
                            </Link>
                            <Link to="https://www.instagram.com/fast_nexa?igsh=cHk3ZDZmbmZvZHdq">
                                <TiSocialInstagram
                                    className="text-orange-700 bg-white w-[15.56px] h-[15.56px] lg:w-[27.56px] lg:h-[27.56px] rounded-full p-[2px] cursor-pointer"/>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full flex justify-center ">
                        <div
                            className="flex flex-col sm:flex-row  gap-8  w-[66%] mx-auto lg:w-4/5 lg:gap-10 lg:justify-between lg:items-start justify-center">
                            <div className="w-[40%] sm:w-1/2 lg:w-1/3">
                                <h3 className="font-Poppins font-semibold text-[8.75px] leading-[17.62px] lg:text-[15.75px] lg:leading-[23.62px] text-[#FF6500]">
                                    Useful Links
                                </h3>
                                <ul className="mt-2 lg:mt-4 space-y-[4px] lg:space-y-[12px]">
                                    <li className="text-[#C4C5C7] max-w-max font-Poppins md:text-[7.02px] text-xs leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/about'}>
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins md:text-[7.02px] text-xs leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/about/our-vision'}>
                                            Vision
                                        </Link>
                                    </li>
                                    <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins md:text-[7.02px] text-xs leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/technology'}>
                                            Technologies
                                        </Link>
                                    </li>
                                    <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins md:text-[7.02px] text-xs leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/portfolio'}>
                                            Portfolio
                                        </Link>
                                    </li>
                                    <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins md:text-[7.02px] text-xs leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/services'}>
                                            Services
                                        </Link>
                                    </li>
                                    <li className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins md:text-[7.02px] text-xs leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]">
                                        <Link to={'/contact-us'}>
                                            Contact Us
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="w-full sm:w-1/2 lg:w-1/3">
                                <h3 className="font-Poppins font-semibold text-[8.75px] leading-[17.62px] lg:text-[15.75px] lg:leading-[23.62px] text-[#FF6500]">
                                    Our Services
                                </h3>
                                <ul className="mt-2 lg:mt-4 space-y-[4px] lg:space-y-[12px]">
                                    {services && services.length > 0 && services.map((service) => (
                                        <li
                                            key={service.id}
                                            className="text-[#C4C5C7] max-w-max cursor-pointer font-Poppins md:text-[7.02px] text-xs leading-[14.29px] lg:text-[11.02px] lg:leading-[19.29px]"
                                        >
                                            <Link
                                                to={`/services/${slugify(service.service_name, {lower: true})}/${service.id}`}>
                                                {service.service_name}
                                            </Link>
                                        </li>

                                    ))}
                                </ul>
                            </div>
                            <div className="w-full sm:w-1/2 lg:w-1/3">
                                <h3 className="font-Poppins font-semibold text-[8.75px] leading-[17.62px] lg:text-[15.75px] lg:leading-[23.62px] text-[#FF6500]">
                                    Contact Information
                                </h3>
                                <ul className="mt-2 lg:mt-4 space-y-[4px] lg:space-y-[20px]">
                                    <li className="flex gap-2">
                                        <img
                                            className="w-[8.17px] h-[8.17px] lg:w-[14.17px] lg:h-[14.17px]"
                                            src={phoneicon}
                                            alt="Phone"
                                        />
                                        <p className="font-barlow font-semibold md:text-[7.6px] text-xs leading-[9.75px] lg:text-[12.6px] lg:leading-[15.75px] text-[#C4C5C7] max-w-max cursor-pointer">
                                            +92 310 4443823
                                        </p>
                                    </li>
                                    <li className="flex gap-2">
                                        <img
                                            className="w-[8.17px] h-[8.17px] lg:w-[14.17px] lg:h-[14.17px]"
                                            src={messageicon}
                                            alt="Message"
                                        />
                                        <p className="font-barlow font-semibold md:text-[7.6px] text-xs leading-[9.75px] lg:text-[12.6px] lg:leading-[15.75px] text-[#C4C5C7] max-w-max cursor-pointer">
                                            info@fastnexa.com
                                        </p>
                                    </li>
                                    <li className="flex gap-2">
                                        <img
                                            className="w-[8.17px] h-[8.17px] lg:w-[14.17px] lg:h-[14.17px]"
                                            src={locationicon}
                                            alt="Location"
                                        />
                                        <p className="font-barlow font-semibold md:text-[7.6px] text-xs leading-[9.75px] lg:text-[12.6px] lg:leading-[15.75px] text-[#C4C5C7] max-w-max cursor-pointer">
                                            192, Y Block, DHA phase III, Lahore, Pakistan.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full border-t border-[#1B202F] mt-3">
                <p className="font-Poppins md:text-[9.02px] text-xs leading-[19.29px] lg:text-[11.02px] lg:leading-[19.29px] text-center text-[#C4C5C7] py-3 lg:mt-6">
                    © Copyrights 2024, FAST NEXA All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
