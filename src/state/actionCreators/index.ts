import { ActionTypes } from "../actionTypes";

const initVaccines = (vaccines: any) => {
  return {
    type: ActionTypes.INIT,
    payload: vaccines,
  };
};

export default initVaccines;
