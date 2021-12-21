import { Outlet, Link } from "react-router-dom";
import "./sidebar.css";


export default function Sidebar({ handleClick }: any) {
  return (
    <div>
      <nav className="sidebar-link" onClick={handleClick}>
        <Link to="/">Casos</Link>
        <Link to="/history">Historial muertes</Link>
        <Link to="/Vaccines">Vacunados</Link>
      </nav>
      <Outlet/>
    </div>
  );
}
