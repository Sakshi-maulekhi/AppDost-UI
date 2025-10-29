import React from 'react';

const InternshipList = ({ internships }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
    {internships.map(job => (
      <div key={job.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 
                                  transition-all duration-200 hover:-translate-y-1 hover:shadow-md 
                                  cursor-pointer">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M13 7H7v6h6V7z" /></svg>
          </div>
          <h3 className="text-primary text-xl font-semibold">
            {job.role}
          </h3>
        </div>
        <div className="flex flex-col space-y-3 text-gray-600">
          <p className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Duration:</span>
            {job.duration}
          </p>
          <p className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Stipend:</span>
            {job.stipend}
          </p>
        </div>
        <button className="mt-5 w-full bg-gradient-to-r from-secondary to-primary text-white px-4 py-3 rounded-lg font-medium transition-transform hover:-translate-y-0.5 shadow-sm">
          Apply Now
        </button>
      </div>
    ))}
  </div>
);

export default InternshipList;
