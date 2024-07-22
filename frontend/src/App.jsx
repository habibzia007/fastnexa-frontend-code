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
        <Route path="/technology" element={<Technology />} />
        <Route path="/contact" element={<Contact />} />
        <Route component={PageNotFound} />
      </Routes>
    </Router>
  );
}

export default App;
