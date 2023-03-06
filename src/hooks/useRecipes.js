import { useEffect, useState } from "react";
import { getRecipes } from "../services/recipes.js";

export default function useRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await getRecipes();
        setRecipes(response);
    };
    fetchData();
  }, []);
  return recipes ;
}