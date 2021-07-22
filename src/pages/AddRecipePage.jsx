import React, { useState } from 'react';
import { ListGroupItem, Button, ListGroup } from 'react-bootstrap';
import { AddRecipeTitle } from '../components/AddRecipeTitle';
import { AddRecipeDirections } from '../components/AddRecipeDirections';
import { IngredientList } from '../components/IngredientList';
import { SaveRecipeButton } from '../components/SaveRecipeButton';
import { DiscardRecipeButton } from '../components/DiscardRecipeButton';
import { AddRecipeIngredient } from '../components/AddRecipeIngredient';
import { AddPreparationTime } from '../components/AddPreparationTime';
import { AddServing } from '../components/AddServing';
import styles from '../components/Modules/AddRecipePage.module.css';

export function AddRecipePage() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [amountUnit, setAmountUnit] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [preparationTime, setPreparationTime] = useState('');
  const [title, setTitle] = useState('');
  const [servingCount, setServingCount] = useState('');
  const [directions, setDirections] = useState('');
  const [id, setId] = useState('');

  const allIds = ingredients.map((arr) => arr.id);
  const mappedIngred = ingredients.map(({ id, name, amount, amountUnit }) => (
    <ListGroup className={styles.listGroup} variant='flush'>
      <Button
        className={styles.buttonList}
        id={id}
        onClick={() => {
          const index = allIds.indexOf(id);
          ingredients.splice(index, 1);
          setIngredients(ingredients.map((item) => item));
        }}
      >
       SMAZAT
      </Button>
      <ListGroupItem className={styles.listGroupItem} v>
       <strong>{name}</strong> {amount} {amountUnit}
      </ListGroupItem>
    </ListGroup>
  ));
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Přidejte vlastní recept!</h1>
      <AddRecipeTitle title={title} setTitle={setTitle} />
      <AddRecipeIngredient
        setName={setName}
        setAmount={setAmount}
        setAmountUnit={setAmountUnit}
        name={name}
        amount={amount}
        amountUnit={amountUnit}
        ingredients={ingredients}
        setIngredients={setIngredients}
        id={id}
        setId={setId}
      />
      <IngredientList mappedIngred={mappedIngred} />
      <AddPreparationTime
        preparationTime={preparationTime}
        setPreparationTime={setPreparationTime}
      />
      <AddServing servingCount={servingCount} setServingCount={setServingCount} />
      <AddRecipeDirections directions={directions} setDirections={setDirections} />
      <div className={styles.buttons}>
        <DiscardRecipeButton />
        <SaveRecipeButton
          title={title}
          servingCount={servingCount}
          directions={directions}
          preparationTime={preparationTime}
          ingredients={ingredients}
        />
      </div>
    </div>
  );
}
