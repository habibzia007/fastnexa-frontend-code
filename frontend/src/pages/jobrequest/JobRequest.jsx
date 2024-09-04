import JobRequestForm from "../../components/jobrequest/JobRequestForm.jsx";
import Navbar from "../../components/Navbar.jsx";
import TechnologyStack from "../../components/TechnologyStack.jsx";
import Footer from "../../components/Footer.jsx";
import Testimonial from "../../components/testimonial/Testimonial.jsx";
import Blog from "../../components/blog/Blogs.jsx";
import React from "react";

function JobRequest() {
    return (
        <div>
            <Navbar />
            <JobRequestForm />
            <TechnologyStack />
            <Testimonial />
            <Blog />
            <Footer />
        </div>
    );
}

export default JobRequest;