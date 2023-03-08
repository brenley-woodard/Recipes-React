import React from 'react';
import './RecipeCard.css';

export default function RecipeCard({ name, type, season, have_made, expectations }) {
  return (
    <div>
      {/* <a href='./details/?id=3'> */}
      {/* this is an example of what the href can look like. don't think this is how it should be used in a single page application */}
      <h2>{name}</h2>
      <p>{type}</p>
      <p>{season}</p>
      <p>{have_made}</p>
      <p>{expectations}</p>
      {/* </a> */}
    </div>
  );
}
