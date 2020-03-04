import React from "react";
// import InputLabel from "@material-ui/core/InputLabel";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
// import Button from "@material-ui/core/Button";
// import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";

// const getRecipes = author => {
//   return ["Recipe 1", "Recipe 2", "Recipe 3"];
// };

const UserRecipes = () => {
  // const [author, setAuthor] = useState("");
  // const [recipes, setRecipes] = useState([]);

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
      <div className='tabs-container'>
        <Link className='tab' to="/all-recipes">All Recipes</Link>
        <Link className='tab active' to="/user-recipes">Recipes by Author</Link>
        <Link className='tab' to="/add-recipe">Add Recipe</Link>
      </div>
      <div className="user-recipes-contatiner"></div>
    </div>
  );
};

export default UserRecipes;
