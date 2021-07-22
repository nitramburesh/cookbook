import React from 'react';
import { Button } from 'react-bootstrap';
import { api } from '../../api';
import styles from '../Modules/AddRecipePage.module.css';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

function SaveRecipeButton({ title, servingCount, preparationTime, directions, ingredients }) {
  const postRequestPayload = { title, servingCount, preparationTime, directions, ingredients };

  let history = useHistory();

  const redirect = () => {
    history.push('/');
  };

  function saveRecipe() {
    api
      .post('/recipes', postRequestPayload)
      .then(console.log('added'))
      .catch(console.log('something went wrong'));
    toast('RECEPT PŘIDÁN');
    redirect();
  }

  return (
    <Button onClick={saveRecipe} className={styles.buttonSave}>
      ULOŽIT
    </Button>
  );
}

export default SaveRecipeButton;
