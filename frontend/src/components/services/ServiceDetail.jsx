// import React, { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom';
// import http from '../../http.js';
// import slugify from 'slugify';
// import Navbar from "../Navbar.jsx";
// import Banner from "../Banner.jsx";
// import ServicesFeatures from "./ServicesFeatures.jsx";
// import TechnologyStack from "../TechnologyStack.jsx";
// import Testimonial from "../testimonial/Testimonial.jsx";
// import OurClients from "../OurClients.jsx";
// import ContactUs from "../ContactUs.jsx";
// import Footer from "../Footer.jsx";
//
// const ServiceDetail = () => {
//     const { slug, id } = useParams(); // Get both slug and id from the URL
//     const [serviceData, setServiceData] = useState({});
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         // Fetch the services list from the API
//         http.get('/services-api')
//             .then(response => {
//                 const services = response.data.services_sections; // Assuming services are under services_sections
//                 const selectedService = services.find(service => service.id === parseInt(id)); // Find the service by ID
//                 console.log("service data",services)
//
//                 if (selectedService) {
//                     // Generate the slug from the fetched service name
//                     const generatedSlug = slugify(selectedService.service_name, { lower: true });
//
//                     // Check if the slug from the URL matches the generated slug
//                     if (generatedSlug !== slug) {
//                         setError('Service not found or URL mismatch.');
//                     } else {
//                         setServiceData(selectedService); // Set the selected service data
//                     }
//                 } else {
//                     setError('Service not found.');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching service data:', error);
//                 setError('Failed to fetch service data.');
//             });
//     }, [slug, id]); // Include both slug and id as dependencies
//
//     if (error) {
//         return <div className="text-red-500">{error}</div>; // Display error message
//     }
//
//     if (!serviceData || Object.keys(serviceData).length === 0) {
//         return <div>Loading...</div>; // Display loading state
//     }
//
//     return (
//         <main className="w-full bg-[#FFFFFF]">
//             <Navbar />
//             <Banner text={serviceData.service_name || "Service Name"} />
//             <ServicesFeatures serviceFeatures={serviceData.featuredpostserv || []} />
//             <TechnologyStack />
//             <Testimonial />
//             <OurClients />
//             <ContactUs />
//             <Footer />
//         </main>
//     );
// };
//
// export default ServiceDetail;

import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
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
                console.log("this is selected service", selectedService);

                if (selectedService) {
                    // Adjust slug generation to match the URL format
                    const generatedSlug = `${slugify(selectedService.service_name, { lower: true })}`;

                    if (generatedSlug !== slug) {
                        console.log("Generated slug:", generatedSlug);
                        console.log("URL slug:", slug);
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

    if (!serviceData || Object.keys(serviceData).length === 0) {
        return <div>Loading...</div>;
    }

    // Access the correct fields from serviceData
    const title = serviceDataIntro.single_serv_heading || "Service Title";
    const description = serviceDataIntro.single_serv_desc || "Service Description";
    const serviceFeatures = serviceData.featuredpostserv || [];

    return (
        <main className="w-full bg-[#FFFFFF]">
            <Navbar />
            <Banner text={serviceDataIntro.service_name || "Service Name"} />
            <Intro title={title} description={description} />
            <BusinessDisasterServics  serviceFeatures={serviceFeatures} baseURL={baseURL}/>
            <TechnologyStack />
            <Testimonial />
            <OurClients />
            <ContactUs />
            <Footer />
        </main>
    );
};

export default ServiceDetail;




