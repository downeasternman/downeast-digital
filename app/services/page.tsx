import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Senior Tech Support",
      description: "Patient, friendly technology assistance tailored for older adults in Downeast Maine.",
      features: [
        "In-home computer setup and troubleshooting",
        "Smartphone and tablet assistance",
        "Email and internet navigation help",
        "Virus and security protection",
        "Data backup and recovery",
        "Video calling setup for family connections"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Web Development",
      description: "Creating accessible, user-friendly websites for local businesses and organizations.",
      features: [
        "Responsive design for all devices",
        "E-commerce solutions",
        "Content Management Systems",
        "SEO optimization",
        "Accessibility compliance",
        "Local business directory integration"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Digital Education",
      description: "Helping seniors and local businesses navigate the digital world with confidence.",
      features: [
        "One-on-one technology training",
        "Group workshops for seniors",
        "Social media basics",
        "Online safety and security",
        "Digital literacy programs",
        "Remote support options"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Specializing in helping seniors and local businesses in Downeast Maine with their technology needs
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="text-blue-700 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-blue-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Need Help with Technology?</h2>
          <p className="text-blue-100 mb-6">
            Whether you're a senior looking for patient tech support or a local business needing digital solutions, we're here to help.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
} 