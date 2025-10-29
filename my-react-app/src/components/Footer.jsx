import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gradient-to-br from-primary/90 to-primary text-white py-10 px-5 mt-auto">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
      <div>
        <h3 className="text-xl font-semibold mb-4">AppDost</h3>
        <p className="text-blue-100 leading-relaxed">
          Building the next generation of technology solutions with passion and innovation.
        </p>
      </div>
      
      <div>
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <nav className="flex flex-col space-y-3">
          <Link to="/" className="text-blue-100 hover:text-white transition-colors">Home</Link>
          <Link to="/internships" className="text-blue-100 hover:text-white transition-colors">Internships</Link>
          <Link to="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link>
        </nav>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
        <div className="flex flex-col space-y-3 text-blue-100">
          <p>Pune, Maharashtra</p>
          <p>Email: info@appdost.in</p>
        </div>
        <div className="mt-4 flex gap-3">
          <a href="#" aria-label="twitter" className="text-blue-100 hover:text-white">🐦</a>
          <a href="#" aria-label="linkedin" className="text-blue-100 hover:text-white">in</a>
          <a href="#" aria-label="github" className="text-blue-100 hover:text-white">🐙</a>
        </div>
      </div>
    </div>
    
    <div className="border-t border-white/10 mt-8 pt-5 text-center">
      <p className="text-blue-100">© {new Date().getFullYear()} AppDost Complete IT Solution. All rights reserved.</p>
      <p className="text-xs text-blue-100/60 mt-2">Made with ♥ for learners</p>
    </div>
  </footer>
);

export default Footer;
