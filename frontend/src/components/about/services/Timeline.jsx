import ctoImg from "../../../assets/images/abdulla.jpg";
import Navbar from "../../Navbar.jsx";
import Footer from "../../Footer.jsx";

const Timeline = () => {
    return (
        <>
            <Navbar/>
            <div className="flex flex-col items-center max-w-5xl mx-auto px-3 pb-28 pt-2">
                <h3 className="font-Poppins text-[20px] sm:text-[42px] font-bold leading-[41px] sm:leading-[61.08px] tracking-[1px] lg:mt-[50px] text-center">
                    Team
                </h3>
                <div className="relative mt-16">
                    <div className="flex items-center md:flex-row-reverse flex-col justify-center gap-x-4 gap-y-7 mb-6">
                        <div className="flex items-center max-w-md mx-auto">
                            <div
                                className="bg-white border p-4 rounded-lg shadow-lg hover:border-gray-300 transition-all duration-400">
                                <h2 className="font-Poppins font-semibold text-[#232F3B] text-[22px]">CM</h2>
                                <p className="font-Poppins text-[#4C4D56] text-base">Our mission is simple yet profound:
                                    to
                                    harness the limitless
                                    capabilities of Artificial Intelligence (AI) and apply them to solve real-world
                                    challenges.
                                    We believe that the future is defined by innovation, and dedicated to helping you
                                    shape
                                    that
                                    future by delivering cutting-edge solutions tailored to your unique goals and
                                    objectives.</p>
                            </div>
                        </div>
                        <div className="w-40 border-b-2 border-gray-300 md:block hidden"/>
                        <div className="md:w-auto w-full">
                            <img
                                src={ctoImg}
                                alt="Person Image"
                                width={200}
                                height={200}
                                className="md:h-[205px] h-[280px] object-cover rounded-lg shadow-lg w-full"
                            />
                        </div>
                    </div>

                    <div className="md:flex flex md:justify-end justify-center">
                        <div className="w-[2px] h-20 bg-gray-300 md:mr-56"/>
                    </div>

                    <div className="flex items-center md:flex-row-reverse flex-col justify-center gap-x-4 gap-y-7 mt-6">
                        <div className="flex items-center max-w-md mx-auto">
                            <div
                                className="bg-white border p-4 rounded-lg shadow-lg hover:border-gray-300 transition-all duration-400">
                                <h2 className="font-Poppins font-semibold text-[#232F3B] text-[22px]">BD/CEO</h2>
                                <p className="font-Poppins text-[#4C4D56] text-base">Our mission is simple yet profound:
                                    to
                                    harness the limitless
                                    capabilities of Artificial Intelligence (AI) and apply them to solve real-world
                                    challenges.
                                    We believe that the future is defined by innovation, and dedicated to helping you
                                    shape
                                    that
                                    future by delivering cutting-edge solutions tailored to your unique goals and
                                    objectives.</p>
                            </div>
                        </div>
                        <div className="w-40 border-b-2 border-gray-300 md:block hidden"/>
                        <div className="md:w-auto w-full">
                            <img
                                src={ctoImg}
                                alt="Person Image"
                                width={200}
                                height={200}
                                className="md:h-[205px] h-[280px] object-cover rounded-lg shadow-lg w-full"
                            />
                        </div>
                    </div>
                </div>
                <ol className="relative border-e-2 border-gray-300 md:mr-0 mr-[10%]">
                    <li className="mb-10 ms-4 mt-20">
                        <div className="w-full flex justify-end">
                            <div
                                className="absolute !left-auto w-3 h-3 bg-gray-200 rounded-full mt-1.5 mr-[-7px] start-[6.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        </div>
                        <div className="flex items-center md:flex-row-reverse flex-col justify-start gap-x-6 gap-y-6 mt-0 mr-6">
                            <div className="flex items-center md:max-w-xs max-w-full w-full">
                                <div
                                    className="bg-white border p-4 rounded-lg shadow-lg hover:border-gray-300 transition-all duration-400">
                                    <h2 className="font-Poppins font-semibold text-[#232F3B] text-[22px]">CIO</h2>
                                    <p className="font-Poppins text-[#4C4D56] text-base">Our mission is simple yet
                                        profound:
                                        to harness the
                                        limitless
                                        capabilities of Artificial Intelligence (AI) and apply them to solve real-world
                                        challenges.
                                        We believe that the future is defined by innovation, and dedicated to helping
                                        you
                                        shape.</p>
                                </div>
                            </div>
                            <div className="w-20 border-b-2 border-gray-300 md:block hidden"/>
                            <div className="md:w-auto w-full">
                                <img
                                    src={ctoImg}
                                    alt="Person Image"
                                    width={200}
                                    height={200}
                                    className="h-[205px] object-cover rounded-lg shadow-lg w-full"
                                />
                            </div>
                        </div>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="w-full flex justify-end">
                            <div
                                className="absolute !left-auto w-3 h-3 bg-gray-200 rounded-full mt-1.5 mr-[-7px] start-[6.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        </div>
                        <div className="flex items-center justify-start md:flex-row-reverse flex-col gap-x-6 gap-y-6 mr-6">
                            <div className="flex items-center md:max-w-xs w-full max-w-full">
                                <div
                                    className="bg-white border p-4 rounded-lg shadow-lg hover:border-gray-300 transition-all duration-400">
                                    <h2 className="font-Poppins font-semibold text-[#232F3B] text-[22px]">CTO</h2>
                                    <p className="font-Poppins text-[#4C4D56] text-base">Our mission is simple yet
                                        profound:
                                        to harness the
                                        limitless
                                        capabilities of Artificial Intelligence (AI) and apply them to solve real-world
                                        challenges.
                                        We believe that the future is defined by innovation, and dedicated to helping
                                        you
                                        shape.</p>
                                </div>
                            </div>
                            <div className="w-20 border-b-2 border-gray-300 md:block hidden"/>
                            <div className="md:w-auto w-full">
                                <img
                                    src={ctoImg}
                                    alt="Person Image"
                                    width={200}
                                    height={200}
                                    className="h-[205px] object-cover rounded-lg shadow-lg w-full"
                                />
                            </div>
                        </div>
                    </li>
                    <li className="ms-4 mb-10">
                        <div className="w-full flex justify-end">
                            <div
                                className="absolute !left-auto w-3 h-3 bg-gray-200 rounded-full mt-1.5 mr-[-7px] start-[6.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        </div>
                        <div className="flex items-center justify-start md:flex-row-reverse flex-col gap-x-6 gap-y-6 mr-6">
                            <div className="flex items-center md:max-w-xs max-w-full w-full">
                                <div
                                    className="bg-white border p-4 rounded-lg shadow-lg hover:border-gray-300 transition-all duration-400">
                                    <h2 className="font-Poppins font-semibold text-[#232F3B] text-[22px]">COO</h2>
                                    <p className="font-Poppins text-[#4C4D56] text-base">Our mission is simple yet
                                        profound:
                                        to harness the
                                        limitless
                                        capabilities of Artificial Intelligence (AI) and apply them to solve real-world
                                        challenges.
                                        We believe that the future is defined by innovation, and dedicated to helping
                                        you
                                        shape.</p>
                                </div>
                            </div>
                            <div className="w-20 border-b-2 border-gray-300 md:block hidden"/>
                            <div className="md:w-auto w-full">
                                <img
                                    src={ctoImg}
                                    alt="Person Image"
                                    width={200}
                                    height={200}
                                    className="h-[205px] object-cover rounded-lg shadow-lg w-full"
                                />
                            </div>
                        </div>
                    </li>
                    <li className="ms-4">
                        <div className="w-full flex justify-end">
                            <div
                                className="absolute !left-auto w-3 h-3 bg-gray-200 rounded-full mt-1.5 mr-[-7px] start-[6.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        </div>
                        <div className="flex items-center justify-start md:flex-row-reverse flex-col gap-x-6 gap-y-6 mr-6">
                            <div className="flex items-center md:max-w-xs max-w-full w-full">
                                <div
                                    className="bg-white border p-4 rounded-lg shadow-lg hover:border-gray-300 transition-all duration-400">
                                    <h2 className="font-Poppins font-semibold text-[#232F3B] text-[22px]">CSO</h2>
                                    <p className="font-Poppins text-[#4C4D56] text-base">Our mission is simple yet
                                        profound:
                                        to harness the
                                        limitless
                                        capabilities of Artificial Intelligence (AI) and apply them to solve real-world
                                        challenges.
                                        We believe that the future is defined by innovation, and dedicated to helping
                                        you
                                        shape.</p>
                                </div>
                            </div>
                            <div className="w-20 border-b-2 border-gray-300 md:block hidden"/>
                            <div className="md:w-auto w-full">
                                <img
                                    src={ctoImg}
                                    alt="Person Image"
                                    width={200}
                                    height={200}
                                    className="h-[205px] object-cover rounded-lg shadow-lg w-full"
                                />
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
            <Footer/>
        </>
    )
}

export default Timeline
