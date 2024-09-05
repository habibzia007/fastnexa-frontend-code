import React, { useState, useEffect } from "react";
import CaseStudy from "./CaseStudy.jsx";
import config from '../../config'; // Assuming baseURL comes from config
import http from '../../http'; // Custom HTTP client for API calls

const CaseStudies = () => {
    const [caseStudies, setCaseStudies] = useState([]); // State to hold case studies data
    const [sectionTitle, setSectionTitle] = useState(''); // State to hold section title
    const [sectionHeading, setSectionHeading] = useState(''); // State to hold section heading
    const { baseURL } = config;

    // Fetch case studies data when the component is mounted
    useEffect(() => {
        http.get('/casestudies-api')
            .then((res) => {
                console.log('API Response:', res.data); // Log the API response
                const caseStudiesData = res.data.casestudiesitems_api;
                const sectionData = res.data.casestudies_api[0]; // Assuming it's an array with one object for section titles

                setCaseStudies(caseStudiesData); // Set case studies
                setSectionTitle(sectionData.section_title); // Set section title
                setSectionHeading(sectionData.section_heading); // Set section heading
            })
            .catch((err) => {
                console.error('Error fetching case studies:', err);
            });
    }, []);

    return (
        <div className="relative w-full mx-auto pb-12">
            <div className="max-w-[1184.44px] mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="font-Poppins font-semibold text-[12px] lg:text-[16px] text-[#FF6500] leading-[28.19px] tracking-wider text-center">
                    {sectionTitle} {/* Render the dynamic section title */}
                </h3>
                <h3 className="font-Poppins font-semibold text-[22px] leading-[33.08px] lg:text-[42px] lg:leading-[61.08px] pt-2 text-[#232F3B] text-center">
                    {sectionHeading} {/* Render the dynamic section heading */}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mt-6">
                    {caseStudies.map((data, index) => (
                        <CaseStudy key={index} data={data} baseURL={baseURL} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
