import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCode, FiCloud, FiSmartphone } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { FaConnectdevelop, FaCogs, FaRobot } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import SectionHeading from "../components/SectionHeading";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: <RiRobot2Line size={28} />,
      title: "AI Solutions",
      description:
        "Unlock the power of AI with smart automation, predictive analytics, and machine learning solutions that optimize performance and drive innovation across your business.",
      color: "primary",
    },
    {
      icon: <FiSmartphone size={28} />,
      title: "Mobile App Development",
      description:
        "Boost customer engagement with our custom mobile apps for iOS and Android—intuitive, feature-rich, and built to keep your audience connected and your business running smoothly.",
      color: "secondary",
    },
    {
      icon: <FaCogs size={28} />,
      title: "Software Development",
      description:
        "Power your business with custom software solutions built for efficiency, scalability, and security—tailored to your unique needs by our expert development team.",
      color: "accent",
    },
    {
      icon: <FiCode size={28} />,
      title: "Web Development",
      description:
        "Our expert web team builds dynamic, user-friendly websites—from simple pages to advanced e-commerce platforms—tailored to your business needs.",
      color: "primary",
    },
    {
      icon: <FaConnectdevelop size={28} />,
      title: "IT Consulting",
      description:
        "Drive smarter decisions with our IT consulting services—tailored strategies to streamline operations, enhance security, and implement the right technologies for your goals.",
      color: "secondary",
    },
    {
      icon: <BiSupport size={28} />,
      title: "IT Support",
      description:
        "Ensure seamless operations with our IT support—fast issue resolution, proactive maintenance, and reliable system monitoring to keep your business running smoothly.",
      color: "accent",
    },

    {
      icon: <FiCloud size={28} />,
      title: "Cloud Solutions",
      description:
        "Harness the cloud with our end-to-end solutions—from migration to optimization—boosting your agility, scalability, and cost-efficiency.",
      color: "primary",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        icon: "bg-primary-100 text-primary-600",
        hover: "group-hover:bg-primary-500 group-hover:text-white",
        border: "group-hover:border-primary-500",
        text: "primary",
      },
      secondary: {
        icon: "bg-secondary-100 text-secondary-600",
        hover: "group-hover:bg-secondary-500 group-hover:text-white",
        border: "group-hover:border-secondary-500",
        text: "secondary",
      },
      accent: {
        icon: "bg-accent-100 text-accent-600",
        hover: "group-hover:bg-accent-500 group-hover:text-white",
        border: "group-hover:border-accent-500",
        text: "accent",
      },
    };

    return colorMap[color] || colorMap.primary;
  };

  return (
    <section id="services" className="section bg-neutral-50" ref={ref}>
      <div className="container-custom">
        <SectionHeading
          subtitle="Our Services"
          title="Innovative Solutions for Your Business"
          description="At B2Y, we deliver smart, tailored IT solutions that fuel business growth. Backed by expert professionals and the latest technology, we turn challenges into opportunities for success."
          center={true}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 md:gap-32"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -10 }}
              >
                <div className="h-full bg-white rounded-xl p-32 border-2 border-neutral-200 transition-all duration-300 shadow-card card-hover flex flex-col group-hover:border-transparent">
                  <div
                    className={`w-64 h-64 rounded-full ${colorClasses.icon} flex items-center justify-center mb-24 transition-all duration-300 ${colorClasses.hover}`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-16 text-neutral-800">
                    {service.title}
                  </h3>

                  <p className="text-neutral-600 mb-24 flex-grow">
                    {service.description}
                  </p>

                  <motion.a
                    href="#"
                    className={`inline-flex items-center font-medium text-${colorClasses.text}-600 hover:${colorClasses.text}-900`}
                    whileHover={{ x: 5 }}
                  >
                    Learn more
                    <svg
                      className="ml-8 w-16 h-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
