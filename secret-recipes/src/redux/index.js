import { combineReducers } from "redux";

import { loginReducer } from "./loginReducer";
import { registerReducer } from "./signUpReducer";
import { getRecipesReducer } from "./getRecipesReducer";

export default combineReducers({
  loginReducer,
  registerReducer,
  getRecipesReducer
});
