import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

// IMPORT ACTION
import signUp from "../action/userSignUp";

const SignUp = props => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    username: "",
    password: ""
  });

  const handleChange = e => {
    // console.log(e);
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userInfo);

    props.signUp(userInfo);

    setUserInfo({
      name: "",
      email: "",
      username: "",
      password: ""
    });

    props.history.push("/login");
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" id="name" name="name" onChange={handleChange} />

        <br />
        <TextField
          label="Email"
          id="email"
          name="email"
          onChange={handleChange}
        />
        <br />
        <TextField
          required
          label="Username"
          id="username"
          name="username"
          onChange={handleChange}
        />
        <br />
        <TextField
          required
          label="Password"
          id="password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
      <br />
    </div>
  );
};

export default connect(null, { signUp })(SignUp);
