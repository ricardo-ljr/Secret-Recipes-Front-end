import React from "react";

import "./App.css";

// COMPONENTS IMPORTS
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* ROUTES */}
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />

        {/* PRIVATE ROUTES */}
        <PrivateRoute exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
