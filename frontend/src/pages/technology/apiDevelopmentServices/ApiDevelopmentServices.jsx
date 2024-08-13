import React from "react";
import Navbar from "../../../components/Navbar";
import OurClients from "../../../components/OurClients";
import Testimonial from "../../../components/testimonial/Testimonial";
import ContactUs from "../../../components/ContactUs";
import Footer from "../../../components/Footer";
import AboutUsServices from "../../../components/about/services/AboutUsServices";
import Banner from "../../../components/technologyCards/Banner";
import TechnologyStackApiDevelopment from "./TechnologyStackApiDevelopment.jsx";
import IntroApiDevelopment from "./IntroApiDevelopment.jsx";
import AboutUsServicesApi from "./AboutUsServicesApi.jsx";

const ApiDevelopmentServices = () => {
  return (
    <main className="h-[4784px] w-full bg-[#FFFFFF]">
      <Navbar />
      <Banner text={"API Development Services"} />
      <IntroApiDevelopment />
      <AboutUsServicesApi />
      <TechnologyStackApiDevelopment />
      <Testimonial />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default ApiDevelopmentServices;
