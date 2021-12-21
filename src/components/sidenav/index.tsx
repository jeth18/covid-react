import { useState } from "react";
import "./sidenav.css";
import Sidebar from "../sidebar";
import MenuButton from "../MenuButton";

export default function Sidenav() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className="sidebar">
      <div className={open ? "sidebar-content" : "close"}>
        <Sidebar handleClick={handleClick}/>
      </div>
      <header>
        <div className="headers">
          <MenuButton open={open} handleClick={handleClick} />
          <h3>Covid React app</h3>
        </div>
      </header>
    </div>
  );
}
