import React, { useState } from 'react';
import useRecipes from '../../hooks/useRecipes';
import RecipeCard from '../RecipeCard/RecipeCard';
import './Main.css';

export default function Main() {
  const { recipes, error } = useRecipes();
  const [season, setSeason] =useState('all');

  const seasons = [...new Set(recipes.map(({ season }) => season))];

  const filtered = recipes.filter((recipe) => recipe.season === season || season === 'all');

  return (
    <div>
      <select onChange={(e) => setSeason(e.target.value)}>
        <option value="all">All</option>
        {seasons.map((season) => (
          <option key={season} value={season}>{season}</option>
        ))}
      </select>
      <div>
        {filtered.map((recipe) => (
        <RecipeCard key={recipe.name} {...recipe} />
      ))}
      </div>
    </div>
  );
}
