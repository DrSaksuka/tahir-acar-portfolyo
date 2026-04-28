import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Home from './pages/Home';

import About from './pages/About';
import Contact from './pages/Contact';

// Skeleton pages for routing
const Portfolio = () => <div className="page-container"><h2 className="section-title">Portfolyo</h2></div>;

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
    <Router>
      <div className="app-container">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
