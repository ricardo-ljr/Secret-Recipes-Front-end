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
  user_id: null
};

const UserRecipes = props => {
  // const [author, setAuthor] = useState("");
  // const [recipes, setRecipes] = useState([]);

  const [recipe, setRecipe] = useState(initialState);

  useEffect(() => {
    console.log("Id Here", props.user_id);
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

  let myRecipes = [];

  if (props.recipesByUser.length > 1) {
    myRecipes = props.recipesByUser;
  }

  return (
    <div>
      <div className="tabs-container">
        <Link className="tab" to="/all-recipes">
          All Recipes
        </Link>
        <Link className="tab active" to="/user-recipes">
          My Recipes
        </Link>
        <Link className="tab" to="/add-recipe">
          Add Recipe
        </Link>
      </div>
      {props.recipesByUser.length === 0 ? (
        <p className="entry-container">
          You Don't Have Any Recipes Yet, add some
        </p>
      ) : (
        <div className="recipe-body">
          {props.recipesByUser.map(recipe => {
            console.log("Recipes id Here", recipe.id);
            return (
              <div key={recipe.id}>
                <p>{recipe.title}</p>
                <p>{recipe.ingredients}</p>
                <p>{recipe.directions}</p>
                <p>{recipe.category}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
    // </div>
  );
};
const mapStateToProps = ({ getRecipesByUserReducer }) => {
  return {
    recipesByUser: getRecipesByUserReducer.recipe
  };
};

// export default RecipesList;

export default connect(mapStateToProps, { getRecipesByUser })(UserRecipes);
