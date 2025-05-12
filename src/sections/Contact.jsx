import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus({ submitting: true, success: false, error: false })
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitting: false, success: true, error: false })
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitting: false, success: false, error: false })
      }, 5000)
    }, 1500)
  }
  
  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: 'Our Location',
      content: '1234 Tech Boulevard, Innovation District, CA 98765',
      link: '#',
    },
    {
      icon: <FiPhone />,
      title: 'Phone Number',
      content: '+1 (234) 567-890',
      link: 'tel:+1234567890',
    },
    {
      icon: <FiMail />,
      title: 'Email Address',
      content: 'info@thoughtsol.com',
      link: 'mailto:info@thoughtsol.com',
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }
  
  return (
    <section id="contact" className="section bg-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute -left-[10%] -bottom-[10%] w-[40%] h-[40%] rounded-full bg-primary-50 opacity-50"></div>
      <div className="absolute -right-[5%] -top-[15%] w-[30%] h-[30%] rounded-full bg-secondary-50 opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="Contact Us"
          title="Get in Touch with Our Team"
          description="Have a question or need assistance? Reach out to us, and our team will be glad to help you."
          center={true}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-32 lg:gap-48">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="bg-primary-500 text-white rounded-xl p-32 h-full"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-32">Contact Information</h3>
              <p className="mb-32 text-neutral-100">
                Feel free to contact us through any of these channels. We're here to help and eager to hear from you.
              </p>
              
              <div className="space-y-24">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-40 h-40 rounded-full bg-white/20 flex items-center justify-center mr-16 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium mb-4">{item.title}</h4>
                      <a 
                        href={item.link}
                        className="text-neutral-200 hover:text-white transition-colors duration-300"
                      >
                        {item.content}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-48">
                <h4 className="font-medium mb-16">Follow Us</h4>
                <div className="flex space-x-12">
                  {['LinkedIn', 'Twitter', 'Facebook'].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="w-40 h-40 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary-500 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social[0]}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-card p-32"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-32 text-neutral-800">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-24 mb-24">
                  <div>
                    <label htmlFor="name" className="block text-neutral-700 mb-8">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-16 py-12 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-neutral-700 mb-8">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-16 py-12 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-24">
                  <label htmlFor="subject" className="block text-neutral-700 mb-8">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-16 py-12 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div className="mb-32">
                  <label htmlFor="message" className="block text-neutral-700 mb-8">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-16 py-12 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="btn btn-primary py-12 px-32 flex items-center justify-center w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? (
                    <>
                      <svg className="animate-spin -ml-8 mr-16 h-24 w-24 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-8" /> Send Message
                    </>
                  )}
                </motion.button>
                
                {formStatus.success && (
                  <motion.div 
                    className="mt-16 p-12 bg-green-50 text-green-700 rounded-md"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}
                
                {formStatus.error && (
                  <motion.div 
                    className="mt-16 p-12 bg-red-50 text-red-700 rounded-md"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    There was an error sending your message. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact