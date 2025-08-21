import React from 'react';
import { Brain, TrendingUp, Target, Zap, ArrowRight } from 'lucide-react';
import { scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const MachineLearning = () => {
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

    <div className="bg-white pt-80 overflow-hidden color-white items-center  bg-gradient-to-br">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-[32px] w-[32px] text-blue-300" />
                <span className="text-blue-300 font-semibold">AI Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Machine Learning Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-[32px]">
                Unlock the power of your data with intelligent machine learning models
                that predict, optimize, and automate your business processes.
              </p>
              <button className="bg-white text-blue-900 px-[32px] py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center"
                onClick={() => handleNavClick('contact')}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="lg:text-center">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Machine Learning Visualization"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Machine Learning Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From predictive analytics to intelligent automation, we deliver ML solutions that drive business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center h-[64px] w-[64px] bg-blue-100 rounded-lg mb-6">
                <TrendingUp className="h-[32px] w-[32px] text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-600 mb-6">
                Forecast trends, customer behavior, and market opportunities with
                advanced predictive models that give you a competitive edge.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Sales forecasting</li>
                <li>• Customer churn prediction</li>
                <li>• Demand planning</li>
                <li>• Risk assessment</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center h-[64px] w-[64px] bg-green-100 rounded-lg mb-6">
                <Target className="h-[32px] w-[32px] text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recommendation Systems</h3>
              <p className="text-gray-600 mb-6">
                Personalize user experiences and increase engagement with intelligent
                recommendation engines tailored to your business needs.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Product recommendations</li>
                <li>• Content personalization</li>
                <li>• Customer segmentation</li>
                <li>• Dynamic pricing</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-[32px]">
              <div className="flex items-center justify-center h-[64px] w-[64px] bg-purple-100 rounded-lg mb-6">
                <Zap className="h-[32px] w-[32px] text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Automation</h3>
              <p className="text-gray-600 mb-6">
                Streamline operations and reduce costs with intelligent automation
                that learns and adapts to your business processes.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Document processing</li>
                <li>• Quality control</li>
                <li>• Anomaly detection</li>
                <li>• Workflow optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our ML Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering successful machine learning solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-[32px]">
            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-blue-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-blue-700">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Assessment</h3>
              <p className="text-gray-600">
                Evaluate your data quality, identify gaps, and develop a comprehensive data strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-green-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-green-700">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Model Development</h3>
              <p className="text-gray-600">
                Design and train custom ML models using state-of-the-art algorithms and techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-orange-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-orange-700">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Testing & Validation</h3>
              <p className="text-gray-600">
                Rigorously test model performance and validate results against business objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-purple-100 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-purple-700">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deployment & Monitoring</h3>
              <p className="text-gray-600">
                Deploy models to production and continuously monitor performance for optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Harness the Power of Machine Learning?
          </h2>
          <p className="text-xl mb-[32px] max-w-2xl mx-auto">
            Let's discuss how our ML solutions can transform your data into actionable insights
            and competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-[32px] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => handleNavClick('contact')}
            >
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-[32px] py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
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

export default MachineLearning;
