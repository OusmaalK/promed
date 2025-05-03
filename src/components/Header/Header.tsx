'use client';

import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';
import { useState } from 'react';

interface HeaderProps {
  onMenuClick: (titre: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (titre: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Empêche la navigation par défaut du lien
    onMenuClick(titre);
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/" onClick={() => onMenuClick('Plate-Forme')}>
          <Image
            src="/images/logo.png"
            alt="Plateforme Analyseur Bayésien Médical Pro Logo"
            width={150}
            height={40}
          />
        </Link>
        <div className={styles.titleContainer}>
          <h1 className={styles.titleLine1}>Bayésien-Pro</h1>
          <h2 className={styles.titleLine2}>Plateforme Analyseur Médical</h2>
        </div>
      </div>

      <button className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></div>
      </button>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          <li>
            <Link href="/platform" className={styles.navLink} onClick={(event) => handleLinkClick('Plate-Forme', event)}>
              Plate-Forme
            </Link>
          </li>
          <li>
            <Link href="/solutions" className={styles.navLink} onClick={(event) => handleLinkClick('Solutions', event)}>
              Solutions
            </Link>
          </li>
          <li>
            <Link
              href="/pour-les-professionnels"
              className={styles.navLink}
              onClick={(event) => handleLinkClick('Pour les Professionnels', event)}
            >
              Pour les Professionnels
            </Link>
          </li>
          <li>
            <Link
              href="/pourquoi-bayesien-pro"
              className={styles.navLink}
              onClick={(event) => handleLinkClick('Pourquoi choisir Bayésien-Pro', event)}
            >
              Pourquoi choisir Bayésien-Pro
            </Link>
          </li>
          <li>
            <Link href="/a-propos" className={styles.navLink} onClick={(event) => handleLinkClick('À propos', event)}>
              À propos
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink} onClick={(event) => handleLinkClick('Contact', event)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;