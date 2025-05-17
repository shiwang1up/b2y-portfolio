import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo/b2yLogo.png";

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    { name: "Home", to: "hero" },
    { name: "Services", to: "services" },
    { name: "About", to: "about" },
    // { name: "Team", to: "team" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Contact", to: "contact" },
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
