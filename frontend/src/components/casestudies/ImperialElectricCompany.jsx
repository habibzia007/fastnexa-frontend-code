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
import CyberDigitalContent from "../blogsContent/CyberDigitalContent.jsx";
import ElectricCompany from "../caseStudyContent/ElectricCompany.jsx";
// import SoftwareDevelopmentServices from "../../pages/services/softwareDevelopment/SoftwareDevelopmentServices.jsx";
// import Intro from "../../pages/services/softwareDevelopment/Intro.jsx";


const ImperialElectricCompany = () => {
    return (
        <main className=" w-full bg-[#FFFFFF]">
            <Navbar />
            <Banner text={"The Imperial Electric Company (Pvt) Limited (IEC)"} />
            <ElectricCompany />
            <TechnologyStack />
            <ContactUs />
            <Footer />
        </main>
    );
};

export default ImperialElectricCompany;
