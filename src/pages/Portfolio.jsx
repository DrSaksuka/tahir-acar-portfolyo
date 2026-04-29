import React from 'react';
import { motion } from 'framer-motion';
import { PencilRuler } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="page-container" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: 'calc(100vh - var(--nav-height))',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          background: 'var(--glass-bg)',
          padding: '4rem 2rem',
          borderRadius: '24px',
          border: '1px solid var(--color-border)',
          backdropFilter: 'var(--glass-blur)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          maxWidth: '500px',
          width: '100%'
        }}
      >
        <motion.div
          animate={{ 
            rotate: [-5, 5, -5]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        >
          <PencilRuler size={72} color="var(--color-accent)" strokeWidth={1.5} />
        </motion.div>
        
        <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3rem)', 
          fontWeight: '800', 
          color: 'var(--color-primary)',
          margin: 0,
          letterSpacing: '-1px'
        }}>
          Yakında...
        </h1>
        
        <p style={{ 
          color: 'var(--color-text-light)', 
          fontSize: '1.1rem',
          lineHeight: '1.6',
          margin: 0
        }}>
          Tahir Acar'ın özenle hazırladığı profesyonel tasarım ve teknik çizim projeleri çok yakında bu sayfada yer alacak.
        </p>

        <motion.div 
          style={{
            marginTop: '1rem',
            width: '60px',
            height: '4px',
            background: 'var(--color-accent)',
            borderRadius: '2px'
          }}
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
};

export default Portfolio;
