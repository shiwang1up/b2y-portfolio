// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   Code,
//   Cloud,
//   Smartphone,
//   HeadphonesIcon,
//   Network,
//   Settings,
//   Bot,
// } from "lucide-react";
// import SectionHeading from "../components/SectionHeading";

// // Neon Cyberpunk Style
// const ServicesVariant1 = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   const services = [
//     {
//       icon: <Bot size={32} />,
//       title: "AI Solutions",
//       description:
//         "Unlock the power of AI with smart automation, predictive analytics, and machine learning solutions that optimize performance.",
//       color: "from-purple-500 to-pink-500",
//       glowColor: "shadow-purple-500/50",
//     },
//     {
//       icon: <Smartphone size={32} />,
//       title: "Mobile Development",
//       description:
//         "Boost customer engagement with custom mobile apps for iOS and Android—intuitive, feature-rich, and built to keep your audience connected.",
//       color: "from-blue-500 to-cyan-500",
//       glowColor: "shadow-blue-500/50",
//     },
//     {
//       icon: <Settings size={32} />,
//       title: "Software Development",
//       description:
//         "Power your business with custom software solutions built for efficiency, scalability, and security—tailored to your unique needs.",
//       color: "from-green-500 to-teal-500",
//       glowColor: "shadow-green-500/50",
//     },
//     {
//       icon: <Code size={32} />,
//       title: "Web Development",
//       description:
//         "Expert web team builds dynamic, user-friendly websites—from simple pages to advanced e-commerce platforms.",
//       color: "from-orange-500 to-red-500",
//       glowColor: "shadow-orange-500/50",
//     },
//     {
//       icon: <Network size={32} />,
//       title: "IT Consulting",
//       description:
//         "Drive smarter decisions with our IT consulting services—tailored strategies to streamline operations and enhance security.",
//       color: "from-indigo-500 to-purple-600",
//       glowColor: "shadow-indigo-500/50",
//     },
//     {
//       icon: <HeadphonesIcon size={32} />,
//       title: "IT Support",
//       description:
//         "Ensure seamless operations with our IT support—fast issue resolution, proactive maintenance, and reliable system monitoring.",
//       color: "from-pink-500 to-rose-500",
//       glowColor: "shadow-pink-500/50",
//     },
//     {
//       icon: <Cloud size={32} />,
//       title: "Cloud Solutions",
//       description:
//         "Harness the cloud with our end-to-end solutions—from migration to optimization—boosting your agility and scalability.",
//       color: "from-cyan-500 to-blue-600",
//       glowColor: "shadow-cyan-500/50",
//     },
//   ];

//   return (
//     <section
//       className="min-h-screen bg-black relative overflow-hidden py-20"
//       ref={ref}
//     >
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
//         {[...Array(50)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-cyan-400 rounded-full"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//               opacity: 0,
//             }}
//             animate={{
//               opacity: [0, 1, 0],
//               scale: [0, 1, 0],
//             }}
//             transition={{
//               duration: Math.random() * 3 + 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-[64px]"
//         >
//           <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//             CYBER SERVICES
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Next-generation solutions powered by cutting-edge technology
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               whileHover={{
//                 scale: 1.05,
//                 rotateY: 5,
//                 z: 50,
//               }}
//               className="group"
//             >
//               <div
//                 className={`relative p-6 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:shadow-2xl ${service.glowColor} transition-all duration-500 hover:border-transparent overflow-hidden`}
//               >
//                 {/* Neon border effect */}
//                 <div
//                   className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
//                 />

//                 {/* Icon */}
//                 <motion.div
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.8 }}
//                   className={`w-[64px] h-[64px] rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 text-white shadow-lg`}
//                 >
//                   {service.icon}
//                 </motion.div>

//                 {/* Content */}
//                 <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
//                   {service.description}
//                 </p>

//                 {/* CTA */}
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`px-6 py-3 rounded-lg bg-gradient-to-r ${service.color} text-white font-semibold hover:shadow-lg transition-all duration-300`}
//                 >
//                   ENGAGE ↗
//                 </motion.button>

//                 {/* Glitch effect overlay */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
//                   <div className="absolute inset-0 bg-cyan-400 mix-blend-screen" />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesVariant1;
// ------------------------------------------------------------------------------------

// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   Code,
//   Cloud,
//   Smartphone,
//   HeadphonesIcon,
//   Network,
//   Settings,
//   Bot,
// } from "lucide-react";
// import SectionHeading from "../components/SectionHeading";

