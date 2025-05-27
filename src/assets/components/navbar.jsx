import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Inicio</Link>
      <Link to="/alumnos" style={{ marginRight: "15px" }}>Lista de Alumnos</Link>
      <Link to="/nuevo" style={{ marginRight: "15px" }}>Nuevo Alumno</Link>
      <Link to="/acerca">Acerca de</Link> {/* futura ruta */}
    </nav>
  );
}

export default NavBar;
