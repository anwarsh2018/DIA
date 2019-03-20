import * as actionTypes from "../actions/actionTypes";
import groups from "../../data";

const initialState = {
  currentGroup: groups["أشخاص"],
  currentElement: groups["أشخاص"][0],
  selectedGroup: "أشخاص",
  backgroundColor: "lightBlue",
  isElement: true
  //loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_GROUP:
      return {
        ...state,
        currentGroup: groups[action.payload],
        selectedGroup: action.payload
      };

    case actionTypes.SELECT_ELEMENT:
      return {
        ...state,
        currentElement: action.payload
      };

    case actionTypes.SELECT_BACKGROUND:
      return {
        ...state,
        backgroundColor: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
