import React from "react";
import logo from "./logo.svg";
import "./App.css";

// COMPONENTE IMPORTS
import { Home } from "./components";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* ROUTES */}

        {/* PRIVATE ROUTES */}
        <PrivateRoute exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
