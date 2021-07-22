import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Modules/AddRecipePage.module.css';

function DiscardRecipeButton() {
  return (
    <Link to="/" className={styles.buttonDiscard}>
      ZRUŠIT
    </Link>
  );
}

export default DiscardRecipeButton;
