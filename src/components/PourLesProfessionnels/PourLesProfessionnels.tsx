import styles from './PourLesProfessionnels.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSlidersH,
  faBookOpen,
  faUsers,
  faShieldAlt,
  faChartLine,
  faDatabase,
  faFileAlt,
  faLightbulb,
  faVideo,
  faPuzzlePiece,
  faComment,
  faComments,
  faLock,
  faShareAlt,
  faUserShield,
  faHistory,
  faCheckCircle,
  faUserCheck
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import AccessPro from '../AccessPro/Accesspro';

gsap.registerPlugin(ScrollTrigger);

const PourLesProfessionnels = () => {
  const [showAccessPro, setShowAccessPro] = useState(false);

  const professionnelsRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const el = professionnelsRef.current;
    sectionRefs.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            // markers: true, // Pour le débogage
          },
        }
      );
    });

    const ctaElement = el?.querySelector(`.${styles.callToAction}`);
    if (ctaElement) {
      gsap.fromTo(
        ctaElement,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: ctaElement,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            // markers: true, // Pour le débogage
          },
        }
      );
    }
  }, []);

  return (
    <div ref={professionnelsRef} className={styles.professionnelsContainer}>
      <div className={styles.introSection}>
        <h2 className={styles.professionnelsTitle}>Espace dédié aux Professionnels de Santé</h2>
        <p className={styles.professionnelsDescription}>
          Des outils avancés et des ressources spécialisées pour optimiser votre pratique médicale et enrichir votre expertise clinique.
        </p>
      </div>

      <section ref={(el) => { sectionRefs.current[0] = el!; }} className={styles.featureSection}>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faSlidersH} className={styles.sectionIcon} />
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.sectionTitle}>Outils d'Analyse Bayésienne Personnalisés</h3>
          <p className={styles.sectionDescription}>
            Adaptez nos modèles bayésiens sophistiqués à vos besoins cliniques précis. Intégrez des paramètres personnalisés et visualisez des rapports détaillés pour une interprétation approfondie.
          </p>
          <ul className={styles.detailedList}>
            <li><FontAwesomeIcon icon={faChartLine} className={styles.listItemIcon} /> Configuration avancée des modèles probabilistes</li>
            <li><FontAwesomeIcon icon={faDatabase} className={styles.listItemIcon} /> Intégration transparente de vos données spécifiques</li>
            <li><FontAwesomeIcon icon={faFileAlt} className={styles.listItemIcon} /> Génération de rapports analytiques sur mesure</li>
            <li><FontAwesomeIcon icon={faLightbulb} className={styles.listItemIcon} /> Exploration interactive des scénarios cliniques</li>
          </ul>
        </div>
      </section>

      <section ref={(el) => { sectionRefs.current[1] = el!; }} className={styles.featureSection}>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faBookOpen} className={styles.sectionIcon} />
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.sectionTitle}>Ressources et Formation Continue Spécialisée</h3>
          <p className={styles.sectionDescription}>
            Élargissez vos compétences en analyse bayésienne avec notre bibliothèque exhaustive de guides, de séminaires en ligne animés par des experts et d'études de cas pertinents pour votre domaine.
          </p>
          <ul className={styles.detailedList}>
            <li><FontAwesomeIcon icon={faFileAlt} className={styles.listItemIcon} /> Manuels d'utilisation approfondis et tutoriels interactifs</li>
            <li><FontAwesomeIcon icon={faVideo} className={styles.listItemIcon} /> Webinaires et enregistrements de sessions de formation</li>
            <li><FontAwesomeIcon icon={faComment} className={styles.listItemIcon} /> Forums de discussion et support communautaire</li>
            <li><FontAwesomeIcon icon={faComments} className={styles.listItemIcon} /> Forums de discussion et support communautaire</li>
          </ul>
        </div>
      </section>

      <section ref={(el) => { sectionRefs.current[2] = el!; }} className={styles.featureSection}>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faUsers} className={styles.sectionIcon} />
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.sectionTitle}>Plateforme Collaborative Sécurisée pour Équipes Médicales</h3>
          <p className={styles.sectionDescription}>
            Facilitez la collaboration au sein de votre équipe grâce à un environnement sécurisé pour le partage de données anonymisées, la discussion de cas complexes et l'échange d'expertises multidisciplinaires.
          </p>
          <ul className={styles.detailedList}>
            <li><FontAwesomeIcon icon={faLock} className={styles.listItemIcon} /> Partage de données patient pseudonymisées et sécurisées</li>
            <li><FontAwesomeIcon icon={faShareAlt} className={styles.listItemIcon} /> Outils de communication et de messagerie intégrés</li>
            <li><FontAwesomeIcon icon={faUserShield} className={styles.listItemIcon} /> Gestion des rôles et des autorisations d'accès</li>
            <li><FontAwesomeIcon icon={faHistory} className={styles.listItemIcon} /> Suivi et historique des discussions et des analyses</li>
          </ul>
        </div>
      </section>

      <section ref={(el) => { sectionRefs.current[3] = el!; }} className={styles.featureSection}>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faShieldAlt} className={styles.sectionIcon} />
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.sectionTitle}>Conformité et Sécurité des Données Garanties</h3>
          <p className={styles.sectionDescription}>
            Nous respectons les normes de sécurité et de confidentialité les plus strictes (HIPAA, RGPD, etc.) pour assurer la protection des informations sensibles de vos patients et de votre pratique.
          </p>
          <ul className={styles.detailedList}>
            <li><FontAwesomeIcon icon={faCheckCircle} className={styles.listItemIcon} /> Adhésion aux réglementations internationales sur la protection des données</li>
            <li><FontAwesomeIcon icon={faLock} className={styles.listItemIcon} /> Protocoles de cryptage avancés pour la sécurité des données</li>
            <li><FontAwesomeIcon icon={faUserCheck} className={styles.listItemIcon} /> Audits de sécurité réguliers et transparence des pratiques</li>
          </ul>
        </div>
      </section>

      <div className={styles.callToAction}>
        <p>Prêt à transformer votre pratique médicale ?</p>
        <button className={styles.inscriptionButton} onClick={() => setShowAccessPro(true)} // <-- Ajout de cette ligne
        >Découvrir l'accès professionnel</button>
      </div>
      {showAccessPro && <AccessPro onClose={() => setShowAccessPro(false)} />}

    </div>
  );
};

export default PourLesProfessionnels;