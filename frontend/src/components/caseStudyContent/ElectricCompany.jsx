// import React from 'react';
import img from "../../assets/images/sajid.png";

function ElectricCompany() {
    return (
        <div>
            <div className="max-w-[1110px] mx-auto p-4">
                <div className={`text-start md:pb-5 pb-3 pt-10`}>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-x-6 max-w-2xl items-start">
                        <div>
                            <img src={img} alt="Sajid Jamil" width={300} height={300} className="rounded-lg shadow-lg"/>
                        </div>
                        <div>
                            <p className={`font-Poppins md:text-base text-xs text-gray-700  md:leading-8 leading-6 font-semibold md:mt-0 mt-5`}>
                                Mr. Sajid Jamil
                            </p>
                            <p className={`font-Poppins md:text-base text-xs text-gray-700  md:leading-8 leading-6`}><span
                                className={`font-semibold`}>Executive Director</span></p>
                            <p className={`font-Poppins md:text-base text-xs text-gray-700  md:leading-8 leading-6`}><span
                                className={`font-semibold`}>Imperial Electric Company (PVT)LTD.</span></p>
                            <p className={`font-Poppins md:text-base text-xs text-gray-700 mt-1 md:leading-8 leading-6 text-justify`}>
                                The Imperial Electric Company (Pvt) Limited (IEC), a company with a rich history dating back to
                                1931, has the privilege of supplying Turnkey-based solutions.
                            </p>
                        </div>
                    </div>
                </div>
                <p className={`font-Poppins md:text-base text-xs text-gray-700 mt-6 md:leading-8 leading-6 mb-8 text-justify`}>
                    This extensive history is a testament
                    to our experience and reliability. IEC collaborates with companies like Oshkosh AeroTech (USA), ADB
                    Safegate (Belgium), Thales (France), Thorn Lighting (UK), Dabico (Germany), Tungsram Lighting
                    (Hungary), Schneider Electric (France) etc.
                </p>
                <p className={`font-Poppins md:text-base text-xs text-gray-700 mt-6 md:leading-8 leading-6 mb-8 text-justify`}>
                    One of the most critical projects successfully delivered by IEC was the CAT-III Instrument Landing &
                    Airfield Lighting System for Allama Iqbal Int’l Airport, Lahore. The successful and on time delivery
                    of this project of national importance, is a testament to our capabilities and commitment. The
                    system was designed to ensure safe landings of airplanes during bad weather conditions with poor
                    visibility. The project was delivered with the support of international and local consultants,
                    further demonstrating our collaborative approach.

                </p>
                <p className={`font-Poppins md:text-base text-xs text-gray-700 mt-6 md:leading-8 leading-6 mb-8 text-justify`}>
                    One key factor contributing to the success of the system was the baseline infrastructure. This
                    infrastructure was designed with high availability and network reliability, ensuring that the ILS
                    system would be available for landing and takeoff without causing any threats, even during the
                    failure of any network segment.
                </p>
                <p className={`font-Poppins md:text-base text-xs text-gray-700 mt-6 md:leading-8 leading-6 mb-8 text-justify`}>
                    We are deeply grateful for Faisal Shahzad Mian and his network team's for their invaluable support
                    on this project. Their contribution for the provision of Fiber Optic Ring technology with 16+ base
                    stations, communicating in synchronization with the landing planes during poor visibility, was
                    instrumental in the success of our projects. Their support is a testament to the strong partnerships
                    we foster.
                </p>
            </div>
        </div>
    );
}

export default ElectricCompany;