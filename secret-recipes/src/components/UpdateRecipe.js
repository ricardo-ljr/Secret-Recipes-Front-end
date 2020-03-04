import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// STYLES IMPORT

import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import updateRecipe from "../action/updateRecipe";

const UpdateRecipe = props => {
  const { id } = useParams();
  // console.log("I am ID", props.id);
  const [state, setState] = useState({
    id: id,
    title: "",
    creator: "",
    ingredients: "",
    directions: "",
    category: "",
    user_id: localStorage.getItem("id")
  });

  const changeHandler = e => {
    e.persist();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("I am submitted", state);

    props.updateRecipe(state);

    setState({
      title: "",
      creator: "",
      ingredients: "",
      directions: "",
      category: ""
    });

    props.history.push("/all-recipes");
  };

  return (
    <div>
      <Link onClick={props.getRecipes} to="/all-recipes">
        All Recipes
      </Link>
      <Link to="/user-recipes">Recipes by Author</Link>
      <Link to="/add-recipe">Add Recipe</Link>
      <h2>Add a Recipe</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <TextField
          required
          label="Title"
          id="title"
          name="title"
          value={state.title}
          onChange={changeHandler}
        />
        <br />
        <TextField
          required
          id="creator"
          name="creator"
          placeholder="creator"
          value={state.creator}
          onChange={changeHandler}
        />
        <br />
        <TextField
          required
          label="Ingredients"
          id="ingredients"
          name="ingredients"
          value={state.ingredients}
          onChange={changeHandler}
        />
        <br />
        <TextField
          multiline
          required
          label="Directions"
          id="directions"
          name="directions"
          value={state.directions}
          onChange={changeHandler}
        />
        <br />

        <TextField
          required
          label="category"
          id="category"
          name="category"
          value={state.category}
          onChange={changeHandler}
        />
        <br />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Update Recipe
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ loginReducer, updateRecipeReducer }) => {
  return {
    recipe: updateRecipeReducer.recipe,
    user_id: loginReducer.userID
  };
};

export default connect(mapStateToProps, { updateRecipe })(UpdateRecipe);
