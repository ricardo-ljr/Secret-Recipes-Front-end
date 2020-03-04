import React from "react";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/all-recipes">All Recipes</Link>
      <Link to="/user-recipes">Recipes by Author</Link>
      <Link to="/add-recipe">Add Recipe</Link>
    </div>
  );
};
export default Home;
