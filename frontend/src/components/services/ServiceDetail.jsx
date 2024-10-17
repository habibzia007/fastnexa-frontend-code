import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import http from '../../http.js';
import slugify from 'slugify';
import Navbar from "../Navbar.jsx";
import Banner from "../Banner.jsx";
import TechnologyStack from "../TechnologyStack.jsx";
import Testimonial from "../testimonial/Testimonial.jsx";
import OurClients from "../OurClients.jsx";
import ContactUs from "../ContactUs.jsx";
import Footer from "../Footer.jsx";
import config from "../../config.js";
import Intro from "../../pages/services/devOps/Intro.jsx";
import BusinessDisasterServics from "../../pages/services/businessAndDisaster/BusinessDisasterServics.jsx";

const ServiceDetail = () => {
    const { baseURL } = config;
    const { slug, id } = useParams();
    const [serviceDataIntro, setServiceDataIntro] = useState({});
    const [serviceData, setServiceData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        http.get('/services-api')
            .then(response => {
                const services = response.data.services_sections;
                console.log("this is my all services", services);

                const selectedService = services.find(service => service.id === parseInt(id));

                if (selectedService) {
                    // Adjust slug generation to match the URL format
                    const generatedSlug = `${slugify(selectedService.service_name, { lower: true })}`;

                    if (generatedSlug !== slug) {
                        setError('Service not found or URL mismatch.');
                    } else {
                        setServiceDataIntro(selectedService);
                    }
                } else {
                    setError('Service not found.');
                }
            })
            .catch(error => {
                console.error('Error fetching service data:', error);
                setError('Failed to fetch service data.');
            });
    }, [slug, id]);

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
    }, [id]);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    // Access the correct fields from serviceData
    const title = serviceDataIntro.single_serv_heading || "Service Title";
    const description = serviceDataIntro.single_serv_desc || "Service Description";
    const serviceFeatures = serviceData.featuredpostserv || [];

    // Add meta data variables
    const { meta_title, meta_desc, meta_tags } = serviceDataIntro;

    return (
        <main className="w-full bg-[#FFFFFF]">
            {/* Helmet for managing the head */}
            <Helmet>
                <title>{meta_title || title || 'Service Detail'}</title>
                <meta name="description" content={meta_desc || description || 'Service description'} />
                <meta name="keywords" content={meta_tags || 'services, solutions, business'} />
            </Helmet>

            <Navbar />
            <Banner text={serviceDataIntro.service_name || "Service Name"} />
            <Intro title={title} description={description} />
            <BusinessDisasterServics serviceFeatures={serviceFeatures} baseURL={baseURL} />
            <TechnologyStack />
            <Testimonial />
            <OurClients />
            <ContactUs />
            <Footer />
        </main>
    );
};

export default ServiceDetail;
