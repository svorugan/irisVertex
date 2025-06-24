export default function About() {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '200+', label: 'Projects Delivered' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  const team = [
    {
      role: 'AI & ML Solutions',
      expertise: [
        'Large Language Models',
        'Computer Vision Systems',
        'AI Integration',
        'MLOps & Deployment'
      ]
    },
    {
      role: 'Oracle EBS',
      expertise: [
        'EBS Implementation',
        'Module Customization',
        'Performance Tuning',
        'Integration Services'
      ]
    },
    {
      role: 'Modern Tech Stack',
      expertise: [
        'Cloud Architecture',
        'Full-Stack Development',
        'DevOps & CI/CD',
        'API Development'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            About Us
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            AI-Powered Enterprise Solutions
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            We combine artificial intelligence with deep technical expertise to deliver transformative solutions
            for complex enterprise challenges.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              To deliver innovative and reliable enterprise solutions that drive business growth and efficiency.
              We combine deep technical expertise with industry best practices to create transformative
              digital solutions for our clients.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our commitment to excellence, continuous learning, and customer success sets us apart
              as a trusted technology partner for businesses worldwide.
            </p>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-6">{member.role}</h3>
                <ul className="space-y-3">
                  {member.expertise.map((skill, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="text-primary mr-2">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Excellence',
                description: 'Committed to delivering the highest quality solutions'
              },
              {
                icon: '🤝',
                title: 'Partnership',
                description: 'Building long-term relationships with our clients'
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'Constantly evolving with emerging technologies'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
