import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import styles from '../Modules/AddRecipePage.module.css'

function AddPreparationTime({ preparationTime, setPreparationTime }) {
  const changeHandler = (event) => {
    setPreparationTime(event.target.value);
  };

  return (
    <Form.Group>
      <Form.Label className={styles.label}>
        <h3>Doba přípravy</h3>
      </Form.Label>
      <InputGroup>
        <Form.Control
        className={styles.form}
          value={preparationTime}
          type="number"
          min="0"
          placeholder="Zde zadejte dobu přípravy receptu..."
          aria-describedby="min"
          onChange={changeHandler}
        />
        <InputGroup.Text className={styles.form} >min</InputGroup.Text>
      </InputGroup>
    </Form.Group>
  );
}
export default AddPreparationTime;
