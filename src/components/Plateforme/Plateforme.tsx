'use client';

import styles from './Plateforme.module.scss';
import Image from 'next/image';

interface PlateformeProps {
  titre: string;
}

const Plateforme: React.FC<PlateformeProps> = ({ titre }) => {
  let contenu;

  switch (titre) {
    case 'Plate-Forme':
      contenu = (
        <>
          <h2 className={styles.titre}>Analyse Bayésienne Avancée pour le Diagnostic Médical</h2>
          <p className={styles.texte}>
            Bayésian-pro est une plateforme qui combine intelligence artificielle et statistiques bayésiennes 
            pour fournir des analyses médicales précises.
          </p>
        </>
      );
      break;
    default:
      contenu = (
        <>
          <h2 className={styles.titre}>Contenu par défaut</h2>
          <p className={styles.texte}>Un contenu par défaut s'affiche pour cette section.</p>
        </>
      );
  }

  return (
    <div className={styles.cadreIntroduction}>
      {contenu}

      {/* Ligne 1: Image à gauche, Texte à droite */}
      <div className={styles.sectionImageTexte}>
        <div className={styles.colonneImage}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/photos/img05.png"
              alt="Algorithme Bayésien Certifié"
              width={500}
              height={350}
              className={styles.animatedImage}
              priority
            />
          </div>
        </div>
        <div className={styles.colonneTexte}>
          <div className={styles.cadreTexte}>
            <h3 className={styles.titreCadreTexte}>🧠 Algorithme Bayésien Certifié CE Santé</h3>
            <ul className={styles.listePoints}>
              <li>Réseau bayésien dynamique certifié classe IIa (règlement UE 2017/745)</li>
              <li>Intègre les données patient (antécédents, examens)</li>
              <li>Base de connaissances (10.000+ cas validés)</li>
              <li>Couche d'inférence probabiliste</li>
            </ul>
            <p>Génère des diagnostics assistés avec indicateur de fiabilité</p>
            <button className={styles.modernButton}>Apprendre Plus</button>
          </div>
        </div>
      </div>

      {/* Ligne 2: Texte à gauche, Image à droite */}
      <div className={styles.sectionTexteImage}>
        <div className={styles.colonneTexte}>
          <div className={styles.cadreTexte}>
            <h3 className={styles.titreCadreTexte}>🏥 Intégration HL7/FHIR avec les DMP</h3>
            <div className={styles.listeAvantages}>
              <div className={styles.itemAvantage}>
                <div>
                  <strong>Protocoles HL7 v2+ et FHIR R4</strong>
                  <ul className={styles.sousListe}>
                    <li>Échange sécurisé des données cliniques</li>
                    <li>Format JSON/XML conforme ANS</li>
                  </ul>
                </div>
              </div>
              <div className={styles.itemAvantage}>
                <div>
                  <strong>Synchronisation DMP</strong>
                  <ul className={styles.sousListe}>
                    <li>Lecture/écriture certifiée HDS</li>
                    <li>Consentement patient traçable (RGPD)</li>
                  </ul>
                </div>
              </div>
            </div>
            <button className={styles.modernButton}>Cas d'intégration</button>
          </div>
        </div>
        <div className={styles.colonneImage}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/photos/img02.png"
              alt="Intégration HL7/FHIR"
              width={500}
              height={350}
              className={styles.animatedImageInverse}
            />
          </div>
        </div>
      </div>

      {/* Ligne 3: Image à gauche, Texte à droite */}
      <div className={styles.sectionImageTexteSuivant}>
        <div className={styles.colonneImage}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/photos/img06.png"
              alt="Tableaux de bord interactifs"
              width={500}
              height={350}
              className={styles.animatedImage}
            />
          </div>
        </div>
        <div className={styles.colonneTexte}>
          <div className={styles.cadreTexte}>
            <h3 className={styles.titreCadreTexte}>📊 Tableaux de Bord Interactifs</h3>
            <div className={styles.listeFonctionnalites}>
              <div className={styles.fonctionnalite}>
                <div>
                  <strong>Vue Patient 360°</strong>
                  <p>Synthèse longitudinale avec courbes d'évolution</p>
                </div>
              </div>
              <div className={styles.fonctionnalite}>
                <div>
                  <strong>Alertes Prédictives</strong>
                  <p>Détection précoce avec seuils ajustables</p>
                </div>
              </div>
              <div className={styles.fonctionnalite}>
                <div>
                  <strong>Outils d'Exploration</strong>
                  <p>Filtres dynamiques et exports certifiés</p>
                </div>
              </div>
            </div>
            <button className={styles.modernButton}>Voir la solution</button>
          </div>
        </div>
      </div>

      {/* Ligne 4: Texte à gauche, Image à droite */}
      <div className={styles.sectionTexteImage}>
        <div className={styles.colonneTexte}>
          <div className={styles.cadreTexte}>
            <h3 className={styles.titreCadreTexte}>🔍 Moteur d'Analyse Prédictive</h3>
            <div className={styles.composants}>
              <h4 className={styles.sousTitre}>Composants Clés :</h4>
              <ul className={styles.listeComposants}>
                <li>
                  <strong>Couche d'Entrée</strong> - Intégration HL7/FHIR temps réel
                </li>
                <li>
                  <strong>Cœur Algorithmique</strong> - Réseaux Bayésiens auto-apprenants
                </li>
                <li>
                  <strong>Sorties Cliniques</strong> - Arbres décisionnels interactifs
                </li>
              </ul>
            </div>
            <button className={styles.modernButton}>Découvrir</button>
          </div>
        </div>
        <div className={styles.colonneImage}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/photos/img07.png"
              alt="Moteur d'analyse prédictive"
              width={500}
              height={350}
              className={styles.animatedImageInverse}
            />
          </div>
        </div>
      </div>

      {/* Nouvelle Ligne 5: Image à gauche, Texte à droite */}
      <div className={styles.sectionImageTexte}>
        <div className={styles.colonneImage}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/photos/img08.png"
              alt="Avantages Exclusifs"
              width={500}
              height={350}
              className={styles.animatedImage}
            />
          </div>
        </div>
        <div className={styles.colonneTexte}>
          <div className={styles.cadreTexte}>
            <h3 className={styles.titreCadreTexte}>🌟 Avantages Exclusifs</h3>
            <div className={styles.listeAvantages}>
              <div className={styles.itemAvantage}>
                <div>
                  <strong>✅ Explicabilité</strong>
                  <ul className={styles.sousListe}>
                    <li>Cartographie des relations causales (graphes interactifs)</li>
                    <li>Score de confiance calculé par théorie de Dempster-Shafer</li>
                  </ul>
                </div>
              </div>
              <div className={styles.itemAvantage}>
                <div>
                  <strong>✅ Sécurité</strong>
                  <ul className={styles.sousListe}>
                    <li>Chiffrement AES-256 des données sensibles</li>
                    <li>Certifications HDS et ISO 27001</li>
                  </ul>
                </div>
              </div>
              <div className={styles.itemAvantage}>
                <div>
                  <strong>✅ Adaptabilité</strong>
                  <ul className={styles.sousListe}>
                    <li>Modules spécialisés (cardiologie/oncologie/neurologie)</li>
                    <li>Calibration automatique via EM (Expectation-Maximization)</li>
                  </ul>
                </div>
              </div>
            </div>
            <button className={styles.modernButton}>En savoir plus</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plateforme;