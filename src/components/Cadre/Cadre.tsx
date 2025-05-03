'use client';

import styles from './Cadre.module.scss';

interface CadreProps {
  titre: string;
}

const Cadre: React.FC<CadreProps> = ({ titre }) => {
  return (
    <div className={styles.cadre}>
      <div className={styles.titrePrincipal}>{titre}</div>
      <div className={styles.filAriane}>
        <button className={styles.boutonAriane} onClick={() => window.location.href = '/'}>Maison</button>
        <span> : </span>
        <span>{titre}</span>
      </div>
    </div>
  );
};

export default Cadre;