// // Neon Cyberpunk Style
// const ServicesVariant1 = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   const services = [
//     {
//       icon: <Bot size={32} />,
//       title: "AI Solutions",
//       description:
//         "Unlock the power of AI with smart automation, predictive analytics, and machine learning solutions that optimize performance.",
//       color: "from-purple-500 to-pink-500",
//       glowColor: "shadow-purple-500/50",
//     },
//     {
//       icon: <Smartphone size={32} />,
//       title: "Mobile Development",
//       description:
//         "Boost customer engagement with custom mobile apps for iOS and Android—intuitive, feature-rich, and built to keep your audience connected.",
//       color: "from-blue-500 to-cyan-500",
//       glowColor: "shadow-blue-500/50",
//     },
//     {
//       icon: <Settings size={32} />,
//       title: "Software Development",
//       description:
//         "Power your business with custom software solutions built for efficiency, scalability, and security—tailored to your unique needs.",
//       color: "from-green-500 to-teal-500",
//       glowColor: "shadow-green-500/50",
//     },
//     {
//       icon: <Code size={32} />,
//       title: "Web Development",
//       description:
//         "Expert web team builds dynamic, user-friendly websites—from simple pages to advanced e-commerce platforms.",
//       color: "from-orange-500 to-red-500",
//       glowColor: "shadow-orange-500/50",
//     },
//     {
//       icon: <Network size={32} />,
//       title: "IT Consulting",
//       description:
//         "Drive smarter decisions with our IT consulting services—tailored strategies to streamline operations and enhance security.",
//       color: "from-indigo-500 to-purple-600",
//       glowColor: "shadow-indigo-500/50",
//     },
//     {
//       icon: <HeadphonesIcon size={32} />,
//       title: "IT Support",
//       description:
//         "Ensure seamless operations with our IT support—fast issue resolution, proactive maintenance, and reliable system monitoring.",
//       color: "from-pink-500 to-rose-500",
//       glowColor: "shadow-pink-500/50",
//     },
//     {
//       icon: <Cloud size={32} />,
//       title: "Cloud Solutions",
//       description:
//         "Harness the cloud with our end-to-end solutions—from migration to optimization—boosting your agility and scalability.",
//       color: "from-cyan-500 to-blue-600",
//       glowColor: "shadow-cyan-500/50",
//     },
//   ];

//   return (
//     <section
//       className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden py-20"
//       ref={ref}
//     >
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-blue-100/30" />
//         {[...Array(50)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-blue-400 rounded-full"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//               opacity: 0,
//             }}
//             animate={{
//               opacity: [0, 1, 0],
//               scale: [0, 1, 0],
//             }}
//             transition={{
//               duration: Math.random() * 3 + 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-[64px]"
//         >
//           <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//             OUR SERVICES
//           </h2>
//           <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//             Innovative solutions powered by cutting-edge technology
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               whileHover={{
//                 scale: 1.05,
//                 rotateY: 5,
//                 z: 50,
//               }}
//               className="group"
//             >
//               <div
//                 className={`relative p-6 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm hover:shadow-2xl ${service.glowColor} transition-all duration-500 hover:border-transparent overflow-hidden`}
//               >
//                 {/* Neon border effect */}
//                 <div
//                   className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
//                 />

//                 {/* Icon */}
//                 <motion.div
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.8 }}
//                   className={`w-[64px] h-[64px] rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 text-white shadow-lg`}
//                 >
//                   {service.icon}
//                 </motion.div>

//                 {/* Content */}
//                 <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
//                   {service.description}
//                 </p>

//                 {/* CTA */}
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`px-6 py-3 rounded-lg bg-gradient-to-r ${service.color} text-white font-semibold hover:shadow-lg transition-all duration-300`}
//                 >
//                   Learn More ↗
//                 </motion.button>

//                 {/* Glitch effect overlay */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none">
//                   <div className="absolute inset-0 bg-blue-400 mix-blend-multiply" />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesVariant1;
// ------------------------------------------------------------------------------------

// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   Code,
//   Cloud,
//   Smartphone,
//   HeadphonesIcon,
//   Network,
//   Settings,
//   Bot,
// } from "lucide-react";
// import SectionHeading from "../components/SectionHeading";

