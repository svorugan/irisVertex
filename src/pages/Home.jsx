import { Link } from 'react-router-dom';
import { useState } from 'react';
import ImageModal from '../components/ImageModal';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('technology');

  const features = {
    technology: [
      {
        icon: '🔍',
        title: 'ORACLE SOLUTIONS',
        description: 'Complete Oracle EBS implementation and customization'
      },
      {
        icon: '📊',
        title: 'DATA ANALYTICS',
        description: 'Advanced analytics and visualization tools'
      },
      {
        icon: '🔄',
        title: 'INTEGRATION',
        description: 'Seamless system integration services'
      }
    ],
    function: [
      {
        icon: '💼',
        title: 'BUSINESS PROCESS',
        description: 'Streamline and optimize business workflows'
      },
      {
        icon: '📱',
        title: 'MOBILE SOLUTIONS',
        description: 'Cross-platform mobile development'
      },
      {
        icon: '🛡️',
        title: 'SECURITY',
        description: 'Enterprise-grade security implementations'
      }
    ]
  };

  return (
    <div className="min-h-full w-full text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <span className="inline-block bg-primary/20 text-primary px-6 py-3 rounded-full text-lg font-semibold mb-8">
              Welcome to IrisVertex
            </span>
            <div className="mb-8">
              <h1 className="text-4xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-primary via-white to-accent bg-clip-text text-transparent">
                IrisVertex
              </h1>
              <p className="text-2xl md:text-3xl text-gray-400">
                Elevate Your Business with Peak Technology Solutions
              </p>
            </div>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              We combine vision with expertise to deliver cutting-edge enterprise solutions
              that transform your business landscape.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-primary hover:bg-accent px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-primary/50"
            >
              Get Started
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        {/* Background Gradient Effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent" />
      </div>

      {/* Next Gen Reporting Tool Summary Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-y border-primary">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-white to-accent bg-clip-text text-transparent">
            Introducing: Next Gen Reporting Tool
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Instantly generate Oracle EBS reports by describing what you need in plain English. Our tool converts your prompt to SQL using your chosen LLM, executes it securely on your HR schema, and displays results in seconds. Save, schedule, and burst reports—all with an intuitive user experience.
          </p>
          <Link
            to="/nextgenreporting"
            className="inline-block bg-primary hover:bg-accent text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-primary/50"
          >
            Learn More & Watch Demo
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pre-Built Solutions & Analytics</h2>
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab('technology')}
                className={`px-6 py-2 rounded-full ${
                  activeTab === 'technology'
                    ? 'bg-primary text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                Technology
              </button>
              <button
                onClick={() => setActiveTab('function')}
                className={`px-6 py-2 rounded-full ${
                  activeTab === 'function'
                    ? 'bg-primary text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                Job Function
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features[activeTab].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <p className="mt-4 text-gray-400">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}
