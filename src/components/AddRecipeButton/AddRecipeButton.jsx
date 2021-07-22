import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Modules/AddRecipeButton.module.css'

function AddRecipeButton() {
  return (
    <Link to="/AddRecipePage" className={styles.btn} role="button">
      + Přidat recept
    </Link>
  );
}

export default AddRecipeButton;
