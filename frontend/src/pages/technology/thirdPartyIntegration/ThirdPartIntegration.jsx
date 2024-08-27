import React from "react";
import Navbar from "../../../components/Navbar";
import OurClients from "../../../components/OurClients";
import Testimonial from "../../../components/testimonial/Testimonial";
import ContactUs from "../../../components/ContactUs";
import Footer from "../../../components/Footer";
import Banner from "../../../components/technologyCards/Banner";
import TechnologyStack from "../../../components/TechnologyStack";
import IntroThirdParty from "./IntroThirdParty.jsx";
import AboutUsServicesThirdParty from "./AboutUsServicesThirdParty.jsx";

const ThirdPartyIntegration = () => {
  return (
    <main className="w-full bg-[#FFFFFF]">
      <Navbar />
      <Banner text={"Third Party Integration"} />
      <IntroThirdParty />
      <AboutUsServicesThirdParty />
      <TechnologyStack />
      <Testimonial />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default ThirdPartyIntegration;
