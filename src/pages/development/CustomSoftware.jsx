import React from 'react';
import { Code, Cog, Database, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

const CustomSoftware = () => {
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
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-[32px] w-[32px] text-gray-300" />
                <span className="text-gray-300 font-semibold">Development Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Custom Software Development
              </h1>
              <p className="text-xl text-gray-100 mb-[32px]">
                Build bespoke software solutions tailored to your unique business requirements,
                processes, and goals with our expert development team.
              </p>
              <button className="bg-white text-gray-900 px-[32px] py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center"
                onClick={() => handleNavClick('contact')}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="lg:text-center">
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Custom Software Development"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Software Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From enterprise applications to specialized tools, we create software that fits your exact needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-blue-100 rounded-lg mb-6">
                <Cog className="h-[32px] w-[32px] text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Software</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive enterprise solutions that streamline operations,
                improve efficiency, and support business growth.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>ERP (Enterprise Resource Planning) systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>CRM (Customer Relationship Management)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Business Intelligence & Analytics</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Workflow automation systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-green-100 rounded-lg mb-6">
                <Database className="h-[32px] w-[32px] text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Management Systems</h3>
              <p className="text-gray-600 mb-6">
                Robust data management solutions that help you collect, process,
                and analyze your business-critical information.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Custom database design & optimization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Data warehousing solutions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>ETL (Extract, Transform, Load) processes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Real-time data processing systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-purple-100 rounded-lg mb-6">
                <Shield className="h-[32px] w-[32px] text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Security & Compliance</h3>
              <p className="text-gray-600 mb-6">
                Ensure your software meets industry standards and regulatory
                requirements with built-in security features.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>GDPR, HIPAA, SOX compliance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>End-to-end encryption</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Multi-factor authentication</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Regular security audits</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-orange-100 rounded-lg mb-6">
                <Code className="h-[32px] w-[32px] text-orange-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">API Development & Integration</h3>
              <p className="text-gray-600 mb-6">
                Connect your systems and enable seamless data flow with
                custom APIs and third-party integrations.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>RESTful API development</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>GraphQL implementations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Third-party service integration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Legacy system modernization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized software solutions for diverse industries and business sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            <div className="bg-gray-50 rounded-xl p-[32px] text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                HIPAA-compliant solutions for patient management, telemedicine, and medical records.
              </p>
              <div className="text-blue-600 font-semibold">Learn More →</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-[32px] text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Services</h3>
              <p className="text-gray-600 mb-4">
                Secure fintech solutions, trading platforms, and regulatory compliance systems.
              </p>
              <div className="text-green-600 font-semibold">Learn More →</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-[32px] text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Production management, supply chain optimization, and quality control systems.
              </p>
              <div className="text-purple-600 font-semibold">Learn More →</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-[32px] text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
              <p className="text-gray-600 mb-4">
                Learning management systems, student portals, and educational content platforms.
              </p>
              <div className="text-orange-600 font-semibold">Learn More →</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-[32px] text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Retail & E-commerce</h3>
              <p className="text-gray-600 mb-4">
                Inventory management, POS systems, and customer experience platforms.
              </p>
              <div className="text-red-600 font-semibold">Learn More →</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-[32px] text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Logistics & Transportation</h3>
              <p className="text-gray-600 mb-4">
                Fleet management, route optimization, and shipment tracking solutions.
              </p>
              <div className="text-teal-600 font-semibold">Learn More →</div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that ensures successful custom software delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[32px]">
            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-blue-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-blue-700">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Requirements Analysis</h3>
              <p className="text-gray-600 text-sm">
                Deep dive into your business needs and technical requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-green-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-green-700">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">System Design</h3>
              <p className="text-gray-600 text-sm">
                Create comprehensive architecture and technical specifications.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-purple-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-purple-700">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600 text-sm">
                Agile development with regular updates and feedback loops.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-orange-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-orange-700">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Testing & QA</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive testing to ensure quality and performance.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-red-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-red-700">5</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deployment & Support</h3>
              <p className="text-gray-600 text-sm">
                Smooth deployment with ongoing maintenance and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Custom Software Solution?
          </h2>
          <p className="text-xl mb-[32px] max-w-2xl mx-auto">
            Let's discuss your unique requirements and create software that perfectly
            fits your business needs and objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-[32px] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => handleNavClick('contact')}
            >
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-[32px] py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              onClick={() => handleNavClick('portfolio')}
            >
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftware;