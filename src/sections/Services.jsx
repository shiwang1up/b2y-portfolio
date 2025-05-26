import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCode, FiCloud, FiSmartphone } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { FaConnectdevelop, FaCogs } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import SectionHeading from "../components/SectionHeading";
// import AiImage from "../assets/services/ai-solutions.png";

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
      image:
        "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // image: AiImage,
    },
    {
      icon: <FiSmartphone size={28} />,
      title: "Mobile App Development",
      description:
        "Boost customer engagement with our custom mobile apps for iOS and Android—intuitive, feature-rich, and built to keep your audience connected and your business running smoothly.",
      color: "secondary",
      image:
        "https://images.pexels.com/photos/424299/pexels-photo-424299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      // image: AiImage,
    },
    {
      icon: <FaCogs size={28} />,
      title: "Software Development",
      description:
        "Power your business with custom software solutions built for efficiency, scalability, and security—tailored to your unique needs by our expert development team.",
      color: "accent",
      image:
        "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // image: AiImage,
    },
    {
      icon: <FiCode size={28} />,
      title: "Web Development",
      description:
        "Our expert web team builds dynamic, user-friendly websites—from simple pages to advanced e-commerce platforms—tailored to your business needs.",
      color: "primary",
      image:
        "https://images.pexels.com/photos/8284721/pexels-photo-8284721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      // image: AiImage,
    },
    {
      icon: <FaConnectdevelop size={28} />,
      title: "IT Consulting",
      description:
        "Drive smarter decisions with our IT consulting services—tailored strategies to streamline operations, enhance security, and implement the right technologies for your goals.",
      color: "secondary",
      image:
        "https://images.pexels.com/photos/6779716/pexels-photo-6779716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      // image: AiImage,
    },
    {
      icon: <BiSupport size={28} />,
      title: "IT Support",
      description:
        "Ensure seamless operations with our IT support—fast issue resolution, proactive maintenance, and reliable system monitoring to keep your business running smoothly.",
      color: "accent",
      image:
        "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      // image: AiImage,
    },

    {
      icon: <FiCloud size={28} />,
      title: "Cloud Solutions",
      description:
        "Harness the cloud with our end-to-end solutions—from migration to optimization—boosting your agility, scalability, and cost-efficiency.",
      color: "primary",
      image:
        "https://plus.unsplash.com/premium_photo-1683120968693-9af51578770e?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // image: AiImage,
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
                className="group relative h-full rounded-xl overflow-hidden "
                whileHover={{ y: -10 }}
              >
                {/* Background Image with Zoom Effect */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Backdrop Overlay */}
                <div className="absolute inset-0 bg-black/20  backdrop-blur-none" />

                {/* Content Card */}
                <div
                  className={`relative z-10 h-full bg-${colorClasses.icon} p-32  transition-all duration-300 shadow-card flex flex-col group-hover:border-transparent `}
                >
                  <div className="bottom-4 left-4 right-4 bg-gradient-to-r from-[#17202a]/90 backdrop-blur-sm p-4 rounded-lg  to-slate-700/70 z-0 ">
                    <div className="w-full flex items-center justify-end mb-24">
                      <div
                        className={`w-64 h-64 rounded-full ${colorClasses.icon} flex items-center justify-center  mb-24 transition-all duration-300 ${colorClasses.hover} `}
                      >
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-16 text-${colorClasses.text}-600">
                      {service.title}
                    </h3>
                    <p className="text-neutral-200 mb-24 flex-grow">
                      {service.description}
                    </p>
                    <motion.a
                      href="#"
                      className={`inline-flex items-center font-medium  hover:text-${colorClasses.icon}-300`}
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
                </div>
              </motion.div>
            );
            // return (
            //   <motion.div
            //     key={index}
            //     variants={itemVariants}
            //     className="group relative h-full rounded-xl overflow-hidden"
            //     whileHover={{ y: -10 }}
            //   >
            //     {/* Background Image with Zoom Effect */}
            //     <div
            //       className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            //       style={{
            //         backgroundImage: `url(${service.image})`,
            //         backgroundSize: "cover",
            //         backgroundPosition: "center",
            //       }}
            //     />

            //     {/* Backdrop Overlay */}
            //     <div className="absolute inset-0  backdrop-blur-sm" />

            //     {/* Content Card */}
            //     <div
            //       className={`relative z-10 h-full bg-${colorClasses.icon} p-32  transition-all duration-300 shadow-card flex flex-col group-hover:border-transparent`}
            //     >
            //       <div
            //         className={`w-64 h-64 rounded-full ${colorClasses.icon} flex items-center justify-center mb-24 transition-all duration-300 ${colorClasses.hover}`}
            //       >
            //         {service.icon}
            //       </div>

            //       <h3 className="text-xl font-bold mb-16 text-white">
            //         {service.title}
            //       </h3>
            //       <div className="bottom-4 left-4 right-4 bg-gradient-to-r from-black/90 backdrop-blur-sm p-4 rounded-lg  to-slate-700/70 z-0 ">
            //         <p className="text-neutral-200 mb-24 flex-grow">
            //           {service.description}
            //         </p>
            //         <motion.a
            //           href="#"
            //           className={`inline-flex items-center font-medium text-${colorClasses.text}-600 hover:text-${colorClasses.text}-300`}
            //           whileHover={{ x: 5 }}
            //         >
            //           Learn more
            //           <svg
            //             className="ml-8 w-16 h-16"
            //             fill="none"
            //             viewBox="0 0 24 24"
            //             stroke="currentColor"
            //           >
            //             <path
            //               strokeLinecap="round"
            //               strokeLinejoin="round"
            //               strokeWidth={2}
            //               d="M9 5l7 7-7 7"
            //             />
            //           </svg>
            //         </motion.a>
            //       </div>
            //     </div>
            //   </motion.div>
            // );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
