import { ActionTypes } from '../actionTypes'

const initVaccines = (vaccines: any) =>
  ({
    type: ActionTypes.INIT_VACCINE,
    payload: vaccines,
  })

const initCases = (cases: any) =>
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
