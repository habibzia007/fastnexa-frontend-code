import React from 'react';
import CaseStudies from "../../../components/caseStudy/CaseStudies.jsx";
import Navbar from "../../../components/Navbar.jsx";
import Footer from "../../../components/Footer.jsx";
import Intro from "./Intro.jsx";
import Banner from "./Banner.jsx";

function CaseStudyPage() {
    return (
        <div>
            <Navbar />
            <Banner text={"Case Studies"} />
            <Intro />
            <CaseStudies />
            <Footer />
        </div>
    );
}

export default CaseStudyPage;