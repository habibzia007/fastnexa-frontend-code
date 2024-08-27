import React from "react";
import Navbar from "../../../components/Navbar";
// import Intro from "../../../components/servicesCards/intro/Intro";
import TechnologyStack from "../../../components/TechnologyStack";
import OurClients from "../../../components/OurClients";
import Testimonial from "../../../components/testimonial/Testimonial";
import ContactUs from "../../../components/ContactUs";
import Footer from "../../../components/Footer";
// import AboutUsServices from "../../../components/about/services/AboutUsServices";
import Banner from "../../../components/servicesCards/Banner";
import Intro from "./Intro.jsx";
// import BusinessDisasterServics from "./BusinessDisasterServics.jsx";
import HumanResourceServices from "./HumanResourceServices.jsx";

const HumanResource = () => {
    return (
        <main className="w-full bg-[#FFFFFF]">
            <Navbar />
            <Banner text={"Human Resource Augmentation"} />
            <Intro />
            <HumanResourceServices />
            <TechnologyStack />
            <Testimonial />
            <OurClients />
            <ContactUs />
            <Footer />
        </main>
    );
};

export default HumanResource;
