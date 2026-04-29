import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';

import Navbar from './components/Navbar';
import Home from './pages/Home';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// This component is needed to use useLocation hook inside Router
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <AnimatedRoutes />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
