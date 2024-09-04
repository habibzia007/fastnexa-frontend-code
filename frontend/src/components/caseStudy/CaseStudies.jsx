import React, { useState, useEffect } from "react";
import CaseStudy from "./CaseStudy.jsx";
import config from '../../config';
import http from '../../http';

const CaseStudies = () => {
    const [caseStudies, setCaseStudies] = useState([]);
    const { baseURL } = config;


    useEffect(() => {
        http.get('/casestudies-api')
            .then((res) => {
                console.log('API Response:', res.data);
                const data = res.data.casestudiesitems_api;
                if (Array.isArray(data)) {
                    setCaseStudies(data);
                } else if (data) {
                    setCaseStudies([data]);
                }
            })
            .catch((err) => {
                console.error('Error fetching case studies:', err);
            });
    }, []);

    return (
        <div className="relative w-full mx-auto pb-12">
            <div className="max-w-[1184.44px] mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="font-Poppins font-semibold text-[12px] lg:text-[16px] text-[#FF6500] leading-[28.19px] tracking-wider text-center">
                    Latest Case Studies
                </h3>
                <h3 className="font-Poppins font-semibold text-[22px] leading-[33.08px] lg:text-[42px] lg:leading-[61.08px] pt-2 text-[#232F3B] text-center">
                    From the Recent Success Stories
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mt-6">
                    {caseStudies.map((data, index) => (
                        <CaseStudy key={index} data={data} baseURL={baseURL}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
