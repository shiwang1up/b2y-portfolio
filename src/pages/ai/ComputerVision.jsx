import React from 'react';
import { Eye, Camera, Scan, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

const ComputerVision = () => {
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
                <Eye className="h-[32px] w-[32px] text-purple-300" />
                <span className="text-purple-300 font-semibold">AI Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Computer Vision Solutions
              </h1>
              <p className="text-xl text-purple-100 mb-[32px]">
                Enable machines to see, understand, and interpret visual data with cutting-edge
                computer vision technology that transforms how you interact with images and video.
              </p>
              <button className="bg-white text-purple-900 px-[32px] py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center"
                onClick={() => handleNavClick('portfolio')}

              >
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="lg:text-center">
              <img
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Computer Vision Technology"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Computer Vision Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From object detection to facial recognition, our computer vision solutions solve real-world challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-blue-100 rounded-lg mb-4">
                <Camera className="h-[32px] w-[32px] text-blue-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Object Detection</h3>
              <p className="text-gray-600 text-sm">
                Identify and locate objects in images and video streams with high accuracy.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-green-100 rounded-lg mb-4">
                <Scan className="h-[32px] w-[32px] text-green-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">OCR & Text Recognition</h3>
              <p className="text-gray-600 text-sm">
                Extract and digitize text from documents, images, and handwritten content.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-purple-100 rounded-lg mb-4">
                <Eye className="h-[32px] w-[32px] text-purple-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Facial Recognition</h3>
              <p className="text-gray-600 text-sm">
                Secure authentication and identification systems using advanced facial analysis.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-orange-100 rounded-lg mb-4">
                <Shield className="h-[32px] w-[32px] text-orange-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Inspection</h3>
              <p className="text-gray-600 text-sm">
                Automated defect detection and quality control in manufacturing processes.
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
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Computer vision solutions tailored for specific industry needs and challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            <div className="bg-gray-50 rounded-xl p-[32px]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Manufacturing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated quality inspection</li>
                <li>• Defect detection systems</li>
                <li>• Assembly line monitoring</li>
                <li>• Predictive maintenance</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-[32px]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Medical image analysis</li>
                <li>• Diagnostic assistance</li>
                <li>• Patient monitoring</li>
                <li>• Surgical guidance</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-[32px]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Retail</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Inventory management</li>
                <li>• Customer analytics</li>
                <li>• Loss prevention</li>
                <li>• Automated checkout</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-[32px]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Surveillance systems</li>
                <li>• Access control</li>
                <li>• Threat detection</li>
                <li>• Behavior analysis</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-[32px]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automotive</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Autonomous driving</li>
                <li>• Driver assistance</li>
                <li>• Traffic monitoring</li>
                <li>• License plate recognition</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-[32px]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Agriculture</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Crop monitoring</li>
                <li>• Disease detection</li>
                <li>• Yield optimization</li>
                <li>• Automated harvesting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px]">
          <div className="text-center mb-[64px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge frameworks and tools to deliver robust computer vision solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[32px] text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-400">TensorFlow</div>
              <p className="text-gray-300 text-sm">Deep learning framework</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-400">OpenCV</div>
              <p className="text-gray-300 text-sm">Computer vision library</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-400">PyTorch</div>
              <p className="text-gray-300 text-sm">Machine learning platform</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-orange-400">YOLO</div>
              <p className="text-gray-300 text-sm">Real-time object detection</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[32px] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Visual Data Into Intelligence
          </h2>
          <p className="text-xl mb-[32px] max-w-2xl mx-auto">
            Discover how computer vision can revolutionize your operations and create new possibilities
            for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-700 px-[32px] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => handleNavClick('contact')}
            >
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-[32px] py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors"
              onClick={() => handleNavClick('contact')}
            >
              Request Demo
            </button>
          </div>
        </div>
      </section >
    </div >
  );
};

export default ComputerVision;
