import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from "./index";
import axios from "axios";

const register = user => dispatch => {
  console.log("I am coming from action: ");
  dispatch({ type: REGISTER_START });
  return axios
    .post("https://secretfamrecipes.herokuapp.com/api/auth/register", user)
    .then(res => {
      //   console.log(res);
      dispatch({ type: REGISTER_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTER_FAILURE, payload: err });
    });
};

export default register;
