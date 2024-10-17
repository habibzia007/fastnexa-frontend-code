import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import WhatWeProvide from "../../components/whatWeProvide/WhatWeProvide";
import OurClients from "../../components/OurClients";
import ChooseUs from "../../components/chooseUs/ChooseUs";
import TechnologyStack from "../../components/TechnologyStack";
import Testimonial from "../../components/testimonial/Testimonial";
import Blog from "../../components/blog/Blogs";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <main className=" w-full bg-[#FFFFFF] overflow-hidden">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhatWeProvide />
      <OurClients />
      <ChooseUs />
      <TechnologyStack />
      <Testimonial />
      <Blog />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Home;
