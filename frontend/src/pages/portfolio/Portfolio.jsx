// import React from 'react';
import Navbar from "../../components/Navbar.jsx";
import Banner from "../../components/Banner.jsx";
import Footer from "../../components/Footer.jsx";
import TechnologyStack from "../../components/TechnologyStack.jsx";
import ContactUs from "../../components/ContactUs.jsx";
import OurClients from "../../components/OurClients.jsx";
import React from "react";
import Testimonial from "../../components/testimonial/Testimonial.jsx";
import Intro from "./Intro.jsx";

function Portfolio() {
    return (
        <main className="w-full bg-[#FFFFFF]">
            <Navbar/>
            <Banner text={"Portfolio"}/>
            <Intro />
            <OurClients />
            <Testimonial />
            <TechnologyStack />
            <ContactUs />
            <Footer/>
        </main>
    );
}

export default Portfolio;