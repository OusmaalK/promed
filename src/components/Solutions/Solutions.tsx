import styles from './Solutions.module.scss';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  const solutionsRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const el = solutionsRef.current;
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
    <div ref={solutionsRef} className={styles.solutionsContainer}>
      <div className={styles.introSection}>
        <h2 className={styles.solutionsTitle}>Solutions Innovantes pour la Santé</h2>
        <p className={styles.solutionsDescription}>
          Découvrez comment Bayésien-Pro révolutionne l'analyse médicale grâce à des solutions sur mesure, conçues pour répondre aux défis spécifiques des professionnels de santé.
        </p>
      </div>

      <section ref={(el) => { sectionRefs.current[0] = el!; }} className={styles.solutionSection}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/photos/img09.png"
              alt="Analyse Prédictive Avancée"
              layout="responsive"
              width={100}
              height={80}
              className={styles.solutionImage}
            />
          </div>
        </div>
        <div className={styles.textColumn}>
          <h3 className={styles.sectionTitle}>Analyse Prédictive Avancée</h3>
          <p className={styles.sectionDescription}>
            Grâce à nos algorithmes bayésiens de pointe, anticipez les évolutions cliniques et identifiez les risques potentiels avec une précision inégalée.
          </p>
          <ul className={styles.featureList}>
            <li>Identification précoce des tendances pathologiques</li>
            <li>Modélisation probabiliste des risques</li>
            <li>Alertes personnalisées basées sur les données patient</li>
          </ul>
        </div>
      </section>

      <section ref={(el) => { sectionRefs.current[1] = el!; }} className={styles.solutionSection}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/photos/img10.png"
              alt="Intégration Fluide avec les Systèmes Existants"
              layout="responsive"
              width={100}
              height={80}
              className={styles.solutionImage}
            />
          </div>
        </div>
        <div className={styles.textColumn}>
          <h3 className={styles.sectionTitle}>Intégration Fluide avec les Systèmes Existants</h3>
          <p className={styles.sectionDescription}>
            Bayésien-Pro s'intègre harmonieusement avec vos Dossiers Patients Informatisés (DPI) et autres systèmes de gestion de la santé via les standards HL7 et FHIR.
          </p>
          <ul className={styles.featureList}>
            <li>Interopérabilité sécurisée des données</li>
            <li>Synchronisation en temps réel des informations patient</li>
            <li>Conformité aux normes réglementaires (HDS, RGPD)</li>
          </ul>
        </div>
      </section>

      <section ref={(el) => { sectionRefs.current[2] = el!; }} className={styles.solutionSection}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/photos/img11.png"
              alt="Visualisation Interactive des Données"
              layout="responsive"
              width={100}
              height={80}
              className={styles.solutionImage}
            />
          </div>
        </div>
        <div className={styles.textColumn}>
          <h3 className={styles.sectionTitle}>Visualisation Interactive des Données</h3>
          <p className={styles.sectionDescription}>
            Transformez des données complexes en insights clairs et exploitables grâce à nos tableaux de bord interactifs et personnalisables.
          </p>
          <ul className={styles.featureList}>
            <li>Vue Patient 360° intuitive</li>
            <li>Graphiques dynamiques et courbes d'évolution</li>
            <li>Filtrage et exploration des données en temps réel</li>
          </ul>
        </div>
      </section>

      <div className={styles.callToAction}>
        <p>Intéressé par nos solutions ?</p>
        <button className={styles.contactButton}>Contactez-nous pour une démo</button>
      </div>
    </div>
  );
};

export default Solutions;