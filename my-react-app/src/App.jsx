import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import InternshipsPage from './pages/InternshipsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 w-full relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/internships" element={<InternshipsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;
