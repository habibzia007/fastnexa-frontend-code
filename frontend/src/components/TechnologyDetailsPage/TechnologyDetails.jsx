import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
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
import Intro from "../technology/intro/Intro.jsx";
import AboutUsServicesCustomise from "../../pages/technology/customise/AboutUsServicesCustomise.jsx";
import aboutusservicesbg from "../../assets/images/aboutusservicebg.jpg";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const TechnologyDetails = () => {
    const {baseURL} = config;
    const {slug, id} = useParams();
    const [technologyData, setTechnologyData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTechnologyData = async () => {
            try {
                const response = await http.get('/technologies-api');
                const technologies = response.data.technologies;

                const selectedTechnology = technologies.find(tech => tech.id === parseInt(id));

                if (!selectedTechnology) {
                    setError('Technology not found.');
                    return;
                }

                const generatedSlug = slugify(selectedTechnology.technology_title, {lower: true});
                if (generatedSlug !== slug) {
                    setError('Technology not found or URL mismatch.');
                    return;
                }
                setTechnologyData(selectedTechnology);
            } catch (err) {
                setError('Failed to fetch technology data.');
            }
        };

        fetchTechnologyData();
    }, [slug, id]);

    if (error) {
        return <div className="text-red-500 text-center mt-8">{error}</div>;
    }

    if (!technologyData) {
        return <div className="text-center mt-8 flex flex-col justify-center items-center text-[#FF6500]">
            <AiOutlineLoading3Quarters className="animate-spin text-[#FF6500] h-8 w-8" />
        </div>;
    }

    const { tech_heading, tech_desc, technology_title, tech_featured_posts, meta_title, meta_desc, meta_tags } = technologyData;
    const backgroundImageStyle = {
        backgroundImage: `url(${aboutusservicesbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <main className="w-full bg-[#FFFFFF]">
            {/* Helmet for managing the head */}
            <Helmet>
                <title>{meta_title || technology_title || 'Technology Details'}</title>
                <meta name="description" content={meta_desc || "Technology Description"} />
                <meta name="keywords" content={meta_tags || "technology, services, solutions"} />
            </Helmet>

            <Navbar />
            <Banner text={technology_title || "Technology Name"} />
            <Intro title={tech_heading || "Technology Title"} description={tech_desc || "Technology Description"} />
            <div
                className="relative w-full h-auto py-10 lg:py-[45px] mb-[2rem] sm:mb-0"
                style={backgroundImageStyle}
            >
                <AboutUsServicesCustomise serviceFeatures={tech_featured_posts} baseURL={baseURL} />
            </div>
            <TechnologyStack />
            <Testimonial />
            <OurClients />
            <ContactUs />
            <Footer />
        </main>
    );
};

export default TechnologyDetails;
