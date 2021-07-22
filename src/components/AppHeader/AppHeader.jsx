import React from 'react';
import { Navbar } from 'react-bootstrap';
import styles from '../Modules/AppHeader.module.css';

function AppHeader() {
  return (
    <Navbar className={styles.navbar}>
      <img src="./images/dish.png" className={styles.heroLogo} alt="hero logo" />
      <a className={styles.logo} href="/">
        MINIMALISTIC COOKBOOK
      </a>
    </Navbar>
  );
}

export default AppHeader;
