import React from 'react';
import { AppHeader } from '../components/AppHeader';
import { AppFooter } from '../components/AppFooter';
import styles from '../components/Modules/RecipeListPage.module.css';

export function AppLayout({ children }) {
  return (
    <div className={styles.div}>
      <AppHeader />
      <div>{children}</div>
      <AppFooter />
    </div>
  );
}
