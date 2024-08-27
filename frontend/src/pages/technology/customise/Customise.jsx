import Navbar from "../../../components/Navbar";
import OurClients from "../../../components/OurClients";
import Testimonial from "../../../components/testimonial/Testimonial";
import ContactUs from "../../../components/ContactUs";
import Footer from "../../../components/Footer";
import Banner from "../../../components/technologyCards/Banner";
import TechnologyStack from "../../../components/TechnologyStack";
import IntroCustomise from "./IntroCustomise.jsx";
import AboutUsServicesCustomise from "./AboutUsServicesCustomise.jsx";

const CustomiseWebDevelopment = () => {
  return (
    <main className="w-full bg-[#FFFFFF]">
      <Navbar />
      <Banner text={"Customise Software Development"} />
      <IntroCustomise />
      <AboutUsServicesCustomise />
      <TechnologyStack />
      <Testimonial />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default CustomiseWebDevelopment;
