import React from 'react';
import './RecipeCard.css';

export default function RecipeCard({ name, type, season, have_made, expectations }) {
  return (
    <div id='recipe-box'>
      {/* <a href='./details/?id=3'> */}
      {/* this is an example of what the href can look like. don't think this is how it should be used in a single page application */}
      <h2 id='recipe-header'>{name}</h2>
      <div className='description'><p className='variable'><strong>Category:</strong></p><p className='recipe-value'>{type}</p></div>
      <div className='description'><p className='variable'><strong>Season:</strong></p><p className='recipe-value'>{season}</p></div>
      <div className='description'><p className='variable'><strong>Have made before?:</strong></p><p className='recipe-value'>{have_made}</p></div>
      <div className='description'><p className='variable'><strong>Expectations?:</strong></p><p className='recipe-value'>{expectations}</p></div>
      {/* <p>Season: {season}</p>
      <p>Made yet?: {have_made}</p>
      <p>Expectations?: {expectations}</p> */}
      {/* </a> */}
    </div>
  );
}
