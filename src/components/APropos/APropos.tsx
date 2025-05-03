import { useState } from 'react';
import styles from './APropos.module.scss';
import DemoPopup from  '../DemoPopup/DemoPopup';

const APropos = () => {
  const [showDemoPopup, setShowDemoPopup] = useState(false);

  return (
    <div className={styles.aProposContainer}>
      <h2 className={styles.aProposTitre}>Bayésien-Pro : Pionniers de l'Intelligence Diagnostique</h2>
      <p className={styles.aProposDescription}>
        Depuis l'ère pré-numérique jusqu'à l'âge de l'informatique quantique, notre parcours épouse l'évolution des technologies médicales. 
        Nous synthétisons trois décennies d'expertise en calcul probabiliste au service de la décision clinique.
      </p>

      <section className={styles.histoireSection}>
        <h3 className={styles.sectionTitre}>Notre Héritage Technologique</h3>
        <div className={styles.timelineContainer}>
          <div className={styles.timelineItem}>
            <h4>1990-1995 : Optimisation ERP et Gestion PME/PMI : Expertise Turbo Pascal</h4>
            <p>
            Notre expertise Turbo Pascal en ERP optimise la gestion des PME/PMI (stock, comptabilité, carrière) 
            avec des solutions sur mesure et une architecture de données performante, répondant précisément à 
            leurs besoins et à l'évolution du marché..
            </p>
          </div>
          <div className={styles.timelineItem}>
            <h4>1995-1999 : Migration de Novel Network vers Client-Serveur</h4>
            <p>
            Notre expertise historique dans la transition de Novel Network vers l'architecture Client-Serveur 
            nous permet de réaliser des migrations et installations optimisées pour les PME/PMI, valorisant les 
            standards des réseaux Client-Serveur modernes et assurant une gestion performante de leurs systèmes 
            (stock, comptabilité, carrière).
            </p>
          </div>
          <div className={styles.timelineItem}>
            <h4>2000-2005 : Programmation Orientée Objet : Sécurité des Données et Développement Instantané</h4>
            <p>
            L'adoption de la Programmation Orientée Objet (POO) comme fondation permet un développement instantané et 
            sécurisé pour les PME/PMI, en assurant une gestion performante de leurs systèmes grâce à une architecture robuste 
            axée sur la sécurité des données. 
            Notre expertise facilite cette transition vers des solutions évolutives et fiables.
            </p>
          </div>
          <div className={styles.timelineItem}>
            <h4>2005-2015 : L'Ère du Développement Mobile : Agilité, Sécurité et Accessibilité</h4>
            <p>
            Notre approche dans l'ère du développement mobile offre aux PME/PMI des solutions agiles, 
            sécurisées et accessibles pour la gestion de leurs systèmes. Notre maîtrise de la programmation 
            orientée objet assure un développement rapide et une protection optimale des données, exploitant 
            pleinement le potentiel de la mobilité pour une efficacité accrue.
            </p>
          </div>
          <div className={styles.timelineItem}>
            <h4>2015 à ce jour : Consultant IT Systèmes Expert : Cybersécurité, Développement Agile & Intégration IA/Data</h4>
            <p>
            En tant que consultant IT systèmes expert, ma mission est de renforcer votre cybersécurité, 
            d'optimiser votre développement par des méthodes agiles et d'intégrer des solutions d'Intelligence 
            Artificielle pour le traitement efficace de vos données. 
            Mon objectif est de sécuriser votre infrastructure et de valoriser votre information à travers des 
            approches modernes et performantes.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.missionSection}>
        <h3 className={styles.sectionTitre}>Mission Stratégique</h3>
        <p className={styles.sectionParagraphe}>
          Transformer le paradigme diagnostique par la convergence de trois disciplines fondamentales :
        </p>
        <div className={styles.missionGrid}>
          <div className={styles.missionCard}>
            <h4>Médecine Fondée sur les Preuves</h4>
            <p>
              Intégration dynamique des guidelines Cochrane et UpToDate® dans nos graphes décisionnels, 
              avec mise à jour en temps réel par NLP.
            </p>
          </div>
          <div className={styles.missionCard}>
            <h4>Ingénierie Cognitive</h4>
            <p>
              Développement d'agents intelligents capables de raisonnement abductif pour l'hypothèse generation, 
              combinant ontologies médicales et deep learning.
            </p>
          </div>
          <div className={styles.missionCard}>
            <h4>Informatique Quantique Clinique</h4>
            <p>
              Implémentation d'algorithmes QML pour le calcul accéléré des distributions de probabilité complexes 
              en imagerie multimodale.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.valeursSection}>
        <h3 className={styles.sectionTitre}>Principes Fondamentaux</h3>
        <ul className={styles.valeursListe}>
          <li>
            <strong>Rigor Scientifique :</strong> Tous nos algorithmes implémentent les principes de la médecine EBM (Evidence-Based Medicine) 
            avec des mécanismes de rétropropagation des preuves (evidence backpropagation).
          </li>
          <li>
            <strong>Architecture Immersive :</strong> Notre plateforme intègre des interfaces XR (Extended Reality) pour la visualisation 
            interactive des graphes décisionnels et des espaces probabilistes multidimensionnels.
          </li>
          <li>
            <strong>Calcul Hybride :</strong> Combinaison inédite de calcul symbolique (Prolog, LISP) et de réseaux neuronaux 
            différentiables pour une interprétabilité maximale.
          </li>
          <li>
            <strong>Éthique Algorithmique :</strong> Framework d'audit continu des biais incorporant des techniques de 
            contrefactual fairness et d'analyse de sensibilité globale.
          </li>
          <li>
            <strong>Interopérabilité Quantique :</strong> Architecture conçue pour l'intégration transparente des futurs 
            coprocesseurs quantiques (QPU) via des APIs QASM standardisées.
          </li>
        </ul>
      </section>

      <section className={styles.equipeSection}>
        <h3 className={styles.sectionTitre}>Notre Équipe Interdisciplinaire</h3>
        <div className={styles.equipeGrid}>
          <div className={styles.equipeCategorie}>
            <h4>Comité Scientifique</h4>
            <p>
              Dirigé par le Pr. [Nom], pionnier des systèmes experts médicaux et lauréat du prix [Prestigieux Prix], 
              regroupant 15 spécialistes en informatique médicale, biostatistique et intelligence artificielle.
            </p>
          </div>
          <div className={styles.equipeCategorie}>
            <h4>Ingénierie Avancée</h4>
            <p>
              Équipe d'architectes systèmes ayant contribué aux projets CERN LHC, NASA Mars Rover et IBM Watson Health, 
              spécialisés en calcul haute performance et architectures distribuées fault-tolerant.
            </p>
          </div>
          <div className={styles.equipeCategorie}>
            <h4>Innovation Clinique</h4>
            <p>
              Collaborateurs issus des plus grands centres hospitalo-universitaires, experts en médecine translationnelle 
              et en intégration système de santé.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.callToAction}>
        <p>Explorez comment notre approche pionnière peut transformer votre pratique clinique :</p>
        <div className={styles.ctaButtons}>
          <button 
            className={styles.ctaButtonPrimary}
            onClick={() => setShowDemoPopup(true)}
          >
            Demander une Démo Technique
          </button>
          <button className={styles.ctaButtonSecondary}>
            Accéder à nos Publications
          </button>
        </div>
      </div>

      {/* Popup de démo technique */}
      {showDemoPopup && <DemoPopup onClose={() => setShowDemoPopup(false)} />}
    </div>
  );
};

export default APropos;