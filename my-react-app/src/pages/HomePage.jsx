import React from 'react';
import { Link } from 'react-router-dom';
import InternshipList from '../components/InternshipList';

const features = [
  { title: 'Hands-on Experience', description: 'Work on real projects and gain practical industry experience' },
  { title: 'Mentorship', description: 'Learn from experienced professionals in the tech industry' },
  { title: 'Career Growth', description: 'Opportunity to convert internship into a full-time role' }
];

const services = [
  { title: 'Full Stack', desc: 'React, Node, Databases', icon: '💻' },
  { title: 'Mobile', desc: 'Android & iOS', icon: '📱' },
  { title: 'Design', desc: 'UI/UX & Prototyping', icon: '🎨' },
  { title: 'Data', desc: 'ML & Analytics', icon: '📊' }
];

const dummyJobs = [
  { id: 1, role: 'Front End Developer Intern', duration: '3 months', stipend: '₹1,000 - 1,500/month' },
  { id: 2, role: 'Full Stack Developer Intern', duration: '3 months', stipend: '₹1,000 - 1,500/month' },
  { id: 3, role: 'UI/UX Designer Intern', duration: '3 months', stipend: 'Unpaid' }
];

const HomePage = () => (
  <div className="antialiased">
    {/* Hero Section */}
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-light text-white py-28 px-5 text-center">
      <div className="absolute right-0 top-6 opacity-30 animate-float pointer-events-none hidden md:block">
        <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-white/80">
          <defs>
            <linearGradient id="g2" x1="0" x2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#a3bffa" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#g2)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="inline-block bg-white/10 text-white/90 px-4 py-1 rounded-full mb-6 animate-wave-slow">Now hiring — Apply for internships</p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-up">
          Build real products. Learn from experts. Grow your career at AppDost.
        </h1>
        <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
          Apply for paid and stipend internships across development, design, and data. Mentorship, real projects and a pathway to join full-time.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/internships" className="inline-block bg-white text-primary px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">Explore Internships</Link>
          <a href="#apply" className="inline-block btn-primary">Apply Now</a>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-16 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">What you'll learn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="p-6 rounded-xl shadow-sm hover:shadow-md transition-all bg-gradient-to-br from-white to-white/95">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Process / Steps */}
    <section className="py-16 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm text-center">
            <div className="h-12 w-12 rounded-full mx-auto bg-primary text-white flex items-center justify-center mb-4">1</div>
            <h4 className="font-semibold mb-2">Apply online</h4>
            <p className="text-gray-600">Fill a short form and share your resume or portfolio.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm text-center">
            <div className="h-12 w-12 rounded-full mx-auto bg-primary text-white flex items-center justify-center mb-4">2</div>
            <h4 className="font-semibold mb-2">Interview & task</h4>
            <p className="text-gray-600">A short interview and a small take-home task to assess practical skills.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm text-center">
            <div className="h-12 w-12 rounded-full mx-auto bg-primary text-white flex items-center justify-center mb-4">3</div>
            <h4 className="font-semibold mb-2">Join the team</h4>
            <p className="text-gray-600">Start working on real projects with mentorship and guidance.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-primary text-white rounded-lg shadow-md">
            <div className="text-3xl font-bold">120+</div>
            <div className="opacity-90">Interns placed</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-md">
            <div className="text-3xl font-bold">95%</div>
            <div className="opacity-90">Satisfaction rate</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold">50+</div>
            <div className="opacity-90">Projects shipped</div>
          </div>
        </div>
      </div>
    </section>

    {/* Latest Internships */}
    <section id="internships" className="py-16 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Latest openings</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <InternshipList internships={dummyJobs} />
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">What our interns say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <blockquote className="p-6 bg-white rounded-lg shadow-sm">
            <p className="text-gray-700">"The mentorship and real work helped me land a full-time role within 3 months."</p>
            <footer className="mt-4 text-sm text-gray-500">— Priya, Frontend Intern</footer>
          </blockquote>
          <blockquote className="p-6 bg-white rounded-lg shadow-sm">
            <p className="text-gray-700">"Great team, practical tasks, and lots of learning. Highly recommend AppDost."</p>
            <footer className="mt-4 text-sm text-gray-500">— Rohit, Backend Intern</footer>
          </blockquote>
        </div>
      </div>
    </section>

    {/* Newsletter / Apply CTA */}
    <section id="apply" className="py-16 px-5 bg-primary text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Stay updated — internship alerts</h3>
        <p className="mb-6 opacity-90">Get notified about new roles and application deadlines.</p>
        <form className="flex flex-col sm:flex-row items-center gap-3 justify-center">
          <input aria-label="Email" type="email" placeholder="Your email" className="w-full sm:w-auto px-4 py-3 rounded-md text-gray-900" />
          <button className="btn-primary">Subscribe</button>
        </form>
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-gray-50 py-16 px-5 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-6">Ready to Start Your Journey?</h2>
        <p className="text-lg text-gray-600 mb-8">Join our internship program and kickstart your career in technology</p>
        <Link to="/internships" className="btn-primary">Apply Now</Link>
      </div>
    </section>
  </div>
);

export default HomePage;
