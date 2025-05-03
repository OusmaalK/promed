import styles from './Contact.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState<{
    state: 'idle' | 'loading' | 'success' | 'error';
    message?: string;
  }>({ state: 'idle' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus({ state: 'loading' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmissionStatus({
          state: 'success',
          message: 'Votre message a été envoyé avec succès !'
        });
        setFormData({ nom: '', email: '', sujet: '', message: '' });
        
        // Réinitialiser le statut après 5 secondes
        setTimeout(() => {
          setSubmissionStatus({ state: 'idle' });
        }, 5000);
      } else {
        throw new Error(data.error || 'Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setSubmissionStatus({
        state: 'error',
        message: error instanceof Error ? error.message : 'Une erreur inattendue est survenue'
      });
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={styles.contactContainer}
    >
      <h2 className={styles.contactTitre}>Contactez-nous</h2>
      <p className={styles.contactDescription}>
        N'hésitez pas à nous contacter pour toute question, demande d'information ou suggestion.
      </p>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="nom" className={styles.formLabel}>Nom complet*</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            className={styles.formInput}
            required
            minLength={2}
            maxLength={50}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.formInput}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="sujet" className={styles.formLabel}>Sujet</label>
          <input
            type="text"
            id="sujet"
            name="sujet"
            value={formData.sujet}
            onChange={handleChange}
            className={styles.formInput}
            maxLength={100}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.formLabel}>Message*</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.formTextarea}
            rows={5}
            required
            minLength={10}
            maxLength={1000}
          ></textarea>
        </div>

        <motion.button
          type="submit"
          className={styles.formButton}
          disabled={submissionStatus.state === 'loading'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {submissionStatus.state === 'loading' ? (
            <span className={styles.loadingIndicator}>Envoi en cours...</span>
          ) : (
            'Envoyer le message'
          )}
        </motion.button>

        {submissionStatus.state === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.submissionSuccess}
          >
            {submissionStatus.message}
          </motion.div>
        )}

        {submissionStatus.state === 'error' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.submissionError}
          >
            {submissionStatus.message}
          </motion.div>
        )}
      </form>

      <div className={styles.contactInfo}>
        <h3>Informations de contact</h3>
        <p><strong>Adresse:</strong> 25,Rue barnave Btm C N°25 Ferhat Boussad Alger Algérie</p>
        <p><strong>Email:</strong> <a href="mailto:capitalnetalgerie@gmail.com">capitalnetalgerie@gmail.com</a></p>
        <p><strong>Téléphone:</strong> +213 778 589 916</p>
      </div>
    </motion.div>
  );
};

export default Contact;