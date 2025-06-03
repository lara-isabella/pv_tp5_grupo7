import { Link } from "react-router-dom";
import logo from '../images/logogrupo7.png';

function NavBar() {
  return (
    <header>
      <div className="container py-3">
        <div className="row align-items-center">
          <div className="col-auto">
            <img src={logo} alt="Logo" style={{ width: "80px" }} />
          </div>
          <div className="col">
            <h1 className="h4 text-center">Sistema de Gestion de Alumnos</h1>
          </div>
        </div>
      </div>

      <nav className="navbar border-top">
        <div className="container justify-content-center">
          <ul className="navbar-nav d-flex flex-row gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/alumnos">Alumnos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nuevo">Nuevo Alumno</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/acerca">Acerca</Link>
            </li>
            <li className="nav-item">
  <Link className="nav-link" to="/papelera">Papelera</Link>
</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;