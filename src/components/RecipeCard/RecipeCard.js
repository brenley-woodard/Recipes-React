import React from 'react';
import './RecipeCard.css';

export default function RecipeCard({ name, type, season, have_made, expectations }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{type}</p>
      <p>{season}</p>
      <p>{have_made}</p>
      <p>{expectations}</p>
    </div>
  );
}
