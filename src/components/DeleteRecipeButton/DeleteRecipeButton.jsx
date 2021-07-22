import React from 'react';
import { Button } from 'react-bootstrap';
import { api } from '../../api';
import { useHistory } from 'react-router-dom';
import styles from '../Modules/DeleteRecipeButton.module.css';
import { toast } from 'react-toastify';

function DeleteRecipeButton({ id, title }) {
  let history = useHistory();

  const redirect = () => {
    history.push('/');
  };

  function deleteRecipe() {
    if (window.confirm(`Opravdu chcete smazat recept ${title}?`)) {
      api.delete(`/recipes/${id}`).then(redirect).catch();
      toast('RECEPT SMAZÁN');
    }
  }
  return (
    <Button className={styles.button} role="button" onClick={deleteRecipe}>
      SMAZAT RECEPT
    </Button>
  );
}

export default DeleteRecipeButton;
