import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
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
      <section className="content-section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <motion.div
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 0.1 }}
           variants={containerVariants}
           className="about-container"
        >
          <div className="about-header" style={{ 
            display: 'flex', 
            gap: '4rem', 
            alignItems: 'flex-start', 
            flexWrap: 'wrap',
            maxWidth: '1200px',
            margin: '0 auto 4rem auto'
          }}>
            <motion.div variants={itemVariants} className="about-image-wrapper" style={{ flexShrink: 0, margin: '0 auto' }}>
              <img 
                src="/profile.jpg" 
                alt="Tahir Acar"
                style={{
                  width: '100%',
                  maxWidth: '320px',
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  border: '1px solid var(--color-border)',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </motion.div>
            
            <div style={{ flex: '1', minWidth: '300px' }}>
              <motion.h2 variants={itemVariants} className="section-title left-aligned" style={{ left: '0', transform: 'none', textAlign: 'left', marginBottom: '1.5rem', display: 'inline-block' }}>
                {t('aboutTitle')}
              </motion.h2>
              <motion.div variants={itemVariants} className="about-intro" style={{ textAlign: 'left', margin: '0', maxWidth: '100%' }}>
                <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--color-text-light)' }}>
                  {t('aboutIntroText')}
                </p>
              </motion.div>
            </div>
          </div>

          <div className="resume-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginTop: '2rem' }}>
            <motion.div variants={itemVariants} className="resume-section">
              <div className="resume-section-header">
                <Briefcase size={24} color="var(--color-accent)" />
                <h3>{t('aboutExpTitle')}</h3>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">2013 - 2015</div>
                  <div className="timeline-content">
                    <h4>{t('aboutExp1Title')}</h4>
                    <p className="timeline-company">{t('aboutExp1Comp')}</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">2009 - 2013</div>
                  <div className="timeline-content">
                    <h4>{t('aboutExp2Title')}</h4>
                    <p className="timeline-company">{t('aboutExp2Comp')}</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">2006 - 2009</div>
                  <div className="timeline-content">
                    <h4>{t('aboutExp3Title')}</h4>
                    <p className="timeline-company">{t('aboutExp3Comp')}</p>
                    <p className="timeline-desc">{t('aboutExp3Desc')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="resume-section">
              <div className="resume-section-header">
                <GraduationCap size={24} color="var(--color-accent)" />
                <h3>{t('aboutEduTitle')}</h3>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">1998 - 2002</div>
                  <div className="timeline-content">
                    <h4>{t('aboutEdu1Title')}</h4>
                    <p className="timeline-company">{t('aboutEdu1Comp')}</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">1995 - 1997</div>
                  <div className="timeline-content">
                    <h4>{t('aboutEdu2Title')}</h4>
                    <p className="timeline-company">{t('aboutEdu2Comp')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="resume-section">
              <div className="resume-section-header">
                <Award size={24} color="var(--color-accent)" />
                <h3>{t('aboutSemTitle')}</h3>
              </div>
              <ul className="seminar-list">
                <li>{t('aboutSem1')} <span>{t('aboutSem1Loc')}</span></li>
                <li>{t('aboutSem2')} <span>{t('aboutSem2Loc')}</span></li>
                <li>{t('aboutSem3')} <span>{t('aboutSem3Loc')}</span></li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
