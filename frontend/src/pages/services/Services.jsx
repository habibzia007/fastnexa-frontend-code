import Navbar from "../../components/Navbar";
import ContactExpertTeam from "../../components/services/contactExpertTeam/ContactExpertTeam";
import FullServiceWebsite from "../../components/services/fullServiceWebsite/FullServiceWebsite";
import Testimonial from "../../components/testimonial/Testimonial";
import OurClients from "../../components/OurClients";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import WhatWeProvide from "../../components/whatWeProvide/WhatWeProvide.jsx";


const Services = () => {
    return (
        <main className="w-full bg-[#FFFFFF]">
            <Navbar/>
            <Banner text={'Services'}/>
            <WhatWeProvide/>
            <ContactExpertTeam/>
            <FullServiceWebsite/>
            <Testimonial/>
            <OurClients/>
            <ContactUs/>
            <Footer/>
        </main>
    );
};

export default Services;
