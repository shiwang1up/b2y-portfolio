import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      count: 20,
      suffix: "+",
      title: "Projects Completed",
      description: "Successfully delivered projects",
    },
    {
      count: 10,
      suffix: "+",
      title: "Happy Clients",
      description: "Across multiple industries",
    },
    {
      count: 15,
      suffix: "+",
      title: "Team Members",
      description: "Talented professionals",
    },
    {
      count: 2,
      suffix: "+",
      title: "Years Experience",
      description: "In IT industry",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      className="py-80 bg-gradient-to-br from-primary-600 to-primary-800 text-white"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-24 rounded-xl bg-white/10 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="mb-8 relative">
                {isInView && (
                  <span className="text-5xl font-bold">
                    <CountUp end={stat.count} duration={2.5} enableScrollSpy />
                    {stat.suffix}
                  </span>
                )}
                <motion.div
                  className="absolute -z-10 w-24 h-24 bg-secondary-500 rounded-full opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-8">{stat.title}</h3>
              <p className="text-neutral-200">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
