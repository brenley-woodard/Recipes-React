import React from 'react';
import './SearchForm.css';

export default function SearchForm() {
  return (
    <div id="info-div">
                <form id="search-form">
                    <h3>Filter By:</h3>
                    {/* <select name="type" id="type-select">
                        <option value="">Categories...</option>
                        <option value="loaf">Loaf Cakes/Single Layer Cakes </option>
                        <option value="pies">Pies/Tarts</option>
                        <option value="bars">Bars/Cookies</option>
                        <option value="layer">Layer Cakes/Fancy Cakes</option>
                        <option value="bfast">Breakfast/Brunch</option>
                        <option value="breads">Breads/Savory</option>
                    </select> */}
                    <select name="season" id="season-select">
                        <option>Season...</option>
                        <option value="winter">Winter</option>
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="fall">Fall</option>
                    </select>
                    {/* <select name="have-made" id="have-made-select">
                        <option>Have made yet...</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <select name="expectations" id="expectations-select">
                        <option>Expectations...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> */}
                    <button type="submit">search</button>
                </form>
                <ul id="expect-key">
                    <h3 id="expect-title">Expectations Key...</h3>
                    <p>1: Not expecting to like it.</p>
                    <p>2: I will like it.</p>
                    <p>3: SO EXCITED.</p>
                </ul>
            </div>
  );
}

// eslint-disable-next-line no-lone-blocks
{/* <section id="info-section">
                <form id="search-form">
                    <h3>Filter By:</h3>
                    <select name="type" id="type-select">
                        <option value="">Categories...</option>
                        <option value="loaf">Loaf Cakes/Single Layer Cakes </option>
                        <option value="pies">Pies/Tarts</option>
                        <option value="bars">Bars/Cookies</option>
                        <option value="layer">Layer Cakes/Fancy Cakes</option>
                        <option value="bfast">Breakfast/Brunch</option>
                        <option value="breads">Breads/Savory</option>
                    </select>
                    <select name="season" id="season-select">
                        <option>Season...</option>
                        <option value="winter">Winter</option>
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="fall">Fall</option>
                    </select>
                    <select name="have-made" id="have-made-select">
                        <option>Have made yet...</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <select name="expectations" id="expectations-select">
                        <option>Expectations...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button type="submit">search</button>
                </form>
                <ul id="expect-key">
                    <h3 id="expect-title">Expectations Key...</h3>
                    <li>1: Not expecting to like it.</li>
                    <li>2: I will like it.</li>
                    <li>3: SO EXCITED.</li>
                </ul>
            </section> */}