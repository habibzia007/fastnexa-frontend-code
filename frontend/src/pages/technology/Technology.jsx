import React from "react";
import Navbar from "../../components/Navbar";
import Intro from "../../components/technology/intro/Intro";
import Customise from "../../components/technology/customise/Customise";
import OurClients from "../../components/OurClients";
import Testimonial from "../../components/testimonial/Testimonial";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import IntroCard from "../../components/technology/introCard/IntroCard";
import Banner from "../../components/Banner";

const Technology = () => {
  return (
    <main className="w-full bg-[#FFFFFF]">
      <Navbar />
      <Banner text={"Technology"} />
      <Intro />
      <IntroCard />
      <Customise />
      <Testimonial />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Technology;
