import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import SectionHeading from "../components/SectionHeading";
import image1 from "../assets/portfolio/1.jpg";
import image2 from "../assets/portfolio/2.jpg";
import image3 from "../assets/portfolio/3.jpg";
import image4 from "../assets/portfolio/4.jpg";
import image5 from "../assets/portfolio/5.jpg";
import image6 from "../assets/portfolio/6.png";
import image7 from "../assets/portfolio/7.jpg";
import image8 from "../assets/portfolio/8.png";
import image9 from "../assets/portfolio/9.png";
import image10 from "../assets/portfolio/10.png";
import image11 from "../assets/portfolio/11.png";

const techColors = {
  React: "bg-cyan-100 text-cyan-700", // Cyan (React logo color)
  Docker: "bg-blue-100 text-blue-700", // Docker blue
  "Node.js": "bg-lime-100 text-lime-700", // Node green
  Android: "bg-green-100 text-green-700", // Android green
  "React Native": "bg-sky-100 text-sky-700", // Sky blue (React Native has a lighter blue)
  PostgreSQL: "bg-indigo-100 text-indigo-700", // PostgreSQL elephant blue
  MongoDB: "bg-emerald-100 text-emerald-700", // MongoDB green
  iOS: "bg-zinc-100 text-zinc-700", // Neutral grey for iOS
  Firebase: "bg-amber-100 text-amber-700", // Firebase yellow/orange
  Flutter: "bg-blue-100 text-blue-700", // Flutter blue
  SQL: "bg-orange-100 text-orange-700", // Generic SQL orange
  "SQL Server": "bg-rose-100 text-rose-700", // SQL Server reddish-pink
  AWS: "bg-yellow-100 text-yellow-700", // AWS yellow
  ".Net": "bg-purple-100 text-purple-700", // .NET purple
  TypeScript: "bg-blue-100 text-blue-700", // TypeScript blue
  Java: "bg-red-100 text-red-700", // Java red/orange
  Python: "bg-yellow-100 text-yellow-800", // Python yellow/blue, but yellow for clarity
  Angular: "bg-red-100 text-red-700", // Angular red
  ".NET Core": "bg-violet-100 text-violet-700", // .NET Core violet
  Websockets: "bg-teal-100 text-teal-700", // Teal as neutral tech/web comms
};

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(4);

  const blogPosts = [
    {
      id: 1,
      title: "RealEstate",
      excerpt:
        "Successfully developed a real estate app, combining intuitive design with robust features to enhance property search and user satisfaction. Delivered a real estate app with a focus on innovation and user-centric design, ensuring a seamless experience for buyers and sellers alike.",
      category: "Real Estate",
      tech: ["React", "Node.js", "Websockets", "SQL"],
      image: image1,
      color: "blue-100",
    },
    {
      id: 2,
      title: "E-Commerce",
      excerpt:
        "Successfully launched an e-commerce platform, integrating modern design with seamless functionality to drive customer engagement and sales. Delivered an e-commerce website with a focus on innovation and user-centric design, ensuring a standout shopping experience in a competitive market",
      category: "E-Commerce",
      tech: ["React", "Node.js", "Websockets", "SQL"],
      image: image2,
      color: "yellow-100",
    },
    {
      id: 3,
      title: "MCDMF",
      excerpt:
        "We are thrilled to deliver the MCDMF website, crafted with precision and tailored to meet your unique needs. Our team has ensured that the MCDMF website is not only visually stunning but also fully optimized for an exceptional user experience.",
      category: "Web Platform",
      tech: ["React", "Node.js", "Websockets", "SQL"],
      image: image3,
      color: "amber-100",
    },
    {
      id: 4,
      title: "Idea Hub",
      excerpt:
        "Groundbreaking ideas and innovative solutions, where creativity meets execution. Ideahub's commitment to turning visionary concepts into reality",
      category: "Portfolio",
      tech: ["React", "Java", "MongoDB", "AWS"],
      image: image4,
      color: "purple-100",
    },
    {
      id: 5,
      title: "MultiTenant CMS",
      excerpt:
        "Successfully developed a MultiTenant CMS, integrating seamless user management with customizable features to empower diverse clients and streamline content delivery. Engineered a MultiTenant CMS, Developing customized dynamic websites through an intuitive admin interface, tailored to empower multi-tenant environments with ease.",
      category: "ERP Platform",
      tech: ["React", ".Net", "Websockets", "SQL"],
      image: image5,
      color: "green-100",
    },
    {
      id: 6,
      title: "DA Application",
      excerpt:
        "Successfully developed a cutting-edge DA Learning Platform, offering seamless course access, video streaming, and real-time online classes, all while ensuring top-notch security with device registration restrictions. Powered by React Native, React.js, Node.js, and PostgreSQL for a smooth and scalable experience.",
      category: "Learning Platform",
      tech: ["React", "Node.js", "Websockets", "PostgreSQL"],
      image: image6,
      color: "red-100",
    },
    {
      id: 7,
      title: "InteriorSoft",
      excerpt:
        "Developed Interior Design System, an ERP platform for interior designers to manage orders, payments, and clients. Built with React Native (Mobile), React.js (Web), Node.js (Backend), and PostgreSQL (Database).",
      category: "ERP Platform",
      tech: ["React", "Node.js", "SQL", "React Native"],
      image: image7,
      color: "purple-100",
    },
    {
      id: 8,
      title: "OneClick2Serve",
      excerpt:
        "Developed OneClick2Serve, a platform offering professional home and office services (e.g., cleaning, plumbing, painting).",
      category: "Service Platform",
      tech: ["Angular", ".NET Core", "SQL Server", "Docker"],
      image: image8,
      color: "amber-100",
    },
    {
      id: 9,
      title: "Nimboo Bill",
      excerpt:
        "Developed NimbooBill, a smart POS billing app for restaurants that provides real-time financial insights, revenue tracking, and expense monitoring. Available on Android, iOS, and Windows with offline support and sync functionality.",
      category: "Billing",
      tech: ["Flutter", "Angular", ".NET Core", "SQL Server", "Docker"],
      image: image9,
      color: "lime-100",
    },
    {
      id: 10,
      title: "E-Commerce",
      excerpt:
        "Enables users to browse, search, and purchase products online with ease. It features a user-friendly interface. Secure payment options, and personalized recommendations for a seamless shopping experience.",
      category: "E-Commerce",
      tech: ["Android", "iOS", "Node.js", "React Native"],
      image: image10,
      color: "teal-100",
    },
    {
      id: 11,
      title: "Mana Mandi Mobile App",
      excerpt:
        "Our Mobile app is designed to deliver seamless performance, solving complex problems with a user-friendly interface. With cutting-edge features and a commitment to excellence, it empowers users to achieve more with ease and efficiency.",
      category: "General Mobile Apps",
      tech: ["Android", "iOS", "Node.js", "React Native"],
      image: image11,
      color: "indigo-100",
    },
  ];

  const categories = [
    "all",
    "E-Commerce",
    "Real Estate",
    "Web Platform",
    "Portfolio",
    "ERP Platform",
    "Learning Platform",
    "Service Platform",
    "Billing",
    "General Mobile Apps",
  ];

  useEffect(() => {
    setVisibleCount(4);
  }, [activeCategory]);

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const displayedPosts = filteredPosts.slice(0, visibleCount);

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

  return (
    <section id="portfolio" className="section bg-neutral-50" ref={ref}>
      <div className="container-custom">
        <SectionHeading
          subtitle="Portfolio"
          title="Our Recent Works"
          description="Our team is currently working on a mobile app redesign aimed at improving user experience. We're using React Native for the frontend and Node.js for the backend. The project is progressing well, with initial wireframes completed and API integration underway."
          center={true}
        />

        {/* Categories Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-16 mb-48"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={` rounded-full font-medium transition-all duration-300 py-2 px-3 ${
                activeCategory === category
                  ? "bg-primary-500/70 backdrop-blur-md shadow-lg px-24 py-2   text-sm rounded-full text-white"
                  : "bg-white text-neutral-700 hover:bg-neutral-100 "
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
            >
              {category === "all" ? "All" : category}
            </motion.button>
          ))}
        </motion.div>

        <div className="relative">
          {" "}
          {/* Wrap everything inside a relative parent */}
          {/* Mesh-like animated background */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 "
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {displayedPosts.map((post) => (
              <motion.article
                key={post.id}
                className={` bg-${post.color} rounded-xl overflow-hidden shadow-card group`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="px-24 pt-24 rounded-2xl relative  ">
                  <div className="relative mb-5">
                    <h3 className="text-xl font-semibold mb-16 text-neutral-800  transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-neutral-600 ">{post.excerpt}</p>

                    <div className="absolute right-0 top-[-10px]">
                      <motion.a
                        href={`#portfolio/${post.id}`}
                        className={`inline-flex items-center justify-center font-medium bg-white hover:bg-white duration-300 p-3 rounded-full border-[1px] relative w-12 h-12`}
                        whileHover="hover"
                        initial="initial"
                      >
                        {/* First arrow (moves out top-right) */}
                        <motion.div
                          variants={{
                            initial: { opacity: 1, x: 0, y: 0 },
                            hover: { opacity: 0, x: 20, y: -20 },
                          }}
                          transition={{ duration: 0.3 }}
                          className="absolute"
                        >
                          <FaArrowRight className="transform -rotate-45" />
                        </motion.div>

                        {/* Second arrow (comes in bottom-left) */}
                        <motion.div
                          variants={{
                            initial: { opacity: 0, x: -20, y: 20 },
                            hover: { opacity: 1, x: 0, y: 0 },
                          }}
                          transition={{ duration: 0.3 }}
                          className="absolute"
                        >
                          <FaArrowRight className="transform -rotate-45" />
                        </motion.div>
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end flex-wrap gap-8 px-[24px]">
                  {post.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-9 py-2 rounded-full text-sm ${
                        techColors[tech] || "bg-neutral-100 text-neutral-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="relative overflow-hidden p-24">
                  <div className="relative overflow-hidden rounded-2xl w-full h-[250px] flex items-center justify-center bg-white group">
                    {/* Background Mesh with gradient overlay */}
                    <img
                      src="https://framerusercontent.com/images/6bZ0A2PCtBZD7XutwDhJ6XAIMM.svg"
                      alt=""
                      className="w-full h-full object-cover rounded-inherit absolute z-1"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* White to transparent gradient overlay */}
                    <div className="absolute z-10 inset-0 bg-gradient-to-b to-white/90 from-  transparent pointer-events-none rounded-inherit" />

                    {/* Foreground image */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 absolute z-20"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {filteredPosts.length > displayedPosts.length && (
          <div className="text-center mt-48">
            <motion.button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="btn btn-outline py-12 px-32"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More
            </motion.button>
          </div>
        )}

        {/* <div className="text-center mt-48">
          <motion.a
            href="#portfolio"
            className="btn btn-outline py-12 px-32"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Posts
          </motion.a>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
