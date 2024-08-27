import React from "react";
import Navbar from "../../../components/Navbar";
// import Intro from "../../../components/servicesCards/intro/Intro";
import TechnologyStack from "../../../components/TechnologyStack";
import OurClients from "../../../components/OurClients";
import Testimonial from "../../../components/testimonial/Testimonial";
import ContactUs from "../../../components/ContactUs";
import Footer from "../../../components/Footer";
import Banner from "../../../components/servicesCards/Banner";
// import AboutUsServices from "../../../components/about/services/AboutUsServices";
import DevOpsServices from "./DevOpsServices.jsx";
import Intro from "./Intro.jsx";

const DevOps = () => {
  return (
    <main className="w-full bg-[#FFFFFF]">
      <Navbar />
      <Banner text={"DevOps"} />
      <Intro />
      <DevOpsServices />
      <TechnologyStack />
      <Testimonial />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default DevOps;
