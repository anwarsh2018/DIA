import { combineReducers } from "redux";

// Reducers
import errorReducer from "./errors";

export default combineReducers({
  errors: errorReducer
});
