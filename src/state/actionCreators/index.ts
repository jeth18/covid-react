import { ActionTypes } from "../actionTypes";

const initVaccines = (vaccines: any) => {
  return {
    type: ActionTypes.INIT_VACCINE,
    payload: vaccines,
  };
};

const initCases = (cases: any) => {
  return {
    type: ActionTypes.INIT_CASES,
    payload: cases,
  };
};

const changeTheme = (theme: boolean) => {
  return {
    type: ActionTypes.CHANGE_THEME,
    payload: theme,
  };
};

export { initVaccines, initCases, changeTheme };
