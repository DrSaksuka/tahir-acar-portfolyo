import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Ruler, LayoutTemplate, ShieldCheck, Cog } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ParallaxImage = ({ src, alt, title, subtitle }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <div ref={ref} className="image-showcase">
      <motion.img 
        src={src} 
        alt={alt} 
        className="parallax-image"
        style={{ y, scale }}
      />
      <div className="overlay-text">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};

const Home = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="page-container">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={itemVariants} style={{ color: 'var(--color-accent)', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          {t('homeHeroSubtitle1')}
        </motion.p>
        
        <motion.h1 className="hero-title" variants={itemVariants}>
          TAHİR <span>ACAR</span>
        </motion.h1>
        
        <motion.p className="hero-subtitle" variants={itemVariants}>
          {t('homeHeroSubtitle2')}
        </motion.p>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="content-section">
        <motion.div
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 0.2 }}
           variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', textAlign: 'center', marginBottom: '1rem', color: 'var(--color-primary)' }}>
            {t('homeServicesTitle')}
          </motion.h2>
          <motion.p variants={itemVariants} style={{ textAlign: 'center', color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
            {t('homeServicesDesc')}
          </motion.p>

          <div className="services-grid">
            <motion.div className="service-card" variants={itemVariants}>
              <Ruler color="var(--color-accent)" size={40} style={{ marginBottom: '20px' }} />
              <h3>{t('homeService1Title')}</h3>
              <p>{t('homeService1Desc')}</p>
            </motion.div>
            
            <motion.div className="service-card" variants={itemVariants}>
              <LayoutTemplate color="var(--color-accent)" size={40} style={{ marginBottom: '20px' }} />
              <h3>{t('homeService2Title')}</h3>
              <p>{t('homeService2Desc')}</p>
            </motion.div>

            <motion.div className="service-card" variants={itemVariants}>
              <Cog color="var(--color-accent)" size={40} style={{ marginBottom: '20px' }} />
              <h3>{t('homeService3Title')}</h3>
              <p>{t('homeService3Desc')}</p>
            </motion.div>

            <motion.div className="service-card" variants={itemVariants}>
              <ShieldCheck color="var(--color-accent)" size={40} style={{ marginBottom: '20px' }} />
              <h3>{t('homeService4Title')}</h3>
              <p>{t('homeService4Desc')}</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Parallax Image Section */}
      <section style={{ padding: '0 5% 100px 5%' }}>
        <ParallaxImage 
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
          alt="Engineering Draft"
          title={t('homeParallax1Title')}
          subtitle={t('homeParallax1Desc')}
        />
        
        <div style={{ height: '50px' }}></div>
        
        <ParallaxImage 
          src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" 
          alt="Manufacturing"
          title={t('homeParallax2Title')}
          subtitle={t('homeParallax2Desc')}
        />
      </section>
    </div>
  );
};

export default Home;
