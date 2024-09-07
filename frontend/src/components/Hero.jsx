import {useState, useEffect} from "react";
import homeImage from "../assets/images/homeImage.jpeg";
import svg0 from "../assets/images/svg0.png";
import svg1 from "../assets/images/svg1.png";
import {Link} from "react-router-dom";


import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import config from '../config';
import http from '../http';

const Hero = () => {
    const [data, setData] = useState({});
    const { baseURL } = config;
    const images = [homeImage];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        fatchAllData();
    }, []);

    const fatchAllData =  () => {
        http.get('/hero-banner')
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => {
                console.error('Error fetching data:', err); // Log any errors
            });
    };

    const backgroundImageUrl = data && data.length > 0 ? `${baseURL}${data[0].image}` : '';



    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => {
            clearInterval(intervalId); // Clean up the interval on component unmount
        };
    }, [images.length]);

    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(250.49deg, rgba(0, 0, 0, 0) 43.25%, rgba(0, 0, 0, 0.4) 71.49%), url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        transition: "background-image 1s ease-in-out",
    };

    return (
        <div
            className="relative transition-all lg:pb-60 lg:pt-64 py-40"
            style={backgroundImageStyle}
        >
            {/* wrapper */}
            <div className="container lg:w-[1184px] mx-auto !px-4 lg:px-6 grid grid-cols-12">
                <div className="col-span-12  lg:col-span-12">
                    <img
                        className="w-[278.43px] h-[231.99px] lg:w-[472.71px] lg:h-[212.45px] absolute -left-[45px] -top-[126px] lg:left-[3px] lg:-top-[65px]"
                        src={svg0}
                        alt=""
                    />
                    <img
                        className="w-[136.77px] h-[117.89px] lg:w-[491px] lg:h-[254px] absolute left-[48px] -top-[9px] lg:left-[130px] lg:-top-[110px]"
                        src={svg1}
                        alt=""
                    />
                    {/* Content */}
                    <div className="flex flex-col gap-4 lg:gap-x-7">
                        <div className="lg:max-w-[636px]">
                            <h1 className="font-inter font-bold text-[28.87px] leading-[31.61px] sm:text-[36.87px] sm:leading-[40.61px] lg:text-[68px] lg:leading-[75.5px] text-left text-white">
                                {data && data.length > 0 && data[0].main_title}
                                {/*<br/>*/}&nbsp;
                                <span
                                    className="text-orange-400">{data && data.length > 0 && data[0].short_title}</span>
                            </h1>
                        </div>
                        <div className="max-w-[350.7px] sm:max-w-[400.7px] lg:max-w-[585.7px] space-y-5 lg:space-y-0">
                            <p className="font-Poppins font-medium text-[12px]  leading-[18.7px] sm:text-[14px]  sm:leading-[20.7px] lg:text-[16.22px] lg:leading-[27.58px] text-left text-white mb-[30px]">
                                {data && data.length > 0 && data[0].short_desc}
                            </p>
                            <div className="flex items-center gap-3 md:gap-5 lg:gap-7 lg:max-w-[585.7px]">
                                {data && data.length > 0 && data.checkbox_btn1 === 1 && (
                                <Link to="/contact-us">
                                    <button
                                        className="group flex items-center justify-center w-[125px] h-[31px] md:w-[150px] md:h-[37px] lg:w-[209px] lg:h-[52px] font-Poppins font-medium text-xs lg:text-sm text-white leading-[13px] lg:leading-[23.2px] bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-200 rounded-md md:rounded-[10px] hover:from-white hover:to-white hover:text-[#FF751A] hover:shadow-md transition-all duration-700 ease-in-out">
                                        {data[0].button1_name}
                                        <MdOutlineKeyboardArrowRight
                                            className="w-3 h-3 lg:w-6 lg:h-6 transition-transform duration-700 ease-in-out group-hover:ml-1 group-hover:scale-105"/>
                                    </button>
                                </Link>
                                )}
                                {data && data.length > 0 && data.checkbox_btn2 === 1 && (
                                <Link to="/about">
                                    <button
                                        className="flex items-center justify-center w-[102px] h-[30px] md:w-[125px] md:h-[37px] lg:w-[173px] lg:h-[46px] font-Poppins font-medium text-xs lg:text-sm text-white leading-[13.2px] bg-transparent ring-1 hover:ring-0 hover:shadow-md ring-white rounded-[10px] transition duration-500 ease-in-out transform hover:bg-orange-400 ">
                                        {data && data.length > 0 && data[0].button2_name}
                                    </button>
                                </Link>
                                )}
                            </div>
                        </div>

                        {/* <div className="w-[109px] h-[176px] lg:w-[386px] lg:h-[386px] absolute bottom-[-103px] right-0 lg:bottom-[-183px] lg:right-[-86px]">
              <img src={svg} alt="" />
            </div>
            <div className="w-[109px] h-[150px] lg:w-[726px] lg:h-[726px] absolute bottom-[58px] right-[-21px] lg:bottom-[-273px] lg:right-[-504px]">
              <img src={Vector2} alt="" />
            </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
