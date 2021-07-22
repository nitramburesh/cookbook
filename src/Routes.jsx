import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ApiTestPage } from './pages/ApiTestPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import { AddRecipePage } from './pages/AddRecipePage';
import { EditRecipePage } from './pages/EditRecipePage';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={RecipeListPage} />
      <Route path="/recept/:slug" component={RecipeDetailPage} />
      <Route path="/api-test" component={ApiTestPage} />
      <Route path="/EditRecipePage" component={EditRecipePage} />
      <Route path="/AddRecipePage" component={AddRecipePage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
