import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote:
        "B2Y Infy Solutions transformed our business with their innovative IT solutions. Their team was professional, responsive, and delivered exactly what we needed. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "CTO, Innovate Inc.",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote:
        "We partnered with B2Y Infy Solutions for our digital transformation initiative, and they exceeded our expectations. Their expertise in cloud solutions helped us modernize our infrastructure efficiently.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, Growth Brands",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote:
        "The custom CRM solution developed by B2Y Infy Solutions has significantly improved our customer engagement. Their team understood our needs perfectly and delivered a user-friendly system.",
      rating: 4,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="testimonials" className="section bg-neutral-50" ref={ref}>
      <div className="container-custom">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it. Hear from our clients about their experience working with B2Y Infy Solutions."
          center={true}
        />

        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-card overflow-hidden"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Image Section */}
              <div className="relative h-full">
                <div className="h-full bg-primary-500 relative overflow-hidden">
                  <motion.img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover mix-blend-overlay opacity-70"
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary-700 to-transparent opacity-60"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-24 text-white z-10">
                    <div className="flex mb-8">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-16 h-16 ${
                            i < testimonials[activeIndex].rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-white"
                          }`}
                        />
                      ))}
                    </div>
                    <motion.h4
                      className="text-xl font-semibold mb-4"
                      key={`name-${activeIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {testimonials[activeIndex].name}
                    </motion.h4>
                    <motion.p
                      className="text-white/80"
                      key={`position-${activeIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {testimonials[activeIndex].position}
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="col-span-1 md:col-span-2 p-32 md:p-48 flex flex-col justify-center">
                <motion.div
                  key={`quote-${activeIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-24"
                >
                  <svg
                    className="w-40 h-40 text-neutral-300 mb-16"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-lg text-neutral-600">
                    {testimonials[activeIndex].quote}
                  </p>
                </motion.div>

                {/* Navigation buttons */}
                <div className="flex justify-between mt-auto">
                  <div className="flex space-x-8">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-8 h-8 rounded-full transition-all duration-300 ${
                          activeIndex === index
                            ? "bg-primary-500"
                            : "bg-neutral-300"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      ></button>
                    ))}
                  </div>

                  <div className="flex space-x-8">
                    <motion.button
                      className="w-40 h-40 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      onClick={handlePrev}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Previous testimonial"
                    >
                      <FiChevronLeft className="w-24 h-24" />
                    </motion.button>
                    <motion.button
                      className="w-40 h-40 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      onClick={handleNext}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Next testimonial"
                    >
                      <FiChevronRight className="w-24 h-24" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
