import React, { useState } from 'react';

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    areaOfInterest: '',
    yearsOfExperience: '',
    aboutYou: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    
    alert('Application submitted! Thanks.');
    
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      areaOfInterest: '',
      yearsOfExperience: '',
      aboutYou: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">✦</div>
        <div>
          <h3 className="text-xl font-semibold">Apply for Internship</h3>
          <p className="text-sm text-gray-500">Fill this form and we'll get back to you soon.</p>
        </div>
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-gray-700 font-medium">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-gray-700 font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-gray-700 font-medium">
          Phone
        </label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-gray-700 font-medium">
          Area of Interest
        </label>
        <select
          name="areaOfInterest"
          value={formData.areaOfInterest}
          onChange={handleChange}
          required
          className="form-input bg-white"
        >
          <option value="">Select Area</option>
          <option value="Full Stack Development">Full Stack Development</option>
          <option value="Android Development">Android Development</option>
          <option value="iOS Development">iOS Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="DevOps">DevOps</option>
          <option value="Data Science">Data Science</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-gray-700 font-medium">
          Years of Experience
        </label>
        <input
          type="number"
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={handleChange}
          min="0"
          required
          className="form-input"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-gray-700 font-medium">
          Tell us about yourself
        </label>
        <textarea
          name="aboutYou"
          value={formData.aboutYou}
          onChange={handleChange}
          rows="4"
          required
          className="form-input resize-y"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-secondary to-primary text-white rounded-lg font-medium 
                 transition-transform duration-200 hover:-translate-y-0.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Submit Application
      </button>
    </form>
  );
};

export default InternshipForm;
