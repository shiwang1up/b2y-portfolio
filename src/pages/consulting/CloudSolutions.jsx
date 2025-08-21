import React from 'react';
import { Cloud, Server, Shield, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

const CloudSolutions = () => {
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
      <section className="bg-gradient-to-br from-sky-900 to-sky-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Cloud className="h-[32px] w-[32px] text-sky-300" />
                <span className="text-sky-300 font-semibold">Consulting Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cloud Solutions Consulting
              </h1>
              <p className="text-xl text-sky-100 mb-[32px]">
                Transform your business with scalable, secure, and efficient cloud infrastructure
                that reduces costs and accelerates innovation.
              </p>
              <button className="bg-white text-sky-900 px-[32px] py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors flex items-center"
                onClick={() => handleNavClick('contact')}
              >
                Start Cloud Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="lg:text-center">
              <img
                src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cloud Solutions"
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
              Comprehensive Cloud Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end cloud consulting from strategy to implementation and optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-blue-100 rounded-lg mb-6">
                <Cloud className="h-[32px] w-[32px] text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Migration</h3>
              <p className="text-gray-600 mb-6">
                Seamlessly migrate your applications, data, and infrastructure to the cloud
                with minimal disruption and maximum efficiency.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Migration strategy & planning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Application modernization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Data migration & synchronization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Legacy system integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-green-100 rounded-lg mb-6">
                <Server className="h-[32px] w-[32px] text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure Design</h3>
              <p className="text-gray-600 mb-6">
                Design and implement scalable, resilient cloud architectures that
                support your business requirements and growth objectives.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Cloud architecture design</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Multi-cloud strategies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Auto-scaling solutions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>High availability setup</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-purple-100 rounded-lg mb-6">
                <Shield className="h-[32px] w-[32px] text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Security & Compliance</h3>
              <p className="text-gray-600 mb-6">
                Implement robust security measures and ensure compliance with industry
                regulations in your cloud environment.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Security assessment & hardening</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Identity & access management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Data encryption & protection</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Compliance frameworks</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-orange-100 rounded-lg mb-6">
                <Zap className="h-[32px] w-[32px] text-orange-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
              <p className="text-gray-600 mb-6">
                Continuously monitor and optimize your cloud infrastructure for peak
                performance, cost-efficiency, and reliability.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Performance monitoring</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Cost optimization strategies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Resource right-sizing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Automated optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multi-Cloud Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certified expertise across leading cloud platforms and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-[32px]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Amazon Web Services</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive AWS solutions including EC2, S3, Lambda, RDS, and advanced services.
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-white p-2 rounded text-center">EC2</div>
                <div className="bg-white p-2 rounded text-center">S3</div>
                <div className="bg-white p-2 rounded text-center">Lambda</div>
                <div className="bg-white p-2 rounded text-center">RDS</div>
                <div className="bg-white p-2 rounded text-center">EKS</div>
                <div className="bg-white p-2 rounded text-center">CloudFront</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-[32px]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Microsoft Azure</h3>
              <p className="text-gray-600 mb-6">
                Enterprise-grade Azure solutions with strong integration with Microsoft ecosystem.
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-white p-2 rounded text-center">App Service</div>
                <div className="bg-white p-2 rounded text-center">SQL Database</div>
                <div className="bg-white p-2 rounded text-center">AKS</div>
                <div className="bg-white p-2 rounded text-center">Functions</div>
                <div className="bg-white p-2 rounded text-center">Blob Storage</div>
                <div className="bg-white p-2 rounded text-center">Active Directory</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-[32px]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Cloud Platform</h3>
              <p className="text-gray-600 mb-6">
                Leverage Google's innovation in AI, machine learning, and data analytics.
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-white p-2 rounded text-center">Compute Engine</div>
                <div className="bg-white p-2 rounded text-center">BigQuery</div>
                <div className="bg-white p-2 rounded text-center">GKE</div>
                <div className="bg-white p-2 rounded text-center">Cloud Functions</div>
                <div className="bg-white p-2 rounded text-center">AI Platform</div>
                <div className="bg-white p-2 rounded text-center">Firebase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-sky-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cloud Transformation Benefits
            </h2>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              Measurable business outcomes from strategic cloud adoption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-300 mb-2">40%</div>
              <div className="text-lg font-semibold mb-2">Cost Savings</div>
              <p className="text-sky-100 text-sm">
                Average reduction in IT infrastructure costs
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-sky-300 mb-2">3x</div>
              <div className="text-lg font-semibold mb-2">Faster Deployment</div>
              <p className="text-sky-100 text-sm">
                Accelerated application deployment times
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-sky-300 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-2">Uptime</div>
              <p className="text-sky-100 text-sm">
                High availability and reliability
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-sky-300 mb-2">5x</div>
              <div className="text-lg font-semibold mb-2">Scalability</div>
              <p className="text-sky-100 text-sm">
                Improved ability to scale resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Migration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured approach to ensure successful cloud transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[32px]">
            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-blue-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-blue-700">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Evaluate current infrastructure and applications for cloud readiness.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-green-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-green-700">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">
                Develop comprehensive migration strategy and roadmap.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-purple-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-purple-700">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600 text-sm">
                Design target cloud architecture and security framework.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-orange-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-orange-700">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Migration</h3>
              <p className="text-gray-600 text-sm">
                Execute phased migration with minimal business disruption.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-red-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-red-700">5</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">
                Continuous monitoring and optimization for performance and cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform with Cloud?
          </h2>
          <p className="text-xl mb-[32px] max-w-2xl mx-auto">
            Accelerate your business transformation with scalable, secure, and cost-effective
            cloud solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-700 px-[32px] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => handleNavClick('contact')}
            >
              Start Cloud Assessment
            </button>
            <button className="border-2 border-white text-white px-[32px] py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-700 transition-colors"
              onClick={() => handleNavClick('portfolio')}
            >
              Explore Cloud Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;