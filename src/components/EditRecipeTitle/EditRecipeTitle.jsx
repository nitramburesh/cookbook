import React from 'react';
import { Form } from 'react-bootstrap';

function EditRecipeTitle({ title, setTitle }) {
  const changeHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <Form.Group>
      <Form.Label>
        <h3>Název receptu</h3>
      </Form.Label>
      <Form.Control
        size="lg"
        type="text"
        placeholder="Zde zadejte název receptu"
        value={title}
        onChange={changeHandler}
      />
    </Form.Group>
  );
}

export default EditRecipeTitle;
