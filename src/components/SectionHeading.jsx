import { motion } from 'framer-motion'

const SectionHeading = ({ subtitle, title, description, center = false, light = false }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
  
  return (
    <motion.div 
      className={`max-w-3xl mb-64 ${center ? 'mx-auto text-center' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      <motion.div variants={itemVariants}>
        <span className={`inline-block px-16 py-8 rounded-full text-sm font-medium ${light ? 'bg-white/20 text-white' : 'bg-primary-100 text-primary-600'} mb-16`}>
          {subtitle}
        </span>
      </motion.div>
      
      <motion.h2 
        variants={itemVariants}
        className={`text-3xl md:text-4xl font-bold mb-24 ${light ? 'text-white' : 'text-neutral-800'}`}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p 
          variants={itemVariants}
          className={`text-lg ${light ? 'text-neutral-200' : 'text-neutral-600'}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

export default SectionHeading