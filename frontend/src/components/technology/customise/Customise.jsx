import React, { useEffect, useState } from "react";
import serviceImage from "../../../assets/images/service.png";
import bg from "../../../assets/images/contactbg.jpg";
import config from '../../../config';
import http from '../../../http';
const backgroundImageStyle = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Customise = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    http.get('/cust-web-api')
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.error('Error fetching data:', err); // Log any errors
        });
  }, []);

  const serviceImage = data && data.length > 0 ? `${data[0].image}` : '';

  return (
      <div
          className="outer-div flex flex-col items-center gap-3 h-auto w-full lg:pt-8 lg:pb-16 py-10 px-4"
          style={backgroundImageStyle}
      >
        <h3 className="font-Poppins text-[32px] sm:text-[42px] font-bold leading-[41px] sm:leading-[61.08px] tracking-[1px] mt-[10px] text-center">
          {data && data.length > 0 && data[0].section_heading}
        </h3>
        <div className="w-full sm:max-w-[700px] lg:max-w-[1184px] flex flex-col-reverse lg:flex-row justify-center items-start gap-y-10 lg:mt-8">
          {/* Left side (IMAGE) */}
          <div className="w-full lg:w-1/2 justify-center lg:justify-start">
            <img
                className="w-full sm:w-[600px] lg:w-[537px] lg:h-[480px] mt-4 lg:mt-0 mx-auto"
                src={serviceImage}
                alt=""
            />
          </div>
          {/* Right side (TEXT) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start mt-8 lg:mt-0 px-4">
            <div
                className="lg:mt-3 mb-6 font-Poppins text-xs sm:text-sm leading-[22px] sm:leading-[30px] text-[#747474] font-normal lg:text-left text-center"
                dangerouslySetInnerHTML={{
                  __html: data && data.length > 0 ? data[0].section_desc : '',
                }}
            />
            <button className="font-Poppins text-[14px] sm:text-[16px] w-full max-w-[347px] h-[50px] mt-4 ring-2 text-orange-500 rounded-md ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-500">
              {data && data.length > 0 && data[0].btn_text}
            </button>
          </div>
        </div>
      </div>
  );
};

export default Customise;
