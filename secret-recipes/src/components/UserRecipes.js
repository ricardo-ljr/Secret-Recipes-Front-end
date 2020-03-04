import React, { useState, useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";

const getRecipes = author => {
  return ["Recipe 1", "Recipe 2", "Recipe 3"];
};
const UserRecipes = () => {
  const [author, setAuthor] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleChange = e => {
    setAuthor(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setRecipes(getRecipes(author));
    setAuthor("");
  };

  const authorList = ["abc", "xyz", "random"];

  return (
    <div>
      <Link to="/">All Recipes</Link>
      <Link to="/user-recipes">Recipes by Author</Link>
      <form>
        <InputLabel id="author-label">Select the Author</InputLabel>
        <Select
          labelId="author-label"
          id="author"
          name="author"
          value={author}
          onChange={handleChange}
        >
          {authorList.map(author => {
            return <MenuItem value={author}>{author}</MenuItem>;
          })}
        </Select>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Get Recipes
        </Button>
      </form>
      <div className="recipe-container">
        {recipes.map(recipe => {
          return <RecipeCard recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default UserRecipes;
