import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import styles from '../Modules/AddRecipePage.module.css'
function AddRecipeIngredient({
  name,
  setName,
  ingredients,
  amount,
  setAmount,
  amountUnit,
  setAmountUnit,
  setIngredients,
  id,
  setId,
}) {
  const changeHandler1 = (event) => {
    setName(event.target.value);
  };

  const changeHandler2 = (event) => {
    setAmount(event.target.value);
  };

  const changeHandler3 = (event) => {
    setAmountUnit(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setId(uuidv4());
    setIngredients([...ingredients, { id, name, amount, amountUnit }]);
    console.log(ingredients);
    setName('');
    setAmount('');
    setAmountUnit('');
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group>
        <Form.Label className={styles.label}>
          <h3>Ingredience</h3>
        </Form.Label>
        <Form.Row>
          <Col>
            <Form.Control
            className={styles.form}
              type="text"
              value={name}
              placeholder="ingredience"
              name="ingredient"
              onChange={changeHandler1}
            />
          </Col>
          <Col>
            <Form.Control
            className={styles.form}
              type="text"
              value={amount}
              placeholder="množství"
              name="amount"
              onChange={changeHandler2}
            />
          </Col>
          <Col>
            <Form.Control
            className={styles.form}
              type="text"
              value={amountUnit}
              placeholder="jednotka"
              name="amountUnit"
              onChange={changeHandler3}
            />
          </Col>
          <Button type="submit" className={styles.button} >+</Button>
        </Form.Row>
      </Form.Group>
    </Form>
  );
}

export default AddRecipeIngredient;
