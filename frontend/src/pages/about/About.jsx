import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import WhatWeProvide from "../../components/whatWeProvide/WhatWeProvide";
import OurClients from "../../components/OurClients";
import ChooseUs from "../../components/chooseUs/ChooseUs";
import TechnologyStack from "../../components/TechnologyStack";
import Testimonial from "../../components/testimonial/Testimonial";
import Blog from "../../components/blog/Blogs.jsx";
import ContactUs from "../../components/ContactUs.jsx";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner.jsx";
import AboutUs from "../../components/about/aboutUs/AboutUs";
import Team from "../../components/about/team/Team";
import FoundersMessage from "../../components/about/foundersMessage/FoundersMessage.jsx";
import AboutUsMainServices from "../../components/about/services/AboutUsMainServices.jsx";

const About = () => {
  return (
    <main className="w-full bg-[#FFFFFF]">
      <Navbar />
      <Banner text={"About Us"} />
      <AboutUs />
      <Team />
      <AboutUsMainServices />
      <FoundersMessage />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default About;
