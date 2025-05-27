import { Link } from "react-router-dom";
import "../../App.css"; 

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/alumnos" className="nav-link">Lista de Alumnos</Link>
      <Link to="/nuevo" className="nav-link">Nuevo Alumno</Link>
      <Link to="/acerca" className="nav-link">Acerca de</Link>
    </nav>
  );
}

export default NavBar;
