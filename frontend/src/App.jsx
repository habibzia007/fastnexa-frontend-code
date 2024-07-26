import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
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
// Import other pages here

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes for other pages */}
        <Route path="/about" element={<About />} />
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
        <Route path="/contact" element={<Contact />} />
        <Route component={PageNotFound} />
      </Routes>
    </Router>
  );
}

export default App;
