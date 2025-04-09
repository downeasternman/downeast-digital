import Link from 'next/link';

export default function About() {
  const values = [
    {
      title: "Local Focus",
      description: "Deep understanding of Downeast Maine's unique business landscape and community needs.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Quality Service",
      description: "Delivering exceptional results with attention to detail and customer satisfaction.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description: "Embracing modern technology while maintaining practical, user-friendly solutions.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About DownEast Digital</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Bringing modern digital solutions to Maine's Bold Coast
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Founded in Calais, Maine, DownEast Digital Solutions emerged from a vision to bring world-class web development and IT support services to Washington County and the surrounding areas. As members of the local community, we understand the unique challenges and opportunities that businesses in our region face.
              </p>
              <p className="mb-4">
                Our team combines deep local knowledge with expertise in the latest digital technologies. We're committed to helping Downeast Maine businesses thrive in the digital age, providing solutions that are both sophisticated and practical.
              </p>
              <p>
                Operating as the Calais Tech Collective, we're more than just a service provider – we're your neighbors and partners in building a stronger digital future for our community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Values</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <div className="text-blue-700 mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-700">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Let's Build Something Together</h2>
          <p className="text-blue-100 mb-6">
            Ready to take your business to the next level? We're here to help you succeed in the digital world.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
} 