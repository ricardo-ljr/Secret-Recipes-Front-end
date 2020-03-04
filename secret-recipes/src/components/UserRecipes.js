import React, { useState, useEffect } from "react";
// import InputLabel from "@material-ui/core/InputLabel";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
// import Button from "@material-ui/core/Button";
// import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import getRecipesByUser from "../action/getRecipeByUser";

// const getRecipes = author => {
//   return ["Recipe 1", "Recipe 2", "Recipe 3"];
// };

const initialState = {
  id: Date.now(),
  title: "",
  creator: "",
  ingredients: "",
  directions: "",
  category: "",
  user_id: localStorage.getItem("id")
};

const UserRecipes = props => {
  // const [author, setAuthor] = useState("");
  // const [recipes, setRecipes] = useState([]);

  const [recipe, setRecipe] = useState(initialState);

  useEffect(() => {
    console.log("ID Here", props.user_id);
    props.getRecipesByUser(props.user_id);
  }, []);

  // const handleChange = e => {
  //   setAuthor(e.target.value);
  // };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   setRecipes(getRecipes(author));
  //   setAuthor("");
  // };

  // const authorList = ["abc", "xyz", "random"];

  return (
    <div>
      <Link to="/all-recipes">All Recipes</Link>
      <Link to="/user-recipes">Recipes by Author</Link>
      <Link to="/add-recipe">Add Recipe</Link>
      <div className="user-recipes-contatiner">
        {props.recipesByUser.map(recipe => {
          console.log("Recipes Here", recipe.user_id);
          return (
            <div key={recipe.user_id}>
              {recipe.creator}
              {recipe.tile}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = ({ getRecipesByUserReducer }) => {
  return {
    recipesByUser: getRecipesByUserReducer.recipe
  };
};

// export default RecipesList;

export default connect(mapStateToProps, { getRecipesByUser })(UserRecipes);
