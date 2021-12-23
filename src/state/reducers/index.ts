import { combineReducers } from "redux";
import { vaccinesReducer } from "./vaccinesReducer";

const reducer = combineReducers({
  vaccines: vaccinesReducer,
});

export default reducer;

export type State = ReturnType<typeof reducer>;
