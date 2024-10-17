import Card from "./Card";
import config from '../../../config';
import http from '../../../http';
import { useEffect, useState } from "react";

const AboutUs = () => {
    const [aboutUsData, setAboutUsData] = useState([]);
    const { baseURL } = config;

    useEffect(() => {
        http.get('/about-section-api')
            .then((res) => {
                setAboutUsData(res.data);
            })
            .catch((err) => {
                console.error('Error fetching Who We Are data:', err);
            });
    }, []);

    const aboutus1 = aboutUsData.about_sections?.[0]?.image
        ? `${baseURL}${aboutUsData.about_sections[0].image}`
        : '';

    const aboutus2 = aboutUsData.about_sections?.[0]?.image2
        ? `${baseURL}${aboutUsData.about_sections[0].image2}`
        : '';

    return (
        <div className="w-full md:py-16 pt-14 xl:px-0 px-4">
            <div
                className="xl:grid xl:grid-cols-2 flex flex-col-reverse gap-8 lg:gap-4 xl:max-w-6xl max-w-4xl mx-auto justify-center items-start lg:gap-y-20 gap-y-16">

                {/* Left Side */}
                <div className="lg:mt-3 md:mb-0 mb-4 xl:w-full lg:w-[34%] mx-auto xl:pb-0 md:pb-10 pb-16">
                    <div className="relative xl:ml-0 -ml-28">
                        <div className="w-[207px] h-[276px] lg:w-[211px] lg:h-[402px] bg-[#FF6500] rounded-[18px] z-10"></div>
                        <img
                            className="w-[207px] h-[276px] lg:w-[303px] lg:h-[402px] rounded-md absolute top-[3rem] left-[133px] lg:top-16 lg:left-[204px] z-40"
                            src={aboutus2}
                            alt=""
                        />
                        <img
                            className="w-[207px] h-[276px] lg:w-[303px] lg:h-[402px] rounded-md absolute bottom-3 left-[8px] z-30"
                            src={aboutus1}
                            alt=""
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col items-center xl:items-start">
                    <div className="text-center xl:text-left mb-8 lg:mb-4">
                        <h4 className="font-Poppins font-semibold text-[12px] lg:text-[16px] text-[#FF6500] tracking-wide">
                            {aboutUsData.about_sections?.[0]?.section_title}
                        </h4>
                        <h1 className="font-Poppins font-semibold text-[#232F3B] text-[22px] lg:text-[42px] leading-snug lg:leading-tight">
                            {aboutUsData.about_sections?.[0]?.section_heading}
                        </h1>
                        <p className="font-Poppins text-[#4C4D56] font-normal text-xs lg:text-[16px] lg:leading-[26px] mt-3"
                           dangerouslySetInnerHTML={{
                               __html: aboutUsData.about_sections?.[0]?.section_desc,
                           }}
                        ></p>
                    </div>

                    <div
                        className="xl:w-auto w-full xl:mt-4 mt-10 lg:max-w-[526px] md:max-w-[350px] max-w-[322px] mx-auto">
                        {/* Dynamically Render Cards in Rows */}
                        {aboutUsData.about_us_items && aboutUsData.about_us_items.length > 0 ? (
                            aboutUsData.about_us_items
                                .reduce((rows, item, index) => {
                                    if (index % 2 === 0) rows.push([]);
                                    rows[rows.length - 1].push(item);
                                    return rows;
                                }, [])
                                .map((row, rowIndex, array) => (
                                    <div
                                        className={`w-full border-[#ECECEC] ${
                                            rowIndex !== array.length - 1 ? "border-b-[2px]" : ""
                                        } flex gap-5 lg:gap-8`}
                                        key={rowIndex}
                                    >
                                        {row.map((item, itemIndex) => (
                                            <Card
                                                key={item.id}
                                                title={item.about_item_heading}
                                                description={item.about_item_desc}
                                                image={item.icon}
                                                border={itemIndex === 0}
                                            />
                                        ))}
                                    </div>
                                ))
                        ) : (
                            <p>No data available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
