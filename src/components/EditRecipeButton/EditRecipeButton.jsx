import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Modules/EditRecipeButton.module.css'

function EditRecipeButton() {

  return (
    <Link to={`/EditRecipePage`} className={styles.button} role="button" >
      UPRAVIT RECEPT
    </Link>
  );
}

export default EditRecipeButton;
