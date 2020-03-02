import React from "react";

import "./App.css";

// COMPONENTS IMPORTS
import Home from "./components/Home";
import { Route, Switch, Link } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
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
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
