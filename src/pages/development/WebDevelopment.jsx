import React from 'react';
import { Globe, Smartphone, Zap, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

const WebDevelopment = () => {
  const navigate = useNavigate();
  const handleNavClick = (to) => {
    if (location.pathname === "/") {
      scroller.scrollTo(to, {
        spy: true,
        smooth: true,
        offset: -100,
        duration: 500,
      });
    } else {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(to, {
          spy: true,
          smooth: true,
          offset: -100,
          duration: 500,
        });
      }, 500);
    }
  };
  return (
    <div className="bg-white pt-80 overflow-hidden color-white items-center bg-gradient-to-br">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-[32px] w-[32px] text-blue-300" />
                <span className="text-blue-300 font-semibold">Development Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Web Development Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-[32px]">
                Build modern, scalable, and high-performance web applications that deliver
                exceptional user experiences and drive business growth.
              </p>
              <button className="bg-white text-blue-900 px-[32px] py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center"
                onClick={() => handleNavClick('contact')}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="lg:text-center">
              <img
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Web Development"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-stack development solutions from concept to deployment and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-blue-100 rounded-lg mb-6">
                <Globe className="h-[32px] w-[32px] text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Frontend Development</h3>
              <p className="text-gray-600 mb-6">
                Create stunning, responsive user interfaces with modern frameworks
                and cutting-edge design principles.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• React, Vue.js, Angular</li>
                <li>• Responsive design</li>
                <li>• Progressive Web Apps</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-green-100 rounded-lg mb-6">
                <Zap className="h-[32px] w-[32px] text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Backend Development</h3>
              <p className="text-gray-600 mb-6">
                Build robust, scalable server-side applications with secure APIs
                and efficient database management.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Node.js, Python, PHP</li>
                <li>• RESTful APIs & GraphQL</li>
                <li>• Database optimization</li>
                <li>• Cloud integration</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-purple-100 rounded-lg mb-6">
                <Smartphone className="h-[32px] w-[32px] text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full-Stack Solutions</h3>
              <p className="text-gray-600 mb-6">
                Complete web application development with seamless integration
                between frontend and backend systems.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• End-to-end development</li>
                <li>• System architecture</li>
                <li>• Third-party integrations</li>
                <li>• Scalable solutions</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-orange-100 rounded-lg mb-6">
                <Shield className="h-[32px] w-[32px] text-orange-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce Solutions</h3>
              <p className="text-gray-600 mb-6">
                Build powerful online stores with secure payment processing
                and comprehensive inventory management.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom e-commerce platforms</li>
                <li>• Payment gateway integration</li>
                <li>• Inventory management</li>
                <li>• Multi-vendor support</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-red-100 rounded-lg mb-6">
                <Globe className="h-[32px] w-[32px] text-red-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CMS Development</h3>
              <p className="text-gray-600 mb-6">
                Custom content management systems that empower your team
                to manage content efficiently and effectively.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom CMS solutions</li>
                <li>• WordPress development</li>
                <li>• Content workflows</li>
                <li>• Multi-site management</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-teal-100 rounded-lg mb-6">
                <Zap className="h-[32px] w-[32px] text-teal-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web App Optimization</h3>
              <p className="text-gray-600 mb-6">
                Enhance existing web applications with performance improvements,
                security updates, and modern features.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Performance audits</li>
                <li>• Security enhancements</li>
                <li>• Code modernization</li>
                <li>• SEO optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use the latest technologies and frameworks to build exceptional web solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Frontend Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-blue-600 font-semibold">React</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-green-600 font-semibold">Vue.js</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-red-600 font-semibold">Angular</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-purple-600 font-semibold">Next.js</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Backend Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-green-600 font-semibold">Node.js</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-blue-600 font-semibold">Python</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-purple-600 font-semibold">.Net</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-orange-600 font-semibold">Java</div>
                </div>
                {/* <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-orange-600 font-semibold">.Net</div>
                </div> */}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Databases & Cloud</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-blue-600 font-semibold">PostgreSQL</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-green-600 font-semibold">MongoDB</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-orange-600 font-semibold">AWS</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-blue-600 font-semibold">Docker</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-blue-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-blue-700">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery & Planning</h3>
              <p className="text-gray-600">
                Understanding your requirements, goals, and technical specifications.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-green-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-green-700">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design & Architecture</h3>
              <p className="text-gray-600">
                Creating wireframes, mockups, and technical architecture plans.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-orange-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-orange-700">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Development & Testing</h3>
              <p className="text-gray-600">
                Agile development with continuous testing and quality assurance.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-purple-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-purple-700">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch & Support</h3>
              <p className="text-gray-600">
                Deployment, monitoring, and ongoing maintenance support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Next Web Application?
          </h2>
          <p className="text-xl mb-[32px] max-w-2xl mx-auto">
            Let's transform your ideas into powerful web solutions that drive results
            and exceed your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-[32px] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => handleNavClick('contact')}
            >
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-[32px] py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
              onClick={() => handleNavClick('portfolio')}
            >
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;