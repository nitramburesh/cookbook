import React from 'react';
import { Form } from 'react-bootstrap';
import styles from '../Modules/AddRecipePage.module.css'

function AddRecipeDirections({ directions, setDirections }) {
  const changeHandler = (event) => {
    setDirections(event.target.value);

  };
  return (
    <div>
      <Form.Group>
        <Form.Label className={styles.label}>
          <h3>Postup receptu</h3>
        </Form.Label>
        <Form.Control
        className={styles.form}
          as="textarea"
          rows={5}
          placeholder={'Zde zadejte postup receptu...'}
          onChange={changeHandler}
          value={directions}
        />
      </Form.Group>
    </div>
  );
}

export default AddRecipeDirections;
