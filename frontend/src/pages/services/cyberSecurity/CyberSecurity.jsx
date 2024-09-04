import React, {useEffect, useState} from "react";
import Navbar from "../../../components/Navbar";
// import Intro from "../../../components/servicesCards/intro/Intro";
import TechnologyStack from "../../../components/TechnologyStack";
import OurClients from "../../../components/OurClients";
import Testimonial from "../../../components/testimonial/Testimonial";
import ContactUs from "../../../components/ContactUs";
import Footer from "../../../components/Footer";
import AboutUsServices from "../../../components/about/services/AboutUsServices";
import Banner from "../../../components/servicesCards/Banner";
import CyberSecurityServices from "./CyberSecurityServices.jsx";
import Intro from "./Intro.jsx";
import http from '../../../http';
import config from "../../../config.js";

const CyberSecurity = () => {
    const { baseURL } = config;
    const id = 4;
    const [serviceData, setServiceData] = useState({}); // Initialize as an empty object

    useEffect(() => {
        if (id) { // Only make the API call if id is present
            http.get(`/services-api/${id}`)
                .then((res) => {
                    setServiceData(res.data); // Set API response data to state
                })
                .catch((err) => {
                    console.error('Error fetching services data:', err);
                    setServiceData({}); // Reset serviceData on error
                });
        }
    }, [id]); // Include id in the dependency array

    const serviceName = serviceData.services_sections?.service_name || "";
    const title = serviceData.services_sections?.single_serv_heading || "";
    const description = serviceData.services_sections?.single_serv_desc || "";
    const  serviceFeatures  = serviceData.featuredpostserv || [];
  return (
    <main className="w-full bg-[#FFFFFF]">
      <Navbar />
        <Banner text={serviceName}/>
        <Intro title={title} description={description} />
        <CyberSecurityServices serviceFeatures={serviceFeatures} baseURL={baseURL} />
      <TechnologyStack />
      <Testimonial />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default CyberSecurity;
