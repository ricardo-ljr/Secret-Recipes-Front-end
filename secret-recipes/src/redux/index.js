import { combineReducers } from "redux";

import { loginReducer } from "./loginReducer";
import { registerReducer } from "./signUpReducer";

export default combineReducers({
  loginReducer,
  registerReducer
});
