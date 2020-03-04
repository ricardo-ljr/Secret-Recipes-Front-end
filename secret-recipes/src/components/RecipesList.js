import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import deleteRecipe from "../action/deleteRecipe";

import getRecipes from "../action/getRecipes";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialState = {
  id: Date.now(),
  title: "",
  creator: "",
  ingredients: "",
  directions: "",
  category: "",
  user_id: localStorage.getItem("id")
};

function RecipesList(props) {
  console.log("Look at me, props", props);

  const [recipeList, setRecipeList] = useState(initialState);

  useEffect(() => {
    console.log("ID Here", props.id);
    props.getRecipes(props.id);
  }, []);

  //   useEffect(() => {
  //     axiosWithAuth()
  //       .get("/recipes")
  //       .then(res => {
  //         console.log(res.data);
  //         setRecipeList(res.data);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }, []);

  //   useEffect(() => {
  //     getRecipes();
  //   }, []);

  //   const getRecipesList = () => {
  //     getRecipes();
  //   };

  const deleteRecipe = id => {
    props.deleteRecipe(id);
    // document.location.reload(true);
    // props.history.push("/all-recipes");
  };

  return (
    <div className="recipes-body">
      <Link onClick={props.getRecipes} to="/all-recipes">
        All Recipes
      </Link>
      <Link to="/user-recipes">Recipes by Author</Link>
      <Link to="/add-recipe">Add Recipe</Link> <br />
      <div className="recipe-card">
        {props.recipesList.map(recipe => {
          console.log("Recipe here", recipe.id);
          return (
            <div key={recipe.id} className="recipe-container">
              <p>{recipe.title}</p>
              <p>{recipe.creator}</p>
              {recipe.ingredients}
              <br />
              <Link to={`/update-recipe/${recipe.id}`}>
                <button>Update</button>
              </Link>
              <button
                onClick={e => {
                  deleteRecipe(recipe.id);
                  props.history.push("/all-recipes");
                  document.location.reload(true);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = ({ getRecipesReducer }) => {
  return {
    recipesList: getRecipesReducer.recipes
  };
};

// export default RecipesList;

export default connect(mapStateToProps, { getRecipes, deleteRecipe })(
  RecipesList
);