// // Gradient Mesh with Magnetic Cards
// const ServicesVariant4 = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   const services = [
//     {
//       icon: <Bot size={28} />,
//       title: "AI Solutions",
//       description:
//         "Revolutionary AI automation and machine learning solutions that transform your business operations.",
//       mesh: "from-purple-600 via-pink-600 to-red-600",
//       accent: "text-purple-400",
//     },
//     {
//       icon: <Smartphone size={28} />,
//       title: "Mobile Development",
//       description:
//         "Cutting-edge mobile applications that deliver exceptional user experiences across all platforms.",
//       mesh: "from-blue-600 via-cyan-600 to-teal-600",
//       accent: "text-blue-400",
//     },
//     {
//       icon: <Settings size={28} />,
//       title: "Software Development",
//       description:
//         "Custom software architectures designed for scalability, performance, and future-ready innovation.",
//       mesh: "from-green-600 via-emerald-600 to-lime-600",
//       accent: "text-green-400",
//     },
//     {
//       icon: <Code size={28} />,
//       title: "Web Development",
//       description:
//         "Next-generation web experiences that captivate users and drive meaningful business outcomes.",
//       mesh: "from-orange-600 via-red-600 to-pink-600",
//       accent: "text-orange-400",
//     },
//     {
//       icon: <Network size={28} />,
//       title: "IT Consulting",
//       description:
//         "Strategic technology consulting that aligns your digital infrastructure with business objectives.",
//       mesh: "from-indigo-600 via-purple-600 to-pink-600",
//       accent: "text-indigo-400",
//     },
//     {
//       icon: <HeadphonesIcon size={28} />,
//       title: "IT Support",
//       description:
//         "Proactive support services ensuring optimal performance and minimal downtime for your systems.",
//       mesh: "from-rose-600 via-pink-600 to-purple-600",
//       accent: "text-rose-400",
//     },
//     {
//       icon: <Cloud size={28} />,
//       title: "Cloud Solutions",
//       description:
//         "Comprehensive cloud strategies that maximize efficiency, security, and cost-effectiveness.",
//       mesh: "from-sky-600 via-cyan-600 to-blue-600",
//       accent: "text-sky-400",
//     },
//   ];

//   return (
//     <section
//       className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden py-20"
//       ref={ref}
//     >
//       {/* Animated mesh background */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute inset-0 opacity-30"
//           animate={{
//             background: [
//               "radial-gradient(circle at 20% 50%, #dbeafe 0%, transparent 50%), radial-gradient(circle at 80% 20%, #e9d5ff 0%, transparent 50%), radial-gradient(circle at 40% 80%, #fecaca 0%, transparent 50%)",
//               "radial-gradient(circle at 60% 70%, #dbeafe 0%, transparent 50%), radial-gradient(circle at 20% 60%, #e9d5ff 0%, transparent 50%), radial-gradient(circle at 80% 30%, #fecaca 0%, transparent 50%)",
//               "radial-gradient(circle at 40% 30%, #dbeafe 0%, transparent 50%), radial-gradient(circle at 70% 80%, #e9d5ff 0%, transparent 50%), radial-gradient(circle at 10% 10%, #fecaca 0%, transparent 50%)",
//             ],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//         />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="text-center mb-20"
//         >
//           <motion.h2
//             className="text-8xl font-black mb-[32px] text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800"
//             animate={{
//               backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             style={{
//               backgroundSize: "200% 200%",
//             }}
//           >
//             NEXUS
//           </motion.h2>
//           <div className="flex justify-center space-x-4 mb-[32px]">
//             {[...Array(3)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
//                 animate={{
//                   scale: [1, 1.5, 1],
//                   opacity: [0.5, 1, 0.5],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   delay: i * 0.3,
//                 }}
//               />
//             ))}
//           </div>
//           <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
//             Where innovation meets excellence in digital transformation
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{
//                 opacity: 0,
//                 scale: 0.8,
//                 rotateZ: -10,
//               }}
//               animate={
//                 isInView
//                   ? {
//                       opacity: 1,
//                       scale: 1,
//                       rotateZ: 0,
//                     }
//                   : {
//                       opacity: 0,
//                       scale: 0.8,
//                       rotateZ: -10,
//                     }
//               }
//               transition={{
//                 duration: 0.8,
//                 delay: index * 0.1,
//                 type: "spring",
//                 stiffness: 120,
//               }}
//               whileHover={{
//                 scale: 1.05,
//                 rotateZ: 2,
//                 y: -10,
//               }}
//               className="group cursor-pointer"
//             >
//               <div className="relative p-[32px] rounded-3xl bg-white/90 backdrop-blur-xl border border-gray-200 hover:border-purple-300 transition-all duration-500 overflow-hidden shadow-xl">
//                 {/* Gradient mesh overlay */}
//                 <motion.div
//                   className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${service.mesh} transition-opacity duration-500`}
//                   whileHover={{
//                     scale: 1.1,
//                     rotate: 5,
//                   }}
//                 />

//                 {/* Magnetic icon */}
//                 <motion.div
//                   whileHover={{
//                     scale: 1.2,
//                     rotate: [0, -10, 10, 0],
//                     y: -5,
//                   }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 300,
//                     damping: 10,
//                   }}
//                   className="relative z-10 w-[64px] h-[64px] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6 text-gray-700 border border-gray-300 group-hover:border-purple-400"
//                 >
//                   {service.icon}

//                   {/* Icon glow */}
//                   <div
//                     className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.mesh} opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500`}
//                   />
//                 </motion.div>

//                 {/* Content with magnetic effect */}
//                 <motion.div
//                   whileHover={{ x: 5 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
//                     {service.description}
//                   </p>
//                 </motion.div>

//                 {/* Magnetic button */}
//                 <motion.button
//                   whileHover={{
//                     scale: 1.05,
//                     x: 10,
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`
//                     relative px-6 py-3 rounded-xl text-white font-semibold
//                     bg-gradient-to-r ${service.mesh} opacity-80 hover:opacity-100
//                     transition-all duration-300 overflow-hidden
//                   `}
//                 >
//                   <span className="relative z-10">Learn More</span>
//                   <motion.div
//                     className="absolute inset-0 bg-white/30"
//                     initial={{ x: "-100%" }}
//                     whileHover={{ x: "100%" }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 </motion.button>

