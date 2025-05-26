import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo/b2yLogo.png";
import { Link } from "lucide-react";

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  const servicesSubMenu = {
    "ai-solutions": [
      { name: "Machine Learning", to: "/ai/ml" },
      { name: "Computer Vision", to: "/ai/cv" },
      { name: "Natural Language Processing", to: "/ai/nlp" },
    ],
    development: [
      { name: "Web Development", to: "/dev/web" },
      { name: "Mobile Apps", to: "/dev/mobile" },
      { name: "Custom Software", to: "/dev/custom" },
    ],
    consulting: [
      { name: "IT Strategy", to: "/consulting/strategy" },
      { name: "Cloud Solutions", to: "/consulting/cloud" },
      { name: "Digital Transformation", to: "/consulting/digital" },
    ],
  };

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", to: "hero", type: "scroll" },
    {
      name: "Services",
      to: "services",
      type: "dropdown",
      subCategories: [
        { name: "AI Solutions", id: "ai-solutions" },
        { name: "Development", id: "development" },
        { name: "Consulting", id: "consulting" },
      ],
    },
    { name: "About", to: "about", type: "scroll" },
    { name: "Portfolio", to: "portfolio", type: "scroll" },
    { name: "Contact", to: "contact", type: "scroll" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md py-3 shadow-lg "
          : "bg-white backdrop-blur-md py-5 shadow-lg"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container-custom-nav flex items-center justify-between relative">
        {/* Logo */}
        <a href="/" className="flex items-center   ">
          <div className="flex  items-end ">
            <img src={Logo} alt="logo" className="w-[70px] h-[70px]" />
            <div className="absolute bottom-0 left-[76px]">
              <p className="font-lucidacalligraphy text-[#ff6247] ">
                you believe we achieve
              </p>
            </div>
          </div>
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-32">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={`nav-link font-medium ${
                scrolled ? "text-neutral-700" : "text-white"
              }`}
              activeClass="active"
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>
        {/* <nav className="hidden lg:flex items-center space-x-32">
          {navLinks.map((link) => (
            <div
              key={link.to}
              className="relative"
              onMouseEnter={() =>
                link.type === "dropdown" && setHoveredService(link.to)
              }
              onMouseLeave={() => setHoveredService(null)}
            >
              {link.type === "scroll" ? (
                <ScrollLink
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`nav-link font-medium ${
                    scrolled ? "text-neutral-700" : "text-neutral-700"
                  }`}
                  activeClass="active"
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <span
                  className={`cursor-pointer font-medium ${
                    scrolled ? "text-neutral-700" : "text-black"
                  }`}
                >
                  {link.name}
                </span>
              )}

              <AnimatePresence>
                {hoveredService === link.to && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0  bg-white shadow-lg w-[250px] rounded-lg p-4 mt-1 group"
                    onMouseEnter={() => setHoveredService(link.to)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {link.subCategories?.map((category) => (
                        <div key={category.id}>
                          <h3 className="font-medium text-slate-900 mb-2">
                            {category.name}
                          </h3>
                          <ul className="space-y-1">
                            {servicesSubMenu[category.id]?.map((item) => (
                              <li key={item.to}>
                                <Link
                                  to={item.to}
                                  className="text-sm text-slate-600 hover:text-indigo-600"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 border-t pt-4">
                      <Link
                        to="/services"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav> */}
        {/* CTA Button */}
        <motion.div
          className="hidden lg:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className={`bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium py-3 px-7 rounded-full hover:shadow-lg transition-all`}
          >
            Get Started
          </ScrollLink>
        </motion.div>
        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden z-50 text-2xl"
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <FiX
              className={scrolled || isOpen ? "text-neutral-800" : "text-black"}
            />
          ) : (
            <FiMenu className={scrolled ? "text-neutral-800" : "text-black"} />
          )}
        </motion.button>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="absolute right-0 top-0 h-screen w-full bg-white/100 backdrop-blur-lg px-6 py-8 shadow-xl "
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex flex-col h-full">
                  {/* Menu Items */}
                  <div className="flex flex-col gap-8 mt-11 pr-3">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.to}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <ScrollLink
                          to={link.to}
                          onClick={closeMenu}
                          className="flex items-center px-4 py-1 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-xl transition-colors"
                        >
                          {link.name}
                        </ScrollLink>
                        <hr />
                        {index !== navLinks.length - 1 && (
                          <div className="mx-4 border-b border-gray-100  " />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  {/* <motion.div
                    className="mt-auto pt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <ScrollLink
                      to="contact"
                      onClick={closeMenu}
                      className="block w-full text-center bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium py-3 px-6 rounded-xl hover:shadow-lg transition-all"
                    >
                      Get Started
                    </ScrollLink>
                  </motion.div> */}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
