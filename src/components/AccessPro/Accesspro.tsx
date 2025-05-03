'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, FileText, Lock } from 'react-feather';
import styles from './AccessPro.module.scss';
import { useState } from 'react';
import RegulationsPanel from './RegulationsPanel';
import VerificationForm from './VerificationForm';
import FeaturesOverview from './FeaturesOverview';

const AccessPro = ({ onClose }: { onClose: () => void }) => {
  const [currentView, setCurrentView] = useState<'overview' | 'regulations' | 'verification' | 'features'>('overview');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <AnimatePresence>
        {currentView === 'overview' ? (
          <motion.div
            className={styles.modalContent}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20 }}
            key="overview"
>
  <button className={styles.closeButton} onClick={onClose}>
    <X size={24} />
  </button>
  
  <h2 className={styles.modalTitle}>Accès Professionnel Bayésien-Pro</h2>
  <p className={styles.modalSubtitle}>Déverrouillez toutes les fonctionnalités expertes</p>
  
  <motion.div
    className={styles.cardsContainer}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Carte Réglementation */}
    <motion.div 
      className={styles.card}
      variants={fadeIn}
      whileHover={{ y: -5 }}
    >
      <div className={styles.cardIcon}>
        <Lock size={32} />
      </div>
      <h3 className={styles.cardTitle}>Exigences Réglementaires</h3>
      <p className={styles.cardText}>
        Conformité HDS et protection des données de santé selon les normes en vigueur.
      </p>
      <button 
        className={styles.cardButton}
        onClick={() => setCurrentView('regulations')}
      >
        Voir les détails
      </button>
    </motion.div>
    
    {/* Carte Vérification */}
    <motion.div 
      className={styles.card}
      variants={fadeIn}
      whileHover={{ y: -5 }}
    >
      <div className={styles.cardIcon}>
        <CheckCircle size={32} />
      </div>
      <h3 className={styles.cardTitle}>Vérification Professionnelle</h3>
      <p className={styles.cardText}>
        Processus simple pour valider votre statut de professionnel de santé.
      </p>
      <button 
        className={styles.cardButton}
        onClick={() => setCurrentView('verification')}
      >
        Commencer
      </button>
    </motion.div>
    
    {/* Carte Fonctionnalités */}
    <motion.div 
      className={styles.card}
      variants={fadeIn}
      whileHover={{ y: -5 }}
    >
      <div className={styles.cardIcon}>
        <FileText size={32} />
      </div>
      <h3 className={styles.cardTitle}>Fonctionnalités Expertes</h3>
      <p className={styles.cardText}>
        Découvrez les outils avancés réservés aux professionnels.
      </p>
      <button 
        className={styles.cardButton}
        onClick={() => setCurrentView('features')}
      >
        Explorer
      </button>
    </motion.div>
  </motion.div>
</motion.div>
) : (
  <motion.div
    className={styles.detailContainer}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.2 }}
    key="detail-view"
  >
    <button 
      className={styles.backButton}
      onClick={() => setCurrentView('overview')}
    >
      ← Retour
    </button>

    <AnimatePresence mode="wait">
      {currentView === 'regulations' && (
        <RegulationsPanel 
          onClose={() => {
            setCurrentView('overview');
            onClose();
          }} 
        />
      )}
      {currentView === 'verification' && (
        <VerificationForm 
          onClose={() => {
            setCurrentView('overview');
            onClose();
          }}
        />
      )}
      {currentView === 'features' && (
        <FeaturesOverview 
          onClose={() => {
            setCurrentView('overview');
            onClose();
          }}
        />
      )}
    </AnimatePresence>
  </motion.div>
    )}
      </AnimatePresence>
    </div>
  );
}
export default AccessPro;