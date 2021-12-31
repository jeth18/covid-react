import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import sun from '../../assets/dom.svg'
import moon from '../../assets/luna.svg'
import { changeTheme } from '../../state/actionCreators'
import { RootState } from '../../state/store'

import './theme.css'

export default function ThemeChange() {
  const theme: boolean = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    theme ? setTheme('dark') : setTheme('light')
  }, [theme])

  const setTheme = (them: string) => {
    document.getElementsByTagName('HTML')[0].setAttribute('data-theme', them)
  }

  const handleClickChangeTheme = () => {
    dispatch(changeTheme(!theme))
  }

  return(
    <button onClick={() => handleClickChangeTheme()} className='button-theme'>
      {theme ?
        <img src={sun} alt='menu' className='logo-img' />
        :
        <img src={moon} alt='menu' className='logo-img' />
      }
    </button>
    )
}
