import { combineReducers } from "redux";

// Reducers
import errorsReducer from "./errors";
import groupsReducer from "./groups";

export default combineReducers({
  errors: errorsReducer,
  groups: groupsReducer
});
