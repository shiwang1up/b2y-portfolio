import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Services from "./Services";
import Clients from "./Clients";
import About from "./About";
import StatisticsCards from "./Statistics";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import ScrollToTop from "../components/ScrollToTop";

const Homepage = () => {
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
      {/* <Navbar scrolled={scrolled} /> */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero id="hero" />
        <Services id="services" />
        <Clients />
        <About id="about" />
        {/* <Team id="contact" /> */}
        <StatisticsCards />
        <Portfolio id="portfolio" />
        <Contact id="contact" />
      </motion.main>

      <ScrollToTop />
    </div>
  );
};

export default Homepage;
