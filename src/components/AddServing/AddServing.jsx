import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import styles from '../Modules/AddRecipePage.module.css';

function AddServing({ servingCount, setServingCount }) {
  const changeHandler = (event) => {
    setServingCount(event.target.value);
  };

  return (
    <Form.Group>
      <Form.Label className={styles.label}>
        <h3>Počet porcí</h3>
      </Form.Label>
      <InputGroup>
        <Form.Control
          className={styles.form}
          value={servingCount}
          type="number"
          min="0"
          placeholder="Zde zadejte počet porcí..."
          aria-describedby="min"
          onChange={changeHandler}
        />
        <InputGroup.Text className={styles.form}>porcí</InputGroup.Text>
      </InputGroup>
    </Form.Group>
  );
}
export default AddServing;
