import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./sections/Homepage";

import MachineLearning from "./pages/ai/MachineLearning";
import ComputerVision from "./pages/ai/ComputerVision";
import NaturalLanguageProcessing from "./pages/ai/NaturalLanguageProcessing";
import WebDevelopment from "./pages/development/WebDevelopment";
import MobileApps from "./pages/development/MobileApps";
import CustomSoftware from "./pages/development/CustomSoftware";
import ITStrategy from "./pages/consulting/ITStrategy";
import CloudSolutions from "./pages/consulting/CloudSolutions";
import DigitalTransformation from "./pages/consulting/DigitalTransformation";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <Layout>
        <Navbar scrolled={scrolled} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ai/ml" element={<MachineLearning />} />
          <Route path="/ai/cv" element={<ComputerVision />} />
          <Route path="/ai/nlp" element={<NaturalLanguageProcessing />} />
          <Route path="/dev/web" element={<WebDevelopment />} />
          <Route path="/dev/mobile" element={<MobileApps />} />
          <Route path="/dev/custom" element={<CustomSoftware />} />
          <Route path="/consulting/strategy" element={<ITStrategy />} />
          <Route path="/consulting/cloud" element={<CloudSolutions />} />
          <Route
            path="/consulting/digital"
            element={<DigitalTransformation />}
          />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
