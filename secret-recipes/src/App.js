import React from 'react';
import {Route, Link, BrowserRouter} from 'react-router-dom'
import './App.css';
import SignUp from './components/SignUp'
import LogIn from './components/Login'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <h1>Home Page</h1>
        <Link to='/login'>LogIn</Link><br />
        <Link to='/signup'>Sign Up</Link>
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/login' component={LogIn} />
    </div>
    </BrowserRouter>
  );
}

export default App;
