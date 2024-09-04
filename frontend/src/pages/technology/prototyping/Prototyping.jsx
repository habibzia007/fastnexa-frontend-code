import React from "react";
import Navbar from "../../../components/Navbar";
import OurClients from "../../../components/OurClients";
import Testimonial from "../../../components/testimonial/Testimonial";
import ContactUs from "../../../components/ContactUs";
import Footer from "../../../components/Footer";
import Banner from "../../../components/technologyCards/Banner";
import TechnologyStack from "../../../components/TechnologyStack";
import IntroPrototype from "./IntroPrototype.jsx";
import AboutUsServicesPrototype from "./AboutUsServicesPrototype.jsx";
import AboutUsServices from "../../../components/about/services/AboutUsServices.jsx";

const Prototyping = () => {
  return (
    <main className="w-full bg-[#FFFFFF]">
      <Navbar />
      <Banner text={"Prototyping & UX Designing"} />
      <IntroPrototype />
      <AboutUsServicesPrototype />
        {/*<AboutUsServices />*/}
      <TechnologyStack />
      <Testimonial />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Prototyping;
