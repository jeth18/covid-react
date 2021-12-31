import { useRef } from 'react'
import useOpen from '../../hooks/useOpen'
import useScroll from '../../hooks/useScroll'
import MenuButton from '../MenuButton/MenuButton'
import Sidebar from '../sidebar/Sidebar'
import ThemeChange from '../ThemeButton/ThemeButton'
import UpButton from '../upButton/UpButton'
import './sidenav.css'

export default function Sidenav() {

  const ref: any = useRef()
  const {open, setOpen} = useOpen(ref)
  const { scroll } = useScroll()

  function handleClick() {
    setOpen(!open)
  }

  if (open && scroll > 20) {
    setOpen(false)
  }

  return (
    <div className='sidebar' ref={ref}>
      <div className={open ? 'sidebar-content' : 'close'} >
        <Sidebar handleClick={handleClick}/>
      </div>
      <header>
        <div className='headers'>
          <MenuButton open={open} handleClick={handleClick}/>
          <h3>Covid React app</h3>
        </div>
        <div>
          <ThemeChange />
        </div>
      </header>
      <UpButton refScrollUp={ref} />
    </div>
  )
}
