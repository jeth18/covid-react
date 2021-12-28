import { useState } from 'react'
import MenuButton from '../MenuButton'
import Sidebar from '../sidebar'
import ThemeChange from '../ThemeButton'
import './sidenav.css'

export default function Sidenav() {
  const [open, setOpen] = useState(false)

  function handleClick() {
    setOpen(!open)
  }

  return (
    <div className='sidebar'>
      <div className={open ? 'sidebar-content' : 'close'}>
        <Sidebar handleClick={handleClick}/>
      </div>
      <header>
        <div className='headers'>
          <MenuButton open={open} handleClick={handleClick} />
          <h3>Covid React app</h3>
        </div>
        <div>
          <ThemeChange />
        </div>
      </header>
    </div>
  )
}
