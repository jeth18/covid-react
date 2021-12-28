import { combineReducers } from 'redux'
import { casesReducer } from './casesReducer'
import { themeReducer } from './themeReducer'
import { vaccinesReducer } from './vaccinesReducer'

const reducer = combineReducers({
  vaccines: vaccinesReducer,
  cases: casesReducer,
  theme: themeReducer,
})

export default reducer

export type State = ReturnType<typeof reducer>
