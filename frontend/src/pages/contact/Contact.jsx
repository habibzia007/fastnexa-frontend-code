import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import Banner from "../../components/Banner.jsx";
import QASection from "../../components/contact/QASection.jsx"
import AttentionToEveryClient from "../../components/contact/AttentionClient.jsx";
import MapSection from "../../components/contact/MapSection.jsx";

const About = () => {
  return (
    <main className="w-full bg-[#FFFFFF]">
      <Navbar />
      <Banner text={"Contact Us"} />
      <AttentionToEveryClient/>
      <QASection/>
      <MapSection/>
      <Footer />
    </main>
  );
};

export default About;
