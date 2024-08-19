import Navbar from "../../../components/Navbar.jsx";
import sonicwall from "../../../assets/images/Sonic-Wall.png";
import trellix from "../../../assets/images/trellix-logo.svg";
import aws from "../../../assets/images/Amazon-Web-Services.png";
import googlecloud from "../../../assets/images/google-cloud.png";
import lenovo from "../../../assets/images/Lenovo_Logo.png";
import Footer from "../../../components/Footer.jsx";

function Alliances() {
    return (
        <>
            <Navbar/>
            <div className="flex w-full mt-[5rem] max-w-[1130px] mx-auto px-3">
                <div className="flex-1 flex flex-col">
                    <div className="flex flex-col mb-10">
                        <h1 className="font-Poppins font-semibold text-[#232F3B] text-xl md:text-2xl leading-7 lg:text-4xl lg:leading-tight text-left">
                            Our Trusted Technology Alliances
                        </h1>
                        <p className="font-Poppins md:text-base text-xs text-gray-700  md:leading-7 leading-6 mt-3">
                            At FAST NEXA, we are committed to delivering the highest quality services and products by
                            partnering with some of the most innovative companies in the industry. Our strategic
                            alliances enable us to integrate cutting-edge technologies into our solutions, ensuring our
                            clients stay ahead of the competition. Below are some of our key partners:
                        </p>
                    </div>
                    <div className="flex flex-col mb-10">
                        <h1 className="font-Poppins font-semibold text-xl lg:text-2xl leading-tight mt-2 mb-2 text-[#232F3B]">
                            SonicWall
                        </h1>
                        <p className="font-Poppins md:text-base text-xs text-gray-700  md:leading-7 leading-6">
                            SonicWall is a global leader in advanced cybersecurity solutions. Our partnership with
                            SonicWall enables FAST NEXA to offer robust security solutions that protect businesses from
                            cyber threats in real-time.
                        </p>
                        <div className="flex justify-center my-5">
                            <img
                                className="max-w-full h-auto rounded-md md:w-[400px] w-[200px]"
                                src={sonicwall || null}
                                alt="Sonic Wall"
                                width={400}
                                height={100}
                            />
                        </div>
                        <p className="font-Poppins md:text-base text-xs text-gray-700  md:leading-7 leading-6">
                            With SonicWall&apos;s next-gen firewalls and comprehensive network security, we ensure that our clients&apos; data and IT infrastructure are safeguarded against an ever-evolving landscape of cyber risks.
                        </p>
                    </div>
                    <div className="flex flex-col mb-10">
                        <h1 className="font-Poppins font-semibold text-xl lg:text-2xl leading-tight mt-2 mb-2 text-[#232F3B]">
                            Trellix
                        </h1>
                        <p className="font-Poppins md:text-base text-xs text-gray-700  md:leading-7 leading-6">
                            As a key partner in our cybersecurity strategy, Trellix provides cutting-edge threat detection and response capabilities. Through our alliance with Trellix, FAST NEXA leverages advanced AI and machine learning tools to offer unparalleled protection and quick incident response.
                        </p>
                        <div className="flex justify-center my-5">
                            <img
                                className="max-w-full h-auto rounded-md md:w-[250px] w-[140px]"
                                src={trellix || null}
                                alt="Trellix"
                                width={250}
                                height={100}
                            />
                        </div>
                        <p className="font-Poppins md:text-base text-xs text-gray-700  md:leading-7 leading-6">
                            This partnership empowers our clients to stay ahead of potential threats, ensuring their operations remain secure and resilient.
                        </p>
                    </div>
                    <div className="flex flex-col mb-10">
                        <h1 className="font-Poppins font-semibold text-xl lg:text-2xl leading-tight mt-2 mb-2 text-[#232F3B]">
                            AWS (Amazon Web Services)
                        </h1>
                        <p className="font-Poppins md:text-base text-xs text-gray-700  md:leading-7 leading-6">
                            Our partnership with Amazon Web Services (AWS) allows FAST NEXA to deliver cloud solutions that are scalable, reliable, and cost-effective. AWS’s extensive suite of cloud services enables us to offer custom cloud strategies tailored to the unique needs of our clients.
                        </p>
                        <div className="flex justify-center my-5">
                            <img
                                className="max-w-full h-auto rounded-md md:w-[250px] w-[180px]"
                                src={aws || null}
                                alt="AWS"
                                width={250}
                                height={100}
                            />
                        </div>
                        <p className="font-Poppins md:text-base text-xs text-gray-700  md:leading-7 leading-6">
                            Whether it&apos;s cloud migration, data storage, or computing power, AWS provides the backbone for innovative solutions that drive business growth.
                        </p>
                    </div>
                    <div className="flex flex-col mb-10">
                        <h1 className="font-Poppins font-semibold text-xl lg:text-2xl leading-tight mt-2 mb-2 text-[#232F3B]">
                            Google Cloud
                        </h1>
                        <p className="font-Poppins md:text-base text-xs text-gray-700  md:leading-7 leading-6">
                            Google Cloud is synonymous with cutting-edge innovation, and our partnership allows us to harness the power of Google’s cloud platform to deliver robust data analytics, machine learning, and AI-driven solutions.
                        </p>
                        <div className="flex justify-center my-5">
                            <img
                                className="max-w-full h-auto rounded-md md:w-[400px] w-[250px]"
                                src={googlecloud || null}
                                alt="Google Cloud"
                                width={400}
                                height={100}
                            />
                        </div>
                        <p className="font-Poppins md:text-base text-xs text-gray-700  md:leading-7 leading-6">
                            By integrating Google Cloud services, FAST NEXA can provide our clients with tools that transform data into actionable insights, driving efficiency and enabling smarter business decisions.
                        </p>
                    </div>
                    <div className="flex flex-col mb-20">
                        <h1 className="font-Poppins font-semibold text-xl lg:text-2xl leading-tight mt-2 mb-2 text-[#232F3B]">
                            Lenovo
                        </h1>
                        <p className="font-Poppins md:text-base text-xs text-gray-700  md:leading-7 leading-6">
                            FAST NEXA’s alliance with Lenovo enables us to offer top-tier hardware solutions that support our clients&apos; IT infrastructure needs. Lenovo’s range of reliable and high-performance devices ensures that our clients have the right tools to stay productive and efficient.
                        </p>
                        <div className="flex justify-center my-5">
                            <img
                                className="max-w-full h-auto rounded-md md:w-[300px] w-[170px]"
                                src={lenovo || null}
                                alt="Lenovo"
                                width={300}
                                height={100}
                            />
                        </div>
                        <p className="font-Poppins md:text-base text-xs text-gray-700  md:leading-7 leading-6">
                            Together with Lenovo, we bring robust, secure, and scalable computing solutions to businesses of all sizes.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Alliances;