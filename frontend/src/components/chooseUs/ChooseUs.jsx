import React, {useEffect, useState} from "react";
import bg from "../../assets/images/chooseusbg.jpeg";
import rightArrow from "../../assets/images/rightArrow.svg";
import Card from "./Card";
import { chooseUsData } from "../../utils/fakedb/data.jsx";
import http from '../../http';
import config from '../../config';

const ChooseUs = () => {
  const [chooseData, setChooseUsData] = useState([]);
  const { baseURL } = config;
  useEffect(() => {
    http.get('/choose-reason-api')
        .then((res) => {
          setChooseUsData(res.data); // Set API response data to state
        })
        .catch((err) => {
          console.error('Error fetching services data:', err);
        });
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="relative w-full"
      style={backgroundImageStyle}
    >
      <div className="container mx-auto lg:max-w-[1184px] px-4 pb-12">
        <div className="text-center md:mb-0 mb-2">
          <h3 className="font-Poppins font-semibold text-[12px] sm:text-[14px] lg:text-[16px] pt-4 lg:pt-[45px] text-[#FF6500] leading-[28.19px] tracking-wide">
            {chooseData.whychoosea_api && chooseData.whychoosea_api.length > 0 && chooseData.whychoosea_api[0].section_title}
          </h3>
          <h3 className="font-Poppins font-semibold text-[22px] sm:text-[32px] lg:text-[42px] leading-[33.08px] sm:leading-[43.08px] lg:leading-[61.08px] lg:pt-4 text-[#232F3B] mt-2">
            {chooseData.whychoosea_api && chooseData.whychoosea_api.length > 0 && chooseData.whychoosea_api[0].section_heading}
          </h3>
          <p className="font-Poppins text-xs md:text-2xl leading-[20.08px] sm:leading-[20.08px] lg:leading-[30.08px] lg:pt-4 text-[#232F3B] mt-2">
            {chooseData.whychoosea_api && chooseData.whychoosea_api.length > 0 && chooseData.whychoosea_api[0].section_desc}
          </p>
        </div>
        <div className="flex flex-wrap grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
          {chooseData.reasonchoose_banner_api && chooseData.reasonchoose_banner_api.map((card) => (
            <Card
                key={card.id}
                image={`${baseURL}${card.image}`}
                title={card.section_item_heading}
                description={card.section_item_desc}
            />
          ))}
        </div>
        {/*<div className="flex justify-center py-5 lg:py-10">*/}
        {/*  <div className="flex items-center gap-3">*/}
        {/*    <h3 className="font-Poppins font-normal text-[12px] sm:text-[14px] lg:text-[16px] leading-[30px] text-center text-[#232F3B]">*/}
        {/*      Learn more about{" "}*/}
        {/*      <span className="font-Poppins font-semibold text-[12px] sm:text-[14px] lg:text-[16px] text-[#FF6500] cursor-pointer">*/}
        {/*        More Reasons*/}
        {/*      </span>*/}
        {/*    </h3>*/}
        {/*    <img*/}
        {/*      className="object-contain cursor-pointer"*/}
        {/*      src={rightArrow}*/}
        {/*      alt="right arrow"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default ChooseUs;
