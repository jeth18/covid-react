import { ICases } from '../../interface/cases'
import { IVaccines } from '../../interface/vaccines'
import { ActionTypes } from '../actionTypes/index'

interface initVaccines {
  type: ActionTypes.INIT_VACCINE
  payload: IVaccines[]
}

interface initCases {
  type: ActionTypes.INIT_CASES
  payload: ICases[]
}

interface changeTheme {
  type: ActionTypes.CHANGE_THEME
  payload: boolean
}
export type Action = initVaccines | initCases | changeTheme
