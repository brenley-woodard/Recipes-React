import { useEffect, useState } from "react";
import { getRecipes } from "../services/recipes.js";

export default function useRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRecipes();
        setRecipes(response);
      } catch (e) {
        setError('Uh oh!');
      }
    };
    fetchData();
  }, []);
  return {recipes, error} ;
}