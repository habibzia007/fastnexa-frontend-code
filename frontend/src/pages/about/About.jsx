import Navbar from "../../components/Navbar";
import OurClients from "../../components/OurClients";
import ContactUs from "../../components/ContactUs.jsx";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner.jsx";
import AboutUs from "../../components/about/aboutUs/AboutUs";
import Team from "../../components/about/team/Team";
import AboutUsMainServices from "../../components/about/services/AboutUsMainServices.jsx";

const About = () => {
  return (
    <main className="w-full bg-[#FFFFFF]">
      <Navbar />
      <Banner text={"About Us"} />
      <AboutUs />
      <Team />
      <AboutUsMainServices />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default About;
