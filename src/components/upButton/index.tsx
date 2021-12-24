import {useEffect, useState} from 'react';
import './upbutton.css';
import up from '../../assets/cuadrado-de-angulo.svg';

export default function UpButton({refScrollUp}: any) {
  const [scroll, setScroll] = useState(0);
  const [hidden,setHidden] = useState("button-hidden");

  useEffect(()=> {
    window.addEventListener("scroll",scrollListener)
    return () => window.removeEventListener("scroll", scrollListener);
  });

  
  function scrollListener(){
    const position = window.pageYOffset;
    setScroll(position);

    if (scroll > 300) {
      return setHidden("button-top");
    } else if (scroll < 300) {
      return setHidden("button-hidden");
    }
  }

  function handleScrollUp(){
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className={hidden}>
        <button onClick={() => handleScrollUp()} className="button-up">
          <img src={up} alt="menu" />
        </button>
      </div> 
    </div>
  )
}