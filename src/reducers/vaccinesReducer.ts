interface Action {
  type: String;
  data: Array<any>;
}

export const vaccinesReducer = (state = [], action: Action) => {
  if (action.type === "SET_VACCINES") {
    return state;
  }
  return state;
};
