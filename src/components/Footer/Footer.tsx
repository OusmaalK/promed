// src\components\Footer\Footer.tsx
import styles from './Footer.module.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Section Principale */}
        <div className={styles.mainSection}>
          <div className={styles.brandColumn}>
            <div className={styles.logoContainer}>
              <Image src="/images/logo.png" alt="Bayésien-Pro Logo" width={50} height={50} className={styles.logoImage} />
              <h1 className={styles.logoText}>BAYÉSIEN-PRO</h1>
            </div>
            <p className={styles.tagline}>MEDICAL INTELLIGENCE PLATFORM</p>
            <p className={styles.description}>
              Revolutionizing medical diagnostics with our AI-powered platform.
              Bayésien-Pro integrates Bayesian networks, deep learning and
              quantum-ready algorithms to provide unparalleled diagnostic accuracy.
            </p>
            <button className={styles.ctaButton}>SCHEDULE A DEMO</button>
          </div>

          <div className={styles.linksColumns}>
            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>Company</h3>
              <ul className={styles.linksList}>
                <li>Our Vision & Mission</li>
                <li>Partners & Certifications</li>
                <li>Customer Success Stories</li>
              </ul>
            </div>

            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>Resources</h3>
              <ul className={styles.linksList}>
                <li>Medical Insights Blog</li>
                <li>Clinical Case Studies</li>
                <li>API Documentation</li>
              </ul>
            </div>

            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>Legal</h3>
              <ul className={styles.linksList}>
                <li>HIPAA Compliance</li>
                <li>Terms of Service</li>
                <li>Medical Disclaimer</li>
              </ul>
            </div>

            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>Contact Info</h3>
              <ul className={styles.contactList}>
                <li>(+231) - 778.589.916</li>
                <li>capitalnetalgerie@gmail.com</li>
                <li>25 Rue barnave Btm C N° 25 Ferhat Boussad Alger Algérie</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          ©2025 Bayésien-Pro Medical Intelligence | Design by MedTech Solutions
        </div>
      </div>
    </footer>
  );
};

export default Footer;