import React, { useState, useEffect } from 'react';
import InternshipList from '../components/InternshipList';
import InternshipForm from '../components/InternshipForm';

const InternshipsPage = () => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
   
    const dummy = [
      { id: 1, role: 'Front End Developer Intern', duration: '3 months', stipend: '₹1,000 - 1,500/­month' },
      { id: 2, role: 'Full Stack Developer Intern', duration: '3 months', stipend: '₹1,000 - 1,500/­month' },
    ];
    setInternships(dummy);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Available Internships
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore exciting internship opportunities and take the first step towards your career in technology
        </p>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md mb-10">
        <InternshipList internships={internships} />
      </section>

      <section className="bg-gray-50 p-10 rounded-lg">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Apply Now
        </h2>
        <InternshipForm />
      </section>
    </div>
  );
};

export default InternshipsPage;
