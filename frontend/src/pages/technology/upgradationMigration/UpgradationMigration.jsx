import React from "react";
import Navbar from "../../../components/Navbar";
import OurClients from "../../../components/OurClients";
import Testimonial from "../../../components/testimonial/Testimonial";
import ContactUs from "../../../components/ContactUs";
import Footer from "../../../components/Footer";
import Banner from "../../../components/technologyCards/Banner";
import TechnologyStackMigration from "./TechnologyStackMigration.jsx";
import IntroMigration from "./IntroMigration.jsx";
import AboutUsServicesMigration from "./AboutUsServicesMigration.jsx";

const UpgradationMigration = () => {
  return (
    <main className="h-[4784px] w-full bg-[#FFFFFF]">
      <Navbar />
      <Banner text={"Upgradation & Migration"} />
      <IntroMigration />
      <AboutUsServicesMigration />
      <TechnologyStackMigration />
      <Testimonial />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default UpgradationMigration;
