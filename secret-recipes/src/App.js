import React from "react";

import "./App.css";

// COMPONENTS IMPORTS
import Home from "./components/Home";
import { Route, Switch, Link } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import UserRecipes from "./components/UserRecipes";
import AddRecipe from "./components/AddRecipe";
import RecipesList from "./components/RecipesList";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="navigation">
        <h1>Home Page</h1>
        <Link to="/login">Login</Link>
        <Link to="/">Sign Up</Link>
      </div>
      <Switch>
        {/* ROUTES */}
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />

        {/* PRIVATE ROUTES */}
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/user-recipes" component={UserRecipes} />
        <PrivateRoute exact path="/all-recipes" component={RecipesList} />
        <PrivateRoute extact path="/add-recipe" component={AddRecipe} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
