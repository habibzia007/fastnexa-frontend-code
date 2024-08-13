import React from "react";
import Navbar from "../../../components/Navbar";
import OurClients from "../../../components/OurClients";
import Testimonial from "../../../components/testimonial/Testimonial";
import ContactUs from "../../../components/ContactUs";
import Footer from "../../../components/Footer";
import AboutUsServices from "../../../components/about/services/AboutUsServices";
import Banner from "../../../components/technologyCards/Banner";
import TechnologyStackPrototype from "./TechnologyStackPrototype.jsx";
import IntroPrototype from "./IntroPrototype.jsx";
import AboutUsServicesPrototype from "./AboutUsServicesPrototype.jsx";

const Prototyping = () => {
  return (
    <main className="h-[4784px] w-full bg-[#FFFFFF]">
      <Navbar />
      <Banner text={"Prototyping & UX Designing"} />
      <IntroPrototype />
      <AboutUsServicesPrototype />
      <TechnologyStackPrototype />
      <Testimonial />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Prototyping;
