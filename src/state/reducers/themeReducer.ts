import { Action } from "../actions/index";
import { ActionTypes } from "../actionTypes/index";

const INITIAL_STATE: boolean = false;

export const themeReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
};
