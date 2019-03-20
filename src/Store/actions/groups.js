import * as actionTypes from "./actionTypes";

export const selectGroup = groupName => {
  return {
    type: actionTypes.SELECT_GROUP,
    payload: groupName
  };
};

export const selectElement = elementName => {
  return {
    type: actionTypes.SELECT_ELEMENT,
    payload: elementName
  };
};

export const selectBackground = background => {
  return {
    type: actionTypes.SELECT_BACKGROUND,
    payload: background
  };
};
