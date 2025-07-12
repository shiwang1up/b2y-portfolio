import React from 'react';
import { Zap, TrendingUp, Users, Cog, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

const DigitalTransformation: React.FC = () => {
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
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-[32px] w-[32px] text-purple-300" />
                <span className="text-purple-300 font-semibold">Consulting Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Digital Transformation
              </h1>
              <p className="text-xl text-purple-100 mb-[32px]">
                Revolutionize your business with comprehensive digital transformation strategies
                that modernize operations, enhance customer experiences, and drive growth.
              </p>
              <button className="bg-white text-purple-900 px-[32px] py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center"
                onClick={() => handleNavClick('contact')}
              >
                Begin Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="lg:text-center">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Digital Transformation"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Digital Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform every aspect of your business with strategic digital initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-blue-100 rounded-lg mb-6">
                <Users className="h-[32px] w-[32px] text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Experience</h3>
              <p className="text-gray-600 mb-6">
                Reimagine customer interactions with digital-first experiences that
                increase satisfaction, loyalty, and lifetime value.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Customer journey mapping</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Omnichannel experiences</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Personalization strategies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Digital touchpoint optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-green-100 rounded-lg mb-6">
                <Cog className="h-[32px] w-[32px] text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Automation</h3>
              <p className="text-gray-600 mb-6">
                Streamline operations with intelligent automation that reduces costs,
                improves efficiency, and eliminates manual errors.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Robotic Process Automation (RPA)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Workflow optimization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Business process redesign</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Intelligent document processing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-purple-100 rounded-lg mb-6">
                <TrendingUp className="h-[32px] w-[32px] text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data & Analytics</h3>
              <p className="text-gray-600 mb-6">
                Harness the power of data with advanced analytics platforms that
                provide actionable insights for strategic decision-making.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Data strategy & governance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Business intelligence platforms</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Predictive analytics</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Real-time dashboards</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-orange-100 rounded-lg mb-6">
                <Zap className="h-[32px] w-[32px] text-orange-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Modernization</h3>
              <p className="text-gray-600 mb-6">
                Modernize legacy systems and infrastructure with cutting-edge
                technologies that support future growth and innovation.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Legacy system modernization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Cloud-first architecture</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>API-driven integration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Microservices architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Framework */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Transformation Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for successful digital transformation initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-blue-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-blue-700">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vision & Strategy</h3>
              <p className="text-gray-600 text-sm">
                Define transformation vision aligned with business objectives and market opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-green-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-green-700">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Current State Analysis</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive assessment of existing processes, systems, and capabilities.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-purple-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-purple-700">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Roadmap Design</h3>
              <p className="text-gray-600 text-sm">
                Create detailed transformation roadmap with prioritized initiatives and milestones.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-orange-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-orange-700">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">
                Execute transformation initiatives with agile methodologies and continuous monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored digital transformation strategies for different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            <div className="bg-white rounded-xl p-[32px]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Services</h3>
              <p className="text-gray-600 mb-4">
                Digital banking, fintech integration, and regulatory compliance automation.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Mobile banking platforms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Automated compliance reporting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>AI-powered risk assessment</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-[32px]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                Telemedicine, patient management systems, and digital health records.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Electronic health records</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Telemedicine platforms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>AI diagnostic tools</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-[32px]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Industry 4.0, IoT integration, and smart factory implementations.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>IoT sensor networks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Predictive maintenance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Supply chain optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transformation Success Metrics
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Measurable outcomes from our digital transformation initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">2.5x</div>
              <div className="text-lg font-semibold mb-2">Revenue Growth</div>
              <p className="text-purple-100 text-sm">
                Average revenue increase post-transformation
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">50%</div>
              <div className="text-lg font-semibold mb-2">Cost Reduction</div>
              <p className="text-purple-100 text-sm">
                Operational cost savings through automation
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">75%</div>
              <div className="text-lg font-semibold mb-2">Faster Processes</div>
              <p className="text-purple-100 text-sm">
                Improvement in process execution time
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">90%</div>
              <div className="text-lg font-semibold mb-2">Customer Satisfaction</div>
              <p className="text-purple-100 text-sm">
                Enhanced customer experience scores
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Change Management */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Change Management Excellence
              </h2>
              <p className="text-xl text-gray-600 mb-[32px]">
                Successful digital transformation requires more than technology—it requires
                effective change management to ensure adoption and sustainability.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Stakeholder Engagement</h3>
                    <p className="text-gray-600">Involve key stakeholders throughout the transformation journey</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Training & Development</h3>
                    <p className="text-gray-600">Comprehensive training programs to build digital capabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Cultural Transformation</h3>
                    <p className="text-gray-600">Foster a digital-first culture that embraces innovation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:text-center">
              <img
                src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Change Management"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-[32px] max-w-2xl mx-auto">
            Begin your digital transformation journey with a comprehensive strategy
            that positions your business for future success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-700 px-[32px] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => handleNavClick('contact')}
            >
              Start Transformation Assessment
            </button>
            <button className="border-2 border-white text-white px-[32px] py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors"
              onClick={() => handleNavClick('contact')}
            >
              Explore Strategy Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;