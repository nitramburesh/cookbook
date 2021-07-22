import React from 'react';
import { Recipe } from './Recipe';
import { CardDeck } from 'react-bootstrap';
import styles from '../Modules/RecipeListPage.module.css';

function RecipeList({ recipes }) {
  return (
    <div>
      <CardDeck className={styles.cards}>
        {recipes.map(({ _id, title, preparationTime, slug }) => (
          <Recipe
            className={styles.card}
            key={_id}
            title={title}
            preparationTime={preparationTime}
            slug={slug}
          />
        ))}
      </CardDeck>
    </div>
  );
}

export default RecipeList;
