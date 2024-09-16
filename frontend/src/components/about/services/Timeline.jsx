import { useState, useEffect } from 'react';
import Navbar from "../../Navbar.jsx";
import Footer from "../../Footer.jsx";
import http from '../../../http';
import config from '../../../config';

const Timeline = () => {
    const [teams, setTeams] = useState([]);
    const { baseURL } = config;

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = () => {
        http.get('/team-api')
            .then((res) => {
                let teamData = res.data.data;

                const reorderedTeams = [
                    teamData.find(member => member.name === "Maj Gen Ghulam Mustafa Kausar (R) Hilal-i-Imtiaz (M)"),
                    teamData.find(member => member.name === "Faisal Shahzad"),
                    teamData.find(member => member.name === "Abdullah Faisal"),
                    teamData.find(member => member.name === "Fatimah Faisal"),
                    teamData.find(member => member.name === "Fizzah Abdullah"),
                    teamData.find(member => member.name === "Mujtaba Bukhari")
                ].filter(Boolean);

                setTeams(reorderedTeams);
            })
            .catch((err) => {
                console.error('Error fetching team data:', err);
            });
    };

    const firstTwoMembers = teams.slice(0, 2);
    const remainingMembers = teams.slice(2);

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center max-w-5xl mx-auto px-3 pb-20 pt-2">
                <h3 className="font-Poppins text-[20px] sm:text-[42px] font-bold leading-[41px] sm:leading-[61.08px] tracking-[1px] lg:mt-[50px] text-center">
                    Meet Our Leadership
                </h3>
                <p className="font-Poppins text-xs sm:text-[16px] leading-[22px] sm:leading-[30px] text-[#747474] font-normal text-center mt-[20px] sm:mt-[20px]">
                    At FAST NEXA, our leadership team brings a wealth of experience, dedication, and expertise, driving our mission to deliver innovative solutions and exceptional service. With a strong commitment to excellence, each member of our team plays a pivotal role in shaping the future of our company and ensuring that we remain at the forefront of our industry.
                </p>
                <div className="relative mt-16">
                    {firstTwoMembers.map((member, index) => (
                        <div key={index}>
                            <figure className="md:flex bg-slate-100 rounded-lg max-w-3xl mx-auto p-8 md:p-0 shadow-xl">
                                <img
                                    className="w-48 h-48 md:w-48 md:h-auto md:rounded-l-lg object-cover md:rounded-none rounded-full mx-auto"
                                    src={`${baseURL}/${member.image}`} alt={member.name} width="384" height="512" />
                                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                    <blockquote>
                                        <p className="font-Poppins text-xs sm:text-[16px] leading-[22px] sm:leading-[28px] text-[#747474] font-normal lg:text-left text-center">
                                            {member.t_member_dec}
                                        </p>
                                    </blockquote>
                                    <figcaption className="font-medium">
                                        <div className="text-[#FF6500]/70 font-Poppins font-semibold text-lg">
                                            {member.name}
                                        </div>
                                        <div className="text-[#232F3B] font-Poppins font-semibold text-base">
                                            {member.postion}
                                        </div>
                                    </figcaption>
                                </div>
                            </figure>

                            {index === 0 && (
                                <div className="flex justify-center pt-3 relative">
                                    <div className="w-[2px] h-28 bg-gray-300" />
                                    <div
                                        className="absolute !left-auto bottom-0 w-3 h-3 bg-gray-200 rounded-full mt-1.5 mr-[-0.5px] start-[6.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <ol className="relative border-s-2 border-gray-300 lg:ml-[15%] ml-[5%]">
                    {remainingMembers.map((member, index) => (
                        <li key={index} className="mb-10 mt-20">
                            <div className="flex items-center -ml-[6.5px]">
                                <div className="flex justify-start pt-3 relative">
                                    <div className="md:w-20 w-14 border-b-2 border-gray-300" />
                                    <div
                                        className="absolute !left-0 bottom-0 w-3 h-3 bg-gray-200 rounded-full top-[6.5px] mr-[-0.5px] start-[6.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                </div>
                                <figure className="md:flex bg-slate-100 rounded-lg max-w-3xl mx-auto px-4 py-8 md:p-0 shadow-xl">
                                    <img
                                        className="w-48 h-48 md:w-48 md:h-auto md:rounded-l-lg object-cover md:rounded-none rounded-full mx-auto"
                                        src={`${baseURL}/${member.image}`} alt={member.name} width="384" height="512" />
                                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                        <blockquote>
                                            <p className="font-Poppins text-xs sm:text-[16px] leading-[22px] sm:leading-[28px] text-[#747474] font-normal lg:text-left text-center">
                                                {member.t_member_dec}
                                            </p>
                                        </blockquote>
                                        <figcaption className="font-medium">
                                            <div className="text-[#FF6500]/70 font-Poppins font-semibold text-lg">
                                                {member.name}
                                            </div>
                                            <div className="text-[#232F3B] font-Poppins font-semibold text-base">
                                                {member.postion}
                                            </div>
                                        </figcaption>
                                    </div>
                                </figure>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
            <Footer />
        </>
    );
};

export default Timeline;


