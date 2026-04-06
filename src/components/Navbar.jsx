import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Apply theme to document on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsNavHovered(false);
  };

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımda', path: '/about' },
    { name: 'Portfolyo', path: '/portfolio' },
    { name: 'İletişim', path: '/contact' }
  ];

  return (
    <>
      {/* Apple style blur overlay */}
      <AnimatePresence>
        {(isNavHovered || isMobileMenuOpen) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              position: 'fixed',
              top: 'var(--nav-height)',
              left: 0,
              width: '100%',
              height: 'calc(100vh - var(--nav-height))',
              background: 'var(--overlay-bg)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              zIndex: 900
            }}
          />
        )}
      </AnimatePresence>

      <nav 
        className="navbar" 
        onMouseLeave={() => setIsNavHovered(false)}
      >
        <NavLink to="/" className="nav-brand" onClick={closeMenu}>
          <motion.img 
            key={theme}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            src="/logo.png" 
            alt="TA Logo" 
            style={{ 
              height: '65px', 
              width: 'auto', 
              marginRight: '8px', 
              mixBlendMode: theme === 'dark' ? 'screen' : 'multiply',
              filter: theme === 'dark' ? 'invert(1) hue-rotate(185deg) brightness(1.4)' : 'none'
            }} 
          />
          <span style={{ fontSize: '1.3rem', color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '1px'}}>TAHİR ACAR</span>
        </NavLink>

        {/* Desktop Links & Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <ul 
            className="nav-links" 
            onMouseEnter={() => setIsNavHovered(true)}
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              position: 'relative',
              width: '40px',
              height: '40px'
            }}
            title={theme === 'light' ? 'Karanlık Temaya Geç' : 'Aydınlık Temaya Geç'}
          >
            {/* AnimatePresence for smooth icon transition */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -20, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
                style={{ position: 'absolute' }}
              >
                {theme === 'light' ? <Moon size={24} /> : <Sun size={24} color="var(--color-accent)" />}
              </motion.div>
            </AnimatePresence>
          </button>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMenu}
            style={{ position: 'relative', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                style={{ position: 'absolute' }}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{
                position: 'absolute',
                top: 'var(--nav-height)',
                left: 0,
                width: '100%',
                background: 'var(--glass-bg)',
                backdropFilter: 'var(--glass-blur)',
                borderBottom: '1px solid var(--color-border)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                zIndex: 999
              }}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  style={{ color: 'var(--color-primary)', fontSize: '1.2rem', fontWeight: 500 }}
                >
                  {link.name}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
