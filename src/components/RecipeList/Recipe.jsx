import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../Modules/RecipeListPage.module.css';

export function Recipe({ title, preparationTime, slug }) {
  return (
    <Card style={{ minWidth: '18rem' }} className={styles.card}>
      <Link to={`/recept/${slug}`}>
        <Card.Img src="/images/food-placeholder.png" />
        <div className="m-1 text-center">
          <Card.Title>{title}</Card.Title>
          <small>
            <span className="fa fa-clock-o" />
            {preparationTime && ` ${preparationTime} min`}
          </small>
        </div>
      </Link>
    </Card>
  );
}
