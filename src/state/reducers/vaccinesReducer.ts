import { IVaccines } from '../../interface/vaccines'
import { Action } from '../actions/index'
import { ActionTypes } from '../actionTypes/index'

const INITIAL_STATE: IVaccines[] = []

export const vaccinesReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.INIT_VACCINE:
      return action.payload
    default:
      return state
  }
}
