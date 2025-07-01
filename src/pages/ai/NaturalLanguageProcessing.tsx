import React from 'react';
import { MessageSquare, Bot, FileText, Languages, ArrowRight } from 'lucide-react';

const NaturalLanguageProcessing: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquare className="h-8 w-8 text-green-300" />
                <span className="text-green-300 font-semibold">AI Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Natural Language Processing
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Bridge the gap between human communication and machine understanding with 
                advanced NLP solutions that process, analyze, and generate natural language.
              </p>
              <button className="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center">
                Discover NLP Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="lg:text-center">
              <img 
                src="https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Natural Language Processing" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              NLP Capabilities & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive natural language processing solutions for modern business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <Bot className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Chatbots & Virtual Assistants</h3>
              <p className="text-gray-600 mb-6">
                Create intelligent conversational agents that understand context, 
                intent, and provide meaningful responses to user queries.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Customer support automation</li>
                <li>• Multi-language support</li>
                <li>• Context-aware conversations</li>
                <li>• Integration with existing systems</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6">
                <FileText className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Text Analytics & Mining</h3>
              <p className="text-gray-600 mb-6">
                Extract valuable insights from unstructured text data including 
                sentiment analysis, topic modeling, and entity recognition.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Sentiment analysis</li>
                <li>• Named entity recognition</li>
                <li>• Topic modeling</li>
                <li>• Document classification</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-lg mb-6">
                <Languages className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Language Translation</h3>
              <p className="text-gray-600 mb-6">
                Break down language barriers with accurate, context-aware translation 
                services that preserve meaning and nuance.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Real-time translation</li>
                <li>• Domain-specific models</li>
                <li>• Multi-modal translation</li>
                <li>• Cultural adaptation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-6">
                <MessageSquare className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Generation</h3>
              <p className="text-gray-600 mb-6">
                Automatically generate high-quality content including summaries, 
                reports, and creative writing tailored to your specifications.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated summarization</li>
                <li>• Content personalization</li>
                <li>• Report generation</li>
                <li>• Creative writing assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how NLP transforms business operations across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Service</h3>
              <p className="text-gray-600 mb-4">
                Transform customer support with intelligent chatbots that handle queries 24/7.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>87% reduction in response time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>60% decrease in support costs</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Content Management</h3>
              <p className="text-gray-600 mb-4">
                Automatically categorize, tag, and extract insights from large document collections.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>95% accuracy in classification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>10x faster document processing</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Monitor social media, news, and reviews to understand market sentiment.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Real-time sentiment tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Competitor analysis automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our NLP Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced natural language processing capabilities that deliver measurable business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.5%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">Languages Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Processing Availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">1M+</div>
              <div className="text-gray-300">Documents Processed Daily</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Unlock the Power of Language Understanding
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform how your business processes and understands text data with our 
            cutting-edge NLP solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NaturalLanguageProcessing;