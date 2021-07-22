import React from 'react';
import { Form } from 'react-bootstrap';
import styles from '../Modules/RecipeFilter.module.css';

function RecipeFilter({ recipe, setRecipe }) {
  const onChangeHandler = (event) => {
    setRecipe(event.target.value);
  };

  return (
    <Form>
      <Form.Group controlId="name">
        <Form.Control
          type="text"
          placeholder="Hledat recept..."
          value={recipe}
          onChange={onChangeHandler}
          className={styles.form}
        />
      </Form.Group>
    </Form>
  );
}

export default RecipeFilter;
