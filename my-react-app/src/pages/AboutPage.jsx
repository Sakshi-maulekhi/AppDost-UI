import React from 'react';

const AboutPage = () => (
  <div className="max-w-7xl mx-auto py-10 px-5">
    <section className="text-center mb-16">
      <h1 className="text-4xl font-bold text-primary mb-6">
        About AppDost
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        We are a dynamic IT solutions company committed to innovation and excellence in technology.
        Our internship program is designed to nurture the next generation of tech talent.
      </p>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {[
        {
          title: 'Our Mission',
          content: 'To empower businesses through innovative technology solutions and nurture tech talent through comprehensive internship programs.'
        },
        {
          title: 'Our Vision',
          content: 'To be a leading force in technology innovation while creating opportunities for aspiring tech professionals.'
        },
        {
          title: 'Our Values',
          content: 'Excellence, Innovation, Learning, Collaboration, and Growth define our approach to technology and talent development.'
        }
      ].map((section, index) => (
        <div 
          key={index} 
          className="p-8 rounded-lg shadow-md bg-white transform 
                     transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-primary mb-4">
            {section.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {section.content}
          </p>
        </div>
      ))}
    </section>

    <section className="bg-gray-50 p-10 rounded-lg mb-10">
      <h2 className="text-3xl font-bold text-primary mb-8">
        Why Join Our Internship Program?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          'Hands-on experience with real projects',
          'Mentorship from industry experts',
          'Flexible learning environment',
          'Opportunity for full-time roles',
          'Certificate of completion',
          'Networking opportunities'
        ].map((benefit, index) => (
          <div 
            key={index} 
            className="flex items-center p-4 bg-white rounded-lg shadow-sm
                       transition-all duration-200 hover:shadow-md"
          >
            <span className="mr-3 text-xl text-primary">•</span>
            <span className="text-gray-700">{benefit}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default AboutPage;