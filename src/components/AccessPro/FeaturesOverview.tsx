import React from 'react';
import Image from 'next/image';
import FeaturesIcon from './assets/icons/features.svg';
import styles from './FeaturesOverview.module.scss';

interface FeaturesOverviewProps {
  onClose: () => void;
}

const FeaturesOverview: React.FC<FeaturesOverviewProps> = ({ onClose }) => {
  const features = [
    {
      title: "Tableau de Bord Complet",
      description: "Accédez à toutes vos données et analyses en temps réel avec notre interface intuitive.",
      icon: <FeaturesIcon className={styles.featureIcon} />,
      image: "/images/dashboard.png",
      imageAlt: "Tableau de bord analytique"
    },
    {
      title: "Processus Vérifié",
      description: "Toutes les étapes sont contrôlées pour votre sécurité.",
      icon: <FeaturesIcon className={styles.featureIcon} />,
      image: "/images/processcheck.png",
      imageAlt: "Diagramme de processus vérifié"
    }
  ];

  return (
    <div className={styles.featuresOverview}>
      <button className={styles.closeButton} onClick={onClose}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <h2>Fonctionnalités Professionnelles</h2>
      
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.featureHeader}>
              {feature.icon}
              <h3>{feature.title}</h3>
            </div>
            <p>{feature.description}</p>
            <div className={styles.featureImageContainer}>
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                width={500}
                height={300}
                className={styles.featureImage}
                unoptimized={true}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesOverview;