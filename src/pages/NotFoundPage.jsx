import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/Modules/NotFoundPage.module.css';

export function NotFoundPage() {
  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>Nenalezeno!</h1>
      <h4 className={styles.h4}>Toto není stránka, kterou hledáš.</h4>
      <div className={styles.div}>
        <Link to="/" className={styles.btn} role="button">
          Přejít na domovskou stránku
        </Link>
      </div>
    </div>
  );
}
