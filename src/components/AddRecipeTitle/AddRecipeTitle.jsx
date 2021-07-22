import React from 'react';
import { Form } from 'react-bootstrap';
import styles from '../Modules/AddRecipePage.module.css'

function AddRecipeTitle({ title, setTitle }) {
  const changeHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <Form.Group>
      <Form.Label className={styles.label}>
        <h3>Název receptu</h3>
      </Form.Label >
      <Form.Control
        className={styles.form}
        size="lg"
        type="text"
        placeholder="Zde zadejte název receptu..."
        value={title}
        onChange={changeHandler}
      />
    </Form.Group>
  );
}

export default AddRecipeTitle;
