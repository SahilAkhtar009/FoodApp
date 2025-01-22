import React, { useState, useEffect } from "react";

function useRecipe(id) {
  const [Recipe, setRecipe] = useState(null);
  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    let data = await fetch(
      "https://dummyjson.com/recipes?sortBy=name&order=asc"
    );
    data = await data.json();
    data = await data.recipes;

    let FilterData = await data.filter((item) => item.id == id);

    setRecipe(FilterData[0]);
  };
  return Recipe;
}

export default useRecipe;
