import React, { useState } from 'react';
import { X, CheckCircle } from 'react-feather';
import VerificationIcon from './assets/icons/verification.svg';
import styles from './VerificationForm.module.scss';

interface VerificationFormProps {
  onClose: () => void;
}

const VerificationForm: React.FC<VerificationFormProps> = ({ onClose }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerified(true);
  };

  return (
    <div className={styles.verificationForm}>
      <button className={styles.closeButton} onClick={onClose}>
        <X size={24} />
      </button>

      {isVerified ? (
        <div className={styles.successMessage}>
          <CheckCircle size={48} className={styles.successIcon} />
          <h3>Vérification réussie !</h3>
          <p>Votre statut professionnel a été confirmé.</p>
        </div>
      ) : (
        <>
          <h2>Vérification d'Identité</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <VerificationIcon className={styles.formIcon} />
              <label htmlFor="verificationCode">Code de Vérification</label>
              <input
                type="text"
                id="verificationCode"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Entrez votre code professionnel"
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Vérifier mon identité
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default VerificationForm;