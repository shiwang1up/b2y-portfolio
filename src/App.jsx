import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Page Sections
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Statistics from "./sections/Statistics";
import Testimonials from "./sections/Testimonials";
import Team from "./sections/Team";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Clients from "./sections/Clients";

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
    <div className="app">
      <Navbar scrolled={scrolled} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Services />
        <Clients />
        <About />
        <Statistics />
        {/* <Testimonials /> */}
        {/* <Team /> */}
        <Portfolio />
        <Contact />
      </motion.main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
