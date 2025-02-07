import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import OurVision from "./pages/about/foundersPage/OurVision";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./components/PageNotFound";
import Services from "./pages/services/Services";
import Technology from "./pages/technology/Technology";
import CustomiseWebDevelopment from "./pages/technology/customise/Customise";
import Prototyping from "./pages/technology/prototyping/Prototyping";
import ThirdPartyIntegration from "./pages/technology/thirdPartyIntegration/ThirdPartIntegration";
import SoftwareProductDevelopment from "./pages/technology/softwareProductDevelopment/SoftwareProductDevelopment";
import ApiDevelopmentServices from "./pages/technology/apiDevelopmentServices/ApiDevelopmentServices";
import UpgradationMigration from "./pages/technology/upgradationMigration/UpgradationMigration";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import Timeline from "./components/about/services/Timeline.jsx";
import CaseStudyPage from "./pages/portfolio/casestudies/CaseStudyPage.jsx";
import Alliances from "./pages/about/alliances/Alliances.jsx";
import JobRequest from "./pages/jobrequest/JobRequest.jsx";
import Blogs from "./components/blog/Blogs.jsx";
import BlogDetailsPage from "./components/blogs/BlogDetailsPage.jsx";
import CaseStudyDetailPage from "./components/caseStudyContent/CaseStudyDetailPage.jsx";
import ServiceDetail from "./components/services/ServiceDetail.jsx";
import TechnologyDetails from "./components/TechnologyDetailsPage/TechnologyDetails.jsx";

// Import other pages here

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes for other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/about/our-vision" element={<OurVision />} />
        <Route path="/about/alliances" element={<Alliances />} />
        <Route path="/about/team" element={<Timeline />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug/:id" element={<ServiceDetail />} />
        <Route path="/technology/:slug/:id" element={<TechnologyDetails />} />



        <Route path="/technology" element={<Technology />} />
        <Route
          path="/technology/customise-software-development"
          element={<CustomiseWebDevelopment />}
        />
        <Route
          path="/technology/prototyping-ux-designing"
          element={<Prototyping />}
        />
        <Route
          path="/technology/third-party-integration"
          element={<ThirdPartyIntegration />}
        />
        <Route
          path="/technology/software-product-development"
          element={<SoftwareProductDevelopment />}
        />
        <Route
          path="/technology/api-development-services"
          element={<ApiDevelopmentServices />}
        />
        <Route
          path="/technology/upgradation-migration"
          element={<UpgradationMigration />}
        />
        <Route
          path="/job-request"
          element={<JobRequest />}
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/casestudies" element={<CaseStudyPage /> } />
        <Route path="/contact-us" element={<Contact />} />

        <Route path="/" element={<Blogs />} />
        {/* Dynamic route to capture slug and id */}
        <Route path="/blogs/:slug/:id" element={<BlogDetailsPage />} />
        <Route path="/casestudies/:slug/:id" element={<CaseStudyDetailPage />} />
        <Route component={PageNotFound} />
      </Routes>
    </Router>
  );
}

export default App;
