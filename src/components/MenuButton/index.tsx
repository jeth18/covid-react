import options from "../../assets/aplicaciones.svg";
import close from "../../assets/cruz-pequena.svg";

export default function MenuButton({ open, handleClick }: any) {
  return !open ? (
    <button onClick={() => handleClick()}>
      <img src={options} alt="menu" />
    </button>
  ) : (
    <button onClick={() => handleClick()}>
      <img src={close} alt="close" />
    </button>
  );
}
