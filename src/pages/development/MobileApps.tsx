import React from 'react';
import { Smartphone, Tablet, Zap, Users, ArrowRight } from 'lucide-react';

const MobileApps: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Smartphone className="h-8 w-8 text-purple-300" />
                <span className="text-purple-300 font-semibold">Development Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Mobile App Development
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Create powerful, intuitive mobile applications that engage users and 
                drive business growth across iOS and Android platforms.
              </p>
              <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center">
                Build Your App
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="lg:text-center">
              <img 
                src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Mobile App Development" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mobile Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mobile solutions from concept to app store deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <Smartphone className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Native App Development</h3>
              <p className="text-gray-600 mb-6">
                Build high-performance native applications for iOS and Android 
                with platform-specific features and optimal user experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">iOS Development</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Swift & Objective-C</li>
                    <li>• iOS SDK integration</li>
                    <li>• App Store optimization</li>
                    <li>• Apple Pay integration</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Android Development</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Kotlin & Java</li>
                    <li>• Material Design</li>
                    <li>• Google Play Services</li>
                    <li>• Firebase integration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6">
                <Tablet className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cross-Platform Development</h3>
              <p className="text-gray-600 mb-6">
                Develop once, deploy everywhere with cross-platform solutions 
                that reduce development time and costs.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Technologies We Use</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-gray-50 p-2 rounded text-center">React Native</div>
                    <div className="bg-gray-50 p-2 rounded text-center">Flutter</div>
                    <div className="bg-gray-50 p-2 rounded text-center">Xamarin</div>
                    <div className="bg-gray-50 p-2 rounded text-center">Ionic</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Benefits</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Faster development cycles</li>
                    <li>• Cost-effective solutions</li>
                    <li>• Consistent user experience</li>
                    <li>• Easier maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mobile App Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in developing various types of mobile applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">E-commerce Apps</h3>
              <p className="text-gray-600 mb-4">
                Create seamless shopping experiences with secure payment processing.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Product catalogs</li>
                <li>• Shopping cart & checkout</li>
                <li>• Payment gateway integration</li>
                <li>• Order tracking</li>
                <li>• Push notifications</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Social Media Apps</h3>
              <p className="text-gray-600 mb-4">
                Build engaging social platforms that connect and inspire communities.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• User profiles & authentication</li>
                <li>• Real-time messaging</li>
                <li>• Content sharing</li>
                <li>• Social features</li>
                <li>• Media processing</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Apps</h3>
              <p className="text-gray-600 mb-4">
                Streamline operations with custom business and productivity applications.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Project management</li>
                <li>• CRM integration</li>
                <li>• Analytics dashboards</li>
                <li>• Team collaboration</li>
                <li>• Workflow automation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare Apps</h3>
              <p className="text-gray-600 mb-4">
                Develop secure, compliant healthcare solutions for better patient care.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Patient management</li>
                <li>• Telemedicine features</li>
                <li>• HIPAA compliance</li>
                <li>• Health tracking</li>
                <li>• Appointment scheduling</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Education Apps</h3>
              <p className="text-gray-600 mb-4">
                Create engaging learning experiences with interactive educational apps.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Interactive content</li>
                <li>• Progress tracking</li>
                <li>• Gamification</li>
                <li>• Offline access</li>
                <li>• Multi-language support</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">On-Demand Apps</h3>
              <p className="text-gray-600 mb-4">
                Build marketplace and on-demand service applications with real-time features.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Service booking</li>
                <li>• Real-time tracking</li>
                <li>• Rating & reviews</li>
                <li>• Payment processing</li>
                <li>• GPS integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features We Implement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential features that make mobile apps successful and user-friendly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                <Users className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">User Authentication</h3>
              <p className="text-gray-600 text-sm">
                Secure login systems with social media integration and biometric authentication.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-4 mx-auto">
                <Zap className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Push Notifications</h3>
              <p className="text-gray-600 text-sm">
                Engage users with personalized, timely notifications that drive user retention.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-lg mb-4 mx-auto">
                <Smartphone className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Offline Functionality</h3>
              <p className="text-gray-600 text-sm">
                Enable core features to work offline with intelligent data synchronization.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-4 mx-auto">
                <Tablet className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Integration</h3>
              <p className="text-gray-600 text-sm">
                Track user behavior and app performance with comprehensive analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Mobile App?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your innovative idea into a successful mobile application 
            that users love and businesses depend on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Development
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors">
              View App Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApps;