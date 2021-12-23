import { ActionTypes } from "../actionTypes/index";

interface SetVaccines {
  type: ActionTypes.SET_VACCINES;
  payload: Array<any>;
}

interface init {
  type: ActionTypes.INIT;
  payload: Array<any>;
}

export type Action = SetVaccines | init;
