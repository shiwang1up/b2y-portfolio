import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Code, Users, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with
              <span className="text-blue-300"> Cutting-Edge Technology</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Leading AI solutions, custom development, and strategic consulting 
              to accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive innovation and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Solutions */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <Brain className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Solutions</h3>
              <p className="text-gray-600 mb-6">
                Harness the power of artificial intelligence with machine learning, 
                computer vision, and natural language processing solutions.
              </p>
              <div className="space-y-2 mb-6">
                <Link to="/ai/ml" className="block text-blue-700 hover:text-blue-900 transition-colors">
                  • Machine Learning
                </Link>
                <Link to="/ai/cv" className="block text-blue-700 hover:text-blue-900 transition-colors">
                  • Computer Vision
                </Link>
                <Link to="/ai/nlp" className="block text-blue-700 hover:text-blue-900 transition-colors">
                  • Natural Language Processing
                </Link>
              </div>
              <button className="text-blue-700 font-semibold hover:text-blue-900 transition-colors flex items-center">
                Explore AI Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6">
                <Code className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Development</h3>
              <p className="text-gray-600 mb-6">
                Custom software development solutions including web applications, 
                mobile apps, and enterprise software systems.
              </p>
              <div className="space-y-2 mb-6">
                <Link to="/dev/web" className="block text-green-700 hover:text-green-900 transition-colors">
                  • Web Development
                </Link>
                <Link to="/dev/mobile" className="block text-green-700 hover:text-green-900 transition-colors">
                  • Mobile Apps
                </Link>
                <Link to="/dev/custom" className="block text-green-700 hover:text-green-900 transition-colors">
                  • Custom Software
                </Link>
              </div>
              <button className="text-green-700 font-semibold hover:text-green-900 transition-colors flex items-center">
                Explore Development
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Consulting */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-6">
                <Users className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consulting</h3>
              <p className="text-gray-600 mb-6">
                Strategic technology consulting to help you navigate digital 
                transformation and optimize your IT infrastructure.
              </p>
              <div className="space-y-2 mb-6">
                <Link to="/consulting/strategy" className="block text-orange-700 hover:text-orange-900 transition-colors">
                  • IT Strategy
                </Link>
                <Link to="/consulting/cloud" className="block text-orange-700 hover:text-orange-900 transition-colors">
                  • Cloud Solutions
                </Link>
                <Link to="/consulting/digital" className="block text-orange-700 hover:text-orange-900 transition-colors">
                  • Digital Transformation
                </Link>
              </div>
              <button className="text-orange-700 font-semibold hover:text-orange-900 transition-colors flex items-center">
                Explore Consulting
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose TechSolutions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine deep technical expertise with strategic business insight 
                to deliver solutions that drive real results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Team</h3>
                    <p className="text-gray-600">Industry-leading professionals with proven track records</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Cutting-Edge Technology</h3>
                    <p className="text-gray-600">Latest tools and frameworks for optimal performance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Tailored Solutions</h3>
                    <p className="text-gray-600">Custom approaches designed for your specific needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Ongoing Support</h3>
                    <p className="text-gray-600">Continuous maintenance and optimization services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:text-center">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can accelerate your growth 
            and competitive advantage in the digital marketplace.
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;