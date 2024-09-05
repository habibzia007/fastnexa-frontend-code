import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import OurVision from "./pages/about/foundersPage/OurVision";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./components/PageNotFound";
import Services from "./pages/services/Services";
import Technology from "./pages/technology/Technology";
import SoftwareDevelopment from "./pages/services/softwareDevelopment/SoftwareDevelopment";
import DevOps from "./pages/services/devOps/DevOps";
import CloudComputing from "./pages/services/cloudComputing/CloudComputing";
import CyberSecurity from "./pages/services/cyberSecurity/CyberSecurity";
import CustomiseWebDevelopment from "./pages/technology/customise/Customise";
import Prototyping from "./pages/technology/prototyping/Prototyping";
import ThirdPartyIntegration from "./pages/technology/thirdPartyIntegration/ThirdPartIntegration";
import SoftwareProductDevelopment from "./pages/technology/softwareProductDevelopment/SoftwareProductDevelopment";
import ApiDevelopmentServices from "./pages/technology/apiDevelopmentServices/ApiDevelopmentServices";
import UpgradationMigration from "./pages/technology/upgradationMigration/UpgradationMigration";
import NetworkInfrastructure from "./pages/services/networkInfrastructure/NetworkInfrastructure";
import InformationSecurity from "./pages/services/informationSecurity/InformationSecurity";
import BusinessAndDisaster from "./pages/services/businessAndDisaster/BusinessAndDisaster";
import HumanResource from "./pages/services/humanResource/HumanResource.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import SoftwareKeyTrends from "./components/blogs/SoftwareKeyTrends.jsx";
import HarnessingPower from "./components/blogs/HarnessingPower.jsx";
import CyberSecurityDigital from "./components/blogs/CyberSecurityDigital.jsx";
import Timeline from "./components/about/services/Timeline.jsx";
import CaseStudyPage from "./pages/portfolio/casestudies/CaseStudyPage.jsx";
import CRMSolutionsCaroyal from "./components/casestudies/CRMSolutionsCaroyal.jsx";
import ClearVisionDustyEnvironment from "./components/casestudies/ClearVisionDustyEnvironment.jsx";
import CRMSolutionsOMNITECH from "./components/casestudies/CRMSolutionsOMNITECH.jsx";
import ImperialElectricCompany from "./components/casestudies/ImperialElectricCompany.jsx";
import StreamliningOperationsEmpoweringGrowth
  from "./components/casestudies/StreamliningOperationsEmpoweringGrowth.jsx";
import Alliances from "./pages/about/alliances/Alliances.jsx";
import JobRequest from "./pages/jobrequest/JobRequest.jsx";
import BlogDetailPage from "./components/blogs/BlogDetailsPage.jsx";
import Blogs from "./components/blog/Blogs.jsx";
import BlogDetailsPage from "./components/blogs/BlogDetailsPage.jsx";
import CaseStudyDetailPage from "./components/caseStudyContent/CaseStudyDetailPage.jsx";

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
        <Route
          path="/services/software-development"
          element={<SoftwareDevelopment />}
        />
        <Route path="/services/dev-ops" element={<DevOps />} />
        <Route path="/services/cloud-computing" element={<CloudComputing />} />
        <Route path="/services/cyber-security" element={<CyberSecurity />} />
        <Route
          path="/services/network-infrastructure"
          element={<NetworkInfrastructure />}
        />
        <Route
          path="/services/information-security"
          element={<InformationSecurity />}
        />
        <Route
          path="/services/business-continuity-disaster-recovery"
          element={<BusinessAndDisaster />}
        />
        <Route
            path="/services/human-resource"
            element={<HumanResource />}
        />
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
        {/* Other routes */}
        {/*<Route path="/blogs/harnessing-the-power-of-cloud-computing:-best-practices-for-a-seamless-transition" element={<HarnessingPower />} />*/}
        {/*<Route path="/blogs/cybersecurity-in-the-digital-age:-strategies-for-protecting-your-business-from-cyber-threats" element={<CyberSecurityDigital />} />*/}

        <Route path="/casestudies/:slug/:id" element={<CaseStudyDetailPage />} />
        <Route component={PageNotFound} />
      </Routes>
    </Router>
  );
}

export default App;
