import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";
import Logo from "../assets/logo/b2yLogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-neutral-800 text-white pt-80 pb-24">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={footerVariants}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="mb-24">
              <a href="/" className="flex items-center">
                <div className="w-[44px] h-[44px] rounded-md flex items-center justify-center bg-white mr-8">
                  <img src={Logo} alt="logo" className="w-[32px] h-[32px]" />
                </div>
                <span className="font-bold text-xl text-white">
                  B2Y Infy Solutions
                </span>
              </a>
            </div>
            <p className="text-neutral-300 mb-24">
              Driving digital transformation with innovative IT solutions that
              empower businesses to thrive in today's competitive landscape.
            </p>
            <div className="flex space-x-16">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#0062FF" }}
                className="text-neutral-300 hover:text-primary-400"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#0062FF" }}
                className="text-neutral-300 hover:text-primary-400"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#0062FF" }}
                className="text-neutral-300 hover:text-primary-400"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#0062FF" }}
                className="text-neutral-300 hover:text-primary-400"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-24">Services</h3>
            <ul className="space-y-12">
              {[
                "Software Development",
                "Cloud Solutions",
                "IT Consulting",
                "Cybersecurity",
                "Data Analytics",
                "Digital Transformation",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-24">Quick Links</h3>
            <ul className="space-y-12">
              {[
                "About Us",
                "Case Studies",
                "Blog",
                "Careers",
                "FAQ",
                "Privacy Policy",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-24">Contact Us</h3>
            <ul className="space-y-16">
              <li className="flex items-start">
                <FiMapPin className="mt-4 mr-12 text-primary-400" />
                <span className="text-neutral-300">
                  1234 Tech Boulevard, Innovation District, CA 98765
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-12 text-primary-400" />
                <a
                  href="tel:+1234567890"
                  className="text-neutral-300 hover:text-primary-400 transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-12 text-primary-400" />
                <a
                  href="mailto:info@thoughtsol.com"
                  className="text-neutral-300 hover:text-primary-400 transition-colors duration-300"
                >
                  info@thoughtsol.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-64 pt-24 border-t border-neutral-700 text-center text-neutral-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>© {currentYear} B2Y Infy Solutions. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
