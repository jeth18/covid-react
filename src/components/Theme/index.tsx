import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../state/actionCreators";
import { RootState } from "../../state/store";

import './theme.css';

export default function ThemeChange() {

  const theme: boolean = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch();

  useEffect(() =>{
    if(theme) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [theme])

  const setTheme = (theme:string) => {
    document
    .getElementsByTagName("HTML")[0]
    .setAttribute("data-theme", theme);
  }

  const handleClickChangeTheme = () => {
    dispatch(changeTheme(!theme));
  }

  return (
    <div>
      <div className="switch-button">
        <input type="checkbox" name="switch-button" id="switch-label" className="switch-button__checkbox"/>
        <label htmlFor="switch-label" className="switch-button__label" onClick={()=>handleClickChangeTheme()}></label>
      </div>
    </div>
  );
}