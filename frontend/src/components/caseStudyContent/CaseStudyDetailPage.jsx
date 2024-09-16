import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanitizeHtml from 'sanitize-html';
import http from '../../http';
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import ContactUs from "../ContactUs.jsx"; // Optional section based on design
import TechnologyStack from "../TechnologyStack.jsx"; // Optional section
import Banner from "../blog/Banner.jsx";
import ClearVision from "./ClearVision.jsx"; // Reusing Banner for consistent design

const CaseStudyDetailPage = () => {
    const { id } = useParams(); // Get the case study ID from the URL
    const [caseStudy, setCaseStudy] = useState({}); // Initialize with an empty object
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        // Fetch the case study by id from the API
        http.get(`/casestudies-api`)
            .then((response) => {
                const caseStudies = response.data.casestudiesitems_api; // Assuming API has a case studies array
                const selectedCaseStudy = caseStudies.find(item => item.id === parseInt(id)); // Find case study by ID
                if (selectedCaseStudy) {
                    setCaseStudy(selectedCaseStudy); // Set the selected case study
                } else {
                    setError("Case study not found");
                }
            })
            .catch((error) => {
                console.error('Error fetching case study:', error);
                setError("Failed to fetch case study data");
            });
    }, [id]);

    if (error) return <div className="text-red-500">{error}</div>; // Display error if case study is not found

    // Sanitize case study content
    const sanitizedContent = sanitizeHtml(caseStudy.casestudies_content || "", {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['h1', 'h2', 'img', 'span', 'ol', 'ul', 'li', 'strong']),
        allowedAttributes: {
            '*': ['style'],
            'img': ['src', 'alt']
        }
    });

    // Add inline style for strong inside headings (if applicable)
    const customStyles = `
        .prose h1 strong,
        .prose h2 strong,
        .prose h3 strong,
        .prose h4 strong,
        .prose h5 strong,
        .prose h6 strong {
            line-height: 4rem;
        }
    `;

    return (
        <div>
            <Navbar />
            {/* Reuse Banner component with case study title */}
            <Banner text={caseStudy.casestudies_title || "Default Title"} />
            {/*<ClearVision />*/}

            <div className="case-study-detail-page max-w-[1150px] mx-auto px-3">
                {/*<h1 className="text-3xl font-bold mb-4">{caseStudy.casestudies_title || "Default Title"}</h1> /!* Display case study title *!/*/}
                {/*<p className="text-gray-700 mb-4">{caseStudy.casestudies_author || "Author Name"}</p> /!* Display author name *!/*/}

                {/* Render sanitized case study content */}
                <div className="prose prose-lg max-w-none text-justify mt-10" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
            </div>

            {/* Optional additional sections */}
            <TechnologyStack />
            <ContactUs />

            <Footer />

            {/* Inline styles for custom strong tag inside headings */}
            <style>{customStyles}</style>
        </div>
    );
};

export default CaseStudyDetailPage;
