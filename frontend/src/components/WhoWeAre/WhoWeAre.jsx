import React, {useEffect, useState} from "react";
import aboutBig from "../../assets/images/about-big.png";
import divabout from "../../assets/images/divabout.png";
import WhoWeAreCard from "./Card";
import config from '../../config';
import http from '../../http';


const WhoWeAre = () => {

  const [whoWeAreData, setWhoWeAreData] = useState({});

//  console.log(whoWeAreData);
  const { baseURL } = config;
  useEffect(() => {
    fetchWhoWeAreData();
  }, []);


  const fetchWhoWeAreData = () => {
    http.get('/whoweare-api')
        .then((res) => {
          setWhoWeAreData(res.data);
        })
        .catch((err) => {
          console.error('Error fetching Who We Are data:', err);
        });
  };


  const aboutBig = whoWeAreData.whoweares_api && whoWeAreData.whoweares_api.length > 0 ? whoWeAreData.whoweares_api[0].image_port : '';

  const divabout = whoWeAreData.whoweares_api && whoWeAreData.whoweares_api.length > 0 ? whoWeAreData.whoweares_api[0].image_land : '';


  return (
    <div className="w-full md:pb-14 md:pt-10 pt-3 pb-8">
      <div className="container lg:w-[1184px] mx-auto md:px-4 lg:px-6 grid grid-cols-12 md:gap-2 gap-y-10">
        {/* Left side */}
        <div className="col-span-12 md:col-span-5 lg:col-span-6 flex !justify-center !items-start flex-col ">
          {/* Left side top */}
          <div className="w-[350px] mx-auto sm:w-[610px] md:w-[350px] lg:w-[510px] md:mx-0 lg:mx-0 flex flex-col  gap-[10.3px] lg:gap-[7px]">
            <h2 className="font-Poppins font-semibold text-[12px] lg:text-[16px] text-[#FF6500] leading-[28.19px] tracking-[0.9396284818649292px] text-center md:text-left lg:text-left">
              {whoWeAreData.whoweares_api && whoWeAreData.whoweares_api.length > 0 && whoWeAreData.whoweares_api[0].section_title}
            </h2>
            <h1 className="font-Poppins font-semibold text-[23px] leading-[34.1px] text-center  lg:text-[32px] lg:leading-[42.1px] md:text-left lg:text-left text-[#232F3B]">
              {whoWeAreData.whoweares_api && whoWeAreData.whoweares_api.length > 0 && whoWeAreData.whoweares_api[0].section_heading}

            </h1>
            <p className="font-Poppins text-[#4C4D56] font-normal text-xs leading-[16.5px] sm:text-[13px] sm:leading-[17.5px]  lg:text-[16px] lg:leading-[26px] text-center md:text-left lg:text-left">
              {whoWeAreData.whoweares_api && whoWeAreData.whoweares_api.length > 0 && whoWeAreData.whoweares_api[0].section_desc}
            </p>
          </div>
          {/* Left side bottom */}
          <div
              className="w-[322px] mx-auto sm:w-[610px] md:w-[350px] lg:w-[526px] md:mx-0 lg:mx-0 mt-7 lg:mt-0 ">
            <div>
              {whoWeAreData.whoweareitems_api && whoWeAreData.whoweareitems_api.length > 0 ? (
                  whoWeAreData.whoweareitems_api.reduce((rows, item, index) => {
                    // Create a new row if index is even
                    if (index % 2 === 0) {
                      rows.push([]);
                    }
                    // Add item to the current row
                    rows[rows.length - 1].push(item);
                    return rows;
                  }, []).map((row, rowIndex) => (
                      <div
                          className={`w-full border-[#ECECEC] ${
                              rowIndex !== whoWeAreData.whoweareitems_api.length - 1 ? "border-b-[2px]" : ""
                          } flex gap-5 lg:gap-8`}
                          key={rowIndex}
                      >
                        {row.map((item, itemIndex) => (
                            <WhoWeAreCard
                                key={item.id} // Use a unique key for each card
                                title={item.section_item_heading}
                                description={item.section_item_desc}
                                border={itemIndex === 0} // Add border only to the first item in the row
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
        {/* Right side */}
        <div
            className="col-span-12 md:col-span-7 lg:col-span-6 h-[356.96px] md:mt-[14.5rem] lg:h-[610.96px] top-[1066px] mt-4 lg:mt-[70px] flex justify-center items-center lg:ml-[39px]">
          <div className="relative w-[350px]  sm:w-[610px]  md:w-[70%]  sm:ml-[27px]  lg:ml-auto">
            <img
                className="w-[231px] h-[352px] lg:w-[397px] lg:h-[610px] object-cover border-l-8 rounded-md border-l-orange-600 left-[224px] bottom-0 lg:bottom-0 lg:left-2 lg:-top-0 lg:-right-3 ml-[116px] lg:ml-0"
                src={aboutBig}
                alt=""
            />
            <img
                className="w-[220px] h-[159px] lg:w-[377px] lg:h-[272px] absolute bottom-0 left-[-2px] lg:bottom-[-12px] lg:left-[-194px] object-contain"
                src={divabout}
                alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
