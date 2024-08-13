import React from "react";
import Navbar from "../../../components/Navbar";
import OurClients from "../../../components/OurClients";
import Testimonial from "../../../components/testimonial/Testimonial";
import ContactUs from "../../../components/ContactUs";
import Footer from "../../../components/Footer";
import AboutUsServices from "../../../components/about/services/AboutUsServices";
import Banner from "../../../components/technologyCards/Banner";
import TechnologyStackSoftware from "./TechnologyStackSoftware.jsx";
import IntroSoftware from "./IntroSoftware.jsx";
import AboutUsServicesSoftware from "./AboutUsServicesSoftware.jsx";

const SoftwareProductDevelopment = () => {
  return (
    <main className="h-[4784px] w-full bg-[#FFFFFF]">
      <Navbar />
      <Banner text={"Software Product Development"} />
      <IntroSoftware />
      <AboutUsServicesSoftware />
      <TechnologyStackSoftware />
      <Testimonial />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default SoftwareProductDevelopment;
