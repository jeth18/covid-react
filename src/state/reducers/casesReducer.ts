import { Action } from "../actions/index";
import { ActionTypes } from "../actionTypes/index";

const INITIAL_STATE: any[] = [];

export const casesReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.INIT_CASES:
      return action.payload;
    default:
      return state;
  }
};
