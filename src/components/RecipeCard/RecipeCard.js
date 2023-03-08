import React from 'react';
import './RecipeCard.css';

export default function RecipeCard({ name, type, season, have_made, expectations }) {
  return (
    <div id='recipe-box'>
      {/* <a href='./details/?id=3'> */}
      {/* this is an example of what the href can look like. don't think this is how it should be used in a single page application */}
      <h2 id='recipe-header'>{name}</h2>
      <p>Category: {type}</p>
      <p>Season: {season}</p>
      <p>Made yes? {have_made}</p>
      <p>Expectations? {expectations}</p>
      {/* </a> */}
    </div>
  );
}
