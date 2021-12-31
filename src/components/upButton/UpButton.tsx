import up from '../../assets/cuadrado-de-angulo.svg'
import useScroll from '../../hooks/useScroll'
import './upbutton.css'

export default function UpButton({refScrollUp}: any) {

  const { hidden } = useScroll()

  function handleScrollUp() {
    refScrollUp.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={hidden}>
      <button onClick={() => handleScrollUp()} className='button-up'>
        <img src={up} alt='menu' />
      </button>
    </div>
  )
}
