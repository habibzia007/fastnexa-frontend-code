import React from 'react'
import Navbar from "../../components/Navbar";
import TechnologyBanner from "../../components/technology/TechnologyBanner" ;
import Intro from "../../components/technology/intro/Intro"
import Customise from '../../components/technology/customise/Customise';
import OurClients from '../../components/OurClients';
import Testimonial from '../../components/testimonial/Testimonial';
import ContactUs from '../../components/contactUs/ContactUs';
import Footer from '../../components/Footer';
import IntroCard from '../../components/technology/introCard/IntroCard';


const Technology = () => {
  return (
    <main className="h-[4784px] w-full bg-[#FFFFFF]">
    <Navbar />
    <TechnologyBanner />
    <Intro />
    <IntroCard />
    <Customise />
    <Testimonial />
    <OurClients />
    <ContactUs />
    <Footer />
  </main>
  )
}

export default Technology