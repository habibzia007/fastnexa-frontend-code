import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import PageNotFound from "./components/PageNotFound";
// import Services from "./pages/services/Services";
// Import other pages here

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes for other pages */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/service" element={<Services />} /> */}
        <Route component={PageNotFound}/>
      </Routes>
    </Router>
  );
}

export default App;
