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
  return (
    <div className="app">
      {/* <Navbar scrolled={scrolled} /> */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div id="hero">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <Clients />
        <div id="about">
          <About />
        </div>
        {/* <Team id="contact" /> */}
        <StatisticsCards />
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </motion.main>

      <ScrollToTop />
    </div>
  );
};

export default Homepage;
