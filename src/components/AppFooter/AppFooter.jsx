import React from 'react';
import styles from '../Modules/AppFooter.module.css';

function AppFooter() {
  return (
    <div className={styles.footer}>
      <hr className={styles.hr} />
      <p className={styles.footer}>&copy; {new Date().getFullYear()} &middot; CN Group CZ s.r.o.</p>
    </div>
  );
}

export default AppFooter;