//                 {/* Edge lighting */}
//                 <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <div
//                     className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.mesh} opacity-20 blur-xl`}
//                   />
//                 </div>

//                 {/* Corner accents */}
//                 <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesVariant4;
// ------------------------------------------------------------------------------------
import React, { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import {
  Code,
  Cloud,
  Smartphone,
  HeadphonesIcon,
  Network,
  Settings,
  Bot,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

// Bold Typography with Kinetic Energy
const ServicesVariant5 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: <Bot size={36} />,
      title: "AI SOLUTIONS",
      subtitle: "INTELLIGENT AUTOMATION",
      description:
        "Revolutionary artificial intelligence that transforms your business operations with smart automation and predictive analytics.",
      color: "from-purple-500 to-violet-700",
      number: "01",
    },
    {
      icon: <Smartphone size={36} />,
      title: "MOBILE DEV",
      subtitle: "CROSS-PLATFORM MASTERY",
      description:
        "Native and cross-platform mobile applications that deliver exceptional performance and user experience.",
      color: "from-blue-500 to-cyan-700",
      number: "02",
    },
    {
      icon: <Settings size={36} />,
      title: "SOFTWARE DEV",
      subtitle: "ENTERPRISE SOLUTIONS",
      description:
        "Scalable software architectures built with cutting-edge technologies and industry best practices.",
      color: "from-green-500 to-emerald-700",
      number: "03",
    },
    {
      icon: <Code size={36} />,
      title: "WEB DEV",
      subtitle: "DIGITAL EXPERIENCES",
      description:
        "Modern web applications that captivate users with stunning visuals and seamless interactions.",
      color: "from-orange-500 to-red-700",
      number: "04",
    },
    {
      icon: <Network size={36} />,
      title: "IT CONSULTING",
      subtitle: "STRATEGIC GUIDANCE",
      description:
        "Expert technology consulting that aligns your digital infrastructure with business objectives.",
      color: "from-indigo-500 to-purple-700",
      number: "05",
    },
    {
      icon: <HeadphonesIcon size={36} />,
      title: "IT SUPPORT",
      subtitle: "24/7 RELIABILITY",
      description:
        "Comprehensive support services ensuring optimal performance and minimal downtime for your systems.",
      color: "from-pink-500 to-rose-700",
      number: "06",
    },
    {
      icon: <Cloud size={36} />,
      title: "CLOUD SOLUTIONS",
      subtitle: "INFINITE SCALE",
      description:
        "Complete cloud strategies that maximize efficiency, security, and cost-effectiveness for your business.",
      color: "from-sky-500 to-blue-700",
      number: "07",
    },
  ];

  return (
    <section className="section bg-neutral-50" ref={ref}>
      <div className="container-custom">
        {/* Dynamic background pattern */}
        <div className="absolute inset-0 opacity-5"></div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
            radial-gradient(circle at 2px 2px, #6366f1 1px, transparent 0)
          `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2
              className="text-6xl font-black text-black mb-4 tracking-tighter leading-none"
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            >
              SERVICES
            </motion.h2>
            <motion.div
              className="flex justify-center items-center space-x-4 mb-[32px]"
              initial={{ width: 0 }}
              animate={isInView ? { width: "auto" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="h-1 w-20 bg-black" />
              <div className="text-sm font-bold tracking-widest text-black uppercase">
                you believe we achieve
              </div>
              <div className="h-1 w-20 bg-black" />
            </motion.div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Solutions that move your business forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                  rotateZ: index % 2 === 0 ? -5 : 5,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        x: 0,
                        rotateZ: 0,
                      }
                    : {
                        opacity: 0,
                        x: index % 2 === 0 ? -100 : 100,
                        rotateZ: index % 2 === 0 ? -5 : 5,
                      }
                }
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 80,
                }}
                whileHover={{
                  scale: 1.02,
                  rotateZ: index % 2 === 0 ? 1 : -1,
                  transition: { duration: 0.3 },
                }}
                className="group cursor-pointer"
              >
                <div className="relative p-[32px] bg-gray-50 hover:bg-white transition-all duration-500 border-2 border-gray-200 hover:border-black rounded-none overflow-hidden">
                  {/* Number overlay */}
                  <div className="absolute top-0 right-0 text-8xl font-black text-gray-100 group-hover:text-gray-200 transition-colors duration-500 leading-none">
                    {service.number}
                  </div>

                  {/* Kinetic icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                    }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className={`relative z-10 w-20 h-20 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-[32px] text-white shadow-lg`}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Explosive typography */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-4xl font-black text-black mb-2 tracking-tight group-hover:tracking-wide transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm font-bold text-gray-500 mb-4 tracking-widest uppercase">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-700 mb-[32px] leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </motion.div>

                  {/* Kinetic button */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      x: 20,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                    px-[32px] py-4 bg-gray-800 text-white font-bold tracking-widest text-sm
                    hover:bg-gradient-to-r ${service.color} transition-all duration-300
                    transform skew-x-[-15deg] hover:skew-x-0
                  `}
                  >
                    <span className="block transform skew-x-[15deg] hover:skew-x-0">
                      LEARN MORE →
                    </span>
                  </motion.button>

                  {/* Kinetic accent lines */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                  />

                  <motion.div
                    className="absolute top-0 right-0 w-1 bg-gradient-to-b from-transparent via-gray-800 to-transparent"
                    initial={{ height: "0%" }}
                    whileHover={{ height: "100%" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />

                  {/* Energy particles */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gray-800 rounded-full opacity-0 group-hover:opacity-60"
                      style={{
                        top: Math.random() * 100 + "%",
                        left: Math.random() * 100 + "%",
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        x: [0, Math.random() * 50 - 25],
                        y: [0, Math.random() * 50 - 25],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesVariant5;
// ------------------------------------------------------------------------------------

// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   Code,
//   Cloud,
//   Smartphone,
//   HeadphonesIcon,
//   Network,
//   Settings,
//   Bot,
// } from "lucide-react";

// // Minimalist Cards with Floating Elements
// const ServicesVariant6 = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   const services = [
//     {
//       icon: <Bot size={24} />,
//       title: "AI Solutions",
//       description:
//         "Smart automation and machine learning solutions that transform your business operations.",
//       color: "bg-purple-100",
//       iconColor: "text-purple-600",
//       borderColor: "border-purple-200",
//       hoverColor: "hover:bg-purple-50",
//     },
//     {
//       icon: <Smartphone size={24} />,
//       title: "Mobile Development",
//       description:
//         "Native and cross-platform mobile applications with exceptional user experiences.",
//       color: "bg-blue-100",
//       iconColor: "text-blue-600",
//       borderColor: "border-blue-200",
//       hoverColor: "hover:bg-blue-50",
//     },
//     {
//       icon: <Settings size={24} />,
//       title: "Software Development",
//       description:
//         "Custom software solutions built for scalability, performance, and security.",
//       color: "bg-green-100",
//       iconColor: "text-green-600",
//       borderColor: "border-green-200",
//       hoverColor: "hover:bg-green-50",
//     },
//     {
//       icon: <Code size={24} />,
//       title: "Web Development",
//       description:
//         "Modern web applications that captivate users with stunning visuals.",
//       color: "bg-orange-100",
//       iconColor: "text-orange-600",
//       borderColor: "border-orange-200",
//       hoverColor: "hover:bg-orange-50",
//     },
//     {
//       icon: <Network size={24} />,
//       title: "IT Consulting",
//       description:
//         "Strategic technology consulting that aligns with your business objectives.",
//       color: "bg-indigo-100",
//       iconColor: "text-indigo-600",
//       borderColor: "border-indigo-200",
//       hoverColor: "hover:bg-indigo-50",
//     },
//     {
//       icon: <HeadphonesIcon size={24} />,
//       title: "IT Support",
//       description:
//         "Comprehensive support ensuring optimal performance and minimal downtime.",
//       color: "bg-pink-100",
//       iconColor: "text-pink-600",
//       borderColor: "border-pink-200",
//       hoverColor: "hover:bg-pink-50",
//     },
//     {
//       icon: <Cloud size={24} />,
//       title: "Cloud Solutions",
//       description:
//         "End-to-end cloud strategies for improved efficiency and scalability.",
//       color: "bg-cyan-100",
//       iconColor: "text-cyan-600",
//       borderColor: "border-cyan-200",
//       hoverColor: "hover:bg-cyan-50",
//     },
//   ];

//   return (
//     <section
//       className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20"
//       ref={ref}
//     >
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-[64px]"
//         >
//           <h2 className="text-5xl font-light text-gray-800 mb-4">
//             Our <span className="font-bold">Services</span>
//           </h2>
//           <div className="w-[64px] h-0.5 bg-gray-300 mx-auto mb-6" />
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Minimalist excellence in every solution we deliver
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//               className="group"
//             >
//               <div
//                 className={`relative p-[32px] bg-white rounded-2xl border ${service.borderColor} ${service.hoverColor} transition-all duration-300 shadow-sm hover:shadow-lg`}
//               >
//                 {/* Floating icon */}
//                 <motion.div
//                   whileHover={{ scale: 1.1, rotate: 5 }}
//                   className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-6 ${service.iconColor}`}
//                 >
//                   {service.icon}
//                 </motion.div>

//                 {/* Content */}
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                   {service.description}
//                 </p>

//                 {/* Minimal CTA */}
//                 <motion.button
//                   whileHover={{ x: 5 }}
//                   className={`text-sm font-medium ${service.iconColor} hover:underline transition-all duration-200`}
//                 >
//                   Learn more →
//                 </motion.button>

//                 {/* Floating dots */}
//                 <div className="absolute top-4 right-4 flex space-x-1">
//                   {[...Array(3)].map((_, i) => (
//                     <motion.div
//                       key={i}
//                       className={`w-1.5 h-1.5 ${service.color} rounded-full`}
//                       animate={{
//                         scale: [1, 1.2, 1],
//                         opacity: [0.5, 1, 0.5],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         delay: i * 0.2,
//                       }}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesVariant6;
// ------------------------------------------------------------------------------------

// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   Code,
//   Cloud,
//   Smartphone,
//   HeadphonesIcon,
//   Network,
//   Settings,
//   Bot,
// } from "lucide-react";

// // Bento Grid Layout with Soft Shadows
// const ServicesVariant7 = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   const services = [
//     {
//       icon: <Bot size={32} />,
//       title: "AI Solutions",
//       description:
//         "Revolutionary artificial intelligence that transforms business operations with smart automation.",
//       gradient: "from-purple-200 to-purple-300",
//       size: "large",
//       textColor: "text-purple-800",
//     },
//     {
//       icon: <Smartphone size={28} />,
//       title: "Mobile Development",
//       description: "Cross-platform mobile apps with exceptional performance.",
//       gradient: "from-blue-200 to-blue-300",
//       size: "medium",
//       textColor: "text-blue-800",
//     },
//     {
//       icon: <Settings size={28} />,
//       title: "Software Development",
//       description: "Scalable software architectures for enterprise solutions.",
//       gradient: "from-green-200 to-green-300",
//       size: "medium",
//       textColor: "text-green-800",
//     },
//     {
//       icon: <Code size={32} />,
//       title: "Web Development",
//       description:
//         "Modern web applications that captivate users with stunning visuals and seamless interactions.",
//       gradient: "from-orange-200 to-orange-300",
//       size: "large",
//       textColor: "text-orange-800",
//     },
//     {
//       icon: <Network size={28} />,
//       title: "IT Consulting",
//       description: "Strategic guidance for digital transformation.",
//       gradient: "from-indigo-200 to-indigo-300",
//       size: "small",
//       textColor: "text-indigo-800",
//     },
//     {
//       icon: <HeadphonesIcon size={28} />,
//       title: "IT Support",
//       description: "24/7 reliable support services.",
//       gradient: "from-pink-200 to-pink-300",
//       size: "small",
//       textColor: "text-pink-800",
//     },
//     {
//       icon: <Cloud size={28} />,
//       title: "Cloud Solutions",
//       description: "Complete cloud strategies for maximum efficiency.",
//       gradient: "from-cyan-200 to-cyan-300",
//       size: "small",
//       textColor: "text-cyan-800",
//     },
//   ];

//   const getGridClass = (size) => {
//     switch (size) {
//       case "large":
//         return "md:col-span-2 md:row-span-2";
//       case "medium":
//         return "md:col-span-2";
//       case "small":
//         return "md:col-span-1";
//       default:
//         return "md:col-span-1";
//     }
//   };

//   return (
//     <section
//       className="min-h-screen bg-gradient-to-br from-white to-gray-100 py-20"
//       ref={ref}
//     >
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-[64px]"
//         >
//           <h2 className="text-6xl font-bold text-gray-800 mb-6">
//             Service{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//               Grid
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Organized excellence in a beautiful bento-style layout
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={
//                 isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
//               }
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{
//                 scale: 1.02,
//                 y: -5,
//                 transition: { duration: 0.2 },
//               }}
//               className={`group ${getGridClass(service.size)}`}
//             >
//               <div
//                 className={`
//                 relative h-full p-[32px] bg-gradient-to-br ${service.gradient}
//                 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300
//                 border border-white/50 backdrop-blur-sm
//                 ${
//                   service.size === "large"
//                     ? "min-h-[400px]"
//                     : service.size === "medium"
//                     ? "min-h-[250px]"
//                     : "min-h-[200px]"
//                 }
//               `}
//               >
//                 {/* Icon */}
//                 <motion.div
//                   whileHover={{ rotate: 10, scale: 1.1 }}
//                   className={`w-[64px] h-[64px] bg-white/80 rounded-2xl flex items-center justify-center mb-6 ${service.textColor} shadow-sm`}
//                 >
//                   {service.icon}
//                 </motion.div>

//                 {/* Content */}
//                 <h3 className={`text-2xl font-bold mb-4 ${service.textColor}`}>
//                   {service.title}
//                 </h3>
//                 <p
//                   className={`${service.textColor} opacity-80 leading-relaxed ${
//                     service.size === "large" ? "text-base" : "text-sm"
//                   }`}
//                 >
//                   {service.description}
//                 </p>

//                 {/* Decorative elements */}
//                 <div className="absolute top-4 right-4 w-3 h-3 bg-white/60 rounded-full" />
//                 <div className="absolute bottom-4 right-4 w-2 h-2 bg-white/40 rounded-full" />

//                 {/* Hover effect overlay */}
//                 <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesVariant7;
// ------------------------------------------------------------------------------------

// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   Code,
//   Cloud,
//   Smartphone,
//   HeadphonesIcon,
//   Network,
//   Settings,
//   Bot,
// } from "lucide-react";

// // Neumorphism with Soft Gradients
// const ServicesVariant8 = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   const services = [
//     {
//       icon: <Bot size={28} />,
//       title: "AI Solutions",
//       description:
//         "Revolutionary artificial intelligence that transforms your business operations with smart automation and predictive analytics.",
//       accent: "bg-purple-400",
//       shadow: "shadow-purple-200",
//     },
//     {
//       icon: <Smartphone size={28} />,
//       title: "Mobile Development",
//       description:
//         "Native and cross-platform mobile applications that deliver exceptional performance and user experience.",
//       accent: "bg-blue-400",
//       shadow: "shadow-blue-200",
//     },
//     {
//       icon: <Settings size={28} />,
//       title: "Software Development",
//       description:
//         "Custom software architectures built with cutting-edge technologies and industry best practices.",
//       accent: "bg-green-400",
//       shadow: "shadow-green-200",
//     },
//     {
//       icon: <Code size={28} />,
//       title: "Web Development",
//       description:
//         "Modern web applications that captivate users with stunning visuals and seamless interactions.",
//       accent: "bg-orange-400",
//       shadow: "shadow-orange-200",
//     },
//     {
//       icon: <Network size={28} />,
//       title: "IT Consulting",
//       description:
//         "Expert technology consulting that aligns your digital infrastructure with business objectives.",
//       accent: "bg-indigo-400",
//       shadow: "shadow-indigo-200",
//     },
//     {
//       icon: <HeadphonesIcon size={28} />,
//       title: "IT Support",
//       description:
//         "Comprehensive support services ensuring optimal performance and minimal downtime for your systems.",
//       accent: "bg-pink-400",
//       shadow: "shadow-pink-200",
//     },
//     {
//       icon: <Cloud size={28} />,
//       title: "Cloud Solutions",
//       description:
//         "Complete cloud strategies that maximize efficiency, security, and cost-effectiveness for your business.",
//       accent: "bg-cyan-400",
//       shadow: "shadow-cyan-200",
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-gray-100 py-20" ref={ref}>
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-[32px]"
//         >
//           <h2 className="text-6xl font-bold text-gray-700 mb-6">
//             Core <span className="text-gray-500">Services</span>
//           </h2>
//           <div className="w-24 h-1 bg-gray-300 mx-auto mb-6 rounded-full" />
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Experience the gentle power of neumorphic design
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{
//                 y: -10,
//                 transition: { duration: 0.3 },
//               }}
//               className="group"
//             >
//               <div
//                 className="relative p-[32px] bg-gray-100 rounded-3xl transition-all duration-500 hover:bg-gray-50"
//                 style={{
//                   boxShadow: `
//                     20px 20px 40px rgba(0, 0, 0, 0.1),
//                     -20px -20px 40px rgba(255, 255, 255, 0.8),
//                     inset 0px 0px 0px rgba(255, 255, 255, 0.8),
//                     inset 0px 0px 0px rgba(0, 0, 0, 0.1)
//                   `,
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.boxShadow = `
//                     inset 10px 10px 20px rgba(0, 0, 0, 0.1),
//                     inset -10px -10px 20px rgba(255, 255, 255, 0.8)
//                   `;
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.boxShadow = `
//                     20px 20px 40px rgba(0, 0, 0, 0.1),
//                     -20px -20px 40px rgba(255, 255, 255, 0.8)
//                   `;
//                 }}
//               >
//                 {/* Neumorphic icon */}
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   className={`w-[32px] h-[32px] bg-gray-100 rounded-2xl flex items-center justify-center mb-6 text-gray-600 relative`}
//                   style={{
//                     boxShadow: `
//                       10px 10px 20px rgba(0, 0, 0, 0.1),
//                       -10px -10px 20px rgba(255, 255, 255, 0.8)
//                     `,
//                   }}
//                 >
//                   {service.icon}
//                   <div
//                     className={`absolute inset-0 rounded-2xl ${service.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
//                   />
//                 </motion.div>

//                 {/* Content */}
//                 <h3 className="text-2xl font-bold text-gray-700 mb-4">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {service.description}
//                 </p>

//                 {/* Neumorphic button */}
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl transition-all duration-300"
//                   style={{
//                     boxShadow: `
//                       8px 8px 16px rgba(0, 0, 0, 0.1),
//                       -8px -8px 16px rgba(255, 255, 255, 0.8)
//                     `,
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.boxShadow = `
//                       inset 4px 4px 8px rgba(0, 0, 0, 0.1),
//                       inset -4px -4px 8px rgba(255, 255, 255, 0.8)
//                     `;
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.boxShadow = `
//                       8px 8px 16px rgba(0, 0, 0, 0.1),
//                       -8px -8px 16px rgba(255, 255, 255, 0.8)
//                     `;
//                   }}
//                 >
//                   Explore →
//                 </motion.button>

//                 {/* Soft accent line */}
//                 <div
//                   className={`absolute bottom-0 left-[32px] right-[32px] h-1 ${service.accent} rounded-full opacity-30`}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesVariant8;
// ------------------------------------------------------------------------------------
