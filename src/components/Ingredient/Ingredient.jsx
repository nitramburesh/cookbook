import React from 'react';
import styles from '../Modules/RecipeDetailPage.module.css';

export function Ingredient({ name, amount, amountUnit }) {
  return (
    <li>
      <span className={styles.ingredName}>{name}</span> {amount} {amountUnit}
    </li>
  );
}
