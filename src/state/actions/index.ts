import { ActionTypes } from "../actionTypes/index";

interface SetVaccines {
  type: ActionTypes.SET_VACCINES;
  payload: Array<any>;
}

interface init {
  type: ActionTypes.INIT_VACCINE;
  payload: Array<any>;
}

interface initCases {
  type: ActionTypes.INIT_CASES;
  payload: Array<any>;
}

interface changeTheme {
  type: ActionTypes.CHANGE_THEME;
  payload: boolean;
}
export type Action = SetVaccines | init | initCases | changeTheme;
