import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import styles from '../Modules/AddRecipePage.module.css';

function IngredientList({ mappedIngred }) {
  if (mappedIngred.length === 0) {
    return (
      <ListGroup className={styles.input}>
        <ListGroupItem className={styles.form}>Seznam ingrediencí je prázdný :(</ListGroupItem>
      </ListGroup>
    );
  } else {
    return <ListGroup className={styles.input}>{mappedIngred}</ListGroup>;
  }
}
export default IngredientList;
