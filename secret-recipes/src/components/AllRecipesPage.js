import React, { useState, useEffect } from "react";
import axios from "axios";

import RecipesList from "./RecipesList";
import RecipeCard from "./RecipeCard";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialState = {
  id: Date.now(),
  title: "",
  creator: "",
  ingredients: "",
  directions: "",
  category: ""
};

const RecipesPage = () => {
  const [recipeList, setRecipeList] = useState(initialState);

  useEffect(() => {
    axiosWithAuth()
      .get("/recipes")
      .then(res => {
        console.log(res.data);
        setRecipeList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <RecipesList recipes={recipeList} updateRecipe={setRecipeList} />
      <RecipeCard recipes={recipeList} />
    </>
  );
};

export default RecipesPage;
