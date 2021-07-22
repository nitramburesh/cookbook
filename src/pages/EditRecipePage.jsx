import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/Modules/EditRecipePage.module.css';

export function EditRecipePage() {
  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>Na této stránce se momentálně pracuje.</h1>
      <h4 className={styles.h4}>
        Nezoufej! V blízké době si budeš upravovat recepty, jak je libo. ;)
      </h4>
      <div className={styles.div}>
        <Link to="/" className={styles.btn} role="button">
          Přejít na domovskou stránku
        </Link>
      </div>
    </div>
  );
}
