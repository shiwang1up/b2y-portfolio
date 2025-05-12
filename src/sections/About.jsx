import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCheckCircle } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    "Experienced team of professionals",
    "Cutting-edge technologies",
    "Customized solutions for your needs",
    "Reliable and timely delivery",
    "Continuous support and maintenance",
    "Transparent communication",
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

  return (
    <section id="about" className="section bg-white" ref={ref}>
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-64">
          {/* Image Column */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-24 -right-24 w-2/3 h-2/3 bg-secondary-500/20 rounded-xl -z-0"></div>
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our team working together"
                className="rounded-xl shadow-lg relative z-10"
              />

              {/* Background decorative element */}
              <div className="absolute -bottom-24 -left-24 w-2/3 h-2/3 bg-primary-500/20 rounded-xl -z-0"></div>

              {/* Years of experience badge */}
              {/* <motion.div
                className="absolute -top-24 -right-24 lg:-right-32 bg-white shadow-xl rounded-lg p-16 flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <span className="text-5xl font-bold text-primary-500">10+</span>
                <span className="text-neutral-600 text-center">
                  Years of
                  <br />
                  Experience
                </span>
              </motion.div> */}
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <SectionHeading
              subtitle="About Us"
              title="We Deliver Excellence in IT Solutions"
              description="At B2Y, we're more than tech experts—we're innovators, problem-solvers, and drivers of digital transformation. Born from a bold vision to reshape the IT world, we set out to empower businesses with smart, future-ready solutions."
            />
            {/* <SectionHeading
              subtitle="About Us"
              title="We Deliver Excellence in IT Solutions"
              description="ThoughtSol is a leading IT solutions provider dedicated to helping businesses leverage technology to achieve their goals. With over a decade of experience, we've built a reputation for delivering innovative solutions that drive real results."
            /> */}

            <motion.p
              className="text-neutral-600 mb-32"
              variants={itemVariants}
            >
              Our team of experts specializes in developing cutting-edge
              software, implementing robust cloud infrastructure, and providing
              strategic IT consulting services that empower businesses to thrive
              in today&#39;s competitive landscape.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-16 mb-32"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <FiCheckCircle className="text-primary-500 mr-12 flex-shrink-0" />
                  <span className="text-neutral-700">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className="btn btn-primary py-12 px-32 text-lg mt-16"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
