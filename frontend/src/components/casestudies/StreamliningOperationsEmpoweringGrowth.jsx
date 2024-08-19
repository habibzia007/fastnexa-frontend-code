import React from "react";
import Navbar from "../Navbar.jsx";
// import Intro from "../../../components/servicesCards/intro/Intro";
// import TechnologyStack from "../TechnologyStack.jsx";
// import OurClients from "../OurClients.jsx";
// import Testimonial from "../testimonial/Testimonial.jsx";
// import ContactUs from "../ContactUs.jsx";
import Footer from "../Footer.jsx";
// import AboutUsServices from "../../../components/about/services/AboutUsServices";
import Banner from "../caseStudy/Banner.jsx";
import TechnologyStack from "../TechnologyStack.jsx";
import ContactUs from "../ContactUs.jsx";
import HarnessingPowerContent from "../blogsContent/HarnessingPowerContent.jsx";
import SteamOperationContent from "../caseStudyContent/SteamOperationContent.jsx";
// import SoftwareDevelopmentServices from "../../pages/services/softwareDevelopment/SoftwareDevelopmentServices.jsx";
// import Intro from "../../pages/services/softwareDevelopment/Intro.jsx";


const StreamliningOperationsEmpoweringGrowth = () => {
    return (
        <main className=" w-full bg-[#FFFFFF]">
            <Navbar />
            <Banner text={"Streamlining Operations and Empowering Growth: FAST NEXA's HRMS Solution for Replaste"} />
            <SteamOperationContent />
            <TechnologyStack />
            <ContactUs />
            <Footer />
        </main>
    );
};

export default StreamliningOperationsEmpoweringGrowth;
