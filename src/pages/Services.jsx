import { CheckIcon } from '@heroicons/react/24/solid';

export default function Services() {
  const services = [
    {
      icon: '🔍',
      title: 'Oracle EBS Solutions',
      description: 'End-to-end Oracle E-Business Suite implementation and customization services.',
      features: [
        'EBS 12.2 Implementation',
        'HR Module Customization',
        'Finance Module Setup',
        'Custom Reports & Forms'
      ]
    },
    {
      icon: '💻',
      title: 'Modern Web Development',
      description: 'Custom web applications using cutting-edge technologies.',
      features: [
        'React & Angular Apps',
        'Node.js Backend',
        'AWS Cloud Solutions',
        'API Development'
      ]
    },
    {
      icon: '🔄',
      title: 'Integration Services',
      description: 'Enterprise data integration and ETL solutions.',
      features: [
        'Matillion ETL Pipelines',
        'Star Schema Design',
        'Data Warehouse Solutions',
        'REST API Integration'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Services
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Enterprise Solutions
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Comprehensive technology solutions for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-primary mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Oracle EBS',
              'React',
              'Node.js',
              'AWS',
              'Docker',
              'PostgreSQL',
              'Matillion',
              'REST APIs'
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/30 p-4 rounded-lg text-center border border-gray-700/50 hover:border-primary/50 transition-all"
              >
                <span className="text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
