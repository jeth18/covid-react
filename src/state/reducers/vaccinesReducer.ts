import { Action } from "../actions/index";
import { ActionTypes } from "../actionTypes/index";

const INITIAL_STATE: any[] = [];

export const vaccinesReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.INIT:
      return action.payload;
    case ActionTypes.SET_VACCINES:
      return [...state, action.payload];
    default:
      return state;
  }
};
