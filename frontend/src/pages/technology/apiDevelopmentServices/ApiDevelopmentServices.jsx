import React from "react";
import Navbar from "../../../components/Navbar";
import OurClients from "../../../components/OurClients";
import Testimonial from "../../../components/testimonial/Testimonial";
import ContactUs from "../../../components/ContactUs";
import Footer from "../../../components/Footer";
import Banner from "../../../components/technologyCards/Banner";
import TechnologyStack from "../../../components/TechnologyStack";
import IntroApiDevelopment from "./IntroApiDevelopment.jsx";
import AboutUsServicesApi from "./AboutUsServicesApi.jsx";
import AboutUsServices from "../../../components/about/services/AboutUsServices";

const ApiDevelopmentServices = () => {
  return (
    <main className="w-full bg-[#FFFFFF]">
      <Navbar />
      <Banner text={"API Development Services"} />
      <IntroApiDevelopment />
      <AboutUsServicesApi />
        {/*<AboutUsServices />*/}
      <TechnologyStack />
      <Testimonial />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default ApiDevelopmentServices;
