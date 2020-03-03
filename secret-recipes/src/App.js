import React from 'react';
import {Route, Link, BrowserRouter} from 'react-router-dom'
import './App.css';
import SignUp from './components/SignUp'
import LogIn from './components/Login'
import Home from './components/Home'
import UserRecipes from './components/UserRecipes'
import AddRecipe from './components/AddRecipe'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <h1>Welcome Page</h1>
        <Link to='/login'>LogIn</Link><br />
        <Link to='/signup'>Sign Up</Link>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/user-recipes/'>
          <UserRecipes />
        </Route>
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' component={LogIn} />
        <Route exact path='/add' component={AddRecipe} />
    </div>
    </BrowserRouter>
  );
}

export default App;
