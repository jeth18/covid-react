import options from "../../assets/aplicaciones.svg";
import close from "../../assets/cruz-pequena.svg";

import './menubutton.css';

export default function MenuButton({ open, handleClick }: any) {
  return !open ? (
    <button onClick={() => handleClick()} className="button-nav">
      <img src={options} alt="menu" className="logo-img" />
    </button>
  ) : (
    <button onClick={() => handleClick()} className="button-nav">
      <img src={close} alt="close"  className="logo-img" />
    </button>
  );
}
