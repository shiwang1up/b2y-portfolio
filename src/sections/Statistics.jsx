import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Award, Users, Briefcase, Calendar } from "lucide-react";

const StatisticsCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      count: 20,
      suffix: "+",
      title: "Projects Completed",
      description: "Successfully delivered projects",
      icon: Briefcase,
      color: "from-blue-500 to-indigo-600",
    },
    {
      count: 10,
      suffix: "+",
      title: "Happy Clients",
      description: "Across multiple industries",
      icon: Award,
      color: "from-purple-500 to-pink-600",
    },
    {
      count: 15,
      suffix: "+",
      title: "Team Members",
      description: "Talented professionals",
      icon: Users,
      color: "from-emerald-500 to-teal-600",
    },
    {
      count: 2,
      suffix: "+",
      title: "Years Experience",
      description: "In IT industry",
      icon: Calendar,
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-[64px] bg-gradient-to-br from-[#1735B3] to-[#132E65] text-white"
      // className="relative overflow-hidden py-[64px] bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className=" absolute inset-0 bg-[url('../assets/UI/Mass.svg')] bg-cover bg-center opacity-100"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, rotateY: 0 }
                    : { opacity: 0, y: 50, rotateY: 30 }
                }
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="relative overflow-hidden rounded-2xl"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-90`}
                ></div>

                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-white opacity-10 backdrop-blur-sm"></div>

                {/* Background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 8%)",
                    backgroundSize: "60px 60px",
                  }}
                  animate={{
                    backgroundPosition: ["0px 0px", "30px 30px"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                ></motion.div>

                <div className="relative p-32 flex flex-col items-center text-center ">
                  <div className="mb-4 p-3 rounded-full bg-white bg-opacity-20 backdrop-blur-sm">
                    <Icon size={32} className="text-white " />
                  </div>

                  <div className="mb-4">
                    {isInView && (
                      <span className="text-5xl font-bold text-white">
                        <CountUp
                          end={stat.count}
                          duration={2.5}
                          enableScrollSpy
                        />
                        {stat.suffix}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                  <p className="text-white text-opacity-80">
                    {stat.description}
                  </p>

                  {/* Decorative circle */}
                  <motion.div
                    className="absolute -bottom-14 -right-14 w-44 h-44 rounded-full bg-white opacity-10"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsCards;
