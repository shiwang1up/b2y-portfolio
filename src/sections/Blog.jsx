import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

const Blog = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeCategory, setActiveCategory] = useState('all')
  
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Cloud Security Practices for Businesses',
      excerpt: 'Learn the essential security practices to protect your business data in the cloud.',
      category: 'Cloud',
      date: 'Oct 15, 2023',
      author: 'David Chen',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'The Future of AI in Software Development',
      excerpt: 'Explore how artificial intelligence is transforming the way we build software.',
      category: 'AI',
      date: 'Sep 28, 2023',
      author: 'Jennifer Lee',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title: 'Digital Transformation Strategies for Small Businesses',
      excerpt: 'Practical approaches for small businesses to embrace digital transformation.',
      category: 'Strategy',
      date: 'Aug 10, 2023',
      author: 'Alex Morgan',
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ]
  
  const categories = ['all', 'Cloud', 'AI', 'Strategy']
  
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)
  
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
    <section id="blog" className="section bg-neutral-50" ref={ref}>
      <div className="container-custom">
        <SectionHeading
          subtitle="Blog"
          title="Latest Insights & News"
          description="Stay updated with the latest trends, insights, and news from the world of technology and digital innovation."
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
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
            >
              {category === 'all' ? 'All' : category}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredPosts.map((post, index) => (
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
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-16 left-16 bg-primary-500 text-white px-12 py-4 text-sm rounded-full">
                  {post.category}
                </div>
              </div>
              
              <div className="p-24">
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
                
                <p className="text-neutral-600 mb-24">
                  {post.excerpt}
                </p>
                
                <motion.a
                  href={`#blog/${post.id}`}
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
            href="#blog"
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
  )
}

export default Blog