import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Ingredient } from '../components/Ingredient/Ingredient';
import { api } from '../api';
import { DeleteRecipeButton } from '../components/DeleteRecipeButton';
import { EditRecipeButton } from '../components/EditRecipeButton';
import styles from '../components/Modules/RecipeDetailPage.module.css';
import spinner from '../components/Modules/Spinner.module.css';

export function RecipeDetailPage() {
  const { slug } = useParams();

  const [{ data, error, loading }, setRecipeDetail] = useState({
    data: [],
    error: '',
    loading: true,
  });

  useEffect(() => {
    api
      .get(`/recipes/${slug}`)
      .then(({ data }) => {
        setRecipeDetail({ data, error: '', loading: false });
      })
      .catch(() => {
        setRecipeDetail({ data: [], error: 'Nejde to...', loading: false });
      });
  }, []);

  if (loading) {
    return (
      <div className={spinner.spinner}>
        <div className={spinner.cube1}>
          <div className={spinner.cube2}></div>
        </div>
      </div>
    );
  }

  if (!!error) {
    return error;
  }
  <p className={styles.p}>
    <strong>Délka přípravy: </strong>
    {data.preparationTime} min
  </p>;

  const preparationTime = () => {
    if (typeof data.preparationTime !== 'number') {
      return '';
    }
    else{
      return  <p className={styles.p}>
      <strong>Délka přípravy: </strong>
      {data.preparationTime} min
    </p>;
    }
  };

  const servingCount = () => {
    if (typeof data.servingCount !== 'number') {
      return '';
    } else {
      return (
        <p className={styles.p}>
          <strong>Počet porcí:</strong>
          {data.servingCount}
        </p>
      );
    }
  };

  const splitDirections = data.directions.split(/\r?\n/);

  const allDirections = () => {
    if (data.directions === '') {
      return <p className={styles.p}>Tento recept je bez postupu...</p>;
    } else {
      return splitDirections.map((element) => <li>{element}</li>);
    }
  };
  return (
    <>
      <div className={styles.top}>
        <h1 className={styles.title}>{data.title}</h1>

        <div className={styles.buttons}>
          <EditRecipeButton id={data._id} title={data.title} className={styles.button} />
          <DeleteRecipeButton id={data._id} title={data.title} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h2 className={styles.h2}>
            <strong>Ingredience</strong>
          </h2>

          <ul>
            {data.ingredients.map(({ _id, name, amount, amountUnit }) => (
              <Ingredient key={_id} name={name} amount={amount} amountUnit={amountUnit} />
            ))}
          </ul>
              {preparationTime()}
          {servingCount()}
        </div>

        <div className={styles.rightSide}>
          <h2 className={styles.h2}>
            <strong>POSTUP</strong>
          </h2>

          <ul className={styles.ul}>{allDirections()}</ul>
        </div>
      </div>

      <div className={styles.buttons}></div>
    </>
  );
}
