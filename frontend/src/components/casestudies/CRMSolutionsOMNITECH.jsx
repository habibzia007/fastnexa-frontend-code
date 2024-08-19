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
import SoftwareTrendsContent from "../blogsContent/SoftwareTrendsContent.jsx";
import CRMSolutionsOMNITECHContent from "../caseStudyContent/CRMSolutionsOMNITECHContent.jsx";
// import SoftwareDevelopmentServices from "../../pages/services/softwareDevelopment/SoftwareDevelopmentServices.jsx";
// import Intro from "../../pages/services/softwareDevelopment/Intro.jsx";


const CRMSolutionsOMNITECH = () => {
    return (
        <main className=" w-full bg-[#FFFFFF]">
            <Navbar />
            <Banner text={"CRM solutions to OMNITECH"} />
            <CRMSolutionsOMNITECHContent />
            <TechnologyStack />
            <ContactUs />
            <Footer />
        </main>
    );
};

export default CRMSolutionsOMNITECH;
