import { combineReducers } from "redux";

import { loginReducer } from "./loginReducer";
import { registerReducer } from "./signUpReducer";
import { getRecipesReducer } from "./getRecipesReducer";
import { addRecipeReducer } from "./addRecipeReducer";
import { deleteRecipesReducer } from "./deleteRecipeReducer";
import { updateRecipeReducer } from "./updateRecipeReducer";

export default combineReducers({
  loginReducer,
  registerReducer,
  getRecipesReducer,
  addRecipeReducer,
  deleteRecipesReducer,
  updateRecipeReducer
});
