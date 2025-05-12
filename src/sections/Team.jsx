import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

const Team = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const team = [
    {
      name: 'Alex Morgan',
      position: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'alex@thoughtsol.com',
      },
    },
    {
      name: 'Jennifer Lee',
      position: 'CTO',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'jennifer@thoughtsol.com',
      },
    },
    {
      name: 'David Chen',
      position: 'Lead Developer',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@thoughtsol.com',
      },
    },
    {
      name: 'Sophia Martinez',
      position: 'UX Designer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sophia@thoughtsol.com',
      },
    },
  ]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }
  
  return (
    <section id="team" className="section bg-white" ref={ref}>
      <div className="container-custom">
        <SectionHeading
          subtitle="Our Team"
          title="Meet the Experts Behind B2Y Infy Solutions"
          description="Our talented team of professionals is passionate about delivering innovative solutions and exceptional service to our clients."
          center={true}
        />
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="overflow-hidden rounded-xl">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social Icons */}
                  <div className="absolute bottom-0 left-0 right-0 p-24 flex justify-center space-x-16 translate-y-24 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.a
                      href={member.social.linkedin}
                      className="w-40 h-40 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary-500 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <FiLinkedin />
                    </motion.a>
                    <motion.a
                      href={member.social.twitter}
                      className="w-40 h-40 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary-500 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <FiTwitter />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.social.email}`}
                      className="w-40 h-40 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary-500 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Email ${member.name}`}
                    >
                      <FiMail />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <h3 className="text-xl font-semibold text-neutral-800">{member.name}</h3>
                <p className="text-primary-500">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Team