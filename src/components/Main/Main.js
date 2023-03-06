import React from 'react';
import useRecipes from '../../hooks/useRecipes';
import RecipeCard from '../RecipeCard/RecipeCard';
import './Main.css';

export default function Main() {
  const recipes = useRecipes();

  // filtering reference is on countries app Main.js line 9-11

  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.name} {...recipe} />
      ))}
    </div>
  );
}
