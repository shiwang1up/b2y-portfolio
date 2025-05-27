import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen   flex items-center pt-80 pb-64 bg-gradient-to-br  overflow-hidden color-white"
    >
      <div className=" absolute inset-0 bg-[url('../assets/UI/Polygon.svg')] bg-cover bg-center opacity-100"></div>
      {/* Background animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-primary-400 opacity-20"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-20 left-[40%] w-64 h-64 rounded-full bg-secondary-400 opacity-20"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-20 left-[70%] w-64 h-64 rounded-full bg-primary-400 opacity-20"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[30%] right-[1%] w-48 h-48 rounded-full bg-secondary-500 opacity-20"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* ------------------ */}
        <motion.div
          className="absolute bottom-[20%] left-[20%] w-80 h-80 rounded-full bg-secondary-500 opacity-20"
          animate={{
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[45%] left-[40%] w-64 h-64 rounded-full bg-primary-400 opacity-20"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[12%] left-[80%] w-64 h-64 rounded-full bg-secondary-400 opacity-20"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero Content */}
          <motion.div
            className="lg:w-1/2 mb-48 lg:mb-0 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-16 py-8 rounded-full text-sm font-medium bg-white/20 text-white mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Innovative IT Solutions
            </motion.span>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-24 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="block">Transforming Ideas Into</span>
              <motion.span
                className="text-secondary-300"
                animate={{
                  color: ["#66ffdd", "#ffb366", "#66a3ff", "#66ffdd"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Powerful Solutions
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-neutral-100 mb-40 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              We deliver cutting-edge technology solutions to help businesses
              thrive in today's competitive digital landscape.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <motion.button
                  className="btn bg-white text-primary-600 hover:bg-neutral-100 py-12 px-32 text-lg font-medium rounded-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </Link>

              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <motion.button
                  className="btn border-2 border-white text-white hover:bg-white/10 py-12 px-32 text-lg font-medium rounded-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Digital Technology"
                className="rounded-xl shadow-2xl "
              />

              {/* Floating stats card */}
              <motion.div
                className="absolute -bottom-24 -left-24 bg-white p-[12px] rounded-lg shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="flex items-center space-x-12">
                  <div className="w-48 h-48 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 text-sm font-bold">
                      100%
                    </span>
                  </div>
                  <div>
                    <p className="text-neutral-800 font-medium">
                      Client satisfaction
                    </p>
                    <p className="text-neutral-500 text-sm">
                      Based on 20+ projects
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating tech card */}
              <motion.div
                className="absolute -top-24 -right-24 bg-white p-[12px] rounded-lg shadow-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="flex items-center space-x-12">
                  <div className="w-48 h-48 rounded-full bg-secondary-100 flex items-center justify-center">
                    <span className="text-secondary-600 text-lg font-bold">
                      2+
                    </span>
                  </div>
                  <div>
                    <p className="text-neutral-800 font-medium">
                      Years Experience
                    </p>
                    <p className="text-neutral-500 text-sm">
                      Advanced solutions
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
