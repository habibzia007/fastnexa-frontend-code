import React from "react";
import Navbar from "../../../components/Navbar";
import Intro from "../../../components/technologyCards/intro/Intro";
import TechnologyStack from "../../../components/TechnologyStack";
import OurClients from "../../../components/OurClients";
import Testimonial from "../../../components/testimonial/Testimonial";
import ContactUs from "../../../components/ContactUs";
import Footer from "../../../components/Footer";
import AboutUsServices from "../../../components/about/services/AboutUsServices";
import Banner from "../../../components/technologyCards/Banner";

const ThirdPartyIntegration = () => {
  return (
    <main className="h-[4784px] w-full bg-[#FFFFFF]">
      <Navbar />
      <Banner text={"Third Party Integration"} />
      <Intro />
      <AboutUsServices />
      <TechnologyStack />
      <Testimonial />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default ThirdPartyIntegration;
