import React from "react";
import Navbar from "../../../components/Navbar";
import Intro from "../../../components/servicesCards/intro/Intro";
import TechnologyStack from "../../../components/TechnologyStack";
import OurClients from "../../../components/OurClients";
import Testimonial from "../../../components/testimonial/Testimonial";
import ContactUs from "../../../components/ContactUs";
import Footer from "../../../components/Footer";
import AboutUsServices from "../../../components/about/services/AboutUsServices";
import Banner from "../../../components/servicesCards/Banner";

const SoftwareDevelopment = () => {
  return (
    <main className="h-[4784px] w-full bg-[#FFFFFF]">
      <Navbar />
      <Banner text={"Software Development"} />
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

export default SoftwareDevelopment;
