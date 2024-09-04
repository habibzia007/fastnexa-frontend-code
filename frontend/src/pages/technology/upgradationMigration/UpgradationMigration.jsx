import React from "react";
import Navbar from "../../../components/Navbar";
import OurClients from "../../../components/OurClients";
import Testimonial from "../../../components/testimonial/Testimonial";
import ContactUs from "../../../components/ContactUs";
import Footer from "../../../components/Footer";
import Banner from "../../../components/technologyCards/Banner";
import TechnologyStack from "../../../components/TechnologyStack";
import IntroMigration from "./IntroMigration.jsx";
import AboutUsServicesMigration from "./AboutUsServicesMigration.jsx";
import AboutUsServices from "../../../components/about/services/AboutUsServices.jsx";

const UpgradationMigration = () => {
  return (
    <main className="w-full bg-[#FFFFFF]">
      <Navbar />
      <Banner text={"Upgradation & Migration"} />
      <IntroMigration />
      <AboutUsServicesMigration />
        {/*<AboutUsServices />*/}
      <TechnologyStack />
      <Testimonial />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default UpgradationMigration;
