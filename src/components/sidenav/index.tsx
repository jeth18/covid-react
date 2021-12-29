import { useEffect, useRef, useState } from 'react'
import MenuButton from '../MenuButton'
import Sidebar from '../sidebar'
import ThemeChange from '../ThemeButton'
import './sidenav.css'

export default function Sidenav() {

  const [open, setOpen] = useState(false)
  const ref: any = useRef()

  function handleClick() {
    setOpen(!open)
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [open])

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
    </div>
  )
}
