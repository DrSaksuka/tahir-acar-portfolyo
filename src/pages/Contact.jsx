import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, User, Users } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="page-container">
      <section className="content-section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <motion.div
           initial="hidden"
           animate="show"
           variants={containerVariants}
           className="contact-container"
           style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
          <motion.h2 variants={itemVariants} className="section-title">İletişim & Özgeçmiş</motion.h2>
          
          {/* Contact Info Cards */}
          <div className="contact-info-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '3rem' }}>
            <motion.div variants={itemVariants} className="contact-card">
              <MapPin size={32} color="var(--color-accent)" />
              <h3>Adres</h3>
              <p>Bosna Hersek mah. Mesaj cad.<br/>Kaşıkçı Sitesi No. 11 D. 24<br/>Selçuklu / KONYA</p>
            </motion.div>
            <motion.div variants={itemVariants} className="contact-card">
              <Phone size={32} color="var(--color-accent)" />
              <h3>Telefon</h3>
              <p><a href="tel:+905418970113">0 541 897 01 13</a></p>
            </motion.div>
            <motion.div variants={itemVariants} className="contact-card">
              <Mail size={32} color="var(--color-accent)" />
              <h3>E-Posta</h3>
              <p><a href="mailto:tahiracar@yahoo.com">tahiracar@yahoo.com</a></p>
            </motion.div>
          </div>

          <div className="resume-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            <motion.div variants={itemVariants} className="resume-section">
              <div className="resume-section-header">
                <User size={24} color="var(--color-accent)" />
                <h3>Kişisel Bilgiler</h3>
              </div>
              <ul className="resume-list">
                <li><strong>Doğum Tarihi:</strong> 1976</li>
                <li><strong>Medeni Durum:</strong> Evli</li>
                <li><strong>Askerlik:</strong> Yaptı (2005)</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="resume-section">
              <div className="resume-section-header">
                <Users size={24} color="var(--color-accent)" />
                <h3>Referanslar</h3>
              </div>
              <div className="reference-list">
                <div className="reference-item">
                  <h4>Arif ADAR</h4>
                  <p>Atara Otomasyon Ustabaşı</p>
                  <a href="tel:+905424473472">0 542 447 34 72</a>
                </div>
                <div className="reference-item">
                  <h4>Hasan Aksakal</h4>
                  <p>Konyajant Firma Sahibi</p>
                  <a href="tel:+905324937192">0 532 493 71 92</a>
                </div>
                <div className="reference-item">
                  <h4>Mustafa Pullukçu</h4>
                  <p>Pumak Değirmen Makineleri</p>
                  <a href="tel:+905337238625">0 533 723 86 25</a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
