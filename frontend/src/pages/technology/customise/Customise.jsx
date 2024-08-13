import Navbar from "../../../components/Navbar";
import OurClients from "../../../components/OurClients";
import Testimonial from "../../../components/testimonial/Testimonial";
import ContactUs from "../../../components/ContactUs";
import Footer from "../../../components/Footer";
import AboutUsServices from "../../../components/about/services/AboutUsServices";
import Banner from "../../../components/technologyCards/Banner";
import TechnologyStackCustomise from "./TechnologyStackCustomise.jsx";
import IntroCustomise from "./IntroCustomise.jsx";
import AboutUsServicesCustomise from "./AboutUsServicesCustomise.jsx";

const CustomiseWebDevelopment = () => {
  return (
    <main className="h-[4784px] w-full bg-[#FFFFFF]">
      <Navbar />
      <Banner text={"Customise Web Development"} />
      <IntroCustomise />
      <AboutUsServicesCustomise />
      <TechnologyStackCustomise />
      <Testimonial />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default CustomiseWebDevelopment;
