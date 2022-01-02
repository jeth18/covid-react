import { ICases } from '../../interface/cases'
import { IVaccines } from '../../interface/vaccines'
import { ActionTypes } from '../actionTypes'

const initVaccines = (vaccines: IVaccines[]) =>
  ({
    type: ActionTypes.INIT_VACCINE,
    payload: vaccines,
  })

const initCases = (cases: ICases[]) =>
  ({
    type: ActionTypes.INIT_CASES,
    payload: cases,
  })

const changeTheme = (theme: boolean) =>
  ({
    type: ActionTypes.CHANGE_THEME,
    payload: theme,
  })

export { initVaccines, initCases, changeTheme }
