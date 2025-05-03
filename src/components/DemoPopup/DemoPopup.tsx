import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, Mail, User, Phone, Briefcase, MessageSquare } from 'react-feather';
import styles from './DemoPopup.module.scss';

interface DemoPopupProps {
  onClose: () => void;
}

const DemoPopup = ({ onClose }: DemoPopupProps) => {
  const [formData, setFormData] = useState({
    date: '',
    company: '',
    email: '',
    phone: '',
    comments: ''
  });

  const [currentStep, setCurrentStep] = useState<'date' | 'details'>('date');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demande de démo:', formData);
    onClose();
  };

  const nextStep = () => setCurrentStep('details');
  const prevStep = () => setCurrentStep('date');

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className={styles.popup}
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          transition={{ type: 'spring', damping: 25 }}
        >
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>

          <h2 className={styles.title}>
            <Calendar className={styles.titleIcon} />
            Demander une Démo Technique
          </h2>

          <form onSubmit={handleSubmit} className={styles.form}>
            {currentStep === 'date' ? (
              <motion.div
                key="date-step"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className={styles.stepContainer}
              >
                <div className={styles.formGroup}>
                  <label htmlFor="date" className={`${styles.label} ${styles.dateTimeLabel}`}>
                    <Calendar className={styles.inputIcon} />
                    Date et heure de la démo
                  </label>
                  <input
                    type="datetime-local"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.dateTimeInput}`}
                    required
                    min={new Date().toISOString().slice(0, 16)}
                  />
                </div>

                <div className={styles.buttonGroup}>
                  <button
                    type="button"
                    className={styles.nextButton}
                    onClick={nextStep}
                    disabled={!formData.date}
                  >
                    Suivant
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="details-step"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className={styles.stepContainer}
              >
                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.label}>
                    <Briefcase className={styles.inputIcon} />
                    Raison sociale
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    <Mail className={styles.inputIcon} />
                    Email professionnel
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    <Phone className={styles.inputIcon} />
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="comments" className={styles.label}>
                    <MessageSquare className={styles.inputIcon} />
                    Commentaires (optionnel)
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    className={styles.textarea}
                    rows={3}
                  />
                </div>

                <div className={styles.buttonGroup}>
                  <button
                    type="button"
                    className={styles.backButton}
                    onClick={prevStep}
                  >
                    Retour
                  </button>
                  <button
                    type="submit"
                    className={styles.submitButton}
                  >
                    Confirmer
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DemoPopup;