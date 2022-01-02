import { RefObject } from 'react'
import up from '../../assets/cuadrado-de-angulo.svg'
import useScroll from '../../hooks/useScroll'
import './upbutton.css'

export default function UpButton({refScrollUp}: {refScrollUp: RefObject<HTMLDivElement>}) {

  const { hidden } = useScroll()

  function handleScrollUp() {
    if (refScrollUp && refScrollUp.current) {
      refScrollUp.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={hidden}>
      <button onClick={() => handleScrollUp()} className='button-up'>
        <img src={up} alt='menu' />
      </button>
    </div>
  )
}
