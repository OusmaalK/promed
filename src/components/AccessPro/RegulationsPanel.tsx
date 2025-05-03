import React from 'react';
import ComplianceIcon from './assets/icons/compliance.svg';
import styles from './RegulationsPanel.module.scss';
import { X } from 'react-feather';

interface RegulationsPanelProps {
  onClose: () => void;
}

const RegulationsPanel: React.FC<RegulationsPanelProps> = ({ onClose }) => {
  return (
    <div className={styles.regulationsPanel}>
      <button className={styles.closeButton} onClick={onClose}>
        <X size={24} />
      </button>
      
      <h2>Réglementations Conformes</h2>
      <div className={styles.complianceInfo}>
        <ComplianceIcon className={styles.icon} />
        <div className={styles.textContent}>
          <p>
            Notre plateforme respecte toutes les réglementations en vigueur pour garantir
            la sécurité et la confidentialité de vos données.
          </p>
          <ul>
            <li>Conformité RGPD</li>
            <li>Certification HDS</li>
            <li>Normes de sécurité ISO 27001</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegulationsPanel;