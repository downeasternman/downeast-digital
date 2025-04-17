import Link from 'next/link';

export default function Services() {
  const serviceCategories = [
    {
      title: "Core Web Services",
      services: [
        {
          title: "Website Development",
          features: [
            "Custom business websites",
            "E-commerce solutions for local retailers",
            "Restaurant/hospitality websites with online ordering",
            "Responsive mobile-first designs",
            "Tourism and lodging websites",
            "Bilingual website options (English/French)"
          ],
          icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
        },
        {
          title: "Website Maintenance & Support",
          features: [
            "Regular updates and security patches",
            "Content updates and management",
            "Performance optimization",
            "Website hosting management",
            "SSL certificate management",
            "Regular backups"
          ],
          icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          ),
        }
      ]
    },
    {
      title: "Small Business IT Solutions",
      services: [
        {
          title: "Business Technology Setup",
          features: [
            "Point-of-sale (POS) system installation",
            "Office network setup and maintenance",
            "Business email configuration",
            "Cloud storage solutions",
            "VPN setup for remote work"
          ],
          icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          ),
        },
        {
          title: "IT Support Services",
          features: [
            "Remote technical support",
            "On-site troubleshooting",
            "Hardware repair and maintenance",
            "Virus removal and security",
            "Data backup solutions",
            "Emergency IT support"
          ],
          icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ),
        }
      ]
    },
    {
      title: "Digital Marketing Services",
      services: [
        {
          title: "Local SEO & Online Presence",
          features: [
            "Google My Business optimization",
            "Local search engine optimization",
            "Social media setup and management",
            "Online review management",
            "Directory listing management"
          ],
          icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          ),
        },
        {
          title: "Digital Marketing",
          features: [
            "Social media marketing",
            "Email marketing campaigns",
            "Google Ads management",
            "Facebook/Instagram advertising",
            "Content creation and blogging"
          ],
          icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          ),
        }
      ]
    }
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Comprehensive digital solutions for businesses in Downeast Maine
        </p>
      </div>

      {/* Services Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{category.title}</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <div className="text-blue-700 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h3>
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
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="bg-blue-700 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss how we should help your business grow
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 