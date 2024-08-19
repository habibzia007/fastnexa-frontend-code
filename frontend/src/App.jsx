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
          path="/technology/customise-web-development"
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
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/casestudies" element={<CaseStudyPage /> } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/future-software-development-trends" element={<SoftwareKeyTrends />} />
        <Route path="/blogs/harnessing-power-cloud-computing-best-practices-seamless-transition" element={<HarnessingPower />} />
        <Route path="/blogs/cybersecurity-strategies-for-business-protection" element={<CyberSecurityDigital />} />

        <Route path="/casestudies/CRM-solutions-to-caroyal" element={<CRMSolutionsCaroyal />} />
        <Route path="/casestudies/clear-vision-for-a-dusty-environment" element={<ClearVisionDustyEnvironment />} />
        <Route path="/casestudies/CRM-solutions-to-OMNITECH" element={<CRMSolutionsOMNITECH />} />
        <Route path="/casestudies/the-imperial-electric-company" element={<ImperialElectricCompany />} />
        <Route path="/casestudies/streamlining-operations-and-empowering-growth" element={<StreamliningOperationsEmpoweringGrowth />} />
        <Route component={PageNotFound} />
      </Routes>
    </Router>
  );
}

export default App;
