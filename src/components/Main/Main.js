import { useState } from 'react';
import useRecipes from '../../hooks/useRecipes';
import RecipeCard from '../RecipeCard/RecipeCard';
import './Main.css';

export default function Main() {
  const { recipes } = useRecipes();
  const [type, setType] = useState('all');  
  const [season, setSeason] = useState('all');
  const [haveMade, setHaveMade] = useState('all');
  const [expect, setExpects] = useState('all');

  const types = [...new Set(recipes.map(({ type }) => type))];
  const seasons = [...new Set(recipes.map(({ season }) => season))];  
  const haveMades = [...new Set(recipes.map(({ have_made }) => have_made))];
  const expects = [...new Set(recipes.map(({ expectations }) => expectations))];

// learned how to use multiple if conditions inside a filter
  const filtered = recipes.filter((recipe) => recipe.type === type || type === 'all').filter((recipe) => recipe.season === season || season === 'all').filter((recipe) => recipe.have_made === haveMade || haveMade === 'all').filter((recipe) => recipe.expectations === expect || expect === 'all');

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleSeasonChange = (e) => {
    setSeason(e.target.value);
  };
  const handleMadeChange = (e) => {
    setHaveMade(e.target.value);
  };
  const handleExpectChange = (e) => {
    setExpects(e.target.value);
  };

  return (
    <div id='main'>
      <div id='info-section'>
        <div id='search-form'>
          <h3>Filter By...</h3>
          <select onChange={handleTypeChange}>
            <option value="all">Category...</option>
            {types.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <select onChange={handleSeasonChange}>
            <option value="all">Season...</option>
            {seasons.map((season) => (
              <option key={season} value={season}>{season}</option>
            ))}
          </select>
          <select onChange={handleMadeChange}>
            <option value="all">Have made yet...</option>
            {haveMades.map((haveMade) => (
              <option key={haveMade} value={haveMade}>{haveMade}</option>
            ))}
          </select>
          <select onChange={handleExpectChange}>
            <option value="all">Expectations...</option>
            {expects.map((expect) => (
              <option key={expect} value={expect}>{expect}</option>
            ))}
          </select>
        </div>
        {/* TODO: create a reset button. Thinking it will be something like on click set recipe.everything to all */}
        <ul id="expect-key">
          <h3 id="expect-title">Expectations Key...</h3>
          <li>1: Not expecting to like it.</li>
          <li>2: I will like it.</li>
          <li>3: SO EXCITED.</li>
        </ul>
      </div>
      <div id='recipe-list-container'>
        {filtered.map((recipe) => (
          <RecipeCard key={recipe.name} {...recipe} />
        ))}
      </div>
    </div>
  );
}


