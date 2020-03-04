import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button'

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
    <div>
      <div className='tabs-container'>
        <Link className='tab' onClick={props.getRecipes} to="/all-recipes">All Recipes</Link>
        <Link className='tab' to="/user-recipes">Recipes by Author</Link>
        <Link className='tab' to="/add-recipe">Add Recipe</Link>
      </div>
      <div className="recipes-body">
        {props.recipesList.map(recipe => {
          console.log("Recipe here", recipe.id);
          return (
            <div key={recipe.id} className="recipe-card">
              <h2 className='recipe-title'>{recipe.title}</h2>
              <h4 className='recipe-author'>By {recipe.creator}</h4>
              <p><span className='ingredients'>Ingredients: </span>{recipe.ingredients}</p>
              <br />
              <div className='recipe-card-buttons'>
                <Link style={{textDecoration:'none'}} to={`/update-recipe/${recipe.id}`}>
                  <Button variant='contained' color='secondary'>Update</Button>
                </Link>
                <Button variant='contained' color='secondary'
                  onClick={e => {
                    deleteRecipe(recipe.id);
                    props.history.push("/all-recipes");
                    document.location.reload(true);
                  }}
                >
                  Delete
                </Button>
              </div>
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
