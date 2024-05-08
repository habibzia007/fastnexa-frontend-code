import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import WhatWeProvide from "../../components/whatWeProvide/WhatWeProvide";
import OurClients from "../../components/OurClients";
import ChooseUs from "../../components/chooseUs/ChooseUs";
import TechnologyStack from "../../components/TechnologyStack";
import Testimonial from "../../components/testimonial/Testimonial";
import Blog from "../../components/blog/Blog";
import ContactUs from "../../components/contactUs/ContactUs";
import Footer from "../../components/Footer";
import AboutBanner from "../../components/about/AboutBanner";
import AboutUs from "../../components/about/aboutUs/AboutUs";
import Team from "../../components/about/team/Team";
import AboutUsServices from "../../components/about/services/AboutUsServices";

const About = () => {
  return (
    <main className="h-[4784px] w-full bg-[#FFFFFF]">
      <Navbar />
      <AboutBanner />
      <AboutUs />
      <Team />
      <AboutUsServices/>
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default About;
