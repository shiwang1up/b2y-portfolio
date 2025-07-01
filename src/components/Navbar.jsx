import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Logo from "../assets/logo/b2yLogo.png";

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState(null);

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
    { name: "Home", to: "/", type: "scroll" },
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
    { name: "Blog", to: "/blog", type: "link" },
    { name: "Contact", to: "contact", type: "scroll" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setMobileOpenSubmenu(null);
  };

  const toggleMobileSubmenu = (item) => {
    setMobileOpenSubmenu(mobileOpenSubmenu === item ? null : item);
  };

  const renderDesktopSubmenu = (link) => {
    return (
      <div className="grid grid-cols-3 gap-6 p-6 w-[700px]">
        {link.subCategories?.map((category) => (
          <div key={category.id} className="space-y-3">
            <h3 className="font-semibold text-lg text-slate-900 mb-2 pb-2 border-b border-slate-100">
              {category.name}
            </h3>
            <ul className="space-y-2">
              {servicesSubMenu[category.id]?.map((item) => (
                <li key={item.to}>
                  <RouterLink
                    to={item.to}
                    className="text-sm text-slate-600 hover:text-indigo-600 flex items-center transition-colors"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

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
        <RouterLink to="/" className="flex items-center">
          <div className="flex  items-end ">
            <img src={Logo} alt="logo" className="w-[70px] h-[70px]" />
            <div className="absolute bottom-0 left-[76px]">
              <p className="font-lucidacalligraphy text-[#ff6247] ">
                you believe we achieve
              </p>
            </div>
          </div>
        </RouterLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-32">
          {navLinks.map((link) => (
            <div
              key={link.to}
              className="relative"
              onMouseEnter={() =>
                link.type === "dropdown" && setHoveredItem(link.to)
              }
              onMouseLeave={() => setHoveredItem(null)}
            >
              {link.type === "scroll" ? (
                <ScrollLink
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`nav-link font-medium cursor-pointer ${
                    scrolled ? "text-neutral-800" : "text-neutral-800"
                  } hover:text-indigo-600 transition-colors flex items-center`}
                  activeClass="active"
                >
                  {link.name}
                </ScrollLink>
              ) : link.type === "link" ? (
                <RouterLink
                  to={link.to}
                  className={`font-medium ${
                    scrolled ? "text-neutral-800" : "text-neutral-800"
                  } hover:text-indigo-600 transition-colors flex items-center`}
                >
                  {link.name}
                </RouterLink>
              ) : (
                <button
                  className={`font-medium ${
                    scrolled ? "text-neutral-800" : "text-neutral-800"
                  } hover:text-indigo-600 transition-colors flex items-center`}
                >
                  {link.name}
                  <FiChevronDown
                    className={`ml-1 transition-transform ${
                      hoveredItem === link.to ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}

              <AnimatePresence>
                {hoveredItem === link.to && link.type === "dropdown" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-lg mt-1 overflow-hidden"
                    onMouseEnter={() => setHoveredItem(link.to)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {renderDesktopSubmenu(link)}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          className="hidden lg:block"
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
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden z-50 p-2"
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <FiX className="text-neutral-800 text-2xl" />
          ) : (
            <FiMenu className="text-neutral-800 text-2xl" />
          )}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            >
              <motion.div
                className="absolute right-0 top-0 h-screen w-4/5 max-w-sm bg-white shadow-xl overflow-y-auto"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col h-full p-6">
                  {/* <div className="flex justify-end mb-8">
                    <button onClick={closeMenu} className="p-2">
                      <FiX className="text-neutral-800 text-xl" />
                    </button>
                  </div> */}

                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <div key={link.to} className="border-b border-gray-100">
                        {link.type === "dropdown" ? (
                          <div>
                            <button
                              onClick={() => toggleMobileSubmenu(link.to)}
                              className="flex items-center justify-between w-full py-3 text-lg font-medium text-gray-800"
                            >
                              <span>{link.name}</span>
                              <FiChevronDown
                                className={`transition-transform ${
                                  mobileOpenSubmenu === link.to
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                            <AnimatePresence>
                              {mobileOpenSubmenu === link.to && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="pl-4 overflow-hidden"
                                >
                                  <div className="space-y-3 py-2">
                                    {link.subCategories?.map((category) => (
                                      <div key={category.id}>
                                        <h4 className="font-medium text-gray-700 mb-2">
                                          {category.name}
                                        </h4>
                                        <ul className="space-y-2 pl-2 mb-4">
                                          {servicesSubMenu[category.id]?.map(
                                            (item) => (
                                              <li key={item.to}>
                                                <RouterLink
                                                  to={item.to}
                                                  onClick={closeMenu}
                                                  className="text-gray-600 hover:text-indigo-600 text-sm flex items-center py-1"
                                                >
                                                  {item.name}
                                                </RouterLink>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : link.type === "scroll" ? (
                          <ScrollLink
                            to={link.to}
                            onClick={closeMenu}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="block py-3 text-lg font-medium text-gray-800 hover:text-indigo-600"
                          >
                            {link.name}
                          </ScrollLink>
                        ) : (
                          <RouterLink
                            to={link.to}
                            onClick={closeMenu}
                            className="block py-3 text-lg font-medium text-gray-800 hover:text-indigo-600"
                          >
                            {link.name}
                          </RouterLink>
                        )}
                      </div>
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
