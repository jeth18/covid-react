import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../state/store'

export default function useTheme() {

  const theme: boolean = useSelector((state: RootState) => state.theme)

  useEffect(() => {
    theme ? setTheme('dark') : setTheme('light')
  }, [theme])

  const setTheme = (them: string) => {
    document.getElementsByTagName('HTML')[0].setAttribute('data-theme', them)
  }

  return theme
}
