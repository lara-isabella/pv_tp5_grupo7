import { Link } from "react-router-dom";
import logo from '../images/logogrupo7.png';

function NavBar() {
  return (
    <>
      <header>
        <img src={logo} alt="Logo del sitio" style={{ width: '120px' }} />
        <h1>Mi Sitio React</h1>
      </header>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/alumnos">Lista de Alumnos</Link>
        <Link to="/nuevo">Nuevo Alumno</Link>
        <Link to="/acerca">Acerca</Link>
      </nav>
    </>
  );
}

export default NavBar;
