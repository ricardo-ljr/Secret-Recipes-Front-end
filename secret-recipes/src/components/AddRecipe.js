import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axiosWithAuth from "../utils/axiosWithAuth";
// import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import { addRecipe } from "../action/addRecipe";

const initialState = {
  id: Date.now(),
  title: "",
  creator: "",
  ingredients: "",
  directions: "",
  category: "",
  user_id: localStorage.getItem("id")
};

const AddRecipe = props => {
  const [recipeToAdd, setRecipeToAdd] = useState(initialState);

  const onChange = e => {
    setRecipeToAdd({
      ...recipeToAdd,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addRecipe(recipeToAdd);
    setRecipeToAdd("");
    console.log(recipeToAdd);
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
          value={recipeToAdd.title}
          onChange={onChange}
        />
        <br />
        <TextField
          required
          id="creator"
          name="creator"
          placeholder="creator"
          value={recipeToAdd.creator}
          onChange={onChange}
        />
        <br />
        <TextField
          required
          label="Ingredients"
          id="ingredients"
          name="ingredients"
          value={recipeToAdd.ingredients}
          onChange={onChange}
        />
        <br />
        <TextField
          multiline
          required
          label="Directions"
          id="directions"
          name="directions"
          value={recipeToAdd.directions}
          onChange={onChange}
        />
        <br />
        <InputLabel id="category-label">Category</InputLabel>
        <TextField
          required
          labelId="category-label"
          id="category"
          name="category"
          value={recipeToAdd.category}
          onChange={onChange}
        />
        <br />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    addRecipe: state.addRecipe
  };
};

export default connect(mapStateToProps, { addRecipe })(AddRecipe);

// export default AddRecipe;
