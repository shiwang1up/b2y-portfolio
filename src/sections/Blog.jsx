import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "RealEstate",
      excerpt:
        "Successfully developed a real estate app, combining intuitive design with robust features to enhance property search and user satisfaction. Delivered a real estate app with a focus on innovation and user-centric design, ensuring a seamless experience for buyers and sellers alike.",
      category: "Cloud",
      date: "Oct 15, 2023",
      author: "David Chen",
      image: "../assets/portfolio/1.jpg",
    },
    {
      id: 2,
      title: "E-Commerce",
      excerpt:
        "Successfully launched an e-commerce platform, integrating modern design with seamless functionality to drive customer engagement and sales. Delivered an e-commerce website with a focus on innovation and user-centric design, ensuring a standout shopping experience in a competitive market",
      category: "AI",
      date: "Sep 28, 2023",
      author: "Jennifer Lee",
      image: "../assets/portfolio/2.jpg",
    },
    {
      id: 3,
      title: "MCDMF",
      excerpt:
        "We are thrilled to deliver the MCDMF website, crafted with precision and tailored to meet your unique needs. Our team has ensured that the MCDMF website is not only visually stunning but also fully optimized for an exceptional user experience.",
      category: "Strategy",
      date: "Aug 10, 2023",
      author: "Alex Morgan",
      image: "../assets/portfolio/3.jpg",
    },
    {
      id: 4,
      title: "Idea Hub",
      excerpt:
        "Groundbreaking ideas and innovative solutions, where creativity meets execution. Ideahub's commitment to turning visionary concepts into reality",
      category: "Strategy",
      date: "Aug 10, 2023",
      author: "Alex Morgan",
      image: "../assets/portfolio/4.jpg",
    },
    // {
    //   id: 5,
    //   title: "MultiTenant CMS",
    //   excerpt:
    //     "Successfully developed a MultiTenant CMS, integrating seamless user management with customizable features to empower diverse clients and streamline content delivery. Engineered a MultiTenant CMS, Developing customized dynamic websites through an intuitive admin interface, tailored to empower multi-tenant environments with ease.",
    //   category: "Strategy",
    //   date: "Aug 10, 2023",
    //   author: "Alex Morgan",
    //   image:
    //     "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // },
    // {
    //   id: 6,
    //   title: "DA Application",
    //   excerpt:
    //     "Successfully developed a cutting-edge DA Learning Platform, offering seamless course access, video streaming, and real-time online classes, all while ensuring top-notch security with device registration restrictions. Powered by React Native, React.js, Node.js, and PostgreSQL for a smooth and scalable experience.",
    //   category: "Strategy",
    //   date: "Aug 10, 2023",
    //   author: "Alex Morgan",
    //   image:
    //     "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // },
    // {
    //   id: 7,
    //   title: "InteriorSoft",
    //   excerpt:
    //     "Developed Interior Design System, an ERP platform for interior designers to manage orders, payments, and clients. Built with React Native (Mobile), React.js (Web), Node.js (Backend), and PostgreSQL (Database).",
    //   category: "Strategy",
    //   date: "Aug 10, 2023",
    //   author: "Alex Morgan",
    //   image:
    //     "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // },
    // {
    //   id: 8,
    //   title: "OneClick2Serve",
    //   excerpt:
    //     "Developed OneClick2Serve, a platform offering professional home and office services (e.g., cleaning, plumbing, painting).",
    //   category: "Strategy",
    //   date: "Aug 10, 2023",
    //   author: "Alex Morgan",
    //   image:
    //     "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // },
    // {
    //   id: 9,
    //   title: "Nimboo Bill",
    //   excerpt:
    //     "Developed NimbooBill, a smart POS billing app for restaurants that provides real-time financial insights, revenue tracking, and expense monitoring. Available on Android, iOS, and Windows with offline support and sync functionality.",
    //   category: "Strategy",
    //   date: "Aug 10, 2023",
    //   author: "Alex Morgan",
    //   image:
    //     "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // },
    // {
    //   id: 10,
    //   title: "E-Commerce Mobile App",
    //   excerpt:
    //     "Enables users to browse, search, and purchase products online with ease. It features a user-friendly interface. Secure payment options, and personalized recommendations for a seamless shopping experience.",
    //   category: "Strategy",
    //   date: "Aug 10, 2023",
    //   author: "Alex Morgan",
    //   image:
    //     "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // },
    // {
    //   id: 11,
    //   title: "Mana Mandi Mobile App",
    //   excerpt:
    //     "Our Mobile app is designed to deliver seamless performance, solving complex problems with a user-friendly interface. With cutting-edge features and a commitment to excellence, it empowers users to achieve more with ease and efficiency.",
    //   category: "Strategy",
    //   date: "Aug 10, 2023",
    //   author: "Alex Morgan",
    //   image:
    //     "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // },
  ];

  const categories = ["all", "Cloud", "AI", "Strategy"];

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

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
              className={`px-24 py-8 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary-500 text-white"
                  : "bg-white text-neutral-700 hover:bg-neutral-100"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
            >
              {category === "all" ? "All" : category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-32"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-card group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-16 left-16 bg-primary-500 text-white px-12 py-4 text-sm rounded-full">
                  {post.category}
                </div>
              </div>

              <div className="p-24 ">
                <div className="flex items-center text-sm text-neutral-500 mb-16">
                  <span className="flex items-center">
                    <FiCalendar className="mr-4" />
                    {post.date}
                  </span>
                  <span className="mx-8">•</span>
                  <span className="flex items-center">
                    <FiUser className="mr-4" />
                    {post.author}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-16 text-neutral-800 group-hover:text-primary-500 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-neutral-600 mb-24">{post.excerpt}</p>

                <motion.a
                  href={`#portfolio/${post.id}`}
                  className="inline-flex items-center font-medium text-primary-500 hover:text-primary-700 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Read more
                  <FiArrowRight className="ml-8" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="text-center mt-48">
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
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
