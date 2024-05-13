import React from "react";
import Navbar from "../../components/Navbar";
import ServicesBanner from "../../components/services/ServicesBanner" ;
import OfferedServices from "../../components/services/whatWeProvide/WhatWeProvide"
import ContactExpertTeam from "../../components/services/contactExpertTeam/ContactExpertTeam";
import FullServiceWebsite from "../../components/services/fullServiceWebsite/FullServiceWebsite";
import Testimonial from "../../components/testimonial/Testimonial";
import OurClients from "../../components/OurClients";
import ContactUs from "../../components/contactUs/ContactUs";
import Footer from "../../components/Footer";




const Services = () => {
  return (
    <main className="h-[4784px] w-full bg-[#FFFFFF]">
      <Navbar />
      <ServicesBanner />
      <OfferedServices />
      <ContactExpertTeam />
      <FullServiceWebsite />
      <Testimonial/>
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Services;
