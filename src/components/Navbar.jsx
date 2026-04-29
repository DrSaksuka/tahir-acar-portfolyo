import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const { language, toggleLanguage, t } = useLanguage();

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
    { name: t('navHome'), path: '/' },
    { name: t('navAbout'), path: '/about' },
    { name: t('navPortfolio'), path: '/portfolio' },
    { name: t('navContact'), path: '/contact' }
  ];

  return (
    <>
      <nav 
        className="navbar" 
        onMouseLeave={() => setIsNavHovered(false)}
      >
        <NavLink to="/" className="nav-brand" onClick={closeMenu} style={{ whiteSpace: 'nowrap' }}>
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
          <span style={{ fontSize: 'clamp(1rem, 4vw, 1.3rem)', color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '1px'}}>TAHİR ACAR</span>
        </NavLink>

        {/* Desktop Links & Toggles */}
        <div 
          style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
          onMouseLeave={() => setHoveredPath(null)}
        >
          <ul 
            className="nav-links" 
            onMouseEnter={() => setIsNavHovered(true)}
          >
            {navLinks.map((link) => (
              <li 
                key={link.path}
                onMouseEnter={() => setHoveredPath(link.path)}
                style={{ position: 'relative' }}
              >
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  style={{ 
                    position: 'relative', 
                    zIndex: 2, 
                    padding: '8px 16px', 
                    display: 'block',
                    color: hoveredPath === link.path ? '#ffffff' : undefined,
                    transition: 'color 0.2s ease',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {link.name}
                </NavLink>
                {hoveredPath === link.path && (
                  <motion.div
                    layoutId="nav-slime"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      mass: 0.8
                    }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'var(--color-accent)',
                      borderRadius: '8px',
                      zIndex: 1
                    }}
                  />
                )}
              </li>
            ))}
          </ul>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Language Toggle Button */}
            <button 
              onClick={toggleLanguage}
              onMouseEnter={() => setHoveredPath('language')}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: hoveredPath === 'language' ? '#ffffff' : 'var(--color-text)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                padding: '8px',
                position: 'relative',
                height: '44px',
                transition: 'color 0.2s ease',
                zIndex: 2,
                fontWeight: 'bold',
                fontSize: '14px'
              }}
              title={language === 'tr' ? t('switchLangEn') : t('switchLangTr')}
            >
              <Globe size={20} />
              <span style={{ width: '24px', textAlign: 'center' }}>
                {language === 'tr' ? 'EN' : 'TR'}
              </span>
              
              {hoveredPath === 'language' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'var(--color-accent)',
                    borderRadius: '8px',
                    zIndex: -1
                  }}
                />
              )}
            </button>

            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              onMouseEnter={() => setHoveredPath('theme')}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: hoveredPath === 'theme' ? '#ffffff' : 'var(--color-text)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                position: 'relative',
                width: '44px',
                height: '44px',
                transition: 'color 0.2s ease',
                zIndex: 2
              }}
              title={theme === 'light' ? t('themeDark') : t('themeLight')}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                  style={{ position: 'absolute', display: 'flex' }}
                >
                  {theme === 'light' ? <Moon size={24} color={hoveredPath === 'theme' ? "white" : undefined} /> : <Sun size={24} color={hoveredPath === 'theme' ? "white" : "var(--color-accent)"} />}
                </motion.div>
              </AnimatePresence>

              {hoveredPath === 'theme' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'var(--color-accent)',
                    borderRadius: '8px',
                    zIndex: -1
                  }}
                />
              )}
            </button>
            
            {/* Mobile Menu Toggle Button */}
            <button 
              className="mobile-menu-btn" 
              onClick={toggleMenu}
              style={{ position: 'relative', width: '40px', height: '40px', alignItems: 'center', justifyContent: 'center' }}
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
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onMouseLeave={() => setHoveredPath(null)}
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
                gap: '8px',
                zIndex: 999
              }}
            >
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  onMouseEnter={() => setHoveredPath('mobile-' + link.path)}
                  style={{ position: 'relative' }}
                >
                  <NavLink
                    to={link.path}
                    onClick={closeMenu}
                    style={{ 
                      position: 'relative',
                      zIndex: 2,
                      display: 'block',
                      padding: '12px 16px',
                      color: hoveredPath === ('mobile-' + link.path) ? '#ffffff' : 'var(--color-primary)', 
                      fontSize: '1.2rem', 
                      fontWeight: 500,
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {link.name}
                  </NavLink>
                  {hoveredPath === ('mobile-' + link.path) && (
                    <motion.div
                      layoutId="mobile-nav-slime"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
                      style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'var(--color-accent)',
                        borderRadius: '8px',
                        zIndex: 1
                      }}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
