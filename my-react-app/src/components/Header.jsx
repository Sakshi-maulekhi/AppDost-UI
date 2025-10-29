import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-gradient-to-br from-primary to-primary-light text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-bold">AD</div>
          <h1 className="m-0 text-2xl font-semibold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">AppDost</h1>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>Home</NavLink>
          <NavLink to="/internships" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>Internships</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>About</NavLink>
        </nav>

        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2 rounded-md bg-white/10 hover:bg-white/20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden bg-primary/95 overflow-hidden transition-max-height duration-300 ${open ? 'max-h-64 py-3' : 'max-h-0'}`}>
        <div className="flex flex-col px-4 gap-2">
          <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>Home</NavLink>
          <NavLink to="/internships" onClick={() => setOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>Internships</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>About</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
