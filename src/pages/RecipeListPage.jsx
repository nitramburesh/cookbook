import React, { useEffect, useState } from 'react';
import { AddRecipeButton } from '../components/AddRecipeButton';
import { RecipeList } from '../components/RecipeList';
import { RecipeFilter } from '../components/RecipeFilter';
import { api } from '../api';
import styles from '../components/Modules/RecipeListPage.module.css';
import spinner from '../components/Modules/Spinner.module.css';

export function RecipeListPage() {
  const [{ data, error, loading }, setRecipeList] = useState({
    data: [],
    error: '',
    loading: true,
  });

  const [recipe, setRecipe] = useState('');

  const filteredRecipes = data.filter(({ title }) =>
    title.toLowerCase().includes(recipe.toLowerCase()),
  );
  //useEffect(() => {}, []) --- zápis useEffect, jinak se zacyklí
  useEffect(() => {
    api
      .get('/recipes')
      .then(({ data }) => {
        setRecipeList({ data, error: '', loading: false });
      })
      .catch(() => {
        setRecipeList({
          data: [],
          error: <h1 className={styles.error}>Něco se pokazilo...</h1>,
          loading: false,
        });
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

  return (
    <div>
      <h1 className={styles.h1}>Seznam receptů</h1>
      <div className={styles.addsearch}>
        <RecipeFilter recipe={recipe} setRecipe={setRecipe} />
        <AddRecipeButton />
      </div>

      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}
