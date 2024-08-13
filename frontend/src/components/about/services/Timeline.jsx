import ctoImg from "../../../assets/images/abdulla.jpg";
import Navbar from "../../Navbar.jsx";
import Footer from "../../Footer.jsx";

const teamMembers = [
    {
        name: "Hank Schrader",
        position: "CIO, Company Name",
        description: "Our mission is simple yet profound: to harness the limitless capabilities of Artificial Intelligence (AI) and apply them to solve real-world challenges. We believe that the future is defined by innovation."
    },
    {
        name: "Walter White Jr.",
        position: "CTO, Company Name",
        description: "Our mission is simple yet profound: to harness the limitless capabilities of Artificial Intelligence (AI) and apply them to solve real-world challenges. We believe that the future is defined by innovation."
    },
    {
        name: "Saul Goodman",
        position: "COO, Company Name",
        description: "Our mission is simple yet profound: to harness the limitless capabilities of Artificial Intelligence (AI) and apply them to solve real-world challenges. We believe that the future is defined by innovation."
    },
    {
        name: "Gus Fring",
        position: "CSO, Company Name",
        description: "Our mission is simple yet profound: to harness the limitless capabilities of Artificial Intelligence (AI) and apply them to solve real-world challenges. We believe that the future is defined by innovation."
    }
];

const Timeline = () => {
    return (
        <>
            <Navbar/>
            <div className="flex flex-col items-center max-w-5xl mx-auto px-3 pb-28 pt-2">
                <h3 className="font-Poppins text-[20px] sm:text-[42px] font-bold leading-[41px] sm:leading-[61.08px] tracking-[1px] lg:mt-[50px] text-center">
                    Our Team
                </h3>
                <div className="relative mt-16">
                    <figure className="md:flex bg-slate-100 rounded-lg max-w-2xl mx-auto p-8 md:p-0 shadow-xl">
                        <img
                            className="w-48 h-48 md:w-48 md:h-auto md:rounded-l-lg object-cover md:rounded-none rounded-full mx-auto"
                            src={ctoImg} alt="Jesse Pinkman" width="384" height="512"/>
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                                <p className="font-Poppins text-[#4C4D56] text-base">
                                    Our mission is simple yet profound: to harness the limitless capabilities of
                                    Artificial Intelligence (AI) and apply them to solve real-world challenges. We
                                    believe that the future is defined by innovation.
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-[#FF6500]/70 font-Poppins font-semibold text-lg">
                                    Jesse Pinkman
                                </div>
                                <div className="text-[#232F3B] font-Poppins font-semibold text-base">
                                    CM, Company Name
                                </div>
                            </figcaption>
                        </div>
                    </figure>

                    <div className="flex justify-center pt-3 relative">
                        <div className="w-[2px] h-28 bg-gray-300"/>
                        <div
                            className="absolute !left-auto bottom-0 w-3 h-3 bg-gray-200 rounded-full mt-1.5 mr-[-0.5px] start-[6.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    </div>

                    <figure className="md:flex bg-slate-100 rounded-lg max-w-2xl mx-auto p-8 md:p-0 shadow-xl mt-3">
                        <img
                            className="w-48 h-48 md:w-48 md:h-auto md:rounded-l-lg object-cover md:rounded-none rounded-full mx-auto"
                            src={ctoImg} alt="Walter White" width="384" height="512"/>
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                                <p className="font-Poppins text-[#4C4D56] text-base">
                                    Our mission is simple yet profound: to harness the limitless capabilities of
                                    Artificial Intelligence (AI) and apply them to solve real-world challenges. We
                                    believe that the future is defined by innovation.
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-[#FF6500]/70 font-Poppins font-semibold text-lg">
                                    Walter White
                                </div>
                                <div className="text-[#232F3B] font-Poppins font-semibold text-base">
                                    BD/CEO, Company Name
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                </div>
                <ol className="relative border-s-2 border-gray-300 md:ml-[15%] ml-[5%]">
                    {teamMembers.map((member, index) => (
                        <li key={index} className="mb-10 mt-20">
                            <div className="flex items-center -ml-[6.5px]">
                                <div className="flex justify-start pt-3 relative">
                                    <div className="md:w-20 w-14 border-b-2 border-gray-300"/>
                                    <div
                                        className="absolute !left-0 bottom-0 w-3 h-3 bg-gray-200 rounded-full top-[6.5px] mr-[-0.5px] start-[6.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                </div>
                                <figure className="md:flex bg-slate-100 rounded-lg max-w-2xl mx-auto px-4 py-8 md:p-0 shadow-xl">
                                    <img
                                        className="w-48 h-48 md:w-48 md:h-auto md:rounded-l-lg object-cover md:rounded-none rounded-full mx-auto"
                                        src={ctoImg} alt={member.name} width="384" height="512"/>
                                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                        <blockquote>
                                            <p className="font-Poppins text-[#4C4D56] text-base">
                                                {member.description}
                                            </p>
                                        </blockquote>
                                        <figcaption className="font-medium">
                                            <div className="text-[#FF6500]/70 font-Poppins font-semibold text-lg">
                                                {member.name}
                                            </div>
                                            <div className="text-[#232F3B] font-Poppins font-semibold text-base">
                                                {member.position}
                                            </div>
                                        </figcaption>
                                    </div>
                                </figure>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
            <Footer/>
        </>
    )
}

export default Timeline;
