import React from "react";
import Navbar from "../Navbar.jsx";
// import Intro from "../../../components/servicesCards/intro/Intro";
// import TechnologyStack from "../TechnologyStack.jsx";
// import OurClients from "../OurClients.jsx";
// import Testimonial from "../testimonial/Testimonial.jsx";
// import ContactUs from "../ContactUs.jsx";
import Footer from "../Footer.jsx";
// import AboutUsServices from "../../../components/about/services/AboutUsServices";
import TechnologyStack from "../TechnologyStack.jsx";
import ContactUs from "../ContactUs.jsx";
import HarnessingPowerContent from "../blogsContent/HarnessingPowerContent.jsx";
import ClearVision from "../caseStudyContent/ClearVision.jsx";
import Banner from "../caseStudy/Banner.jsx";
// import SoftwareDevelopmentServices from "../../pages/services/softwareDevelopment/SoftwareDevelopmentServices.jsx";
// import Intro from "../../pages/services/softwareDevelopment/Intro.jsx";


const ClearVisionDustyEnvironment = () => {
    return (
        <main className=" w-full bg-[#FFFFFF]">
            <Navbar />
            <Banner text={"A Clear Vision for a Dusty Environment: FAST NEXA's Surveillance Solution for Commander Stone"} />
            <ClearVision />
            <TechnologyStack />
            <ContactUs />
            <Footer />
        </main>
    );
};

export default ClearVisionDustyEnvironment;
