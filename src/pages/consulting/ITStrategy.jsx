import React from 'react';
import { Target, TrendingUp, Shield, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

const ITStrategy = () => {
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
                <Target className="h-[32px] w-[32px] text-blue-300" />
                <span className="text-blue-300 font-semibold">Consulting Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                IT Strategy Consulting
              </h1>
              <p className="text-xl text-blue-100 mb-[32px]">
                Align your technology investments with business objectives through strategic
                IT planning that drives growth, efficiency, and competitive advantage.
              </p>
              <button className="bg-white text-blue-900 px-[32px] py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center"
                onClick={() => handleNavClick('contact')}
              >
                Get Strategic Guidance
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="lg:text-center">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="IT Strategy Consulting"
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
              Strategic IT Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive strategic planning to maximize your technology ROI and business outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-blue-100 rounded-lg mb-6">
                <Target className="h-[32px] w-[32px] text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Planning</h3>
              <p className="text-gray-600 mb-6">
                Develop comprehensive IT strategies that align with your business goals
                and support long-term growth objectives.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Business-IT alignment assessment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Technology roadmap development</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Digital transformation strategy</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Innovation framework design</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-green-100 rounded-lg mb-6">
                <TrendingUp className="h-[32px] w-[32px] text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
              <p className="text-gray-600 mb-6">
                Analyze and optimize your current IT infrastructure to improve
                efficiency, reduce costs, and enhance performance.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>IT infrastructure assessment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Process optimization analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Cost reduction strategies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Performance benchmarking</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-purple-100 rounded-lg mb-6">
                <Shield className="h-[32px] w-[32px] text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Risk Management</h3>
              <p className="text-gray-600 mb-6">
                Identify, assess, and mitigate technology risks to ensure business
                continuity and protect your valuable assets.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>IT risk assessment & analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Business continuity planning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Disaster recovery strategies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Compliance & governance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-orange-100 rounded-lg mb-6">
                <Users className="h-[32px] w-[32px] text-orange-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Governance</h3>
              <p className="text-gray-600 mb-6">
                Establish effective IT governance frameworks that ensure proper
                oversight, accountability, and value delivery.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Governance framework design</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>IT portfolio management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Decision-making processes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Performance measurement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Strategic Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven approach to developing and implementing effective IT strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-blue-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-blue-700">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Current State Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive evaluation of your existing IT landscape and business processes.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-green-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-green-700">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Future State Design</h3>
              <p className="text-gray-600 text-sm">
                Define your target IT architecture and capabilities aligned with business goals.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-purple-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-purple-700">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Gap Analysis</h3>
              <p className="text-gray-600 text-sm">
                Identify gaps between current and future states to prioritize initiatives.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-orange-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-orange-700">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Roadmap Execution</h3>
              <p className="text-gray-600 text-sm">
                Implement strategic initiatives with clear timelines and success metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable outcomes from strategic IT planning and implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            <div className="bg-white rounded-xl p-[32px] text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">35%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Cost Reduction</div>
              <p className="text-gray-600 text-sm">
                Average IT cost savings through strategic optimization
              </p>
            </div>

            <div className="bg-white rounded-xl p-[32px] text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Faster Delivery</div>
              <p className="text-gray-600 text-sm">
                Improved project delivery times with strategic planning
              </p>
            </div>

            <div className="bg-white rounded-xl p-[32px] text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Better Alignment</div>
              <p className="text-gray-600 text-sm">
                Enhanced business-IT alignment and collaboration
              </p>
            </div>

            <div className="bg-white rounded-xl p-[32px] text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">45%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Risk Reduction</div>
              <p className="text-gray-600 text-sm">
                Decreased IT-related business risks and downtime
              </p>
            </div>

            <div className="bg-white rounded-xl p-[32px] text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">3x</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">ROI Improvement</div>
              <p className="text-gray-600 text-sm">
                Higher return on technology investments
              </p>
            </div>

            <div className="bg-white rounded-xl p-[32px] text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">90%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Goal Achievement</div>
              <p className="text-gray-600 text-sm">
                Success rate in achieving strategic objectives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized IT strategy consulting across diverse industry sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Financial Services</h3>
              <p className="text-gray-600 text-sm">
                Regulatory compliance and digital banking strategies
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">
                HIPAA compliance and healthcare IT modernization
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Manufacturing</h3>
              <p className="text-gray-600 text-sm">
                Industry 4.0 and smart manufacturing initiatives
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Retail</h3>
              <p className="text-gray-600 text-sm">
                Omnichannel strategies and customer experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your IT Strategy?
          </h2>
          <p className="text-xl mb-[32px] max-w-2xl mx-auto">
            Let's work together to align your technology investments with your business goals
            and create a roadmap for sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-[32px] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => handleNavClick('contact')}
            >
              Schedule Strategic Assessment
            </button>
            <button className="border-2 border-white text-white px-[32px] py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
              onClick={() => handleNavClick('contact')}
            >
              Download IT Strategy Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITStrategy;