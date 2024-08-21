import ctoImg from "../../../assets/images/abdulla.jpg";
import foundersImage from "../../../assets/images/ghulam-kusar.jpeg.jpg";
import abdullah from "../../../assets/images/abdulla.jpg";
import shahzad from "./faisalShehzad.jpg";
import fatima from "../../../assets/images/fatima.jpg";
import Murtaza from "../../../assets/images/Murtaza.jpg";
import fizzaAbdulla from "./fizzaAbdulla.png";
import Navbar from "../../Navbar.jsx";
import Footer from "../../Footer.jsx";

const teamMembers = [
    {
        url: abdullah,
        name: "Abdullah Faisal",
        position: "Chief Technology Officer (CTO), FastNexa",
        description: "As the CTO, Abdullah Faisal leads FAST NEXA's technological innovation, guiding the development of cutting-edge solutions that meet the evolving needs of our clients. With a passion for technology and a forward-thinking approach, Abdullah is dedicated to ensuring that FAST NEXA remains a leader in technological advancements."
    },
    {
        url: fizzaAbdulla,
        name: "Fizzah Abdullah",
        position: "Chief Information Officer (CIO), FastNexa",
        description: "Fizzah Abdullah oversees the company's information systems and data management strategies. As CIO, she ensures that FAST NEXA's IT infrastructure is robust, secure, and scalable, supporting the company's growth and delivering seamless service to our clients. Her expertise in information management is key to driving efficiency and innovation across the organization."
    },
    {
        url: fatima,
        name: "Fatima Abdullah",
        position: "Chief Operating Officer (COO), FastNexa",
        description: "Fatima Abdullah plays a critical role in overseeing FAST NEXA's day-to-day operations, ensuring that all departments work in harmony to achieve the company's objectives. As COO, she brings a strategic approach to operational management, focusing on efficiency, quality, and customer satisfaction. Fatima's leadership is instrumental in maintaining the company's high standards of excellence."
    },
    {
        url: Murtaza,
        name: "Murtaza",
        position: "Chief Strategy Officer (CSO), FastNexa",
        description: "Murtaza is responsible for shaping FAST NEXA's strategic direction, ensuring that the company remains competitive and responsive to market trends. As CSO, he oversees the development and implementation of key initiatives that drive growth and innovation. Murtaza's ability to anticipate market changes and his commitment to strategic excellence make him a vital part of the leadership team."
    }
];

const Timeline = () => {
    return (
        <>
            <Navbar/>
            <div className="flex flex-col items-center max-w-5xl mx-auto px-3 pb-28 pt-2">
                <h3 className="font-Poppins text-[20px] sm:text-[42px] font-bold leading-[41px] sm:leading-[61.08px] tracking-[1px] lg:mt-[50px] text-center">
                    Meet Our Leadership
                </h3>
                <p className="font-Poppins text-xs sm:text-[16px] leading-[22px] sm:leading-[30px] text-[#747474] font-normal text-center mt-[20px] sm:mt-[20px]">
                    At FAST NEXA, our leadership team brings a wealth of experience, dedication, and expertise, driving our mission to deliver innovative solutions and exceptional service. With a strong commitment to excellence, each member of our team plays a pivotal role in shaping the future of our company and ensuring that we remain at the forefront of our industry.
                </p>
                <div className="relative mt-16">
                    <figure className="md:flex bg-slate-100 rounded-lg max-w-3xl mx-auto p-8 md:p-0 shadow-xl">
                        <img
                            className="w-48 h-48 md:w-48 md:h-auto md:rounded-l-lg object-cover md:rounded-none rounded-full mx-auto"
                            src={foundersImage || null} alt="Jesse Pinkman" width="384" height="512"/>
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                                <p className="font-Poppins text-xs sm:text-[16px] leading-[22px] sm:leading-[28px] text-[#747474] font-normal lg:text-left text-center">
                                    As the visionary founder of FAST NEXA, Maj Gen Ghulam Mustafa Kausar brings decades of leadership and strategic insight to the company. With a distinguished military career and a deep understanding of technology and security, he has laid the foundation for FAST NEXA&apos;s commitment to innovation and excellence. His leadership continues to inspire the team to push boundaries and achieve new heights.
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-[#FF6500]/70 font-Poppins font-semibold text-lg">
                                    Maj Gen Ghulam Mustafa Kausar (R) Hilal-i-Imtiaz (M)
                                </div>
                                <div className="text-[#232F3B] font-Poppins font-semibold text-base">
                                    Founder, FastNexa
                                </div>
                            </figcaption>
                        </div>
                    </figure>

                    <div className="flex justify-center pt-3 relative">
                        <div className="w-[2px] h-28 bg-gray-300"/>
                        <div
                            className="absolute !left-auto bottom-0 w-3 h-3 bg-gray-200 rounded-full mt-1.5 mr-[-0.5px] start-[6.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    </div>

                    <figure className="md:flex bg-slate-100 rounded-lg max-w-3xl mx-auto px-4 py-8  md:p-0 shadow-xl mt-3">
                        <img
                            className="w-48 h-48 md:w-48 md:h-auto md:rounded-l-lg object-cover md:rounded-none rounded-full mx-auto"
                            src={shahzad || null} alt="Walter White" width="384" height="512"/>
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                                <p className="font-Poppins text-xs sm:text-[16px] leading-[22px] sm:leading-[28px] text-[#747474] font-normal lg:text-left text-center">
                                    Faisal Shahzad is the driving force behind FAST NEXA&apos;s operational and cybersecurity strategies. As the vCEO and vCISO, Faisal combines his extensive experience in executive leadership with a deep expertise in cybersecurity. His dual role ensures that FAST NEXA not only meets its business goals but also maintains the highest standards of security and risk management.
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-[#FF6500]/70 font-Poppins font-semibold text-lg">
                                    Faisal Shahzad
                                </div>
                                <div className="text-[#232F3B] font-Poppins font-semibold text-base">
                                    Fractional CEO / vCISO, FastNexa
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                </div>
                <ol className="relative border-s-2 border-gray-300 lg:ml-[15%] ml-[5%]">
                    {teamMembers.map((member, index) => (
                        <li key={index} className="mb-10 mt-20">
                            <div className="flex items-center -ml-[6.5px]">
                                <div className="flex justify-start pt-3 relative">
                                    <div className="md:w-20 w-14 border-b-2 border-gray-300"/>
                                    <div
                                        className="absolute !left-0 bottom-0 w-3 h-3 bg-gray-200 rounded-full top-[6.5px] mr-[-0.5px] start-[6.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                </div>
                                <figure
                                    className="md:flex bg-slate-100 rounded-lg max-w-3xl mx-auto px-4 py-8 md:p-0 shadow-xl">
                                    <img
                                        className="w-48 h-48 md:w-48 md:h-auto md:rounded-l-lg object-cover md:rounded-none rounded-full mx-auto"
                                        src={member.url || null} alt={member.name} width="384" height="512"/>
                                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                        <blockquote>
                                            <p className="font-Poppins text-xs sm:text-[16px] leading-[22px] sm:leading-[28px] text-[#747474] font-normal lg:text-left text-center">
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
