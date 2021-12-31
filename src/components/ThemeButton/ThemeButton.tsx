import { useDispatch } from 'react-redux'
import sun from '../../assets/dom.svg'
import moon from '../../assets/luna.svg'
import useTheme from '../../hooks/useTheme'
import { changeTheme } from '../../state/actionCreators'

import './theme.css'

export default function ThemeChange() {

  const theme  = useTheme()
  const dispatch = useDispatch()

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
