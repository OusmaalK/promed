'use client';
import { motion } from 'framer-motion';
import styles from './PourquoiBayesienPro.module.scss'; // Chemin relatif corrigé

const PourquoiBayesienPro = ({ onVoirSolutions }: { onVoirSolutions: () => void }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className={styles.avantagesContainer}>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h2 className={styles.titrePrincipal}>
          <span className={styles.highlight}>Bayésien-Pro</span> : L'excellence en analyse médicale prédictive
        </h2>
        <p className={styles.sousTitre}>
          Découvrez les avantages clés qui font de notre plateforme la solution de choix pour les professionnels exigeants
        </p>
      </motion.div>

  <div className={styles.gridAvantages}>
    {/* Carte 1 - Précision Diagnostique */}
    <motion.div 
      variants={fadeIn}
      whileHover={{ scale: 1.03 }}
      className={styles.carteAvantage}
    >
      <div className={styles.iconeContainer}>
        <div className={`${styles.icone} ${styles.iconePrecision}`}>🎯</div>
      </div>
      <h3 className={styles.titreCarte}>Précision Diagnostique Avancée</h3>
      <p className={styles.descriptionCarte}>
        Notre moteur d'analyse bayésienne offre une précision de <strong>98,7%</strong> dans l'interprétation des données médicales, réduisant significativement les incertitudes.
      </p>
      <ul className={styles.listePoints}>
        <li>Modélisation probabiliste sophistiquée</li>
        <li>Intégration de connaissances expertes validées</li>
        <li>Indicateur de fiabilité quantifié pour chaque diagnostic</li>
      </ul>
    </motion.div>

    {/* Carte 2 - Efficacité */}
    <motion.div 
      variants={fadeIn}
      whileHover={{ scale: 1.03 }}
      className={styles.carteAvantage}
    >
      <div className={styles.iconeContainer}>
        <div className={`${styles.icone} ${styles.iconeEfficacite}`}>⏱️</div>
      </div>
      <h3 className={styles.titreCarte}>Efficacité Clinique</h3>
      <p className={styles.descriptionCarte}>
        Gagnez <strong>40% de temps</strong> sur vos analyses grâce à nos outils optimisés pour la pratique médicale.
      </p>
      <ul className={styles.listePoints}>
        <li>Automatisation des calculs complexes</li>
        <li>Interface pensée pour le workflow clinique</li>
        <li>Intégration fluide avec vos systèmes existants</li>
      </ul>
    </motion.div>

    {/* Carte 3 - Nouveau : Confidentialité Renforcée */}
    <motion.div 
      variants={fadeIn}
      whileHover={{ scale: 1.03 }}
      className={styles.carteAvantage}
    >
      <div className={styles.iconeContainer}>
        <div className={`${styles.icone} ${styles.iconeSecurite}`}>🔐</div>
      </div>
      <h3 className={styles.titreCarte}>Confidentialité Hospitalière</h3>
      <p className={styles.descriptionCarte}>
        Solution <strong>100% hébergée en France</strong> avec chiffrement de bout en bout pour une protection absolue des données sensibles.
      </p>
      <ul className={styles.listePoints}>
        <li>Certification HDS (Hébergement Données de Santé)</li>
        <li>Audits de sécurité trimestriels</li>
        <li>Option hébergement privé dédié</li>
      </ul>
    </motion.div>

    {/* Carte 4 - Innovation */}
    <motion.div 
      variants={fadeIn}
      whileHover={{ scale: 1.03 }}
      className={styles.carteAvantage}
    >
      <div className={styles.iconeContainer}>
        <div className={`${styles.icone} ${styles.iconeInnovation}`}>🚀</div>
      </div>
      <h3 className={styles.titreCarte}>Innovation Continue</h3>
      <p className={styles.descriptionCarte}>
        Une plateforme en évolution constante, alimentée par la recherche médicale de pointe.
      </p>
      <ul className={styles.listePoints}>
        <li>Algorithmes certifiés CE Classe IIa</li>
        <li>Mises à jour trimestrielles des modèles</li>
        <li>Veille scientifique intégrée</li>
      </ul>
    </motion.div>

    {/* Carte 5 - Nouveau : Analyse Prédictive */}
    <motion.div 
      variants={fadeIn}
      whileHover={{ scale: 1.03 }}
      className={styles.carteAvantage}
    >
      <div className={styles.iconeContainer}>
        <div className={`${styles.icone} ${styles.iconePredictif}`}>🔮</div>
      </div>
      <h3 className={styles.titreCarte}>Modélisation Prédictive Exclusive</h3>
      <p className={styles.descriptionCarte}>
        Anticipez les évolutions pathologiques avec notre technologie <strong>brevetée</strong> d'analyse prospective.
      </p>
      <ul className={styles.listePoints}>
        <li>Projections personnalisées à 3-6-12 mois</li>
        <li>Alertes précoces sur les risques émergents</li>
        <li>Visualisation interactive des scénarios évolutifs</li>
      </ul>
    </motion.div>

    {/* Carte 6 - Support */}
    <motion.div 
      variants={fadeIn}
      whileHover={{ scale: 1.03 }}
      className={styles.carteAvantage}
    >
      <div className={styles.iconeContainer}>
        <div className={`${styles.icone} ${styles.iconeSupport}`}>🛟</div>
      </div>
      <h3 className={styles.titreCarte}>Accompagnement Sur-Mesure</h3>
      <p className={styles.descriptionCarte}>
        Notre équipe dédiée vous guide à chaque étape pour maximiser l'impact de notre solution.
      </p>
      <ul className={styles.listePoints}>
        <li>Support technique réactif (≤2h)</li>
        <li>Formations certifiantes adaptées</li>
        <li>Analyse personnalisée de vos cas complexes</li>
      </ul>
    </motion.div>
  </div>

  <motion.div 
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    className={styles.ctaContainer}
  >
    <p className={styles.ctaText}>Prêt à transformer votre pratique clinique ?</p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={styles.ctaButton}
      onClick={onVoirSolutions}
    >
      Découvrir nos solutions
      <span className={styles.arrow}>→</span>
    </motion.button>
  </motion.div>
</section>
  );
};

export default PourquoiBayesienPro;